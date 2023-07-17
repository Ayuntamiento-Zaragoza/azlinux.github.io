import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as o,e as i,a as r,f as l}from"./app-c1d9dcbd.js";const n="/img/sax2.png",t={},c=r("p",null,"En muchas ocasiones la configuración de la tarjeta de vídeo en linux no responde, dando errores como:",-1),s=l('<ul><li>no se ve la pantalla</li><li>mensaje del monitor: frecuencia no aceptada</li><li>error: x86.org, x11 server, ...</li><li>failed to start X server</li></ul><p>Se suelen producir cuando:</p><ul><li>Cambiamos la tarjeta de vídeo.</li><li>Cambiamos el monitor (aunque sea el mismo modelo).</li><li>Se va la configuración de la BIOS (pila, ...).</li><li>El usuario cambia la resolución.</li></ul><h2 id="solucion" tabindex="-1"><a class="header-anchor" href="#solucion" aria-hidden="true">#</a> Solución</h2><p>Reconfigurar la configuración de vídeo a través de la herramienta <strong>SaX2</strong>.</p><div style="text-align:center;"><p><img src="'+n+'" alt="Herramienta SaX2" title="Herramienta SaX2"></p></div><h2 id="procedimiento" tabindex="-1"><a class="header-anchor" href="#procedimiento" aria-hidden="true">#</a> Procedimiento</h2><ul><li>Acceder a un terminal: <code>Ctrl+Alt+F1</code></li><li>Identificarse como <strong>root</strong>.</li><li>Pasar el sistema a entorno sólo texto: <code>init 3</code></li><li>Si no devuelve el <em>prompt</em> del sistema, pulsar <code>Ctrl + C</code></li><li>Iniciar la herramienta SaX2: <code>sax2</code></li><li>Seleccionar <strong>Change Configuration</strong>.</li><li>Elegir monitor y resolución más adecuados.</li><li><strong>Siempre</strong>: realizar test para comprobar que se ve correctamente el entorno gráfico.</li><li>Guardar cambios.</li></ul>',8);function d(m,u){return a(),o("div",null,[c,i(" more "),s])}const f=e(t,[["render",d],["__file","2009-09-08-como-reconfiguramos-el-video.html.vue"]]);export{f as default};
