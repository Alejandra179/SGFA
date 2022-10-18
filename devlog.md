OBJETIVOS:
* Desarrollar un sistema de Gestión de lista de mercaderias que reciben los comedores comunitarios
que administra la Fundación Afectos en la ciudad de Formosa.

REQUIMIENTOS:
- Diseñar un sistema de gestion para la Fundacion Afectos
- Debe tener una pagina de logeo, con dos perfiles: admin y normal
- Debe tener una página para visualizar en forma de tabla los siguientes datos
de los comedores: N°, Nombre, Dirección, Responsable, boton de editar y eliminar.
- Debe poseer una pagina para visualizar y cargar los registros de mercaderias semanales.
- Se debe considerar que cada semana el administrador realiza la carga de las cantidad y productos de cada dia, que pocas veces cambia
- la pagina de registros debe posee una tabla con: N°, Nombre, Detalles de mercaderias, fecha de carga, fecha y hora de entrega, estado.
En la columna detalles de deberá mostrar un icono que me permita mostrar de manera detallada las mercaderias por dia, en la columna estado se
debera mostrar tres iconos que indicará el estado de la entrega(falta,entregado, con observaciones)
- Seria ideal agregar una pagina para visualizacion en el mapa de las ubicaciones de los comedores
- Las lista deben poder imprimirse
- EL usuario normal representaria a los repartidores, por lo cual el mismo no podra editar las listas de mercaderias.
dentro de los detalles de cada lista se mostraria una checklist de productos totales de cada comedor.
- Debe poseer dos modelos: Usuario y registro
- Rutas:
/login
/postUser
/putUser
/deleteUser
/getComedores
/addComedor
/updateComedor/:id_comedor
/deleteComedor/:id_comedor
/addLista
/getLista/:id_lista
/addLista,
/getListas
/updateLista/:id_lista
/getProductos,
/getProducto/:id_producto,
/addProducto,
/eliminar/:id_producto,



07-09-2022  -- Creacion de modelo 
08-09-2022 -- Controladores de comedor agregados
09-09-2022 -- Controladores de lista agregados
10-09-2022 -- Controladores de productos agregados
11-09-2022 -- Controladores de usuario agregados
12-09-2022 -- Rutas de registro y login agregados
13-09-2022 -- Ruta de comedores agregados
14-09-2022 -- Ruta de listas agregados
15-09-2022 -- Ruta de productos agregados
1