---
title: AZLinux 12 en el Zentyal Summit
date: 2012-10-05 08:57:00
author: '@jact_abcweb'
comment: false
category:
  - Presentación
tag:
  - Ubuntu
  - Zentyal
---

Con motivo del [Zentyal Summit de este año](https://web.archive.org/web/20121011230620/http://events.zentyal.com/zentyal-summit-2012/), Ricardo Cavero ([@caveroarceiz](https://twitter.com/caveroarceiz)), ha dado una charla sobre la evolución del [proyecto de migración a software libre que estamos llevando a cabo desde hace unos años en nuestro Ayuntamiento](2011-02-21-liberamos-migracion-escritorio). Desde hace unos meses estamos trabajando en una [versión de AZLinux basada en Ubuntu](2012-05-28-azlinux-3-ha-muerto) y esta no podía ser mejor ocasión para presentarla en sociedad.

<!-- more -->

::: center
![Nuevo escritorio en AZLinux 12](/img/azlinux-12-beta.png 'Nuevo escritorio en AZLinux 12')
:::

Aún no es una versión en producción aunque ya está en fase _beta_. Nos faltan algunos ajustes finales y, para resolver varios de ellos, vamos a contar con la ayuda de [Zentyal](http://www.zentyal.com/). Ante todo, debemos centrarnos en conseguir la mejor experiencia de usuario posible para que nos ayude en nuestra gestión del cambio diaria. Y tener tan cerca de nosotros a una empresa como Zentyal, nos da las garantías necesarias para emprender este nuevo reto.

El cambio a [Ubuntu](http://www.ubuntu.com/) nos da más independencia tecnológica de la que teníamos pero, sin embargo, nos ha cambiado el paradigma de escritorio que hasta entonces conocíamos con _Gnome 2_. La elección del nuevo entorno de escritorio no ha estado exenta de dudas e incertidumbres y esperamos no habernos equivocado demasiado en nuestra opción final: [Gnome Classic](https://www.psychocats.net/ubuntu/classicgnome).

Otro aspecto importante que debíamos tener en cuenta antes de sacar a producción la nueva versión de AZLinux era preparar las herramientas necesarias para la actualización de los equipos existentes (tanto de Windows a AZLinux 12, como de AZLinux 2 a la versión 12). Este es el motivo que ha hecho ralentizar el proceso de culminación de esta versión. Pero ahora que este trabajo está terminado, estamos en condiciones de seguir con las pruebas en algunos usuarios _reales_ (especialmente seleccionados para la ocasión).

Durante la charla en el _Zentyal Summit_, ha habido una pregunta que me ha llamado especialmente la atención. Alguien ha preguntado sobre si teníamos alguna medida sobre el estado de satisfacción de nuestros usuarios con el cambio de sistema operativo. La realidad es que no la tenemos como tal, aunque la comunicación y el _feedback_ es constante con ellos. De hecho, la experiencia de estos años, nos hace sacar estas conclusiones al respecto:

- En nuestra organización, ha sido más problemático el cambio de la herramienta ofimática que el del sistema operativo. Mientras que tenemos a dos personas en exclusiva para resolver dudas sobre OpenOffice/LibreOffice, tan apenas hay incidencias sobre el uso del sistema operativo (una vez que los usuarios han pasado por un curso de formación que nosotros mismos hemos diseñado).

- Las soluciones de las incidencias de los equipos con Linux son más fáciles de desplegar que en los equipos con Windows que poseemos. Además, un determinado problema suele propagarse menos porque, una vez detectado en un equipo, la solución se aplica a todos los demás en un período de tiempo razonablemente corto (gracias al hecho de que paquetizamos los cambios en la configuración software, a nuestra herramienta de distribución [migasfree](http://migasfree.org/) y a que los equipos con Linux son mucho más homogéneos y menos degradables).

- Aunque la gestión del cambio ha sido constante durante todo este tiempo, últimamente hemos observado una variación en la tendencia. Si antes los usuarios eran reticentes a los cambios, ahora los hay que nos piden directamente que les actualicemos a Linux porque han observado que va más rápido (la edad media de nuestros equipos es de 5/6 años) y da menos problemas.

[Presentación del Proyecto AZLinux en Zentyal Summit 2012](/files/windows2linuxv2.pdf):

::: center
<PDF url="/files/windows2linuxv2.pdf" />
:::
