import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as r,e as t,a as e,b as i,f as n}from"./app-c1d9dcbd.js";const s="/img/sesiones.png",c={},d=e("p",null,[i("Cómo añadir o quitar aplicaciones para que arranquen en el inicio del escritorio (equivalente al "),e("strong",null,"Programas > Inicio"),i(" de Windows).")],-1),l=n('<h2 id="procedimiento" tabindex="-1"><a class="header-anchor" href="#procedimiento" aria-hidden="true">#</a> Procedimiento</h2><ul><li>Acceder al Centro de Control del Usuario.</li><li>Acceder a Sesiones: Programas al Inicio.</li><li>Añadir, quitar aplicaciones.</li><li>También pueden desactivarse por si es necesario activarlas mas tarde.</li></ul><div style="text-align:center;"><p><img src="'+s+'" alt="Configuración del inicio de sesión" title="Configuración del inicio de sesión"></p></div><p>En nuestro caso, para evitar este tedioso procedimiento, utilizamos un paquete <strong>rpm</strong> que añade el lanzador (<code>fichero.desktop</code>) correspondiente en <code>/etc/xdg/autostart</code>.</p>',4);function m(u,p){return o(),r("div",null,[d,t(" more "),l])}const f=a(c,[["render",m],["__file","2009-09-21-anadir-quitar-programas-inicio.html.vue"]]);export{f as default};