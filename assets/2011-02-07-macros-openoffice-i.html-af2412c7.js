import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e,a as o,f as t}from"./app-ed7432bb.js";const l={},p=o("p",null,"Coge una columna seleccionada y la transforma en vínculos:",-1),c=t(`<div class="language-vbnet line-numbers-mode" data-ext="vbnet"><pre class="language-vbnet"><code><span class="token keyword">Option</span> Explicit

<span class="token comment"><span class="token keyword">rem</span> Macro creada el 3/2/2011 por Raúl Huerta</span>
<span class="token comment"><span class="token keyword">rem</span> La macro transforma cada celda de un rango seleccionado en un vinculo a la URL contenida en la propia celda</span>

<span class="token keyword">Sub</span> Vinculos
    <span class="token keyword">Dim</span> oCelda <span class="token keyword">As</span> <span class="token keyword">Object</span>
    <span class="token keyword">Dim</span> oLink <span class="token keyword">As</span> <span class="token keyword">Object</span>
    <span class="token keyword">Dim</span> oSel <span class="token keyword">As</span> <span class="token keyword">Object</span>
    <span class="token keyword">Dim</span> fila <span class="token keyword">As</span> <span class="token keyword">Long</span>

    oSel <span class="token operator">=</span> ThisComponent.CurrentSelection
    <span class="token keyword">If</span> oSel.ImplementationName <span class="token operator">=</span> <span class="token string">&quot;ScCellRangeObj&quot;</span> <span class="token keyword">Then</span>
        oCelda <span class="token operator">=</span> oSel.getCellByPosition<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">Do</span> <span class="token keyword">while</span> oCelda.getString <span class="token operator">&lt;&gt;</span> <span class="token string">&quot;&quot;</span>
            oLink <span class="token operator">=</span> ThisComponent.createInstance<span class="token punctuation">(</span><span class="token string">&quot;com.sun.star.text.TextField.URL&quot;</span><span class="token punctuation">)</span>
            oLink.URL <span class="token operator">=</span> oCelda.getString
            oLink.Representation <span class="token operator">=</span> oCelda.getString
            oCelda.insertTextContent<span class="token punctuation">(</span>oCelda.getText.createTextCursor<span class="token punctuation">,</span> oLink<span class="token punctuation">,</span> <span class="token keyword">True</span><span class="token punctuation">)</span>
            fila <span class="token operator">=</span> fila <span class="token operator">+</span> <span class="token number">1</span>
            oCelda <span class="token operator">=</span> oSel.getCellByPosition<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> fila<span class="token punctuation">)</span>
        <span class="token keyword">Loop</span>
    <span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function i(r,d){return s(),a("div",null,[p,e(" more "),c])}const m=n(l,[["render",i],["__file","2011-02-07-macros-openoffice-i.html.vue"]]);export{m as default};
