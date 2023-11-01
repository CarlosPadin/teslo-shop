# Next.js TesloShop App
Para correr localmente se necesita la base de datos

```
docker-compose up -d
```

* El -d es de __detached__

* MongoDB URL local:
```
mongodb://localhost:27017/teslodb
```


## Configurar variables de entorno
Renombrar el archivo __.env.template__ a __.env__


## Llenar la base de datos con info de prueba
```
Llamar a : http://localhost:3000/api/seed
```