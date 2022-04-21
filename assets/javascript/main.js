// 1 millestone : Creare markup statico:
/**
 * Adesso rimuoviamo il markup statico in eccesso e inseriamo le immagini dinamicamente 
 * servendoci della struttura dati fornita. Stampiamo prima l'immagine grande e 
 * usiamo la direttiva v-for per stampare tutti i thumbnails.
Al termine di questa fase ci ritroveremo con lo stesso slider, 
ma costruito dinamicamente attraverso Vue-js.
 */

const app = new Vue(
    {
        el : "#app",
        data:{
            place: {
                images:[
                    "./assets/img/01.jpg",
                    "./assets/img/02.jpg",
                    "./assets/img/03.jpg",
                    "./assets/img/04.jpg",
                    "./assets/img/05.jpg"
                ]
            }
        },
        methods:{

        }
    }
)