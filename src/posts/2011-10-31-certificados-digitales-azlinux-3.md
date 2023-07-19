---
title: Certificados digitales en AZLinux 3
date: 2011-10-31 16:04:00
author: '@jact_abcweb'
comment: false
category:
  - Desktop
tag:
  - OpenSC
  - Ceres
  - DNIe
  - AZLinux
---

En este artículo hablaremos de cómo hemos hecho funcionar los certificados digitales Ceres y DNIe en AZLinux 3.

<!-- more -->

La distribución base de esta nueva versión de [nuestra distribución](2011-08-25-razones-distribucion-propia) es **openSUSE 11.4**. La versión mínima de [OpenSC](http://www.opensc-project.org/opensc) para esta versión de openSUSE es la `0.12.0`, la cual es incompatible con los paquetes `opensc-ceres` y `opensc-dnie` existentes, ya que no permite la carga dinámica de módulos criptográficos.

## Primer intento

La primera tentativa consistió en instalar los paquetes que ya teníamos funcionando en nuestra distribución anterior (AZLinux 2, con openSUSE 11.2 como sistema base): `opensc-0.11.7`, `opensc-ceres-2.1.1` y `opensc-dnie-1.4.6`.

Conseguimos instalar el _pack_ sin problemas, pero, al ejecutar los comandos de OpenSC, observamos que no era posible acceder a los certificados de las tarjetas.

## Segundo intento

[Hacer funcionar el DNIe en openSUSE 11.4](2011-02-16-opendnie-en-azlinux), gracias al [proyecto OpenDNIe](https://web.archive.org/web/20160422025535/http://opendnie.cenatic.es/), no tiene ya mayor dificultad, pero para nosotros, en nuestro quehacer diario, sigue siendo prioritario trabajar con los certificados **Ceres**, aunque eso signifique perder la funcionalidad del DNIe. Por esa razón, la siguientes pruebas fueron encaminadas a hacer funcionar ese módulo criptográfico, a cualquier precio. Esto fue lo que hicimos.

Lo primero fue hacer un _downgrade_ de OpenSC en la distribución base (openSUSE 11.4), para permitir la carga de módulos. Conseguimos hacer funcionar la versión `0.11.13` perteneciente a openSUSE 11.3, pero instalando las dependencias de openSUSE 11.4 (todas las que se podían).

Después, tuvimos que compilar el fuente de `opensc-ceres`, modificando la constante `MODULE_VERSION` referente a la versión de OpenSC, en el fichero `src/libcard/base_card.h`.

El "invento" es totalmente funcional y se consigue operar tanto con los comandos de OpenSC como con el módulo a través del navegador web Firefox.

## A la tercera, va a la vencida

Ya teníamos soporte para Ceres y teníamos resuelta la papeleta de los certificados digitales en nuestra versión en desarrollo. Sin embargo, nos resistíamos a dejar fuera de juego al DNIe, pues cada vez se pueden hacer más gestiones con él y, pensando en el futuro cercano, nos podía venir bien para actualizar el sistema operativo en nuestros equipos de atención al público (a los que llamamos **Zaragoza Accesible**).

Para aprovechar el trabajo ya hecho, podríamos haber compilado el fuente del paquete `opensc-dnie` y utilizar el mismo truco de la constante de la versión de OpenSC. Pero hicimos otra cosa: empezamos de cero con otra perspectiva. Partimos de un **OpenDNIe** funcional para nuestra plataforma y volvimos a compilar `opensc-ceres`.

Optamos por esta opción por 2 razones: porque existía una versión de OpenSC que nos permitía la carga de módulos adicionales y porque así podíamos tener las ventajas de un código de OpenDNIe más actualizado. En el proyecto OpenDNIe, existe una primera [versión de OpenSC que tiene ya integrado OpenDNIe](https://web.archive.org/web/20120630152111/https://forja.cenatic.es/frs/download.php/1084/opensc-dnie-0.11.13-3.tar.gz). Esta versión corresponde a los inicios del proyecto y nos permitía probar nuestra teoría.

Compilamos el paquete y las pruebas de funcionamiento fueron positivas con la [página de verificación de la DGP](https://web.archive.org/web/20120401230339/http://www.dnielectronico.es//como_utilizar_el_dnie/verificar.html). Después, volvimos a compilar `opensc-ceres` y, modificando el fichero [`/etc/opensc.conf`](/files/opensc.conf), conseguimos soporte para ambos módulos criptográficos.

Como último paso, empaquetamos los ficheros objeto de OpenSC y Ceres, automatizando el proceso de instalación de los certficados raíz y configuración de OpenSC. Un reto menos en nuestro camino hacia **AZLinux 3**.
