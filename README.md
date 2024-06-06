Il layout è stato suddiviso nel seguente modo: 
Dihep: Header e Footer 
Luca: Main (Carosello e ricerca auto) 
Francesco: Main (Card auto e Info buy/sell) 
Davide: Main(Customer e recente)

Utilizziamo Bootstrap e FontAwesome: FontAwesome: <script src="https://kit.fontawesome.com/ee64cb3605.js" crossorigin="anonymous"></script> Bootstrap CSS: Bootstrap Javascript: <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

Componenti: PageHeader: Navbar (Dihep)

PageMain: Carosello, Search-Car( Luca)
          CardAuto, InfoCar (Francesco)
          Customer e Recent (Davide)

PageFooter: Footer (Dihep)
Utilizziamo uno store.js per immagazzinare i vari dati.

Tutte le immagini le abbiamo messe nella cartella src/assets, creiamo le cartelle Icone e Img


/**************************************************************************/

SPIEGAZIONE
-Creo tutta la struttura dell'app importando i vari componenti.vue e lo store.js; creo le cartelle Icone ed Img in asset con il materiale da utilizzare per lo sviluppo.

-CardAuto.vue : 
1. creo il container boxato con w-75
2. creo la row con dentro una colonna che con un ciclo v-for faccio ciclare nell'array CardList(in store.js), stampandomi ad ogni giro gli elementi necessari alla card

-InfoCar.vue : 
1. creo il container boxato con w-75
2. creo la row con 2 colonn2 centrate 
3. la col di sinistra contiene la prima img roteante, con z-index negativo in modo da stare come background; successivamente la seconda img della macchina(in absolute-p), con due box arrotondati e posti nella posizione corretta con absolut-p con dentro due contatori che partono nel momento in cui l'oggetto e` visibile nella viewport.
4. mentre la col di destra contiene del testo e qualche img affiancate al testo con d-flex .

Sviluppatori: Dihep, Francesco, Luca, Davide

Framework e librerie utilizzate: Vue.js, Vite, Bootstrap, FontAwesome

Struttura dati: -Data: Store.js (contiene tutti i dati necessari per il funzionamento dei componenti (array, oggetti, variabili) visibili a tutti i componenti) -Immagini: contenute tutte in /assets/img o icone

Struttura componenti: -PageHeader .....AutocarNavbar ( Developed by: Dihep)

-PageMain .....Carosello ( Developed by: Luca) .....SearchCar ( Developed by: Luca) .....CardAuto ( Developed by: Francesco) .....InfoCar ( Developed by: Francesco) .....Customer ( Developed by: Davide) .....Recent ( Developed by: Davide)

-PageFooter .....AutocarFooter ( Developed by: Dihep)

Spiegazione funzionalità dei componenti: AutocarNavbar: Carosello:

SearchCar:

CardAuto:

InfoCar:

Customer:

Recent:

AutocarFooter: