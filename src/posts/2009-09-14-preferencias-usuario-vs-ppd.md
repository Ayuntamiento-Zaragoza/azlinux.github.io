---
title: Preferencias de usuario vs. PPD
date: 2009-09-14 11:29:00
author: eromero
comment: false
category:
  - Impresión
---

Las preferencias de impresión (_duplex_, páginas por hoja, tamaños, ...) pueden configurarse para todos los usuarios del sistema o ser personalizadas para cada usuario. Las preferencias globales vienen marcadas por el fichero PPD de cada impresora y las personalizaciones de cada usuario en el fichero `$HOME/.lpoptions`.

<!-- more -->

## Preferencias globales PPD

- Basadas en el fichero PPD que corresponde con la impresora.
- Directorio ficheros PPD: `/etc/cups/ppd`.
- Válidas para todos los usuarios del sistema.
- Modificaciones: **YAST** o editar PPD.

## Preferencias locales .lpoptions

- Se almacenan en `$HOME/.lpoptions` de cada usuario. Por lo tanto, sólo son válidas para el usuario que las defina.
- Sobrescriben a las opciones marcadas en el PPD de la impresora.
- Modificaciones: `gnome-printer-manager` (icono impresoras del usuario) o editar `$HOME/.lpoptions`.
