---
title: Charla de migasfree en Software y Barra Libre
date: 2011-06-17 18:14:00
author: '@jact_abcweb'
comment: false
category:
  - Presentación
tag:
  - migasfree
---

El pasado 15 de junio, en el [Digital Water Pavilion](http://www.openstreetmap.org/?lat=41.6634&lon=-0.906185&zoom=18&layers=M&mlat=41.66346&mlon=-0.90660), tuvimos el gran honor de hablar de [migasfree](http://migasfree.org/) en la [primera jornada oficial de Software y Barra Libre](https://web.archive.org/web/20161024060124/http://softwareybarralibre.org/?q=node/52).

<!-- more -->

[Alberto Gacías](http://twitter.com/albertogacias), creador de este [gestor de repositorios](http://en.wikipedia.org/wiki/Systems_management) que usamos a diario para mantener nuestro parque de ordenadores con Linux, introdujo a los asistentes en la filosofía del proyecto. Aunque [migasfree](http://www.youtube.com/v/yEEzNrsIJ3M) es una herramienta de gestión sencilla, explicar los conceptos que llevan a la consecución del proyecto no es tarea tan simple.

Contó también cómo nació la idea de [migasfree](http://www.youtube.com/v/ZKvO-xRebxQ) dentro del [proyecto de migración a software libre del Ayuntamiento de Zaragoza](2011-02-21-liberamos-migracion-escritorio).

::: center
![Momento de la charla de Alberto en el DWP](/img/alberto_software_barra_libre.jpg 'Momento de la charla de Alberto en el DWP')
:::

Otras ideas clave de la charla de Alberto, fueron:

- Configurar un equipo requiere mucho más tiempo que instalar los programas.
- Aparte de la configuración a nivel de usuario y de máquina, hace falta otro nivel más: el de la organización.
- En el Ayuntamiento, este nuevo nivel de configuración es el que se empaqueta (en nuestro caso, en formato [RPM](http://es.wikipedia.org/wiki/RPM_Package_Manager)).
- Las actualizaciones masivas en horas clave pueden llegar a colapsar la conexión a Internet de una organización. Es necesario una distribución escalonada.
- migasfree surge de la necesidad de solucionar estos problemas organizativos:
  - Repositorios dinámicos para una distribución de software gradual.
  - Es una herramienta simple: sólo hay que empaquetar (ahí radica la complejidad y el verdadero esfuerzo).
  - Es adaptable y escalable: es programable para adecuarse a las necesidades de cada organización.
  - Gestión inicial de datos de equipos cero: se alimenta de la información que van proporcionándole los clientes.

[migasfree](https://github.com/migasfree) es un proyecto de software libre. Como tal, cualquiera puede colaborar en él o adaptarlo a sus necesidades. Actualmente, los desarrolladores principales son Alberto Gacías (parte del servidor) y [Jose Antonio Chavarría](http://twitter.com/jact_abcweb) (parte del cliente). Para finales del verano está previsto liberar una actualización que incluirá como nueva prestación una capa de seguridad en las comunicaciones entre el servidor y el cliente basada en [criptografía asimétrica](http://es.wikipedia.org/wiki/Criptograf%C3%ADa_asim%C3%A9trica).

## Actualización 2011-06-20

[Presentación de Alberto sobre migasfree](/files/migasfree-SYBL.pdf).

::: center
<PDF url="/files/migasfree-SYBL.pdf" />
:::
