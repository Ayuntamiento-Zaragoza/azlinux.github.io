---
title: AZLinux 3 ha muerto, ¡viva AZLinux 12!
date: 2012-05-28 14:14:00
author: '@jact_abcweb'
comment: false
star: 5
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

## AZLinux 2

En febrero de 2010, **AZLinux 2** sale de la fábrica para empezar su vida productiva. Basada en **openSUSE 11.2**, ha ido evolucionando notablemente en todo este tiempo, añadiendo _parches_ (muchas veces externos a openSUSE) aquí y allá. Aunque sus comienzos fueron titubeantes, ahora mismo es nuestro buque insignia, ya que se encuentra en más del 80% de los equipos con Linux del Ayuntamiento.

::: center
![Aspecto del escritorio en AZLinux 2](/img/azlinux-2.png 'Aspecto del escritorio en AZLinux 2')
:::

## AZLinux 3

En verano de 2011, empezamos a trabajar sobre lo que iba a ser **AZLinux 3**. Ya no teníamos tanta urgencia como con la anterior versión, pero sabíamos que era imprescindible estar lo más al día posible para dar el mejor servicio posible a nuestros usuarios. A nivel de distribución base era bastante continuista en relación a openSUSE 11.2, ya que no había cambios muy drásticos. Sin embargo, en cuanto al código desarrollado por nosotros, sí que hubo cambios significativos. Lástima que se quedara sólo en un prototipo, pero es que se nos quedó pequeño antes de hora.

::: center
![Aspecto del escritorio en AZLinux 3](/img/azlinux-3.png 'Aspecto del escritorio en AZLinux 3')
:::

## AZLinux 12

Un mes antes de que saliera la versión oficial, en marzo de este año, ya estábamos estudiando y haciendo pruebas con la nueva versión de Ubuntu. Es la siguiente [versión LTS](https://wiki.ubuntu.com/LTS) y hay una gran comunidad detrás (tal vez la mayor en estos momentos). Todavía tiene _bugs_ importantes que resolver (es normal llevando tan poco tiempo de vida), pero estamos seguros e ilusionados en que **AZLinux 12** es un gran salto, por muchos motivos, en [nuestro proyecto de migración a software libre](2011-02-21-liberamos-migracion-escritorio).

::: center
![Aspecto del escritorio en AZLinux 12](/img/azlinux-12.png 'Aspecto del escritorio en AZLinux 12')
:::

> Sin cambio, el progreso es imposible; y los que no son capaces de cambiar de mentalidad no son capaces de cambiar nada.
>
> [George Bernard Shaw](http://es.wikipedia.org/wiki/George_Bernard_Shaw)
