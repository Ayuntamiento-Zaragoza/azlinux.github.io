---
title: Cómo configurar el servicio NetworkManager en el arranque de openSUSE
date: 2009-10-29 13:07:00
author: '@jact_abcweb'
comment: false
category:
  - Desktop
---

A diferencia de SLED, en openSUSE, el servicio **NetworkManager**, se ejecuta en segundo plano durante el arranque del sistema. Esto significa que el _login_ gráfico (servicio `xdm`) está disponible para los usuarios sin tener la seguridad, en esos momentos, de que el equipo tiene la red configurada.

<!-- more -->

Como, precisamente, eso es lo que queremos asegurar en ese punto, hay que hacer un par de cambios en la configuración del sistema.

Para empezar, hay que editar el fichero `/etc/init.d/network`. En la función `start_nm_online`, hay que cambiar esta línea:

```
$NM_ONLINE_BIN --exit --timeout $NM_ONLINE_TIMEOUT
```

por esta otra:

```
$NM_ONLINE_BIN --timeout $NM_ONLINE_TIMEOUT
```

Con esto conseguiremos que el comando `nm_online` no se ejecute en segundo plano. Es decir, que hasta que no concluya su ejecución, no se continúe con el resto del arranque.

Pero todavía queda otro problema que resolver. El servicio `xdm` arranca, en el proceso de arranque, antes de llegar a ejecutar **NetworkManager**. Esto se puede verificar comprobando el fichero `/var/log/boot.msg`.

Este comportamiento ocurre porque el sistema intenta (si no hay dependencias entre servicios que lo impidan) arrancar varios servicios en paralelo. Para modificar esta circunstancia, es necesario editar el fichero `/etc/sysconfig/boot` y cambiar el valor de la variable `RUN_PARALLEL` a "**no**". Por último, para hacer efectivos los cambios en este archivo, es necesario ejecutar el comando `SuSEconfig`.
