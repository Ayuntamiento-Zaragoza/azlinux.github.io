---
title: 'Macros OpenOffice IV: Jugando con mayúsculas y minúsculas'
date: 2011-03-18 10:59:00
author: 'Raúl Huerta'
comment: false
category:
  - Ofimática
---

En **Microsoft Word** existe una función asignada a la combinación `Mayúscula+F3` que realiza la siguiente función. Si sobre un texto seleccionado se pulsa `Mayúscula+F3` secuencialmente:

<!-- more -->

- El texto pasa de minúsculas a mayúsculas.
- El texto pasa de mayúsculas a minúsculas con la primera letra en Mayúscula.
- El texto pasa a minúsculas.

Esta función en OpenOffice no existe. Pero se implementa con una macro. El autor original es **Andrew Brown**.

Para asignarlo a una combinación de teclas tendremos que ir a `HERRAMIENTAS > PERSONALIZAR > TECLADO`, buscar ahí la combinación de teclas y buscar la macro en la biblioteca de macros.

## Programa principal

```vbnet
Sub ToogleCase
    acbCaseChanger
End Sub
```

## Procedimiento acbCaseChanger

```vbnet
Sub acbCaseChanger
    ’ this is a version that does not use charcasemap at all
    ’ to get around the broken export features
    ’ which otherwise make my copy look ridiculous
    ’ see bug #17056 in IZ
    ’ acb, July 22 2003
    ’ updated September 3 2003 with routines to get round the broken
    ’ word iterators which otherwise made it look silly when words start or end
    ’ with punctuation of almost any sort.
    Dim oDocument, oDesktop as Object
    Dim oText, alpha, omega as Object
    Dim oVCursor, mySelection As Object
    Dim snot as string,changeme as string, test1 as string, test2 as string

    ’error handling stolen from Paolo Mantovani
    On Error GoTo ErrH:

    oDocument = thisComponent
    oVCursor = oDocument.currentcontroller.getViewCursor()
    oText=oVCursor.getText() ’ AP’s trick to get text anywhere.
    snot=oVCursor.getString()
    alpha=oVCursor.getStart()
    omega=oVCursor.getEnd()
    If len(snot)>0 Then		’ there is a selection: use that
        mySelection = oText.createTextCursorByRange(alpha)
        mySelection.goToRange(omega,TRUE)
    else		’ the cursor is a point; grab the word it’s in.
        ’ Grabbing the word would be simple, except that that breakiterator is broken
        ’ in OOo 1.1 and I have had to build in workarounds for when there is any
        ’ punctuation immediatealy before or after the word.
        mySelection = oText.createTextCursorByRange(oVCursor.getstart())
        ’ at the next line, it ought to work to do gotoStartOfWord(FALSE)
        ’ but the cursor does not move at all if it is between a word and any punctuation
        ’ so I have first to check if it did move
        mySelection.gotoStartOfWord(TRUE)
        if len(mySelection.getString())=0 then
        ’ we have the pnctuation after word bug
            mySelection.goLeft(1,FALSE) ’ move into the word and then go
            mySelection.gotoStartofWord(FALSE)
        else
        ’ we’re good, and can just go
            mySelection.gotoStartofWord(FALSE)
        end if
        mySelection.gotoEndOfWord(TRUE)
    end if
    ’ here a routine to check for quotes and other punctuation at the start of the word ...
    changeme=mySelection.getString()
    ’	msgbox("Changeme now holds " + changeme +" before the fix")
    if len(changeme)=0 then ’ there was a quote at the start of the word.
        mySelection.goRight(1,TRUE) ’ so move manually because move-by-word broken
        mySelection.gotoEndOfWord(TRUE)
        changeme=mySelection.getString()
    end if
    ’ and end of the complicated workarounds.
    ’ changeme is now the word that the cursor was in
    test1=left(changeme,1)’ first char of word of selection
    test2=right(changeme,1) ’ last char of word or selection

    if asc(test1)>90 then ’ word / selection must be lowercase, so turn to title case
        mySelection.setString(mytitle(changeme))
    else
        ’ the first letter is upper case. Is the last?
        if asc(test2)>90 then’ no, so this is in title case. Make it upper case
            mySelection.setstring(myupper(changeme))
        else ’it was all upper case. flip it over
            mySelection.setstring(mylower(changeme))
        end if
    end if

    ExitPoint:
        Exit Sub

    ErrH:
        MsgBox "Error " & err & ": " & error$ & chr(13) & _
        "In line : " & Erl & chr(13)
        Resume ExitPoint
end Sub
```

## Procedimiento con funciones

```vbnet
Function mylower(astring)
    ’ returns a lowercase string
    dim l as string
    l = lcase(astring)
    mylower = l
end function

Function myupper(astring)
    ’ returns an uppercased string
    dim l as string
    l = ucase(astring)
    myupper = l
end function

Function mytitle(astring)
    dim t as string
    dim allwords, i
    t = ""
    t = t + ucase(left(astring, 1))
    t = t + lcase(mid(astring, 2))
    mytitle = t
end function
```
