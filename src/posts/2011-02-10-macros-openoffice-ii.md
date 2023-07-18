---
title: 'Macros OpenOffice II: Manejo de columnas en Calc'
date: 2011-02-10 08:29:00
author: 'Raúl Huerta'
comment: false
category:
  - Ofimática
---

Maneja columnas: elimina, corta, pega e inserta columnas, inserta cabeceras hasta dar el formato apropiado.

<!-- more -->

El programa realiza lo siguiente:

- Eliminar columnas E y N (originales)
- Insertar columna entre la C y la D
- La columna G la cortamos y la pegamos en la nueva D
- Eliminamos la columna G
- Insertamos dos columnas delante de la A
- Cortamos las columnas M y N y las pegamos en la A y B
- Cortamos las columnas I y J y las pegamos en la M y N
- Eliminamos las columnas I y J.

y

Cabeceras:

- MOD / AUTOLIQ / CLAVE / RECIBO / D/ CUOTA / ORD / NFIJO / NOMBRE / DNI / TIPO / SUBTIPO

## Programa principal

```vbnet
Sub OrdenaColumnasTU
    Dim oSheet

    oSheet = ThisComponent.getSheets().getByIndex(0)
    oSheet.getColumns().removeByIndex(4, 1)     ’ Elimina la columna 4 (E)
    oSheet.getColumns().removeByIndex(12, 1)    ’ Elimina la columna 12 (M, antiga N)
    oSheet.getColumns().insertByIndex(3, 1)     ’ Inserta una columna entre la C y la D
    CopiaColumna(6, 3)                          ’ Copiamos la columna G en la D
    oSheet.getColumns().removeByIndex(6, 1)     ’ Eliminamos la columna G
    oSheet.getColumns().insertByIndex(0, 2)     ’ Insertamos dos columnas delante de la A
    CopiaColumna(12, 0)                         ’ Copiamos la columna M en la A
    CopiaColumna(13, 1)                         ’ Copiamos la columna N en la B
    CopiaColumna(8, 12)                         ’ Copiamos la columna I en la M
    CopiaColumna(9, 13)                         ’ Copiamos la columna J en la N
    oSheet.getColumns().removeByIndex(8, 2)     ’ Elimina la columna 8 y la 9 (I y J)
    InsertaCabecera
    OrdenarPorColumna(4)                        ’ Ordenamos por la columna de Recibo
    AjustaAnchoColumna                          ’ Ajusta el ancho de las columnas
End Sub
```

## Procedimiento CopiaColumna

```vbnet
’ Copia columna origen a columna destino
Sub CopiaColumna (col1 as integer, col2 as integer)
    Dim cont as integer

    cont = 0
    oSheet = ThisComponent.getSheets().getByIndex(0)
    Celda1 = oSheet.getCellByPosition(col1, cont)   ’ Celda1 = (col1, 1)
    Celda2 = oSheet.getCellByPosition(col2, cont)   ’ Celda2 = (col2, 1)
    Do While Celda1.value <> "0"                    ’ Copiamos la columna col1 en la col2
        Celda2.value = Celda1.value
        cont = cont + 1
        Celda1 = oSheet.getCellByPosition(col1, cont)
        Celda2 = oSheet.getCellByPosition(col2, cont)
    Loop
End Sub
```

## Procedimiento InsertaCabecera

```vbnet
Sub InsertaCabecera
    oSheet = ThisComponent.getSheets().getByIndex(0)
    oSheet.getRows().insertByIndex(0, 2)

    Celda = oSheet.getCellByPosition(0, 0)
    Celda.string = "MOD"

    Celda = oSheet.getCellByPosition(1, 0)
    Celda.string = "AUTOLIQ"

    Celda = oSheet.getCellByPosition(2, 0)
    Celda.string = "CLAVE"

    Celda = oSheet.getCellByPosition(3, 0)
    Celda.string = "RECIBO"

    Celda = oSheet.getCellByPosition(4, 0)
    Celda.string = "D"

    Celda = oSheet.getCellByPosition(5, 0)
    Celda.string = "CUOTA"

    Celda = oSheet.getCellByPosition(6, 0)
    Celda.string = "ORD"

    Celda = oSheet.getCellByPosition(7, 0)
    Celda.string = "NFIJO"

    Celda = oSheet.getCellByPosition(8, 0)
    Celda.string = "NOMBRE"

    Celda = oSheet.getCellByPosition(9, 0)
    Celda.string = "DNI"

    Celda = oSheet.getCellByPosition(10, 0)
    Celda.string = "TIPO"

    Celda = oSheet.getCellByPosition(11, 0)
    Celda.string = "SUBTIPO"
End Sub
```

## Procedimiento OrdenarPorColumna

```vbnet
Sub OrdenarPorColumna(columna as byte)
    dim document   as object
    dim dispatcher as object

    rem get access to the document
    document   = ThisComponent.CurrentController.Frame
    dispatcher = createUnoService("com.sun.star.frame.DispatchHelper")

    dim args1(0) as new com.sun.star.beans.PropertyValue
    args1(0).Name = "ToPoint"
    args1(0).Value = "$A$1:$M$100"

    dispatcher.executeDispatch(document, ".uno:GoToCell", "", 0, args1())

    dim args2(6) as new com.sun.star.beans.PropertyValue
    args2(0).Name = "ByRows"
    args2(0).Value = true
    args2(1).Name = "HasHeader"
    args2(1).Value = true
    args2(2).Name = "CaseSensitive"
    args2(2).Value = false
    args2(3).Name = "IncludeAttribs"
    args2(3).Value = true
    args2(4).Name = "UserDefIndex"
    args2(4).Value = 0
    args2(5).Name = "Col1"
    args2(5).Value = columna
    args2(6).Name = "Ascending1"
    args2(6).Value = true

    dispatcher.executeDispatch(document, ".uno:DataSort", "", 0, args2())
End Sub
```

## Procedimiento AjustaAnchoColumna

```vbnet
Sub AjustaAnchoColumna
    dim document   as object
    dim dispatcher as object

    rem get access to the document
    document   = ThisComponent.CurrentController.Frame
    dispatcher = createUnoService("com.sun.star.frame.DispatchHelper")

    dim args1(0) as new com.sun.star.beans.PropertyValue
    args1(0).Name = "ToPoint"
    args1(0).Value = "$A$1:$M$50"

    dispatcher.executeDispatch(document, ".uno:GoToCell", "", 0, args1())

    dim args2(0) as new com.sun.star.beans.PropertyValue
    args2(0).Name = "aExtraWidth"
    args2(0).Value = 200

    dispatcher.executeDispatch(document, ".uno:SetOptimalColumnWidth", "", 0, args2())
End Sub
```
