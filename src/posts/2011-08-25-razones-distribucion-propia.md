---
title: Razones para hacer una distribución propia
date: 2011-08-25 12:14:00
author: '@jact_abcweb'
comment: false
star: 5
category:
  - Software
tag:
  - AZLinux
  - Retos
---

Cuando hace unos años nos planteamos la idea de adoptar software libre en el Ayuntamiento, sabíamos que no iba a ser una tarea fácil ni a corto plazo. Hicimos un planteamiento de migración progresiva, [en varias fases](2010-05-19-ponencia-gnome-marketing-hackfest), para ir familiarizándonos con las herramientas y, sobre todo, para evitar cambios abruptos en la experiencia de los usuarios y en el día a día de la institución. Esta ha sido (y es) la clave más importante en [nuestro proyecto de migración](2011-04-07-ii-jornadas-tecnologias-libres) y el reto, tecnológicamente hablando, era imponente.

<!-- more -->

Nuestro ecosistema, como cualquier otro, tiene sus particularidades. Además, es un ecosistema muy variado y bastante considerable en tamaño y recursos. Cuando llegó la fase de realizar un escritorio completo en software libre, debíamos enfrentarnos a los siguientes retos.

::: center
![Retos de AZLinux](/img/azlinux_retos.png 'Retos de AZLinux')
:::

Teníamos que dar con la fórmula adecuada para hacer encajar todas esas piezas. La que más nos ha condicionado ha sido la **integración con nuestro entorno de servidores Novell**. Hace ya muchos años que están presentes en nuestro día a día. Poco a poco se han ido migrando servicios a plataformas libres, pero el núcleo duro (autenticación, correo, almacenamiento compartido), sigue perteneciendo a Novell. Esta empresa tiene una [línea de negocio muy importante relacionada con Linux](https://www.suse.com/products/desktop/), por lo que nuestra elección de la distribución base para el escritorio fue sencilla. En un primer momento apostamos por <acronym title="SuSE Linux Enterprise Desktop">SLED</acronym> por el soporte que nos daba Novell en lo que eran nuestros primeros escarceos con sistemas operativos libres. Después, hemos ido cambiando a la versión de comunidad, [openSUSE](http://www.opensuse.org/), ya que tenía versiones más recientes de los programas que íbamos necesitando.

Un aspecto esencial que me gustaría recalcar en esta parte de la historia es la filosofía general que hay en la corrección de errores en programas de software libre: no suele haber parches para versiones en producción, sino lo que se hace (generalmente, digo), es sacar una nueva versión de dicho programa. Si este comportamiento lo extrapolamos a un sistema operativo, el resultado de actualizar un determinado programa que soluciona un error importante, puede dar como resultado que tengas que actualizar gran parte (o toda) la distribución. La estrategia de SLED ha sido tener unos ciclos de desarrollo y mantenimiento excesivamente largos, por lo que no siempre se adaptaba a nuestras cambiantes necesidades.

La siguiente pieza del puzzle son los **certificados digitales**. Si fueran software, el anclaje de dicha pieza no sería particularmente complicado. La cuestión es que esos certificados, en nuestro caso, van en tarjetas criptográficas, y además, de 2 tipos diferentes. Del tipo Ceres son nuestras tarjetas de identificación como empleados municipales, y luego está el DNI electrónico, que es necesario para algunos trámites que realiza el ciudadano con el Ayuntamiento. Este tema [siempre nos ha condicionado algunos aspectos importantes de la distribución base](2011-06-02-conclusiones-opendnie-hackfest), ya que programas como [OpenSSH](http://es.wikipedia.org/wiki/OpenSSH) tienen una relevancia esencial en el funcionamiento del sistema operativo.

La **ofimática**, en un entorno de gestión administrativa como el nuestro, es la columna vertebral de su funcionamiento diario. Por un lado, es prioritario acceder a toda la información generada con anterioridad en formatos propietarios y, por otro, es necesario trabajar con formatos abiertos, tal y como recomienda el [Real Decreto 4/2010](http://www.boe.es/boe/dias/2010/01/29/pdfs/BOE-A-2010-1331.pdf) a las administraciones públicas. Pese a la importancia de estos requisitos, seguramente ha sido la característica más fácil de ejecutar gracias a la existencia de [OpenOffice.org](http://www.openoffice.org/). Ha habido escollos que salvar y problemillas con los que convivir, pero es ya una herramienta suficientemente madura para acometer estas necesidades.

Afortunadamente para nosotros, en los últimos años, la evolución de las distribuciones Linux para escritorio, ha sido vertiginosa, y cada vez hay más alternativas para programas y funcionalidades que antes sólo funcionaban en entornos propietarios. Sin embargo, hay todavía algunos nichos que no han sido cubiertos y hay aplicaciones hechas a medida, cuyos requerimientos hacen (_a priori_) imposible ejecutarlas en plataformas libres. En este sentido, sigue siendo esencial para nosotros dar soporte a este tipo de aplicaciones. Ahí entra el apartado de **emulaciones**. Hemos conseguido que [algunas de ellas funcionen de forma integrada en el escritorio gracias a Wine](2009-09-24-como-usamos-wine), pero para el resto, hemos necesitado de máquinas virtuales para continuar con nuestro proyecto de migración. Pese a que estas máquinas virtuales ejecutan sistemas propietarios, no hemos tenido que hacer una inversión extra en licencias, ya que hemos utilizado las que poseíamos.

Estos eran, y son, los retos a los que nos enfrentamos. El resultado de todo este proceso ha dado a luz a nuestra distribución <acronym title="Ayuntamiento de Zaragoza Linux">AZLinux</acronym>. Una distribución específica para nuestro entorno de trabajo y que por eso no tiene sentido difundir (como distribución palpable) más allá de los entornos administrativos. Pero que sí que hay que difundir como conocimiento adquirido que se puede extrapolar a otros entornos específicos, ya sean otras administraciones públicas o incluso empresas de tamaño medio o grande. Las [lecciones que hemos aprendido durante nuestro viaje](2011-02-21-liberamos-migracion-escritorio) bien pueden ayudar a que otros lo inicien.

Por si esto no fuera ya suficiente, aún queda otro reto, todavía mayor si cabe, al que nos enfrentamos cada día que pasa: la **evolución de nuestra distribución**. Los sistemas cambian, los programas cambian, las necesidades evolucionan y, una vez superados los retos iniciales, hay que seguir dándoles respuesta. Por ello, seguimos en la brecha y estamos iniciando el proceso de **AZLinux 3**. En posteriores artículos iremos desgranando su desarrollo.
