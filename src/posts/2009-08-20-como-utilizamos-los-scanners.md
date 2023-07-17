---
title: Cómo utilizamos los scanners
date: 2009-08-20 11:21:00
author: eromero
comment: false
category:
  - Hardware
---

## SANE

[Scanner Access Now Easy (SANE)](http://es.wikipedia.org/wiki/Scanner_Access_Now_Easy) es una interfaz de programación de aplicaciones (API) que proporciona acceso estandarizado a cualquier dispositivo de escaneo (escáner de sobremesa, escáner de mano, cámaras y videocámaras, etc.). El API de SANE es de dominio público y su discusión y desarrollo está abierto a todo el mundo.

<!-- more -->

## Estructura

::: center
![Estructura de SANE](/img/sane-net.png 'Estructura de SANE')
:::

### Backends de SANE (cajas verdes)

::: info
Directorio `/etc/sane.d`.
:::

Los _backends_ son los controladores que implementan las funciones que proporciona la capa de abstracción de SANE para la comunicación de las aplicaciones de usuario con los diferentes dispositivos de escaneo soportados. Cada _backend_ puede soportar uno o varios dispositivos ya que, en realidad, lo que el _backend_ implementa es el protocolo de comunicación con el _chipset_ del dispositivo, el cual puede estar integrado en varios escáneres.

[Existen muchos _backends_](http://www.sane-project.org/sane-supported-devices.html) dentro del paquete `saned` o `saned-backends` pero también existen backends externos que hay que añadir manualmente en cada caso (p.e. EPSON Perfection V10).

### Interfaz DLL (caja azul)

::: info
Fichero `/etc/sane.d/dll.conf`.
:::

Por encima de los _backends_ se encuentra la interfaz _dll_, una librería de enlace dinámico que puede entenderse como un _backend_ más, ya que implementa las mismas funciones que estos pero proporciona la posibilidad de utilizar más de un _backend_.

Para hacer uso de los _backends_, estos han de estar registrados. Para ello, debe existir la entrada correspondiente en el archivo `dll.conf` localizado en el directorio `sane.d`.

### Frontends de SANE

::: info
Intefaz gráfica del usuario final.
:::

Los _frontends_ son aplicaciones que hacen uso de la capa de abstracción proporcionada por SANE para acceder a los dispositivos de escaneo. Estos programas no tienen por qué conocer el funcionamiento interno de cada dispositivo ya que de ese trabajo se encargan los _backends_.

Algunos ejemplos de _frontends_ conocidos son:

- **scanimage**: Aplicación para consola (modo texto).
- **xscanimage**: Versión para X11.
- [Xsane](http://es.wikipedia.org/wiki/Xsane): Versión para GTK+.
- [kooka](http://es.wikipedia.org/wiki/Kooka): Aplicación para entornos KDE.

## Ejemplo práctico y herramientas de diagnóstico

Proceso de instalación del escáner **HP 3500c**.

- [Buscamos el escáner](http://www.sane-project.org/sane-mfgs.html).
  - Está incluido en el paquete `sane-backends 1.0.19`.
  - Nuestro SLED tiene el paquete `1.0.17` (actualizo a `1.0.19`).
- Activo _backend_ en `/etc/sane.d/dll.conf`: busco línea `hp3500` y descomento.
  ```
  #hp
  #hp3900
  #hpsj5s
  hp3500
  #hp4200
  #hp5400
  ```
- Diagnóstico antes de escanear:
  - `lsusb`: chequea puerto para scanner usb (debe detectarlo)
    ```
    Bus 004 Device 002: ID 03f0:2205 Hewlett-Packard ScanJet 3500c
    ```
  - `sane-find-scanner`: es una aplicación incluida en el proyecto SANE cuyo propósito es buscar y detectar aquellos dispositivos del sistema que pudieran ser soportados por alguno de los _backends_.
  - `scanimage -L`: el _frontend_ `scanimage` muestra los dispositivos compatibles localizados por los `backends` activados en el archivo `dll.conf`.
- Lanzar **XSANE**: arranca la interfaz gráfica para poder escanear.
- Adquirir imagen desde las aplicaciones:
  - GIMP: Adquirir imagen
  - OpenOffice: Insertar > Imagen > Escanear > Seleccionar fuente

## Escanear en red

### Equipo servidor

- Configurar escáner en local (probar)
- Habilitar acceso desde la red (`/etc/sane.d/saned.conf`)
- Configurar el servicio `saned` y `xinetd`:
  - Crear fichero `/etc/xintetd.d/saned`
    ```
    service sane
    {
          disable = no
          socket_type = stream
          wait = no
          user = saned
          group = saned
          server = /usr/sbin/saned
          protocol = tcp
    }
    ```
  - Ajustar archivo `/etc/services`
    ```
    sane-port 6566/tcp sane saned # SANE network scanner daemon
    ```
  - Reiniciar `xinetd`
    ```sh
    rcxinetd restart
    ```
  - Comprobación
    ```sh
    telnet localhost 6566
    Trying 127.0.0.1...
    Connected to localhost.
    Escape character is ’^]’.
    ```

### Equipo cliente

- Activar _backend_ `net`: editar `dll.conf` y descomentar `net`.
- Configurar `/etc/sane.d/net.conf`: añadir IP del servidor del escáner.
- Comprobación (¡cuidado con el _firewall_!):
  ```sh
  telnet ip_servidor_con_escaner 6566
  Trying 127.0.0.1..
  Connected to localhost.
  Escape character is ’^]’.
  ```
- Lanzar **XSANE**.
