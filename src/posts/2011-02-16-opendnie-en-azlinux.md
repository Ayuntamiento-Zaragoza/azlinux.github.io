---
title: OpenDNIe en AZLinux
date: 2011-02-16 11:59:00
author: '@jact_abcweb'
comment: false
category:
  - Seguridad
tag:
  - DNIe
  - Ceres
  - openSUSE
---

Hace unos días, [se presentó el proyecto OpenDNIe en sociedad](https://rebelion.org/opendnie-un-driver-libre-para-una-ciudadania-libre/). Este proyecto significa un gran avance para las administraciones públicas que quieran usar Linux, ya que inicia el camino de la independencia tecnológica.

Intentaré explicar esto más detenidamente. Actualmente, los 2 módulos criptográficos que se usan en la Administración Pública Española no están integrados en el [proyecto OpenSC](http://opensc-project.org/), sino que son módulos cargables que viven vidas paralelas a este _proyecto madre_. Esto implica que cada vez que OpenSC actualiza algo (aunque sólo sea el número de la versión), los módulos españoles dejan de funcionar. Otro problema añadido es que ambos deben estar compilados contra la misma versión de OpenSC para funcionar en la misma máquina.

La situación se estaba tornando insostenible y estaba impidiendo que las nuevas versiones de las distribuciones Linux tuvieran soporte para estos módulos. Como _solución_, tanto la <acronym title="Dirección General de Policía">DGP</acronym> (DNIe) como la <acronym title="Fábrica Nacional de Moneda y Timbre">FNMT</acronym> (Ceres) liberaron hace unos meses los respectivos proyectos. Pero era necesario que alguien hiciera el trabajo de integración en opensc para que la dependencia de versiones dejara de ser un problema.

Gracias a [jonsito](http://juansgaviota.blogspot.com/) y Cenatic, [la integración del DNIe](https://www.dnielectronico.es/PortalDNIe/) es ya una realidad, pero todavía queda integrar Ceres en OpenSC para conseguir resolver completamente el problema. Si ambos módulos no están dentro de opensc, la gente que ha adoptado Linux como plataforma de trabajo, no puede continuar avanzando y proporcionar servicios a los ciudadanos.

::: center
![Mapa mental módulos criptográficos](/img/opensc.png 'Mapa mental módulos criptográficos')
:::

Este mapa mental representa el pasado, presente y futuro de los módulos criptográficos en nuestro trabajo diario. Hicimos una primera versión de AZLinux (la 1, basada en SLED 10), en la que sólo teníamos soporte para Ceres por el problema de encontrar una versión de opensc que hiciera funcionar ambos módulos. Luego pasamos a openSUSE 11.2 (AZLinux 2) y conseguimos dar con la fórmula correcta gracias a la suerte y al trabajo desinteresado de [RedDwarf](https://download.opensuse.org/repositories/home:/RedDwarf:/). A día de hoy no nos podemos ni plantear evolucionar la versión de openSUSE porque ni el código de la DGP ni el de la FNMT están preparados para funcionar con **opensc-0.12**.

En cuanto hemos sabido que existía opendnie, nos hemos puesto manos a la obra para hacerlo funcionar en nuestra actual plataforma (openSUSE 11.2). A continuación os relato las dependencias necesarias para su compilación y de dónde se han obtenido cada una de ellas.

- gcc gcc-c++ kernel-devel (kernel-pae-devel en nuestro caso)
- pkg-config
- autoconf
- automake
- docbook-xsl-stylesheets
- pcsc-lite, pcsc-lite-devel
- pcsc-ccid
- libreadline6, readline-devel
- libgpg-error-devel
- openssl, libopenssl0_9_8, libopenssl-devel
- pinentry, pinentry-gtk2, pinentry-qt4
- libtool, libltdl7
- openct, openct-devel, pcsc-openct, libopenct1
- libpth20, libpth-devel
- libassuan0, libassuan-devel

Todos los paquetes corresponden al repositorio **openSUSE 11.2 standard**, excepto la siguiente lista, que han sido obtenidos de otro repositorio, porque el paquete `libassuan0` no está en el repositorio _standard_.

- libassuan-devel-2.0.0-4.1.i586.rpm
- libassuan0-2.0.0-4.1.i586.rpm

El DNIe funciona perfectamente con la [página de prueba de la DGP](https://www.dnielectronico.es/portaldnie/PRF1_Cons02.action?pag=REF_320) y con los comandos `opensc-tool`.

En resumen, se ha hecho un estupendo trabajo y en la dirección adecuada, pero la solución no va a ser definitiva hasta que Ceres recorra el mismo camino que se ha realizado con DNIe.
