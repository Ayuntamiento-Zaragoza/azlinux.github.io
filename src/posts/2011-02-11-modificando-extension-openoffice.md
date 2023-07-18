---
title: Modificando una extensión de OpenOffice
date: 2011-02-11 12:27:00
author: 'Raúl Huerta'
comment: false
category:
  - Ofimática
---

[Numbertext](https://extensions.openoffice.org/en/project/numbertext) es una extensión de OpenOffice que proporciona dos nuevas funciones para **Calc**: `Numbertext` y `Moneytext` que traducen un valor númerico en texto (`Numbertext`) o en texto moneda: X euros y X cents (`Moneytext`). El problema que nos comenta el usuario es que quiere que la función `Moneytext`, en vez de "X euro/s y X cent/s", dé como resultado "X euro/s con X céntimo/s".

<!-- more -->

La extensión `numbertext-version.oxt` es un fichero comprimido que consta de una estructura de ficheros y directorios entre los que se encuentra el archivo `numbertext_es_ES.py`. Este fichero contiene el código _python_ con las funciones de **Calc** y es el que hay que modificar de la siguiente manera:

- La línea 87 `cent` por `céntimo` y `cents` por `céntimos`.
- Las líneas 117, 118 y 119 donde pone `y` por `con`.

¡¡Así de fácil!!
