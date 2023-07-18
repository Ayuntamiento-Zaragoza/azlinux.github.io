---
title: Cómo hacemos ssh múltiple
date: 2009-11-16 13:15:00
author: eromero
comment: false
category:
  - Desktop
---

En algunos entornos es útil poder realizar acciones en varias máquinas simultáneamente.

<!-- more -->

[pssh](https://www.redeszone.net/2017/03/04/parallel-ssh-conoce-la-herramienta-pssh-conectarnos-varios-servidores-ssh-la-vez/) permite conectarse mediante `ssh` a varias máquinas y realizar una acción única en todas ellas simultáneamente.

Para nuestra aula de formación, esta funcionalidad es muy interesante. Por ejemplo, deseamos borrar el perfil del usuario _curso_ (_home_ incluido) cada vez que acaba un curso en cada una de las máquinas del aula.

```sh
pssh -h /opt/aytozgz/pssh/hosts userdel -r curso
```

Además `pssh` incluye, como podéis ver en el enlace, otro conjunto interesante de comandos muy útiles como `pscp`, `prsync`, `pnuke` y `pslurt`.
