---
title: Automatización de migraciones AZLinux
date: 2011-09-05 23:31:00
author: 'Alberto Gacías'
comment: false
star: 4
category:
  - Software
tag:
  - Migración
---

Como os comentamos en [Razones para hacer una distribución propia](2011-08-25-razones-distribucion-propia), uno de los retos a los que nos enfrentamos en AZLinux, es mantener nuestros escritorios actualizados.

<!-- more -->

Si bien con [migasfree](http://www.migasfree.org/) conseguimos actualizar y configurar los equipos con AZLinux a voluntad, llega un momento en que instalar software más reciente nos resulta imposible, debido a que la Distribución GNU/Linux de la que partimos no lo permite. Es este un buen momento para plantearnos comenzar a desarrollar una nueva versión de nuestro escritorio libre.

Actualmente en el Ayuntamiento de Zaragoza trabajamos con cinco sistemas de escritorios diferentes:

- Microsoft Windows XP SP2.
- Zaragoza Accesible (basado en SLED 10 SP2).
- AZLinux 1 (basado en SLED 10 SP2).
- AZLinux 2 (basado en OpenSUSE 11.2).
- AZLinux 3 (en desarrollo, basado en OpenSUSE 11.4).

Nuestro proceso principal de migración es el de migrar los XP a la última versión en producción de AZLinux, pero tambien estamos migrando los **AZLinux 1** a **AZLinux 2** en determinados casos.

Es obvio que mantener diferentes escritorios en producción conlleva una complejidad y esfuerzo considerable, no sólo para los técnicos encargados de mantenerlos sino también para los técnicos que dan soporte a los usuarios. Por este motivo no queremos tener más de dos versiones AZLinux en producción, con lo que el proceso de migración entre sistemas AZLinux empieza ahora a tomar cierta importancia.

Dado que nuestros recursos son muy limitados, hemos automatizado la migración entre distintos AZLinux ya que este proceso nos resta recursos de la migración de XP a AZLinux, nuestro principal objetivo. Es de esto, de lo que os vamos a hablar a continuación.

## Requisitos

- Si algo sale mal (fallo de red, disco duro, corriente eléctrica, etc.) el sistema debe volver a su estado inicial.
- El proceso debe ser totalmente desatendido (será programado para su ejecución en horario no laboral).
- Posibilidad de realizar el proceso en dos pasos: salvado de **AZLinux 1** por un lado y restauración en **AZLinux 2** por otro lado ( p.e. cuando se requiera renovar el equipo físico, salvaremos en el PC antiguo y restauraremos en el PC nuevo).
- Deben copiarse todos los datos de todos los usuarios (documentos, correo electrónico, configuraciones, etc.).
- Deben copiarse todas las impresoras automáticamente.
- El mismo software que se haya instalado en la versión AZLinux antigua debe también ser instalado en la nueva (o en su defecto un software alternativo).
- El sistema debe ir registrando lo que va realizando para que en caso de error se pueda relanzar el proceso y pueda continuar desde donde se produjo el error.

## Solución adoptada

El sistema automatizado de migración de **AZLinux 1** a **AZLinux 2** instala un [Clonezilla](http://clonezilla.org/) personalizado en la partición [swap](http://es.wikipedia.org/wiki/Espacio_de_intercambio) de AZLinux. Una vez reiniciado el sistema en esta partición, desde Clonezilla se monta una carpeta de red (_cifs_) y se ejecuta un _script_ que, esquemáticamente, realiza:

- Un salvado y verificado posterior de las particiones del disco (menos la partición swap que ahora contiene Clonezilla).
- Un salvado de datos de los usuarios y de datos del sistema en ficheros `tar.gz` en la carpeta de red.
- Una restauración de las particiones de la imagen de **AZLinux 2**.
- Una restauración de los datos de los usuarios y del sistema salvados anteriormente (`tar.gz`).
- Volver a dejar la partición que ahora contiene Clonezilla como _swap_.

Nuestro "truco" consiste en usar la partición _swap_ para arrancar un Clonezilla personalizado.

Otra forma de arrancar Clonezilla es haciendo uso de PXE, pero se nos plantea el inconveniente de que ninguno de nuestros equipos tiene activado PXE en la BIOS, lo cual requiere que un técnico se desplace para activarla, además de tener que instalar y mantener un servidor de arranque PXE. No descartamos esta opción a medio plazo.

## Cómo lanzamos el proceso

Cuando queremos migrar un **AZLinux 1** a **AZLinux 2** lo que hacemos es:

- Informar al usuario de que va a migrarse su AZLinux.
- En migasfree asignamos el equipo al repositorio que contiene nuestro paquete `mig.rpm` (contiene todo lo necesario para instalar el Clonezilla personalizado en la partición _swap_) y actualizamos el equipo para que se instale dicho paquete.
- Programamos el lanzamiento de la migración en horario no laboral, p.e.: `# mig-at 20:30` (el usuario no debe apagar el equipo o bien hacemos uso de [Wake On LAN](http://en.wikipedia.org/wiki/Wake-on-LAN) para que el equipo este encendido y pueda lanzarse el proceso).
- Al día siguiente el usuario nos informa del resultado. Si algo ha salido mal comprobamos los _logs_ del proceso y actuamos en consecuencia.

## Incovenientes detectados

- Dado que el proceso requiere de un reinicio y algunos equipos (afortunadamente pocos en nuestro caso) tienen contraseñas BIOS antes de iniciar el proceso tenemos que eliminarlas si se programa la ejecución del proceso en horario no laboral, o bien lanzar el proceso con el usuario delante de su equipo para que este introduzca la pasword de BIOS.
- Si se produce un fallo de corriente eléctrica cuando se está restaurando la imagen de **AZLinux 2**, no siempre el sistema consigue volver a arrancar ya que Clonezilla ha copiado el [Master Boot Record](http://es.wikipedia.org/wiki/Master_boot_record) de [grub](http://es.wikipedia.org/wiki/GNU_GRUB) y la restauración no ha sido completada. En este caso es preciso la intervención in situ de un técnico para copiar el _Master Boot Record_ de [syslinux](http://www.syslinux.org/wiki/index.php/SYSLINUX) y poder iniciar de nuevo Clonezilla para relanzar el proceso.
- Algunos iconos de los lanzadores añadidos por los usuarios se pierden y hay que reasignarlos, ya que entre las diferentes Distribuciones empleadas dichos iconos han cambiado de nombre o de ruta.

## Ventajas

- Sistema de migración desatendido.
- No interrumpimos el trabajo del usuario.
- No generamos tráfico de red en horario laboral.
- Simple de ejecutar.

AZLinux. Nos gusta el Software Libre.
