<script>
    import HeaderTop from "../../lib/components/headerTop.svelte";
    import Dolormafia from "../../lib/components/home/dolormafia.svelte";

    
</script>



<HeaderTop titolo="Il Dolor di mafia" />

<div class="list_accordion">
    <Dolormafia
    id=1
    link_img="https://it.gariwo.net/i/202104121257_Felicia%20Impastato.jpg"
    titolo="di una madre ... Felicia Impastato"
    para1="Felicia Impastato dinanzi all’immenso dolore causatole dall’omicidio mafioso
    del figlio, ha compiuto una scelta importante, forse in un primo momento
    istintiva e non totalmente consapevole, poi divenuta uno dei suoi principali
    motivi per andare avanti e vivere. Felicia ha deciso, fin da subito, di trasformare
    il proprio dolore in un messaggio politico e collettivo, un messaggio di lotta e di
    emancipazione."
    para2="Il suo obiettivo era quello di riscattare suo figlio, di non rendere
    vana quella terribile morte, di impegnarsi per la verità e la giustizia, e per farlo
    ha dato vita ad un impegno quotidiano. Così facendo ha fatto un dono alla
    collettività. Si è resa protagonista di una battaglia di cambiamento culturale e lo
    ha fatto in tutta la sua interezza, con la sua voce ed il suo corpo."

    para3="Felicia dopo quattro giorni dall’assassinio del figlio esce da casa e si fa
    accompagnare a scuola per andare a votare alle elezioni comunali, scandalizza
    il proprio paese; era una donna vedova di un mafioso in un paese siciliano e
    parliamo di più di 45 anni fa. Voleva dare il suo voto al figlio morto ammazzato
    che si era candidato a quelle elezioni. Con questo atto, oltre ad aver rotto la
    tradizione del lutto, ha dato un grande segnale di democrazia."
    />

 <Dolormafia
    id=2
    link_img="https://www.19luglio1992.com/wp-content/uploads/2020/08/Salvatore.jpg"
    titolo="di un fratello ... Salvatore Borsellino"
    para1="Salvatore Borsellino crea il movimento Agende Rosse."
    para2="Questo movimento si riferisce a l’agenda di Paolo Borsellino sparita durante l’attentato di Via d’amelio. "
    para3="nasce su impulso di Salvatore Borsellino il quale il 15 luglio 2007 scrive la lettera intitolata “19 luglio 1992: una strage di Stato” nella quale afferma che la ragione principale della morte del fratello Paolo è da ricercarsi nell’accordo di non belligeranza stabilito tra pezzi dello Stato e Cosa Nostra in seguito ad una trattativa fondata sul tritolo delle stragi in Sicilia del 1992 ed in continente del 1993."
    
    />

 <Dolormafia 
    id=3
    link_img="https://maredilibri.it/festival//immagini/maria_falcone.jpg"
    titolo="di una sorella ... Maria Falcone"
    para1="Maria Falcone condivide il suo dolore privato per la perdita del fratello Giovanni e ricorda
    come dopo quel maledetto 23 maggio del 1992 la rabbia e l&#39;indignazione delle persone
    abituate a continui delitti si siano trasformate in pretesa di giustizia."
    para2="La sorella di Giovanni
    Falcone, costantemente impegnata in prima fila in un progetto per la cultura della legalità
    soprattutto tra i più giovani, ci ricorda come l&#39;indignazione si sia trasformata in uno
    strumento attivo per affrontare e combattere la mafia."
      para3=""
    />

  <Dolormafia
    id=4
    link_img="https://media.famigliacristiana.it/2020/2/famcristionline_20200219145749931_2714599.jpg"
    titolo="di una moglie ... Rosaria costa"
    para1="Rosaria Costa è la vedova dell&#39;agente Vito Schifani, ucciso dalla mafia nella
        strage di Capaci.
        Era il 23 maggio 1992.
         Schifani era uno dei poliziotti della scorta del giudice Falcone. Rosaria
        all&#39;epoca aveva 22 anni. Antonino Emanuele, il figlio di Vito e Rosaria, era
        nato da quattro mesi; oggi è capitano della Guardia di Finanza."
    para2="&#39;La mafia non deve fermarvi&#39; in copertina ha un&#39;immagine che ha fatto il giro
        del mondo: Rosaria Costa nella chiesa di San Domenico a Palermo, il giorno
        del funerale di Stato per le vittime della strage; in quell&#39;occasione Rosaria
        lanciò il suo grido di dolore: &#39;Io vi perdono, però vi dovete mettere in
        ginocchio&#39;, disse tra le lacrime, chiedendo giustizia e invitando i mafiosi a
        convertirsi e a cambiare vita."
    para3=""
    />

</div>





<style>

    @media(min-width:480px){
        .list_accordion{
            display: flex;
            flex-direction: column;
            row-gap: 4vh;
            
        }
    }


    @media(max-width:480px){
        .list_accordion{
            display: flex;
            flex-direction: column;
            row-gap: 2vh;
            
        }
    }

</style>