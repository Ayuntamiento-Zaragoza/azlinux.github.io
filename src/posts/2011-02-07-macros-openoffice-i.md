---
title: 'Macros OpenOffice I: Contenido Calc a hipervínculo'
date: 2011-02-07 12:41:00
author: 'Raúl Huerta'
comment: false
category:
  - Ofimática
---

Coge una columna seleccionada y la transforma en vínculos:

<!-- more -->

```vbnet
Option Explicit

rem Macro creada el 3/2/2011 por Raúl Huerta
rem La macro transforma cada celda de un rango seleccionado en un vinculo a la URL contenida en la propia celda

Sub Vinculos
    Dim oCelda As Object
    Dim oLink As Object
    Dim oSel As Object
    Dim fila As Long

    oSel = ThisComponent.CurrentSelection
    If oSel.ImplementationName = "ScCellRangeObj" Then
        oCelda = oSel.getCellByPosition(0, 0)
        Do while oCelda.getString <> ""
            oLink = ThisComponent.createInstance("com.sun.star.text.TextField.URL")
            oLink.URL = oCelda.getString
            oLink.Representation = oCelda.getString
            oCelda.insertTextContent(oCelda.getText.createTextCursor, oLink, True)
            fila = fila + 1
            oCelda = oSel.getCellByPosition(0, fila)
        Loop
    End If
End Sub
```
