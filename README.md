# Prueba FrontEnd

Esta prueba se desarrollo en Angular versión 15.0.4.

## Correr el frontend

Una vez clonado el proyecto debe correr el front haciendo uso del siguiente comando en la consola `ng serve` se debe esperar unos cuantos segundos hasta que arranque completamente el front y se puede acceder desde cualquier navegador en la siguiente dirección `localhost:4200`

## JsonServer

Si nuestro servidor ficticio no se encuentra instalado, se instala usando el siguiente comando en la consola `npm install json-server --save-dev`, una vez instalado se añaden los elementos al archivo json que se creo. 

Seguido a ellos en el documento *package.json* en la sección de _*scripts*_ se añade el siguiente comando `"json-server": "json-server --watch db.json"` esto con la finalidad de vincular el archivo *db.json*.

Finalmente, se ejecuta `npm run json-server` para correr nuestro servidor y se puede acceder a el mediante la siguiente url `localhost:3000`, allí se encontraran dos apartados, el apartado `/user` y el apartado `/roles`
