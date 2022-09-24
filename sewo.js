self.addEventListener('fetch', event =>{

//    console.log(event.request.url)

//    event.respondWith(fetch(event.request)
    // Quitamos ACTUALIZAR AL VOLVER A CARGAR
    // Como podemos manejar el error? Por ejemplo nosotros podriamos poner un punto catch de la siguiente manera
    // La cuestion es que los errores 404 no se capturan en el catch, por lo tanto tenemos que usar promesas por metodo .then
    // .catch( error =>{
    //     console.log("Error en:" , event.request.url)
    // })
    // Las promesas necesitan que se les retornen algo, porque sino no va a funcionar, por lo tanto tenemos que retornar la respuesta para que nuestra promesa funcione
    // El service worker sigue estando activo, por eso quitamos el "ACTUALIZAR AL VOLVER A CARGAR"
    // Si vamos al response en la consola, podemos ver que tenemos que ok falso y el estatus 404, nosotros podriamos trabajar perfectamente con este estatus, pero lo mejor es trabajar con este ok, vamos al if
    // .then( resp => {
    //     // console.log(resp)
    //     if (resp.ok){
    //         return resp;
    //     }else{
    //         return fetch('media/main.jpg')
    //     }
        // Si, esto supuestamente se iba a arreglar, pero no se hizo, por que hay un service worker que está esperando a ser activado, todo este cambio, todo este código que escribimos, no va a entrar hasta que nosotros no apretemos skipwaiting
        // Si ven que tienen un error, no se hagan problema, de igual manera lo vemos en la solapa red
        // Cambiamos la hoja de estilos a style-2.css y visualizamos en la consola los cambios
        
        // return(resp)
        // Ahora mejoramos el código para que quede más prolijo quedando asi:
    //     const resp = fetch(event.request)
    //         .then( resp => {
    //         // console.log(resp)
    //         if (resp.ok){
    //             return resp;
    //         }else{
    //             return fetch('media/main.jpg')
    //         }
    // })
});