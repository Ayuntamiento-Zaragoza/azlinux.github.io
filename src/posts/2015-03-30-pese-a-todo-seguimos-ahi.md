---
title: Pese a todo, seguimos ahí
date: 2015-03-30 10:50:00
author: '@jact_abcweb'
comment: false
category:
  - Evolución
  - Dificultades
---

::: center
![AZLinux y sus molinos](/img/beastie-tux-quijote.jpg 'AZLinux y sus molinos')
:::

Hacía ya un par de años en que no nos dejábamos caer por el blog. Las razones han sido diversas, pero ha habido una que se alza por encima de las demás: la falta de novedades.

El otro día me preguntaban si habíamos tocado techo con respecto a los equipos que podíamos pasar de Windows a Linux. Mi respuesta fue esta: **nos han hecho tocar techo**. Desde hace 2 años, el número de equipos con Linux se mantiene estable: 1/3 del total. Nunca nos lo han puesto fácil, pero es que, por más que pidamos colaboraciones, no hay voluntad por ir todos en la misma dirección.

¿Y en qué hemos dedicado este tiempo? Pues muy sencillo. En seguir dedicándonos a lo nuestro, contando únicamente con nuestros recursos. Si a finales de 2012 empezábamos nuestra andadura con Ubuntu (AZLinux 12), a día de hoy, los 1100 equipos con Linux tienen la misma versión.

También hemos continuado divulgando nuestra experiencia y, gracias a ella, junto con otras personas, creamos el [proyecto Vitalinux](https://web.archive.org/web/20150420002829/http://www.vitalinux.org/). Para cada uno de nosotros tiene un significado y objetivos distintos pero, para mí, tenía uno muy claro: **dar a conocer nuestro método de trabajo al gran público para que otras organizaciones puedan seguir nuestros pasos**.

AZLinux, como ya hemos comentado en otras ocasiones, es una "distribución" adaptada a las necesidades del Ayuntamiento. Fuera de ese ámbito, no tiene sentido aplicarla, simplemente, porque las necesidades en otros sitios, son diferentes. Pero sí se pueden aplicar [las herramientas que usamos y la experiencia que hemos ido acumulando en el viaje](https://speakerdeck.com/jact/azlinux-vitalinux-y-paqueteria-deb).

Aun contando con pocos recursos, el proyecto Vitalinux está teniendo una gran repercusión y [el departamento de Educación de la DGA se ha fijado en nosotros y ha empezado un piloto para los colegios públicos basándose en él](https://wiki.vitalinux.educa.aragon.es/).

## Otras piedras en el camino

**Las bases de datos Access** que salen como hongos tras un día de lluvia. Bases de datos que tienen varios problemas graves:

- La mayoría no están hechas por programadores, por lo que cada una está hecha de forma diferente y con métodos que dificultan el poderlas usar bajo un entorno en Wine.
- No están controladas, por lo que es difícil planificar acciones reactivas.
- Esto pone de manifiesto que hay necesidades informáticas que no están cubiertas por los recursos del propio Ayuntamiento. Seguramente debido al pobre dimensionado del departamento de informática, que se ve incapaz de atender todas estas necesidades.

Se siguen usando programas privativos en lugar de buscar alternativas basadas en formatos abiertos o entornos que fomenten la multiplataforma. Este planteamiento continuista también provoca dificultades porque:

- Algunos son programas antiguos muy ligados a una determinada plataforma y pone complicado incluso actualizar esa plataforma. Además, si esos programas ya no tienen actualizaciones, o la empresa que lo ha hecho ya no existe, no hay opción para evolucionar a otra cosa sin un gasto añadido.
- Otros, al ser programas poco extendidos (o hechos _ad hoc_ para un departamento), es bastante probable que no puedan ejecutarse en un entorno en Wine.
- Pero la peor de todas es cuando argumentan: **esto ha funcionado siempre así**. El inmovilismo es, de lejos, el problema más grave, porque tiene detrás un problema de actitud.

**El acceso y firma con certificados digitales en sitios web**. Las sedes electrónicas de la administración pública española (ya sea general, autonómica o local) son un crisol de applets Java, con requisitos diferentes y sin unificación de criterios, que hacen verdaderamente complicado tener una única plataforma de acceso a todas ellas. Algunos de los problemas se dan en todos los sistemas operativos, como la versión y configuración de la JVM o el navegador, pero hay otros problemas que atañen especialmente a Linux.

Esto es así por nuestra particular infraestructura. Los certificados digitales de empleado público residen en tarjetas criptográficas. Es precisamente el acceso al almacén de la tarjeta lo que nos trae más quebraderos de cabeza.

Existe un proyecto libre llamado [OpenSC](https://github.com/OpenSC/OpenSC/wiki), que tiene como objetivo facilitar este acceso a las diferentes tarjetas. Este proyecto tiene bastante alcance y difusión, por lo que todas las distribuciones base de Linux proveen versiones listas para el consumo. El único requisito es que es necesario publicar las especificaciones técnicas de cada tarjeta en el proyecto.

La FNMT-RCM es quien ha hecho esas especificaciones para nuestras tarjetas criptográficas (Ceres). Sin embargo, en lugar de aunar esfuerzos con otras organizaciones de otros países y contribuir al proyecto OpenSC, ha decidido crear sus propias herramientas de acceso. Aquí tenemos patente un problema de dependencia tecnológica, pero que además se ve agravado en entornos Linux. Esto es así porque no todas las funcionalidades que tienen las herramientas para entornos Windows tienen equivalencia en las que publican para Linux. Además, sólo soportan un pequeño número de distribuciones Linux, por lo que están limitando elecciones.

Hemos reclamado estas circunstancias en repetidas ocasiones, pero mucho me temo que no tienen en consideración nuestras peticiones porque nuestro caso es demasiado singular: debemos ser la única administración pública que usa Linux y tarjetas criptográficas para sus certificados. Si fueran una empresa privada podría entender su planteamiento. Siendo parte de la administración pública española... no soy experto en leyes pero... creo que la [Ley 11/2007](http://es.wikipedia.org/wiki/Ley_de_Acceso_Electr%C3%B3nico_de_los_Ciudadanos_a_los_Servicios_P%C3%BAblicos) tendría algo que decir al respecto.

Somos una organización heterogénea, también tecnológicamente hablando, y queremos seguir así durante mucho tiempo. Primero porque no nos gustaría desandar lo que hemos conseguido hasta ahora y, segundo, porque aun falta mucho por recorrer. Y no es tanto un problema técnico (que rara vez lo es) sino por problemas de cerrazón e incapacidad evolutiva. Esta es la tarea que llevará más tiempo.
