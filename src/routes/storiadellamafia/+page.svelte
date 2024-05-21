<script>

    import HeaderTop from "../../lib/components/headerTop.svelte";
    import LayoutStoriadellamafia from "../../lib/components/home/layoutStoriadellamafia.svelte";




</script>

<svelte:head>
    
</svelte:head>

<HeaderTop titolo="La storia della mafia" />

<div id=1 class="listAccordion">
    <LayoutStoriadellamafia 
        titolo="Cosa è" 
        para1="La Mafia è un’organizzazione criminale con radici in Sicilia, Calabria e Campania, ma si è diffusa anche nel Nord Italia, in Europa e nel mondo. Questi gruppi mafiosi sono caratterizzati da strutture gerarchiche segrete e spietate. " 
        para2="La loro attività si basa sull’estorsione, il traffico di droga, il riciclaggio di denaro e altre attività illecite1. L’impatto della Mafia sulla società è devastante: crea un clima di paura, corruzione e illegalità, influenzando l’economia, l’amministrazione pubblica e la vita quotidiana delle persone. Combattere la Mafia richiede un impegno costante da parte di tutti i cittadini, delle istituzioni e delle forze dell’ordine1."/>
    <LayoutStoriadellamafia
        id=2
        titolo="Le origini"
        para1="La Mafia ha una storia antica e radici lontane.È nata in Sicilia nei primi decenni dell’Ottocento, in una regione in cui c’era tanta povertà, soprattutto nelle campagne, e le istituzioni erano pressoché assenti. " 
        para2="Il termine “mafiusu” era già comparso in un dramma teatrale del 1863 a Palermo, indicando l’esistenza di Cosa Nostra già nel diciannovesimo secolo. 
        Questa organizzazione criminale si è strutturata come un mezzo per il controllo del territorio con metodi illegali, e la sua evoluzione ha seguito quella più generale del paese, con legami controversi e oscuri con il potere e la politica. La Mafia è un fenomeno storico, derivato da precise cause e con precise conseguenze, e solo in tempi relativamente recenti lo Stato italiano e l’opinione pubblica hanno preso piena consapevolezza del suo impatto, adottando strategie di contrasto."
        />
</div>




<style>

    @media(min-width:480px){
        .listAccordion{
            display: flex;
            flex-direction: column;
            row-gap: 10px;
        }
    }


    @media(max-width:480px){
        
    }

</style>