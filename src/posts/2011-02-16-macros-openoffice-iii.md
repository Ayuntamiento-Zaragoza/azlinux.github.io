---
title: 'Macros OpenOffice III: Distribuir filas equitativamente'
date: 2011-02-16 10:01:00
author: 'Raúl Huerta'
comment: false
category:
  - Ofimática
---

Módulo de macros de **Writer** (OpenOficce) que soluciona un error de interpretación en la opción **Tabla -> Autoajustar -> Distribuir Filas Equitativamente**.

<!-- more -->

En **Word** funcionaba de la siguiete manera: si seleccionas varias filas de diferente altura y eliges esta opción, no modifica la altura de la tabla y redistribuye el espacio equitativamente entre las filas seleccionadas. Sin embargo, con OpenOffice coge la altura de la fila más alta y lo aplica al resto.

Hay abierta una [issue en OpenOffice](http://qa.openoffice.org/issues/show_bug.cgi?id=58326) de la cual extraemos una macro alternativa que sustituye a la opción **Distribuir Filas Equitativamente** en OO.

```vbnet
Sub Distribute_Rows_Evenly
    dim document   as object

    rem get access to the document
    document   = ThisComponent
    controller = document.getCurrentController

    ’Get the current selection and check that part of a table has been selected
    sel = controller.getSelection()
    if sel.ImplementationName <> "SwXTextTableCursor" then exit sub
    selRng = sel.RangeName

    ’Extract the rows from the selection name (in the form ’C24:G15’)
    pos = 0
    ascZero = Asc("0")
    ascNine = Asc("9")
    do  ’Look for the first number
        pos = pos + 1
        ascVal = Asc(Mid(selRng, pos))
    loop while (ascVal < ascZero or ascVal > ascNine)
    startRowNum = CLng(Mid(selRng, pos)) - 1
    do  ’Look for the second number
        pos = pos + 1
        ascVal = Asc(Mid(selRng, pos))
    loop while (ascVal < ascZero or ascVal > ascNine)
    endRowNum = CLng(Mid(selRng, pos)) - 1

    ’Early-out if only one row selected
    if startRowNum = endRowNum then exit sub

    ’Get the table
    vcurs = controller.getViewCursor()
    table = vcurs.TextTable
    rows = table.getRows()

    ’Add up all the row heights
    totalHeight = 0
    for pos = startRowNum to endRowNum
        totalHeight = totalHeight + rows(pos).Height
    next

    ’Calculate the average row height
    aveHeight = totalHeight / (endRowNum - startRowNum + 1)

    ’Set all the row heights to the average
    for pos = startRowNum to endRowNum
        rows(pos).IsAutoHeight = False
        rows(pos).Height = aveHeight
    next
End Sub
```
