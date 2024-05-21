<script>
    export let tags;
      export let selectedtag;
      // $:console.log(languages)
  </script>
  
  <!-- svelte-ignore a11y-no-onchange -->
  <section class="menu-cont">
      <select class="menu" 
                      name="menu" 
                      id="menu" 
                      bind:value={selectedtag}>
          <option disabled selected value="">Seleziona luogo.</option>
          <option value="all">tutti</option>
          {#each tags as tag}
              <option value={tag}>{tag}</option>
          {/each}
      </select>
  </section>
  
  
  <style>

    @media(min-width:480px){
        .menu-cont {
          width: 30%;
          margin: auto;
          
          
      }
      
      select {
          margin: 0;
          font-size: 1.18rem;
          border: 1px solid gray;
          border-radius: 5px;
          padding: 8px;
          text-align: center;
      }
      
      .menu {
          width: 100%
      }
    }

    @media(max-width:480px){
        .menu-cont {
          width: 60%;
          margin: auto;
          
          
      }
      
      select {
          margin: 0;
          font-size: 1.18rem;
          border: 1px solid gray;
          border-radius: 5px;
          padding: 8px;
          text-align: center;
      }
      
      .menu {
          width: 100%
      }
    }

  </style>