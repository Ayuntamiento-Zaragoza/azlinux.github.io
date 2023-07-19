---
title: La frugalidad de AZLinux
date: 2020-07-24 09:27:00
author: '@jact_abcweb'
comment: false
star: 5
category:
  - Desktop
tag:
  - Evolución
---

Han pasado más de 5 años desde la [última entrada en esta bitácora](2015-03-30-pese-a-todo-seguimos-ahi). Cinco años que han dado para mucho. Cinco años en los que hemos dado la vuelta a la tortilla, ya que actualmente, el 70% de los ordenadores del Ayuntamiento de Zaragoza tienen un sistema operativo Linux. Cinco años en los que el [proyecto Vitalinux Edu de la DGA](https://wiki.vitalinux.educa.aragon.es/), heredero del germen que supuso [Vitalinux](https://es.wikipedia.org/wiki/Vitalinux), ha nacido y se ha expandido en casi 80 centros educativos de Aragón.

La palabra [frugalidad](https://es.wikipedia.org/wiki/Frugalidad) parece que está últimamente de moda. Puede tener connotaciones negativas como austeridad o pasividad, pero en nuestro contexto, tiene connotaciones muy positivas, ya que están relacionadas con la **optimización** y la **eficiencia**. A lo largo de este tiempo, se han visto mermados nuestros recursos humanos para afrontar la migración a software libre dentro del Ayuntamiento, pero cada día teníamos que dar soporte a más ordenadores y realizábamos más proyectos en paralelo. Nuestra receta ha sido sencilla: aplicar los procedimientos adecuados y llevar a cabo la [mejora continua](https://es.wikipedia.org/wiki/Proceso_de_mejora_continua) siempre que nos ha sido posible.

Sólo así se entiende como un equipo reducido de personas lleven el desarrollo y la gestión de más de 3000 ordenadores en el Ayuntamiento. Personas que, si por algo destacan, es por intentar aplicar el sentido común en cada una de sus acciones: no reinventar la rueda, apoyarse en hombros de gigantes y hacerlo todo lo más sencillo posible para que sea mantenible en el tiempo. Este planteamiento es el que nos ha conducido a la receta: **paquetería linux + migasfree + integración continua**.

Partimos de la integridad y auditoría que otorgan los paquetes Linux al sistema operativo. Después, desarrollamos [migasfree](http://migasfree.org/) para agilizar y controlar las tareas de mantenimiento de los ordenadores. Finalmente, hemos montado un sistema de integración continua basándonos en [GitLab](https://about.gitlab.com/), cerrando así el flujo de trabajo.

Este método de trabajo es el que también explica cómo hemos respondido a los desafíos que nos ha traído esta pandemia. En un tiempo récord teníamos que satisfacer la demanda del teletrabajo para los empleados municipales. En 3 días ya tuvimos un sistema operativo Linux preparado para trabajar a través de una VPN municipal. Gracias a migasfree, hemos podido evolucionar este proyecto para mejorar la experiencia de usuario y la seguridad de las conexiones. En 3 meses hemos dado servicio a casi 800 nuevas estaciones de teletrabajo, entre ordenadores dedicados y máquinas virtuales.

AZLinux no es una _distro_ generalista. Está pensada para un entorno muy concreto: el Ayuntamiento de Zaragoza. Pero lo que sí podemos transmitir es [nuestro modelo](https://speakerdeck.com/jact/azlinux-vitalinux-y-paqueteria-deb) y las [herramientas que usamos](https://speakerdeck.com/jact/migasfree-experiences-1). Esperamos que nuestras experiencias puedan ser seguidas por otros organismos, ya sean públicos o privados. Hemos demostrado que con **determinación**, **motivación** y **constancia** es posible cambiar las cosas desde dentro y ser cada día más eficientes y eficaces.
