self.addEventListener('fetch', event =>{
// _________________________________________

// Con esto, consolgueamos y vemos de que manera el evento fetch hace peticiones a las diferentes url
    // console.log(event.request.url.includes('.css'))

    // La funcion includes es nueva de ecma script 7
    // if(event.request.url.includes('.css')){
    //     console.log(event.request.url)

    //     // Tambien podemos hacer los fetch y declararlos en variables asi:
    //     // let fotoReq = fetch('css/style.css')
    //     // console.log(fotoReq)
    //     // let fotoReq = fetch(event.request.url)
    //     let fotoReq = fetch(event.request)
    //     // Si ponemos un null como respuesta, nos va a aparecer un error de peticion fallida
    //     event.respondWith(fotoReq)
    // }

    // __________________________________________

    // Manera de interceptar un una peticion de estilos y cambiar los colores

    if (event.request.url.includes('style.css')){
        let respuesta = new Response(`
            body {
                background-color: red !important;
                color: pink;
            }
        `,{
            headers:{
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(respuesta);
    }
});