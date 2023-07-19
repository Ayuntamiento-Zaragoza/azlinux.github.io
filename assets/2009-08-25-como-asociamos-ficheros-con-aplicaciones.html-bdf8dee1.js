import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as n,c as s,a as o,b as e,d as a,e as d,f as c}from"./app-0a87ccf9.js";const l={},p={href:"https://specifications.freedesktop.org/basedir-spec/latest/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.freedesktop.org/",target:"_blank",rel:"noopener noreferrer"},h=c('<p>Orden de búsqueda:</p><ol><li><code>$XDG_DATA_HOME</code> (en su defecto: <code>~/.local/share</code>)</li><li><code>$XDG_DATA_DIRS</code> (en su defecto: <code>/usr/local/share; /usr/share</code>)</li></ol><h2 id="mimetype" tabindex="-1"><a class="header-anchor" href="#mimetype" aria-hidden="true">#</a> Mimetype</h2>',3),f={href:"http://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions",target:"_blank",rel:"noopener noreferrer"},_=c('<p>Se clasifican mediante el esquema <em>media/subtipo</em>: <code>text/plain</code> o <code>image/jpg</code>.</p><h2 id="directorios" tabindex="-1"><a class="header-anchor" href="#directorios" aria-hidden="true">#</a> Directorios</h2><ul><li><code>XDG/mime/packages</code>: plantillas</li><li><code>XDG/mime/packages/MEDIA/subtype.xml</code>: definición de cada tipo</li><li><code>XDG/mime/globs</code>: relación extensión Mimetype</li><li><code>XDG/mime/magic</code>: relación patrón Mimetype</li><li><code>XDG/mime/aliases</code>: alias de Mimetype</li><li>Otros</li></ul><h2 id="como-se-determina-el-mimetype" tabindex="-1"><a class="header-anchor" href="#como-se-determina-el-mimetype" aria-hidden="true">#</a> Cómo se determina el Mimetype</h2><p>En este orden:</p><ol><li><code>XDG/mime/globs</code>: relación extensión Mimetype</li><li><code>XDG/mime/magic</code>: relación patrón Mimetype</li></ol><h2 id="asociar-mimetype-con-aplicacion-por-defecto" tabindex="-1"><a class="header-anchor" href="#asociar-mimetype-con-aplicacion-por-defecto" aria-hidden="true">#</a> Asociar MIMETYPE con aplicación por defecto</h2><p><code>XDG/applications/defaults.list</code></p><p>Ejemplo: <code>application/excel=calc.desktop</code></p><div class="hint-container tip"><p class="hint-container-title">Truco</p><p><code>gnomevfs-info</code> muestra el <em>mimetype</em> de un fichero.</p></div>',10);function u(D,b){const i=r("ExternalLinkIcon");return n(),s("div",null,[o("p",null,[e("Entendiendo "),o("a",p,[e("XDG Base Directory Specification"),a(i)]),e(". Forma parte del estándar "),o("a",m,[e("freedesktop.org"),a(i)]),e(". Define uno o más directorios base donde los ficheros deben ser buscados.")]),d(" more "),h,o("p",null,[e("Los ficheros tienen asociado un "),o("a",f,[e("Mimetype"),a(i)]),e(" que indica qué tipo de fichero es.")]),_])}const x=t(l,[["render",u],["__file","2009-08-25-como-asociamos-ficheros-con-aplicaciones.html.vue"]]);export{x as default};