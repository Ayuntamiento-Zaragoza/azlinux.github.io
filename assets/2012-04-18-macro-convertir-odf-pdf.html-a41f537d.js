import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e,a as o,f as t}from"./app-0a87ccf9.js";const p={},c=o("p",null,"Publicamos una macro que permite convertir varios ficheros ODF situados en una carpeta, a PDF.",-1),i=t(`<p>Lanzador:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/bin/oowriter -invisible &quot;macro:///biblioteca.(nombre_modulo).(nombre_macro)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Código:</p><div class="language-vbnet line-numbers-mode" data-ext="vbnet"><pre class="language-vbnet"><code><span class="token keyword">Sub</span> Conversor_PDF
    <span class="token keyword">dim</span> sArchivo <span class="token keyword">as</span> <span class="token keyword">String</span>
    <span class="token keyword">dim</span> sRuta <span class="token keyword">as</span> <span class="token keyword">String</span>
    <span class="token keyword">dim</span> sDirectorio <span class="token keyword">as</span> <span class="token keyword">String</span>
    <span class="token keyword">dim</span> bConvertir <span class="token keyword">as</span> <span class="token keyword">Boolean</span>


    ’Seleccionamos la carpeta que contiene los archivos a exportar
    msgbox<span class="token punctuation">(</span><span class="token string">&quot;Selecciona la carpeta que contenga los ficheros a convertir&quot;</span><span class="token punctuation">)</span>
    sDirectorio <span class="token operator">=</span> PickFolder

    ’Tomamos el primer archivo de dicho directorio
    sArchivo <span class="token operator">=</span> Dir<span class="token punctuation">(</span>sDirectorio <span class="token operator">&amp;</span> Barra <span class="token operator">&amp;</span> <span class="token string">&quot;*.od*&quot;</span><span class="token punctuation">,</span> vbNormal<span class="token punctuation">)</span>
    bConvertir <span class="token operator">=</span> <span class="token keyword">False</span>
    <span class="token keyword">Do</span> <span class="token keyword">While</span> sArchivo <span class="token operator">&lt;&gt;</span> <span class="token string">&quot;&quot;</span>
        <span class="token keyword">if</span> <span class="token function">right</span><span class="token punctuation">(</span>sArchivo<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;.odt&quot;</span> <span class="token keyword">or</span> <span class="token function">right</span><span class="token punctuation">(</span>sArchivo<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;.ods&quot;</span> <span class="token keyword">or</span> <span class="token function">right</span><span class="token punctuation">(</span>sArchivo<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;.odp&quot;</span> <span class="token keyword">then</span>
            Convertir<span class="token punctuation">(</span>sDirectorio<span class="token punctuation">,</span>sArchivo<span class="token punctuation">)</span>
            bConvertir <span class="token operator">=</span> <span class="token keyword">True</span>
        <span class="token keyword">end</span> <span class="token keyword">if</span>
        sArchivo <span class="token operator">=</span> Dir
    <span class="token keyword">Loop</span>

    <span class="token keyword">if</span> bConvertir <span class="token operator">=</span> <span class="token keyword">False</span> <span class="token keyword">then</span>
        msgbox <span class="token punctuation">(</span><span class="token string">&quot;No hay ningún documento de OpenOffice para convertir en esta carpeta&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span>
        msgbox<span class="token punctuation">(</span><span class="token string">&quot;Los ficheros han sido convertidos y se encuentran en la misma carpeta&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span> <span class="token keyword">if</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>


<span class="token keyword">Function</span> PickFolder <span class="token keyword">as</span> <span class="token keyword">String</span>
   <span class="token keyword">dim</span> oFolderPickerDlg <span class="token keyword">as</span> <span class="token keyword">Object</span>
   <span class="token keyword">dim</span> cPickedFolder <span class="token keyword">as</span> <span class="token keyword">String</span>

   oFolderPickerDlg <span class="token operator">=</span> createUnoService<span class="token punctuation">(</span><span class="token string">&quot;com.sun.star.ui.dialogs.FolderPicker&quot;</span><span class="token punctuation">)</span>
   oFolderPickerDlg.execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
   cPickedFolder <span class="token operator">=</span> oFolderPickerDlg.getDirectory<span class="token punctuation">(</span><span class="token punctuation">)</span>
   PickFolder <span class="token operator">=</span> ConvertFromURL<span class="token punctuation">(</span>cPickedFolder<span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>

<span class="token keyword">Sub</span> Convertir<span class="token punctuation">(</span>sDirectorio <span class="token keyword">as</span> <span class="token keyword">String</span><span class="token punctuation">,</span> sArchivo <span class="token keyword">as</span> <span class="token keyword">String</span><span class="token punctuation">)</span>
    <span class="token keyword">dim</span> sURL <span class="token keyword">as</span> <span class="token keyword">string</span>
    <span class="token keyword">dim</span> oDocumento <span class="token keyword">as</span> <span class="token keyword">Object</span>

    GlobalScope.BasicLibraries.LoadLibrary<span class="token punctuation">(</span><span class="token string">&quot;Tools&quot;</span><span class="token punctuation">)</span>

    oDocumento <span class="token operator">=</span> StarDesktop.loadComponentFromURL<span class="token punctuation">(</span>ConvertToUrl<span class="token punctuation">(</span>sDirectorio <span class="token operator">&amp;</span> Barra <span class="token operator">&amp;</span> sArchivo<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;_blank&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">Array</span><span class="token punctuation">(</span>MakePropertyValue<span class="token punctuation">(</span><span class="token string">&quot;Hidden&quot;</span><span class="token punctuation">,</span> <span class="token keyword">True</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
    sURL <span class="token operator">=</span> GetFileNameWithoutExtension<span class="token punctuation">(</span>oDocumento.url<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">&quot;.pdf&quot;</span>
    oDocumento.storeToURL<span class="token punctuation">(</span>sURL<span class="token punctuation">,</span> <span class="token function">Array</span><span class="token punctuation">(</span>MakePropertyValue<span class="token punctuation">(</span><span class="token string">&quot;FilterName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;writer_pdf_Export&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
    oDocumento.<span class="token keyword">close</span><span class="token punctuation">(</span><span class="token keyword">True</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>

<span class="token keyword">Function</span> Barra <span class="token keyword">as</span> <span class="token keyword">String</span>
    Barra <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">if</span> <span class="token keyword">environ</span><span class="token punctuation">(</span><span class="token string">&quot;OSTYPE&quot;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;linux&quot;</span> <span class="token keyword">then</span> Barra <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>

<span class="token keyword">Function</span> MakePropertyValue<span class="token punctuation">(</span> <span class="token keyword">Optional</span> cName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">Optional</span> uValue <span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">com</span>.sun.star.beans.PropertyValue
    <span class="token keyword">Dim</span> oPropertyValue <span class="token keyword">As</span> <span class="token keyword">New</span> <span class="token keyword">com</span>.sun.star.beans.PropertyValue

    <span class="token keyword">If</span> <span class="token keyword">Not</span> IsMissing<span class="token punctuation">(</span>cName<span class="token punctuation">)</span> <span class="token keyword">Then</span> oPropertyValue.<span class="token keyword">Name</span> <span class="token operator">=</span> cName
    <span class="token keyword">If</span> <span class="token keyword">Not</span> IsMissing<span class="token punctuation">(</span>uValue<span class="token punctuation">)</span> <span class="token keyword">Then</span> oPropertyValue.Value <span class="token operator">=</span> uValue
    MakePropertyValue<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> oPropertyValue
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function l(r,u){return s(),a("div",null,[c,e(" more "),i])}const v=n(p,[["render",l],["__file","2012-04-18-macro-convertir-odf-pdf.html.vue"]]);export{v as default};
