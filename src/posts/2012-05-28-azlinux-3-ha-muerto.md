---
title: AZLinux 3 ha muerto, ¡viva AZLinux 12!
date: 2012-05-28 14:14:00
author: '@jact_abcweb'
comment: false
category:
  - Desktop
---

Este _blog_ ha sido testigo de [algunos artículos](2011-11-02-nucleo-azlinux-3) [relacionados con el desarrollo](2011-10-31-certificados-digitales-azlinux-3) de **AZLinux 3**. Esta versión era la sucesora de la que ahora mismo está en producción y estaba basada en openSUSE 11.4. Y lo digo en pasado porque ya nunca verá la luz. Diversos motivos nos han llevado a cambiar de distribución base.

<!-- more -->

Uno ha sido la política de actualizaciones de openSUSE, que nos ha dejado sin paquetes para la versión 11.2 (nuestro actual AZLinux 2) y que dentro de poco hará lo propio con la versión 11.4. Otro, el más importante, ha sido que hemos descubierto un método alternativo de conexión a nuestra infraestructura de ficheros _Netware_. Este método, aunque más lento y de peor rendimiento que el que teníamos, nos ha posibilitado independizarnos de una distribución única de Linux y así hemos podido escoger entre un amplio abanico de posibilidades.

Meses atrás os [pedíamos opinión sobre este asunto](2012-02-07-desarrollando-azlinux-3). Os agradecemos los comentarios y vuestros consejos. Al final nos hemos decantado por [Ubuntu 12.04 LTS](https://web.archive.org/web/20130102013513/https://canonical.com/about-canonical/resources/white-papers/what%E2%80%99s-new-ubuntu-server-1204-lts), con [Gnome Classic](https://www.omgubuntu.co.uk/2012/03/gnome-classic-in-ubuntu-12-04-its-like-nothing-ever-changed) como escritorio.

Con el cambio de distribución, hemos decidido cambiar también la numeración. Por eso, y porque aunque **AZLinux 3** no haya llegado a ser, sí que nos ha servido como campo de pruebas para evolucionar nuestra distribución (y no queríamos que su recuerdo se perdiera si manteníamos el número 3 para la nueva versión).

**AZLinux 12** está creciendo rápidamente para convertirse en nuestro próximo sistema Linux en producción, pero todavía nos faltan algunas cosas por montar y algunos errores por solucionar.

Para celebrar este nuevo hito, me gustaría presentaros una retrospectiva gráfica de las distintas versiones de nuestra distribución.

## AZLinux 1

Hacia finales de 2008, nace **AZLinux 1**. Hubo 14 prototipos previos a esta primera versión. Está basada en **SLED 10 SP2** y, a día de hoy, todavía sigue en producción en unos 100 equipos, pero está previsto sustituir todos ellos por **AZLinux 2** en breve.

::: center
![Aspecto del escritorio en AZLinux 1](/img/azlinux-1.png 'Aspecto del escritorio en AZLinux 1')
:::
