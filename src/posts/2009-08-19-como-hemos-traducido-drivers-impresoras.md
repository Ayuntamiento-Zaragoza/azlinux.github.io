---
title: Cómo hemos traducido drivers de impresoras
date: 2009-08-19 09:19:00
author: eromero
comment: false
category:
  - Impresión
---

La definición de las impresoras en AZLinux (como cualquier otro GNU/Linux), se realiza mediante ficheros PPD.

Cada PPD (archivos de descripción de impresoras PostScript®) define las características de la impresora.

<!-- more -->

Es relativamente fácil encontrar el fichero PPD para tu modelo de impresora (`/usr/share/cups/model` o en [openprinting.org](http://openprinting.org/printer_list.cgi)), pero casi todos en perfecto inglés. Por lo tanto o el usuario aprende que es _long edge_, _duplex unit_, _fit to page_ y unos 70 términos más o le traducimos los _drivers_.

Después de muchas investigaciones sobre traducción de _drivers_ de impresoras llegamos a la conclusión de que no hay software ni procesos automatizados para traducir ficheros PPD. (Gran decepción)

Por tanto los traducimos nosotros mismos editando cada PPD siguiendo estas pequeñas reglas:

- Cambiar definición del lenguaje del ppd: `*LanguageVersion: Spanish`
- Buscar las opciones de impresora: entre `*OpenUI` y `*CloseUI`.
- Buscar las parejas de términos: Inglés/Español en los nombres de opciones y valores.

::: info Ejemplo

```
*OpenUI *PrintoutMode/Modo de Impresion: PickOne
*FoomaticRIPOption PrintoutMode: enum Composite B
*OrderDependency: 10 AnySetup *PrintoutMode
*DefaultPrintoutMode: Normal
*PrintoutMode Draft/Borrador: "%% FoomaticRIPOptionSetting: PrintoutMode=Draft"
*FoomaticRIPOptionSetting PrintoutMode=Draft: "Quality=300DraftGraysca&&
leK"
*End
*PrintoutMode Normal/Normal: "%% FoomaticRIPOptionSetting: PrintoutMode=Normal"
*FoomaticRIPOptionSetting PrintoutMode=Normal: "Quality=300GrayscaleK"
*PrintoutMode High/Alta Calidad: "%% FoomaticRIPOptionSetting: PrintoutMode=High"
*FoomaticRIPOptionSetting PrintoutMode=High: "Quality=600GrayscaleK"
*CloseUI: *PrintoutMode
```

:::

Como siempre, esperamos vuestras aportaciones y comentarios.

## Enlaces

- [Nuestro diccionario particular](/files/diccionario.txt).
- [PostScript ® Printer Description File Format Specification Version 4.3 (PPD Spec 4.3)](http://partners.adobe.com/public/developer/en/ps/5003.PPD_Spec_v4.3.pdf).
