---
title: Cómo reconfiguramos el vídeo
date: 2009-09-08 07:16:00
author: eromero
comment: false
category:
  - Desktop
---

En muchas ocasiones la configuración de la tarjeta de vídeo en linux no responde, dando errores como:

<!-- more -->

- no se ve la pantalla
- mensaje del monitor: frecuencia no aceptada
- error: x86.org, x11 server, ...
- failed to start X server

Se suelen producir cuando:

- Cambiamos la tarjeta de vídeo.
- Cambiamos el monitor (aunque sea el mismo modelo).
- Se va la configuración de la BIOS (pila, ...).
- El usuario cambia la resolución.

## Solución

Reconfigurar la configuración de vídeo a través de la herramienta **SaX2**.

::: center
![Herramienta SaX2](/img/sax2.png 'Herramienta SaX2')
:::

## Procedimiento

- Acceder a un terminal: `Ctrl+Alt+F1`
- Identificarse como **root**.
- Pasar el sistema a entorno sólo texto: `init 3`
- Si no devuelve el _prompt_ del sistema, pulsar `Ctrl + C`
- Iniciar la herramienta SaX2: `sax2`
- Seleccionar **Change Configuration**.
- Elegir monitor y resolución más adecuados.
- **Siempre**: realizar test para comprobar que se ve correctamente el entorno gráfico.
- Guardar cambios.
