// Manera de interceptar un una peticion de estilos y cambiar los colores
// if (event.request.url.includes('style.css')){
//     let respuesta = new Response(`
//         body {
//             background-color: red !important;
//             color: pink;
//         }
//     `,{
//         headers:{
//             'Content-Type': 'text/css'
//         }
//     });
//     event.respondWith(respuesta);
// }