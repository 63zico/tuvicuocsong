Set shell = CreateObject("WScript.Shell")
shell.CurrentDirectory = "C:\Users\jinu\Documents\New project 2"
shell.Run """C:\Program Files\nodejs\node.exe"" ""C:\Users\jinu\Documents\New project 2\server.mjs""", 0, False
