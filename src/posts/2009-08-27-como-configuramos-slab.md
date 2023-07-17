---
title: Cómo configuramos SLAB (más aplicaciones)
date: 2009-08-27 08:12:00
author: eromero
comment: false
category:
  - Desktop
---

::: center
![Navegador de aplicaciones SLAB](/img/slab.png 'Navegador de aplicaciones SLAB')
:::

<!-- more -->

## Más aplicaciones

Entorno [XDG](http://standards.freedesktop.org/basedir-spec/latest/):

```
XDG_CONFIG_DIRS=/etc/xdg
XDG_DATA_DIRS=/usr/share
```

## ¿Cómo se genera?

Partimos de `XDG_CONFIG_DIRS/menus/applications.menu` como fichero base:

- [Crear menús](http://standards.freedesktop.org/menu-spec/latest/) y submenús cuya definición está en ficheros `.directory`

  ```
  XDG_DATA_DIRS/desktop-directories
  ```

- [Cada aplicación está definida](http://standards.freedesktop.org/desktop-entry-spec/latest/) por un fichero `.desktop`

  ```
  XDG_DATA_DIRS/applications
  ```

- Dentro de cada menú se incluyen categorías para ser mostradas.Las aplicaciones son mostradas en función de las categorías definidas en su `.desktop`.

- `XDG_CONFIG_DIRS/menus/applications.menu` pertenece al paquete `desktop-data`. Por lo tanto, es deseable no tocarlo.

- Para añadir cambios, usar la posibilidad de mergear `.menu`:
  - Metemos nuevos `.menu` en `XDG_CONFIG_DIRS/menus/applications-merged/` (mergeo automatico).
  - De esta menera podemos añadir menús o quitar entradas que no interesan.
