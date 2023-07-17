import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as s,e as l,a as e,b as o,d as n,f as d}from"./app-c1d9dcbd.js";const c={},u=e("p",null,"La definición de las impresoras en AZLinux (como cualquier otro GNU/Linux), se realiza mediante ficheros PPD.",-1),m=e("p",null,"Cada PPD (archivos de descripción de impresoras PostScript®) define las características de la impresora.",-1),p=e("code",null,"/usr/share/cups/model",-1),v={href:"http://openprinting.org/printer_list.cgi",target:"_blank",rel:"noopener noreferrer"},_=e("em",null,"long edge",-1),P=e("em",null,"duplex unit",-1),h=e("em",null,"fit to page",-1),f=e("em",null,"drivers",-1),g=d(`<p>Después de muchas investigaciones sobre traducción de <em>drivers</em> de impresoras llegamos a la conclusión de que no hay software ni procesos automatizados para traducir ficheros PPD. (Gran decepción)</p><p>Por tanto los traducimos nosotros mismos editando cada PPD siguiendo estas pequeñas reglas:</p><ul><li>Cambiar definición del lenguaje del ppd: <code>*LanguageVersion: Spanish</code></li><li>Buscar las opciones de impresora: entre <code>*OpenUI</code> y <code>*CloseUI</code>.</li><li>Buscar las parejas de términos: Inglés/Español en los nombres de opciones y valores.</li></ul><div class="hint-container info"><p class="hint-container-title">Ejemplo</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*OpenUI *PrintoutMode/Modo de Impresion: PickOne
*FoomaticRIPOption PrintoutMode: enum Composite B
*OrderDependency: 10 AnySetup *PrintoutMode
*DefaultPrintoutMode: Normal
*PrintoutMode Draft/Borrador: &quot;%% FoomaticRIPOptionSetting: PrintoutMode=Draft&quot;
*FoomaticRIPOptionSetting PrintoutMode=Draft: &quot;Quality=300DraftGraysca&amp;&amp;
leK&quot;
*End
*PrintoutMode Normal/Normal: &quot;%% FoomaticRIPOptionSetting: PrintoutMode=Normal&quot;
*FoomaticRIPOptionSetting PrintoutMode=Normal: &quot;Quality=300GrayscaleK&quot;
*PrintoutMode High/Alta Calidad: &quot;%% FoomaticRIPOptionSetting: PrintoutMode=High&quot;
*FoomaticRIPOptionSetting PrintoutMode=High: &quot;Quality=600GrayscaleK&quot;
*CloseUI: *PrintoutMode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Como siempre, esperamos vuestras aportaciones y comentarios.</p><h2 id="enlaces" tabindex="-1"><a class="header-anchor" href="#enlaces" aria-hidden="true">#</a> Enlaces</h2>`,6),b=e("li",null,[e("a",{href:"/files/diccionario.txt"},"Nuestro diccionario particular"),o(".")],-1),q={href:"http://partners.adobe.com/public/developer/en/ps/5003.PPD_Spec_v4.3.pdf",target:"_blank",rel:"noopener noreferrer"};function D(I,x){const i=r("ExternalLinkIcon");return a(),s("div",null,[u,m,l(" more "),e("p",null,[o("Es relativamente fácil encontrar el fichero PPD para tu modelo de impresora ("),p,o(" o en "),e("a",v,[o("openprinting.org"),n(i)]),o("), pero casi todos en perfecto inglés. Por lo tanto o el usuario aprende que es "),_,o(", "),P,o(", "),h,o(" y unos 70 términos más o le traducimos los "),f,o(".")]),g,e("ul",null,[b,e("li",null,[e("a",q,[o("PostScript ® Printer Description File Format Specification Version 4.3 (PPD Spec 4.3)"),n(i)]),o(".")])])])}const y=t(c,[["render",D],["__file","2009-08-19-como-hemos-traducido-drivers-impresoras.html.vue"]]);export{y as default};
