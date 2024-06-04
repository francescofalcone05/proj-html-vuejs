import { reactive } from 'vue';

const iMieiDati = reactive({
    cardLists: [
        {
            marchio: 'BMW',
            modello: 'BMW M9',
            tipo: 'Cabrio',
            prezzo: '34.000',
            carburante: 'Electric',
            immagine: 'bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg',
            heart: false,
        },
        {
            marchio: 'BMW',
            modello: 'BMW M9',
            tipo: 'Cabrio',
            prezzo: '34.000',
            carburante: 'Diesel',
            immagine: 'bmw88-400x300.jpg',
            heart: false,
        },
        {
            marchio: 'BMW',
            modello: 'BMW M9',
            tipo: 'Cabrio',
            prezzo: '34.000',
            carburante: 'Gasoline',
            immagine: 'bmw442-400x300.jpg',
            heart: false,
        },
        {
            marchio: 'Seat',
            modello: 'Seat Ibiza',
            tipo: 'Hatchback',
            prezzo: '27.000',
            carburante: 'Electric',
            immagine: 'yeni-ibiza-2-400x300.jpg',
            heart: false,
        },
        {
            marchio: 'Seat',
            modello: 'Seat Arona',
            tipo: 'Suv',
            prezzo: '60.000',
            carburante: 'Gasoline',
            immagine: 'makyajli-2022-seat-arona-1-400x300.jpg',
            heart: false,
        },
        {
            marchio: 'Volswagen',
            modello: 'Volswagen Taigo',
            tipo: 'SUV',
            prezzo: '68.000',
            carburante: 'Electric',
            immagine: 'vw-taigo3832-400x300.jpg',
            heart: false,
        },
        {
            marchio: 'Volswagen',
            modello: 'Volswagen T-Cross',
            tipo: 'SUV',
            prezzo: '47.000',
            carburante: 'Diesel',
            immagine: '2019-vw-t-cross-400x300.jpg',
            heart: false,
        },
        {
            marchio: 'Volswagen',
            modello: 'Volswagen Passat',
            tipo: 'Sedan',
            prezzo: '32.000',
            carburante: 'Diesel',
            immagine: 'volkswagen-passat-1280x720-1-400x300.jpg',
            heart: false,
        },
    ],
    customer: {
        title: "What Are Our Customer Saying ?",
        subtitle: "Opinion from our Happy Customers.",
        testimonial: [
            {
                name: "Adam",
                comment:
                    "We are a gallery vehicle dealer. Before we met this site, our sales were sluggish.",
                img: "man1.png",
            },
            {
                name: "Christian",
                comment:
                    "One of the quality websites apply to rent a car. There are hundreds of different tools.",
                img: "testimonial2-1.png",
            },
            {
                name: "Robert",
                comment:
                    "I was trying to sell my car. And I put it here and sold it for more than it was worth.",
                img: "man2.png",
            },
            {
                name: "Elizabeth",
                comment:
                    "A fast and reliable vehicle selling site. Rare quality website with hundreds of model vehicles.",
                img: "testimonial4-1.png",
            },
            {
                name: "Adam",
                comment:
                    "We are a gallery vehicle dealer. Before we met this site, our sales were sluggish.",
                img: "man1.png",
            },
        ],
    },
    recent: {
        title: "Resent Articles",
        subtitle: "Useful information about car.",
        articleCar: [
            {
                release: "06/07/2022 - Autocar",
                title: "Why is BMW loved?",
                article_text:
                    "BMWs have a different line with their designs and almost [...]",
                img: {
                    small: "news-autocar-1-300x180.jpg",
                    medium: "news-autocar-1-373x223.jpg",
                    large: "news-autocar-1-600x359.jpg",
                },
            },
            {
                release: "06/07/2022 - Autocar",
                title: "How solid is Audi?",
                article_text:
                    "According to Euro NCAP data with different test organizations, there [...]",
                img: {
                    small: "news-autocar-2-300x180.jpg",
                    medium: "news-autocar-2-373x223.jpg",
                    large: "news-autocar-2-600x359.jpg",
                },
            },
            {
                release: "06/07/2022 - Autocar",
                title: "What brand is Skoda?",
                article_text:
                    "Skoda is one of the leading automotive manufacturers on the [...]",
                img: {
                    small: "news-autocar-5-300x180.jpg",
                    medium: "news-autocar-5-373x223.jpg",
                    large: "news-autocar-5-600x359.jpg",
                },
            },
            {
                release: "06/07/2022 - Autocar",
                title: "Is the Auris Diesel?",
                article_text:
                    "You will have a quieter vehicle that burns less than [...]",
                img: {
                    small: "news-autocar-6-300x180.jpg",
                    medium: "news-autocar-6-373x223.jpg",
                    large: "news-autocar-6-600x359.jpg",
                },
            },
        ],
    },
    CaroselloTitolo: 'Buy And Sell Your Car At Its Value',
    CaroselloSottotitolo: 'Find the right price and dealer.',
    Carosello: [
        {
            CaroselloTitolo: 'Buy And Sell Your Car At Its Value',
            firstImage: './src/assets/Img/slider-autocar-5.jpg',
        },
        {
            CaroselloTitolo: 'The Easiest Way to Buy And Sell Vehicles',
            firstImage: './src/assets/Img/slider-autocar-6.jpg',
        }
    ],
    number: 0,
    SearchCar: {
        AllCategories: [
            'Cabrio',
            'Coupe',
            'Hatchback',
            'Pick up',
            'Seden',
            'Suv'
        ]
        ,
        Brand: [
            'Audi',
            'BMW',
            'Ford',
            'Hyundai',
            'Opel',
            'Seat',
            'Skoda',
            'Toyota',
            'Volswagen'
        ],
        FuelType: [
            'Diesel',
            'Electric',
            'Gasoline',
            'LPG'
        ],
        Transmission: [
            'Automatic',
            'Manual',
            'Semiautomatic',
            'Touch'
        ],
        Status: [
            '2nd Hand',
            'By Owner',
            'From The Gallery',
            'New'
        ]
    },
    Models: [
        {
            Immagine: './src/assets/Img/cabrio.jpg',
            Titolo: 'Cabrio',
            Sottotitolo: '3 Listings'
        },
        {
            Immagine: './src/assets/Img/coupe.jpg',
            Titolo: 'Coupe',
            Sottotitolo: '0 Listings'
        },
        {
            Immagine: './src/assets/Img/hatchback.jpg',
            Titolo: 'Hathback',
            Sottotitolo: '2 Listings'
        },
        {
            Immagine: './src/assets/Img/Pickup.jpg',
            Titolo: 'Pick up',
            Sottotitolo: '0 Listings'
        },
        {
            Immagine: './src/assets/Img/Sedan.jpg',
            Titolo: 'Sedan',
            Sottotitolo: '3 Listings'
        },
        {
            Immagine: './src/assets/Img/Suv.jpg',
            Titolo: 'Suv',
            Sottotitolo: '4 Listings'
        },
    ],

});

export default iMieiDati