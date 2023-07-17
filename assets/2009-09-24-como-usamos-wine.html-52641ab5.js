import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as a}from"./app-c1d9dcbd.js";const s={},r=a("<p><strong>WINE</strong>, según Wikipedia es:</p><blockquote><p>Wine (acrónimo recursivo en inglés para Wine Is Not an Emulator, que significa «Wine no es un emulador») es una reimplementación de la API de Win16 y Win32 para sistemas operativos basados en Unix. Permite la ejecución de programas para MS-DOS, Windows 3.11, 95, 98, ME, NT, 2000, XP, Vista y Windows 7.</p></blockquote><p>Es decir, permite ejecutar algunas aplicaciones Windows dentro de nuestro Linux. En nuestro caso nos permite ejecutar un buen conjunto de aplicaciones Windows que, o no tienen una alternativa, o esta no es viable para nuestro entorno.</p><p>Os pongo algunos ejemplos:</p><ul><li><p><strong>Microsoft Access</strong>: tenemos cientos de aplicaciones <strong>Access</strong> que por falta de tiempo y medios no podemos migrar a un entorno <em>Open Source</em>. <strong>WINE</strong> permite emular muchas de ellas aunque el código deba ser revisado, compilado y compactado de nuevo. Un caso particular, no resuelto todavía, son las aplicaciones <strong>Access</strong> que generan una combinación de correspondencia con documentos <strong>Word</strong>.</p></li><li><p>*<em>OCR</em>: por el momento no hemos encontrado una alternativa eficiente al uso de software OCR por lo que &quot;emulamos&quot; software de OCR de Windows con WINE.</p></li><li><p>Entorno transaccional: el cliente para nuestro entorno transaccional es antiguo y sólo funciona para entornos Windows por lo que el uso de <strong>WINE</strong> ha sido imprescindible.</p></li><li><p>En contraposición, también tenemos que decir que algunas aplicaciones no han podido ser emuladas con <strong>WINE</strong>, como <strong>Presto</strong> o <strong>Nokia PC Suite</strong>. Hasta ahora <strong>WINE</strong> tampoco ha sido útil para emular aplicaciones de <strong>CAD</strong>.</p></li></ul><p>En conclusión podemos decir que <strong>WINE</strong> es una herramienta útil en algunos casos y que nos permite avanzar en la migración a entorno <em>Open Source</em> mientras las alternativas al software propietario estén disponibles y a la altura de estas.</p>",6),t=[r];function i(c,l){return e(),n("div",null,t)}const m=o(s,[["render",i],["__file","2009-09-24-como-usamos-wine.html.vue"]]);export{m as default};
