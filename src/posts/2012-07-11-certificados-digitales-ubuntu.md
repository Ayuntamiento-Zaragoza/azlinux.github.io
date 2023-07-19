---
title: Certificados digitales en Ubuntu 12.04
date: 2012-07-11 11:59:00
author: '@jact_abcweb'
comment: false
category:
  - Seguridad
tag:
  - DNIe
  - Ceres
  - CENATIC
---

Con el cambio de distribución base ([de openSUSE a Ubuntu](2012-05-28-azlinux-3-ha-muerto)), tocaba, de nuevo, salvar el importante escollo de hacer funcionar los certificados digitales en la nueva plataforma. El reto consistía (otra vez) en tener disponibles simultáneamente ambos tipos de certificados: Ceres y DNIe. Todo volvía a depender de encontrar una versión de OpenSC que hiciera esto posible.

<!-- more -->

[OpenDNIe está a punto de integrarse dentro de OpenSC](https://web.archive.org/web/20120731091948/http://www.opensc-project.org/opensc/roadmap), y en la [forja de Cenatic](https://web.archive.org/web/20120611170240/https://forja.cenatic.es/frs/?group_id=160) hay versiones previas a esta inminente integración, que permiten instalarlo sin problemas en varias distribuciones Linux actuales.

Sin embargo, Ceres se ha quedado en el limbo. La comunidad dispone de una versión liberada del proyecto de la FNMT, pero nadie da el paso para integrarla dentro de OpenSC. El resultado es que cada vez es más complicado hacer convivir ambos módulos en las distribuciones modernas de Linux.

## ¿Cómo lo hemos conseguido esta vez?

El escollo más claro lo constituye el hecho de que a partir de `OpenSC-0.12`, ya no es posible cargar módulos de certificados digitales. Había que encontrar una versión que funcionara en _Ubuntu Precise_ y que permitiera la carga de módulos.

De nuevo, hemos recurrido a la forja de Cenatic para partir de una versión de `OpenSC-0.11.13` que integra, además, el DNIe.

La mala noticia es que ha costado compilar dicha versión en _Ubuntu 12.04_. [Cambios en la forma de enlazar librerías en el sistema](http://wiki.debian.org/ToolChain/DSOLinking), nos han mantenido entretenidos durante algunas semanas. Aún así, no hemos sido capaces de compilarla con todos los módulos activos, y hemos tenido que prescindir de la librería `opensc-signer.so`.

El siguiente reto ha consistido en paquetizar el resultado de la compilación. Para ello, hemos partido del [paquete para Ubuntu Natty (el último de la versión 0.11)](http://packages.ubuntu.com/natty/opensc).

Se han tenido que quitar algunos [_patches_](http://es.wikipedia.org/wiki/Parche_%28inform%C3%A1tica%29), modificar algún otro y adecuar la compilación para que no se genere el paquete `mozilla-opensc` (la librería `opensc-signer.so`). Aparte de eso, el paquete es funcional en _Ubuntu 12.04_.

Después, se ha compilado el módulo de Ceres, modificando, naturalmente, la versión referida a OpenSC.

## Conclusiones

El sistema funciona, pero si cada vez que cambiemos de versión de Ubuntu hay que hacer todo esto (mientras se pueda hacer...), vamos a tener un problema importante en la migración a Linux de nuestra administración.

Tras varios años de trabajar con entornos Linux y los certificados digitales españoles, me vuelven a surgir algunos interrogantes a los que todavía no hemos encontrado respuesta: **¿Cuándo tendremos disponible Ceres dentro de OpenSC?** Si se ha conseguido con el DNIe, ¿qué inconvenientes hay para que no se pueda integrar el código de Ceres?

El DNIe es **potencialmente usable** por gran parte de la población española.

Ceres es **usado a diario** por la administración pública española para sus gestiones con certificados digitales.

## Artículos relacionados

- [Certificados digitales en AZLinux 3](2011-10-31-certificados-digitales-azlinux-3).
- [Conclusiones del OpenDNIe hackfest](2011-06-02-conclusiones-opendnie-hackfest).
- [OpenDNIe en AZLinux](2011-02-16-opendnie-en-azlinux).
