---
title: Añadir o quitar programas en el inicio de sesión
date: 2009-09-21 10:27:00
author: eromero
comment: false
category:
  - Desktop
---

Cómo añadir o quitar aplicaciones para que arranquen en el inicio del escritorio (equivalente al **Programas > Inicio** de Windows).

<!-- more -->

## Procedimiento

- Acceder al Centro de Control del Usuario.
- Acceder a Sesiones: Programas al Inicio.
- Añadir, quitar aplicaciones.
- También pueden desactivarse por si es necesario activarlas mas tarde.

::: center
![Configuración del inicio de sesión](/img/sesiones.png 'Configuración del inicio de sesión')
:::

En nuestro caso, para evitar este tedioso procedimiento, utilizamos un paquete **rpm** que añade el lanzador (`fichero.desktop`) correspondiente en `/etc/xdg/autostart`.
