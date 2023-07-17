---
title: Nuestros problemas con la búsqueda de texto en ficheros
date: 2009-09-17 13:15:00
author: eromero
comment: false
category:
  - Otros
---

Hoy toca llorar un poco. Tenemos un problema relacionado con la búsqueda de texto en ficheros.

<!-- more -->

Me explico. Deseamos buscar una cadena de texto dentro de un documento `txt`, `doc`, `odt` o `pdf`, teniendo en cuenta que:

- `txt`: fichero de texto plano.
- `doc`: linux lo ve como binario.
- `odt`: en realidad es un conjunto de ficheros XML comprimidos.

## Posibles soluciones

- Buscar de Gnome (`gnome-search-tool`): sólo encuentra en `txt`.
- Buscar de KDE (`kfind`): sólo encuentra en `txt` y `odt`.
- Beagle: indexa todos lo ficheros pero inviable cuando lo usamos con ficheros de red (por sobrecarga).
- Tracker: lo mismo que Beagle.

## Conclusión

- Necesitamos una herramienta que busque cadenas de texto en `doc`, `odt` y `pdf` fundamentalmente.
- No vale un indexador tipo Beagle pues sobrecarga la red.

**¿Ideas?**
