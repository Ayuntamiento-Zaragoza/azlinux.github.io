---
title: Cómo forzar un chequeo de disco
date: 2009-10-26 07:33:00
author: '@jact_abcweb'
comment: false
category:
  - Hardware
---

Los sistemas Linux, al contrario que los Windows (que hacen el `scandisk` tras cerrarse anormalmente cuando le viene en gana: unas veces sí y otras no), siempre hacen un chequeo de las particiones, si es necesario, al iniciarse el sistema.

<!-- more -->

De todas formas, se puede forzar el chequeo para el próximo reinicio, si se crea un fichero llamado `forcefsck` en el directorio raíz. Conviene recordar que no se puede chequear un sistema de archivos que esté montado.

Este fichero, que inicialmente se creará vacío, puede contener respuestas automáticas para que el chequeo no se pare cada vez que encuentra alguna cosa que falla. Por ejemplo, se puede poner una letra `y` para que lo haga todo automáticamente.

Otra particularidad de los Linux es que, de vez en cuando (y sin que nadie se lo pida), chequean aleatoriamente, al arrancar, las particiones de los discos. Esto es así si hace muchos días que no se arranca el equipo o si han pasado más de _X_ días sin haber realizado un chequeo.

También es posible forzar que no se realice el chequeo en el próximo reinicio. Para ello se crea un fichero denominado `fastboot` en el directorio raíz.

Los ficheros `forcefsck` y `fastboot` se borran al arrancar el sistema (son de un sólo uso).
