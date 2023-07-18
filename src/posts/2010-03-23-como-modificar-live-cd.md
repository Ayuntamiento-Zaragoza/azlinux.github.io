---
title: Cómo modificar un Live CD de openSUSE y convertirlo en un Live USB
date: 2010-03-23 13:41:00
author: '@jact_abcweb'
comment: false
category:
  - Desktop
  - Live CD
---

[openSUSE](https://www.opensuse.org/) proporciona una herramienta para construir distribuciones personalizadas basadas en su producto y que también permite que estén disponibles en diferentes formatos (_Live CD_, _USB stick_, _VMWare virtual machine_...). El programa que posibilita todo esto se llama [kiwi](https://en.opensuse.org/Portal:Kiwi) y se puede probar toda versatilidad y potencia dentro del [proyecto suseStudio](https://studioexpress.opensuse.org/).

<!-- more -->

Sin embargo, para hacer unos cambios rápidos sobre la versión [Live CD oficial de openSUSE](https://old-en.opensuse.org/Derivatives) no es necesario usar esa aplicación. A continuación explicaremos los pasos seguidos para realizar una personalización rápida.

Para empezar, vamos a comentar los cambios que queremos hacer sobre la distribución base:

- En el sistema de arranque:
  - Cambiar el idioma (por defecto muestra el inglés y lo queremos cambiar a español).
  - Cambiar el fondo gráfico.
- En el sistema operativo:
  - Cambiar el idioma (a español).
  - Cambiar la configuración del teclado.
  - Mostrar otro fondo de escritorio en la sesión gráfica del usuario.
  - Desactivar las actualizaciones automáticas (ya que el sistema es de sólo lectura).

## Qué hay dentro de una imagen ISO de openSUSE

El primer paso, después de bajar la imagen ISO de openSUSE para Live CD (la 11.2), es descomprimir el fichero. Dicho archivo contiene los ficheros del sistema de arranque y un gran archivo que contiene el sistema de ficheros de la distribución. Este archivo, que necesitamos descomprimir para modificar ciertos parámetros del sistema, está en formato _clicfs_ y dentro contiene otro fichero, llamado `fsdata.ext3`, que deberemos montar para acceder a los archivos reales. Necesitaremos tener instalado el paquete clicfs para descomprimir dicho formato.

Resumiendo, para realizar las operaciones descritas, las órdenes a ejecutar serían:

```sh
mkdir /tmp/iso
cp /ruta/a/openSUSE-11.2-GNOME-LiveCD-i686.iso /tmp/iso
cd /tmp/iso
file-roller --extract-here openSUSE-11.2-GNOME-LiveCD-i686.iso
mkdir /tmp/clicfs
cp /tmp/iso/openSUSE-11.2-GNOME-LiveCD-i686/openSUSE-gnome-11.2-live-gnome-read-only.i686-2.8.0 /tmp/clicfs
cd /tmp/clicfs
unclicfs openSUSE-gnome-11.2-live-gnome-read-only.i686-2.8.0
```

El fichero `fsdata.ext3` que aparece al descomprimir el contenedor _clicfs_, no tiene espacio libre. Esto significa que no se podrá modificar ningún fichero porque no hay espacio disponible para hacer una copia temporal. La solución es dar algo de espacio libre. Habrá que redimensionar el sistema de archivos:

```sh
cd /tmp/clicfs
e2fsck -f fsdata.ext3
resize2fs fsdata.ext3 3800M
mount -o loop fsdata.ext3 /mnt
```

Con esto, dentro del directorio `/mnt` tendremos, en modo lectura y escritura, el sistema de ficheros de la distribución para poderlo modificar.

## Cambio de idioma, teclado, fondo de escritorio y actualizaciones automáticas

Para cambiar el idioma a español, habrá que editar el fichero `/mnt/etc/sysconfig/language` (como usuario `root`) y modificar la variable `RC_LANG`:

```
RC_LANG="es_ES.UTF-8"
```

Si se quiere cambiar también el idioma para el usuario `root`, se debe actualizar el valor de la variable `ROOT_USES_LANG`:

```
ROOT_USES_LANG="yes"
```

Ya que hemos cambiado el idioma, también es recomendable cambiar el mapeo del teclado. En este caso, hay que editar el fichero `/mnt/etc/sysconfig/keyboard` y modificar la variable `KEYTABLE` (como usuario `root`):

```
KEYTABLE="es.map.gz"
```

El fondo de escritorio por defecto, se encuentra en el archivo `/mnt/usr/share/wallpapers/openSUSE112-1600x1200.png`, por lo que podemos cambiarla por otra fotografía que respete las dimensiones y formato del original.

Para desactivar las actualizaciones automáticas, es necesario crear el fichero `/mnt/etc/sysconfig/automatic_online_update`, con el siguiente contenido:

```
AOU_ENABLE_CRONJOB="false"
AOU_SKIP_INTERACTIVE_PATCHES="false"
AOU_AUTO_AGREE_WITH_LICENSES="false"
```

Una vez hechos los cambios, si desmontamos el directorio `/mnt`, dentro del fichero `/tmp/clicfs/fsdata.ext3` estarán conservadas nuestras modificaciones. Tan sólo tenemos que recomprimir el fichero en formato _clicfs_ y dejarlo en la ubicación original para completar esta fase del trabajo:

```
umount /mnt
mkclicfs -c 9 fsdata.ext3 openSUSE-gnome-11.2-livecd-gnome-read-only.i686-2.8.0
```

Le aplicamos el máximo nivel de compresión (el 9) para conseguir que quepa en un CD de 700 MB. Sólo hay que copiarlo en la ubicación original para luego rehacer la imagen ISO:

```
cp /tmp/clicfs/openSUSE-gnome-11.2-livecd-gnome-read-only.i686-2.8.0 /tmp/iso/openSUSE-11.2-GNOME-LiveCD-i686/
```

## Cambios en el sistema de arranque

Para cambiar el idioma en el que se presenta el gestor de arranque de la imagen ISO, lo haremos con el comando [gfxboot](https://en.opensuse.org/SDB:Gfxboot).

```sh
gfxboot -a /tmp/iso/openSUSE-11.2-GNOME-LiveCD-i686/boot/i386/loader --add-language es_ES --default-language es_ES -b isolinux
```

Esto hace que cambie el contenido del fichero `boot/loader/i386/loader/bootlogo`. A su vez, este archivo contiene otro, llamado `init`, que es donde se realizan dichos cambios.

Por último, para cambiar la imagen de fondo del arranque, copiaremos la nueva foto en el directorio `/tmp/iso/openSUSE-11.2-GNOME-LiveCD-i686/boot/i386/loader` con los nombres `back.jpg` y `welcome.jpg`. Eso sí, la nueva foto deberá mantener el mismo formato y dimensiones que las originales. Después, ejecutaremos este comando:

```sh
gfxboot -a /tmp/iso/openSUSE-11.2-GNOME-LiveCD-i686/boot/i386/loader --add-files /tmp/iso/openSUSE-11.2-GNOME-LiveCD-i686/boot/i386/loader/back.jpg -b isolinux
```

## Rehacer la imagen ISO

Con el comando `mkisofs` podremos compilar los ficheros para obtener de nuevo una imagen ISO para poder planchar en un CD. Este comando tiene múltiples argumentos, pero sólo usaremos algunos de ellos.

```sh
cd /tmp/iso/openSUSE-11.2-GNOME-LiveCD-i686
mkisofs -r -l -o /tmp/Nueva-Live-CD.iso -b boot/i386/loader/isolinux.bin -c boot.cat -no-emul-boot -boot-load-size 4 -boot-info-table .
```

El punto del final del comando se refiere al directorio actual, lo que significa que hará una ISO con todo lo que haya en dicho directorio. Habrá que revisar el directorio y dejar sólamente lo estrictamente necesario antes de empaquetar la imagen ISO.

## Convertir en una imagen Live USB

Aunque el resultado que se puede conseguir no es el de una imagen _Live USB_ total, porque sólo se podrá escribir con persistencia en la partición de `home`, puede venir bien para aprovechar el trabajo y matar dos pájaros de un tiro (una misma imagen para dispositivos diferentes: CD y USB).

Lo primero es conseguir que la imagen ISO también sea capaz de arrancar en un dispositivo USB. Para ello, existe un comando, llamado `isohybrid` (dentro del paquete `syslinux`), que hará esta parte del proceso. Sin embargo, la documentación sobre el comando es bastante escasa. No basta con ejecutar el comando y pasar la ruta de la imagen ISO como parámetro para conseguir el objetivo. Es necesario que el identificador del sistema de arranque sea el mismo que espera la imagen ISO como dispositivo de arranque. Dicha información se halla en el fichero `/tmp/iso/openSUSE-11.2-GNOME-LiveCD-i686/boot/grub/mbrid`.

A falta de documentación sobre este tema, la solución se encuentra dentro del fichero `/usr/share/kiwi/modules/KIWIIsoLinux.pm`, que forma parte del paquete **kiwi** de openSUSE. Una vez que sabemos el identificador del MBR que espera encontrar la imagen ISO, la orden que debemos ejecutar es la siguiente:

```sh
isohybrid -id 0x6de64dcf -type 0x83 /tmp/Nueva-Live-CD.iso
```

Esta nueva imagen ISO ya se puede planchar en un dispositivo USB con, por ejemplo, el comando `dd`, o el comando `imagewriter` (que pertenece al paquete `kiwi-tools-imagewriter`).

La segunda parte del proceso se reduce a aprovechar el espacio restante en el USB como partición de `home`, en la que se pueda leer y escribir y obtener así persistencia. Dicho proceso lo podemos llevar a cabo con el comando `fdisk`. En la [página Live USB stick](https://en.opensuse.org/SDB:Live_USB_stick) se puede obtener más información sobre el tema.

## Referencias

- [SuSE install from USB drive](https://old-en.opensuse.org/SuSE_install_from_USB_drive)

## Actualización 2010-03-30

Si se resiste la desactivación de la actualización automática, es recomendable borrar el fichero `/mnt/etc/xdg/autostart/gpk-update-icon.desktop`, para evitar que se lance el proceso en el inicio de la sesión gráfica.
