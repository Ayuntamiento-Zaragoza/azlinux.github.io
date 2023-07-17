---
title: Cómo usamos WINE
date: 2009-09-24 08:21:00
author: eromero
comment: false
category:
  - Otros
---

**WINE**, según Wikipedia es:

> Wine (acrónimo recursivo en inglés para Wine Is Not an Emulator, que significa «Wine no es un emulador») es una reimplementación de la API de Win16 y Win32 para sistemas operativos basados en Unix. Permite la ejecución de programas para MS-DOS, Windows 3.11, 95, 98, ME, NT, 2000, XP, Vista y Windows 7.

Es decir, permite ejecutar algunas aplicaciones Windows dentro de nuestro Linux. En nuestro caso nos permite ejecutar un buen conjunto de aplicaciones Windows que, o no tienen una alternativa, o esta no es viable para nuestro entorno.

Os pongo algunos ejemplos:

- **Microsoft Access**: tenemos cientos de aplicaciones **Access** que por falta de tiempo y medios no podemos migrar a un entorno _Open Source_. **WINE** permite emular muchas de ellas aunque el código deba ser revisado, compilado y compactado de nuevo. Un caso particular, no resuelto todavía, son las aplicaciones **Access** que generan una combinación de correspondencia con documentos **Word**.

- \*_OCR_: por el momento no hemos encontrado una alternativa eficiente al uso de software OCR por lo que "emulamos" software de OCR de Windows con WINE.

- Entorno transaccional: el cliente para nuestro entorno transaccional es antiguo y sólo funciona para entornos Windows por lo que el uso de **WINE** ha sido imprescindible.

- En contraposición, también tenemos que decir que algunas aplicaciones no han podido ser emuladas con **WINE**, como **Presto** o **Nokia PC Suite**. Hasta ahora **WINE** tampoco ha sido útil para emular aplicaciones de **CAD**.

En conclusión podemos decir que **WINE** es una herramienta útil en algunos casos y que nos permite avanzar en la migración a entorno _Open Source_ mientras las alternativas al software propietario estén disponibles y a la altura de estas.
