import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as t,e as l,a,b as e,d as n,f as d}from"./app-0a87ccf9.js";const c={},u=a("p",null,[e("Con el cambio de distribución base ("),a("a",{href:"2012-05-28-azlinux-3-ha-muerto"},"de openSUSE a Ubuntu"),e("), tocaba, de nuevo, salvar el importante escollo de hacer funcionar los certificados digitales en la nueva plataforma. El reto consistía (otra vez) en tener disponibles simultáneamente ambos tipos de certificados: Ceres y DNIe. Todo volvía a depender de encontrar una versión de OpenSC que hiciera esto posible.")],-1),p={href:"https://web.archive.org/web/20120731091948/http://www.opensc-project.org/opensc/roadmap",target:"_blank",rel:"noopener noreferrer"},h={href:"https://web.archive.org/web/20120611170240/https://forja.cenatic.es/frs/?group_id=160",target:"_blank",rel:"noopener noreferrer"},m=a("p",null,"Sin embargo, Ceres se ha quedado en el limbo. La comunidad dispone de una versión liberada del proyecto de la FNMT, pero nadie da el paso para integrarla dentro de OpenSC. El resultado es que cada vez es más complicado hacer convivir ambos módulos en las distribuciones modernas de Linux.",-1),_=a("h2",{id:"¿como-lo-hemos-conseguido-esta-vez",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#¿como-lo-hemos-conseguido-esta-vez","aria-hidden":"true"},"#"),e(" ¿Cómo lo hemos conseguido esta vez?")],-1),g=a("p",null,[e("El escollo más claro lo constituye el hecho de que a partir de "),a("code",null,"OpenSC-0.12"),e(", ya no es posible cargar módulos de certificados digitales. Había que encontrar una versión que funcionara en "),a("em",null,"Ubuntu Precise"),e(" y que permitiera la carga de módulos.")],-1),f=a("p",null,[e("De nuevo, hemos recurrido a la forja de Cenatic para partir de una versión de "),a("code",null,"OpenSC-0.11.13"),e(" que integra, además, el DNIe.")],-1),b=a("em",null,"Ubuntu 12.04",-1),v={href:"http://wiki.debian.org/ToolChain/DSOLinking",target:"_blank",rel:"noopener noreferrer"},C=a("code",null,"opensc-signer.so",-1),q={href:"http://packages.ubuntu.com/natty/opensc",target:"_blank",rel:"noopener noreferrer"},x={href:"http://es.wikipedia.org/wiki/Parche_%28inform%C3%A1tica%29",target:"_blank",rel:"noopener noreferrer"},k=a("em",null,"patches",-1),y=a("code",null,"mozilla-opensc",-1),N=a("code",null,"opensc-signer.so",-1),S=a("em",null,"Ubuntu 12.04",-1),z=d('<p>Después, se ha compilado el módulo de Ceres, modificando, naturalmente, la versión referida a OpenSC.</p><h2 id="conclusiones" tabindex="-1"><a class="header-anchor" href="#conclusiones" aria-hidden="true">#</a> Conclusiones</h2><p>El sistema funciona, pero si cada vez que cambiemos de versión de Ubuntu hay que hacer todo esto (mientras se pueda hacer...), vamos a tener un problema importante en la migración a Linux de nuestra administración.</p><p>Tras varios años de trabajar con entornos Linux y los certificados digitales españoles, me vuelven a surgir algunos interrogantes a los que todavía no hemos encontrado respuesta: <strong>¿Cuándo tendremos disponible Ceres dentro de OpenSC?</strong> Si se ha conseguido con el DNIe, ¿qué inconvenientes hay para que no se pueda integrar el código de Ceres?</p><p>El DNIe es <strong>potencialmente usable</strong> por gran parte de la población española.</p><p>Ceres es <strong>usado a diario</strong> por la administración pública española para sus gestiones con certificados digitales.</p><h2 id="articulos-relacionados" tabindex="-1"><a class="header-anchor" href="#articulos-relacionados" aria-hidden="true">#</a> Artículos relacionados</h2><ul><li><a href="2011-10-31-certificados-digitales-azlinux-3">Certificados digitales en AZLinux 3</a>.</li><li><a href="2011-06-02-conclusiones-opendnie-hackfest">Conclusiones del OpenDNIe hackfest</a>.</li><li><a href="2011-02-16-opendnie-en-azlinux">OpenDNIe en AZLinux</a>.</li></ul>',8);function D(L,O){const o=r("ExternalLinkIcon");return i(),t("div",null,[u,l(" more "),a("p",null,[a("a",p,[e("OpenDNIe está a punto de integrarse dentro de OpenSC"),n(o)]),e(", y en la "),a("a",h,[e("forja de Cenatic"),n(o)]),e(" hay versiones previas a esta inminente integración, que permiten instalarlo sin problemas en varias distribuciones Linux actuales.")]),m,_,g,f,a("p",null,[e("La mala noticia es que ha costado compilar dicha versión en "),b,e(". "),a("a",v,[e("Cambios en la forma de enlazar librerías en el sistema"),n(o)]),e(", nos han mantenido entretenidos durante algunas semanas. Aún así, no hemos sido capaces de compilarla con todos los módulos activos, y hemos tenido que prescindir de la librería "),C,e(".")]),a("p",null,[e("El siguiente reto ha consistido en paquetizar el resultado de la compilación. Para ello, hemos partido del "),a("a",q,[e("paquete para Ubuntu Natty (el último de la versión 0.11)"),n(o)]),e(".")]),a("p",null,[e("Se han tenido que quitar algunos "),a("a",x,[k,n(o)]),e(", modificar algún otro y adecuar la compilación para que no se genere el paquete "),y,e(" (la librería "),N,e("). Aparte de eso, el paquete es funcional en "),S,e(".")]),z])}const I=s(c,[["render",D],["__file","2012-07-11-certificados-digitales-ubuntu.html.vue"]]);export{I as default};
