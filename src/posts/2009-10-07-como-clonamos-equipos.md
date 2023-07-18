---
title: Cómo clonamos equipos de escritorio
date: 2009-10-07 09:17:00
author: eromero
comment: false
category:
  - Otros
---

Una de las tareas que a diario realizamos es la actualización o instalación de nuevos PCs, para lo que necesitamos una herramienta que permita salvar o recuperar el sistema operativo en pocos minutos. Para ello, utilizamos herramientas de generación de imágenes que permiten clonar y tener dispuesta una máquina en pocos minutos. Hasta ahora habíamos utilizado herramientas como [Ghost](<https://es.wikipedia.org/wiki/Ghost_(software)>) o [Acronis](https://es.wikipedia.org/wiki/Acronis_True_Image), ambas de pago.

Desde hace unos meses venimos utilizando [Clonezilla](http://clonezilla.org/). **Clonezilla** es software libre bajo licencia GPL y nos permite clonar máquinas con sistemas de archivos diversos: FAT y NTFS de Windows y ext2 y ext3 de Linux entre otros.

Nuestro montaje consiste en un servidor Linux con Samba donde se almacenan las imágenes. Mediante un _Live CD_ o _Live USB_ con **Clonezilla** como sistema de arranque podemos acceder al servidor Samba para almacenar o recuperar imágenes.

::: center
![Esquema de clonado de imágenes](/img/clonezilla.jpg 'Esquema de clonado de imágenes')
:::

Hasta ahora es un sistema rápido y efectivo que funciona con todos los modelos de tarjeta de red que tenemos. Sin embargo echamos en falta la funcionalidad que permita redimensionar particiones cuando el disco duro es más pequeño que la imagen.
