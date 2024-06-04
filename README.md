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

SPIEGAZIONE
-Creo tutta la struttura dell'app importando i vari componenti.vue e lo store.js; creo le cartelle Icone ed Img in asset con il materiale da utilizzare per lo sviluppo.

-CardAuto.vue : 
1. creo il container boxato con w-75
2. creo la row con dentro una col-3 che con un ciclo v-for faccio ciclare nell'array CardList(store.js), stampandomi ad ogni giro gli elementi necessari alla card
3. mentre le img le recupero attraverso il metodo getImg()
4. infine una col-2 centrata che funge da bottone.

-InfoCar.vue : 
1. creo il container boxato con w-75
2. creo la row con 2 col-4 centrate 
3. la col di sinistra contiene la prima img roteante, con z-index in modo da stare come background; successivamente la seconda img della macchina(in absolute-p), con due box arrotondati e posti nella posizione corretta con absolut-p.
4. mentre la col di destra contiene del testo e qualche img , affiancate al testo con d-flex .
5. infine una col-6 che funge da bottone.