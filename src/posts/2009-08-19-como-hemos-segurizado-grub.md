---
title: Cómo hemos segurizado GRUB
date: 2009-08-19 08:43:00
author: eromero
comment: false
category:
  - Seguridad
---

[GRUB](http://es.wikipedia.org/wiki/GNU_GRUB) es el gestor de arranque que utilizamos en AZLinux.

<!-- more -->

Es relativamente sencillo utilizarlo para entrar al sistema con permisos de root (acción que no permitimos a nuestros usuarios). Basta con editar la entrada y añadir `init=/bin/bash`.

GRUB permite ser protegido mediante contraseña.

## Método gráfico

Usando [YAST](http://es.wikipedia.org/wiki/YaST) (herramienta de administración del sistema de SUSE).

::: center
![Configuración de GRUB en YAST](/img/grub.jpg 'Configuración de GRUB en YAST')
:::

## Método comando

- Como root, ejecutar comando `grub`.
- Generar una clave válida:
  ```sh
  grub> md5crypt
  Password: **\*\***
  Encrypted: $1$0FSiA/$3ln7OVHdmQjub0jampPhl.
  ```
- Añadir al fichero `/boot/grub/menu.lst`:
  ```
  password --md5 $1$0FSiA/$3ln7OVHdmQjub0jampPhl.
  ```

A partir de este momento, GRUB solo puede ser editado conociendo la clave.

Como siempre esperamos vuestras aportaciones y comentarios.
