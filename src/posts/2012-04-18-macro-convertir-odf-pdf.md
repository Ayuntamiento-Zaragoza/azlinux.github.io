---
title: Macro OpenOffice para convertir de ODF a PDF varios ficheros
date: 2012-04-18 13:27:00
author: 'Raúl Huerta'
comment: false
category:
  - Ofimática
---

Publicamos una macro que permite convertir varios ficheros ODF situados en una carpeta, a PDF.

<!-- more -->

Lanzador:

```
/usr/bin/oowriter -invisible "macro:///biblioteca.(nombre_modulo).(nombre_macro)"
```

Código:

```vbnet
Sub Conversor_PDF
    dim sArchivo as String
    dim sRuta as String
    dim sDirectorio as String
    dim bConvertir as Boolean


    ’Seleccionamos la carpeta que contiene los archivos a exportar
    msgbox("Selecciona la carpeta que contenga los ficheros a convertir")
    sDirectorio = PickFolder

    ’Tomamos el primer archivo de dicho directorio
    sArchivo = Dir(sDirectorio & Barra & "*.od*", vbNormal)
    bConvertir = False
    Do While sArchivo <> ""
        if right(sArchivo,4) = ".odt" or right(sArchivo,4) = ".ods" or right(sArchivo,4) = ".odp" then
            Convertir(sDirectorio,sArchivo)
            bConvertir = True
        end if
        sArchivo = Dir
    Loop

    if bConvertir = False then
        msgbox ("No hay ningún documento de OpenOffice para convertir en esta carpeta")
    else
        msgbox("Los ficheros han sido convertidos y se encuentran en la misma carpeta")
    end if
End Sub


Function PickFolder as String
   dim oFolderPickerDlg as Object
   dim cPickedFolder as String

   oFolderPickerDlg = createUnoService("com.sun.star.ui.dialogs.FolderPicker")
   oFolderPickerDlg.execute()
   cPickedFolder = oFolderPickerDlg.getDirectory()
   PickFolder = ConvertFromURL(cPickedFolder)
End Function

Sub Convertir(sDirectorio as String, sArchivo as String)
    dim sURL as string
    dim oDocumento as Object

    GlobalScope.BasicLibraries.LoadLibrary("Tools")

    oDocumento = StarDesktop.loadComponentFromURL(ConvertToUrl(sDirectorio & Barra & sArchivo), "_blank", 0, Array(MakePropertyValue("Hidden", True), ))
    sURL = GetFileNameWithoutExtension(oDocumento.url) & ".pdf"
    oDocumento.storeToURL(sURL, Array(MakePropertyValue("FilterName", "writer_pdf_Export"), ))
    oDocumento.close(True)
End Sub

Function Barra as String
    Barra = ""
    if environ("OSTYPE") = "linux" then Barra = "/"
End Function

Function MakePropertyValue( Optional cName As String, Optional uValue ) As com.sun.star.beans.PropertyValue
    Dim oPropertyValue As New com.sun.star.beans.PropertyValue

    If Not IsMissing(cName) Then oPropertyValue.Name = cName
    If Not IsMissing(uValue) Then oPropertyValue.Value = uValue
    MakePropertyValue() = oPropertyValue
End Function
```
