---
title: El núcleo de AZLinux 3
date: 2011-11-02 08:49:00
author: '@jact_abcweb'
comment: false
category:
  - Desktop
tag:
  - System
  - Core
  - AZLinux
---

Llamamos núcleo, o _core_, al mínimo conjunto de paquetes que constituyen la distribución **AZLinux**. El resto de paquetes que forman parte de la _distro_ no es que sean menos importantes, ya que cada uno de ellos ha sido creado por una determinada necesidad o funcionalidad, pero los paquetes del núcleo son los que dotan a nuestra distribución de un sello de identidad propio. Veamos por qué, estudiando cada uno de ellos.

<!-- more -->

::: center
![Paquetes del Core AZLinux 3](/img/azlinux_3_core.png 'Paquetes del Core AZLinux 3')
:::

## azl-setup

También podría llamarse `azl-bootstrap`, ya que su misión es convertir a una distribución Linux base (para AZLinux 3, es openSUSE 11.4) en AZLinux.

Descarga e instala el resto de paquetes de la distribución. También contiene algunos ficheros clave para el arranque de la máquina y que utiliza nuestro sistema de clonación personalizado (basado en [Clonezilla](http://clonezilla.org/)) para terminar el clonado de cada ordenador.

Además, incluye los paquetes del <acronym title="Novell Client for Linux">NCL</acronym> y se encarga de instalarlo.

## azl-utils

Únicamente contiene una serie de _scripts_ que facilitan la programación del resto de paquetes de la distribución. Esta es la lista:

- `azl-backup-file`: sirve para hacer una copia de seguridad de un archivo (frecuentemente de un fichero que pertenece a otro paquete, durante el proceso de instalación de un paquete).
- `azl-change-file`: reemplaza un fichero por otro con una determinada extensión (al igual que el otro, se usa durante la instalación de paquetes, para cambiar archivos de configuración de otros paquetes por los nuestros adaptados).
- `azl-delete-line`: borra una determinada línea de un fichero (para automatizar cambios de ficheros de otros paquetes)
- `azl-gconf`: sirve de interfaz para realizar cambios en [GConf](https://es.wikipedia.org/wiki/GConf) a nivel de sistema.
- `azl-get-line-number`: devuelve el número de la línea del texto buscado en un fichero.
- `azl-get-user-graphic`: devuelve el usuario que tiene lanzada la sesión gráfica en el equipo.
- `azl-get-value`: sirve para obtener el valor de una clave de un fichero de configuración.
- `azl-insert-line`: añade una línea en un fichero (útil para automatizar cambios de ficheros de otros paquetes).
- `azl-line-comment`: comenta o descomenta líneas en ficheros de configuración.
- `azl-restore-file`: restaura ficheros de configuración originales de otros paquetes (se usa durante la desinstalación de paquetes de AZLinux).
- `azl-set-value`: establece un valor para una clave de un archivo de configuración.
- `azl-update-apps`: hace las veces de macro en la instalación/desinstalación de paquetes para invocar al comando `update-desktop-database`.
- `azl-update-icons`: mismo cometido que el _script_ anterior, pero para el comando `gtk-update-icon-cache`.

Una parte de ellos están hechos en Python, para aprovechar la librería [argparse](http://docs.python.org/dev/library/argparse.html) y parsear la lista de argumentos fácilmente. El resto, debido a su simplicidad, están hechos en Bash.

Como se puede observar, tanto los nombres de los paquetes como los nombres de los _scripts_ comienzan por el prefijo **azl** con el fin de diferenciarlos del resto y encontrarlos fácilmente a través de la consola de comandos.

## azl-system-config

Realiza cambios en ficheros de configuración que tienen que ver con el arranque de la máquina ([sistema sysconfig](https://github.com/openSUSE/sysconfig)).

## azl-lan

Se encarga de configurar los servicios de red de la máquina:

- xinetd
- Proxy del sistema
- Firewall
- NTP

## azl-pms

Debe su denominación a que configura el _Package System Manager_ del sistema. En nuestro caso, [Zypper](https://es.opensuse.org/Zypper). Además, incorpora un _script_ que sirve de interfaz para instalar y desinstalar paquetes manualmente.

También contiene un _script_ para facilitar la operación de subir ficheros al [servidor de migasfree](http://www.migasfree.org/).

## azl-nds

Configura el cliente LDAP de la máquina con los parámetros de nuestro servidor y contiene 2 _scripts_ para realizar operaciones contra el árbol <acronym title="Novell Directory Services">NDS</acronym> de nuestra organización:

- `azl-nds-info`: obtiene determinados valores del árbol NDS para un determinado usuario.
- `azl-nds-server`: sirve para iniciar o cerrar sesión en el servidor Novell.

## azl-auth

Se encarga de:

- Configurar el <acronym title="Novell Client for Linux">NCL</acronym>.
- Configurar los [módulos de autenticación PAM](http://en.wikipedia.org/wiki/Pluggable_authentication_module) para integrar el _login_ en el servidor de ficheros de Novell con el _login_ en el equipo.
- Configurar el servicio [OpenSSH](http://www.openssh.com/) para las conexiones remotas.
- Configurar el servicio [SLP](http://en.wikipedia.org/wiki/Service_Location_Protocol) (necesario para la conexión con el servidor Novell de nuestra organización).
- Añadir determinados grupos a los usuarios de la máquina (necesarios para que la conexión con el servidor Novell funcione).

También contiene _scripts_ que sirven para crear y gestionar usuarios adecuados en la máquina.

## azl-skel-base

Contiene los ficheros básicos para el perfil de los usuarios (los que residen en `/etc/skel/`). Se diferencia de un perfil habitual en que añade un lanzador para la conexión con el sistema de ficheros de Novell que utilizamos y porque configura [Nautilus](https://wiki.gnome.org/action/show/Apps/Files) con un marcador a dicha localización de red.
