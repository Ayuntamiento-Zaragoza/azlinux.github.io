---
title: Cómo asociamos ficheros con aplicaciones
date: 2009-08-25 13:52:00
author: eromero
comment: false
category:
  - Desktop
---

Entendiendo [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/). Forma parte del estándar [freedesktop.org](https://www.freedesktop.org/). Define uno o más directorios base donde los ficheros deben ser buscados.

<!-- more -->

Orden de búsqueda:

1. `$XDG_DATA_HOME` (en su defecto: `~/.local/share`)
2. `$XDG_DATA_DIRS` (en su defecto: `/usr/local/share; /usr/share`)

## Mimetype

Los ficheros tienen asociado un [Mimetype](http://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions) que indica qué tipo de fichero es.

Se clasifican mediante el esquema _media/subtipo_: `text/plain` o `image/jpg`.

## Directorios

- `XDG/mime/packages`: plantillas
- `XDG/mime/packages/MEDIA/subtype.xml`: definición de cada tipo
- `XDG/mime/globs`: relación extensión Mimetype
- `XDG/mime/magic`: relación patrón Mimetype
- `XDG/mime/aliases`: alias de Mimetype
- Otros

## Cómo se determina el Mimetype

En este orden:

1. `XDG/mime/globs`: relación extensión Mimetype
2. `XDG/mime/magic`: relación patrón Mimetype

## Asociar MIMETYPE con aplicación por defecto

`XDG/applications/defaults.list`

Ejemplo: `application/excel=calc.desktop`

::: tip Truco
`gnomevfs-info` muestra el _mimetype_ de un fichero.
:::
