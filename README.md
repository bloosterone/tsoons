# GIT (Holamundo)


## Configuraciones

1. Config Global y no por proyecto, declarando nombre
```
git config --global user.name "Diego Pinto"
git config --global user.email xldiegoo@gmail.com

```
2. Convertir Visual Studio como Predeterminado

```
git config --global core.editor "code --wait"
```
3. Ver config global
```
git config --global -e
```
4. declarar auto cr lf (true windows,  input mac o linux)
```
git config --global core.autocrlf true

```
## Iniciando GIT

1. Inicializar archivo git
```
git init
```
2. Ver Status
```
git status
```
- Ver Status corto
```
git status -s
```
3. Agregar Archivos a Stages
```
git add NombreArchivo
```
4. Agregar Archivos a Commit
```
git commit -m "Descripcion del commit"
```
5. Eliminar Archivo
```
git rm NombreArchivo y agregar a Stage Automaticamente
```
6. Restaurar Archivo Eliminado
```
git restore NombreArchivo
```
7. Cambiar Nombre de Archivo y agregar a Stage Automaticamente
```
git mv NombreArchivo NuevoNombre
```
8. Ignorar Archivos
```
"Se crea archivo .gitignore, y se escriben los archivos que seran ignorados"
```
9. Ver la Diferencia entre Archivos Guardados
```
git diff
```
10. Ver la Diferencia entre Archivos pasados a Stage
```
git diff --staged
```
11. Ver Log Minimalista
```
 git log --oneline
```
12. Crear una rama (Branch)
```
git checkout -b NombreRama
```
13. Intercambiar entre branch
```
git checkout Rama
```
14. Hacer Merge desde master, trayendo otra rama
```
git merge Rama
```
15. Ver contenido de los archivos
```
cat NombreArchivo
```
16. Conectar con github
```
git remote add origin https://github.com/bloosterone/tsoon.git

```
17. Pushear los cambios al servidor
```
git push -u origin master
```