# Venta-Real

## Sistema de ventas real C#-Angular

### Sistema de control de Ventas para realizar ventas en base a los clientes. Este es un sistema para simular las ventas dentro de una empresa. Se tiene en cuenta tanto la seguridad de las transacciones, como el acceso a la base de datos usando un usuario del cual se obtiene un token para poder realizar las operaciones dentro del sistema.

### Logearse en el sistema con cualquiera de los usuarios almacenados en la BD (sistema de tokens).
#### Lo primero que debe hacerse es logearse en el sistema. Se puede obtener la autenticación del usuario a través de su correo y su contraseña, la cual se encargará de encriptar el sistema para ver si coincide con la guardada en la base de datos. Una vez obtenida la autenticación a través de un token, se podrán hacer llamadas al sistema a traves de diferentes JSON, usando en la cabecera el Bearer Token. La llamada para obtener el token es POST "https://localhost:7119/api/User/login".

### Obtener lista de clientes. 
#### Esta es la operación más sencilla: simplemente se usa la llamada GET "https://localhost:7119/api/cliente", y retornara una estrucutra en JSON con los clientes del sistema, indicando su id, su nombre, y sus ventas. 

### Editar clientes del sistema (CRUD). 
#### Después del GET para obtener todos los clientes, ahora podemos modificarlos, eliminarlos, o añadir nuevos. Las ventas a las que pertenecen se insertan al crear una nueva venta e indicar el cliente que la va a almacenar. Para la insercción de un nuevo cliente, se usa la siguiente llamada: POST https://localhost:7119/api/cliente, seguido de un JSON indicando el Id, y el Nombre del nuevo cliente. Para modificarlo es la misma estructura, pero se cambia el POST, por el PUT. Para eliminar el usuario, se debe usar DELETE https://localhost:7119/api/cliente/{Id}. Se debe indicar el Id del usuario que se desea eliminar de la base de datos. Además, en todas estas llamadas, se debe indicar el Bearer Token del usuario logeado para poder realizar las operaciones con éxito. 

### Insercción de la venta y todo lo que incluye (los diferentes conceptos)
#### Esta operacion solo depende de una llamada: POST https://localhost:7119/api/Venta, con el Bearer Token incluído. Pero, La estrucutra requiere algo mas que las anteriores. En una estructura JSON se debe indidcar primero el Id del cliente con el que se realizarán las ventas, y a continuación, los conceptos. Cada concepto tendrá indicado el Id del producto que se desea vender, el precio unitario, la cantidad del producto, y el importe. Todo esto, servirá para crear nuevos conceptos los cuales explican la parte de la venta de cierto producto. A este se le añade el cliente que la está realizando y la venta a la que pertenece automáticamente. 


<span style="color:red">Front-End en desarrollo</span>
