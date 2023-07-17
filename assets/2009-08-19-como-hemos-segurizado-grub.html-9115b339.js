import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as t,a as e,b as a,d as n,e as d,f as l}from"./app-d6e09745.js";const c="/azlinux.github.io/img/grub.jpg",m={},p={href:"http://es.wikipedia.org/wiki/GNU_GRUB",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[a("Es relativamente sencillo utilizarlo para entrar al sistema con permisos de root (acción que no permitimos a nuestros usuarios). Basta con editar la entrada y añadir "),e("code",null,"init=/bin/bash"),a(".")],-1),h=e("p",null,"GRUB permite ser protegido mediante contraseña.",-1),g=e("h2",{id:"metodo-grafico",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#metodo-grafico","aria-hidden":"true"},"#"),a(" Método gráfico")],-1),_={href:"http://es.wikipedia.org/wiki/YaST",target:"_blank",rel:"noopener noreferrer"},b=l('<div style="text-align:center;"><p><img src="'+c+`" alt="Configuración de GRUB en YAST" title="Configuración de GRUB en YAST"></p></div><h2 id="metodo-comando" tabindex="-1"><a class="header-anchor" href="#metodo-comando" aria-hidden="true">#</a> Método comando</h2><ul><li>Como root, ejecutar comando <code>grub</code>.</li><li>Generar una clave válida:<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>grub<span class="token operator">&gt;</span> md5crypt
Password: **<span class="token punctuation">\\</span>*<span class="token punctuation">\\</span>***
Encrypted: <span class="token variable">$1</span><span class="token variable">$0FSiA</span>/<span class="token variable">$3ln7OVHdmQjub0jampPhl</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Añadir al fichero <code>/boot/grub/menu.lst</code>:<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>password --md5 $1$0FSiA/$3ln7OVHdmQjub0jampPhl.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>A partir de este momento, GRUB solo puede ser editado conociendo la clave.</p><p>Como siempre esperamos vuestras aportaciones y comentarios.</p>`,5);function v(f,k){const o=i("ExternalLinkIcon");return r(),t("div",null,[e("p",null,[e("a",p,[a("GRUB"),n(o)]),a(" es el gestor de arranque que utilizamos en AZLinux.")]),d(" more "),u,h,g,e("p",null,[a("Usando "),e("a",_,[a("YAST"),n(o)]),a(" (herramienta de administración del sistema de SUSE).")]),b])}const S=s(m,[["render",v],["__file","2009-08-19-como-hemos-segurizado-grub.html.vue"]]);export{S as default};
