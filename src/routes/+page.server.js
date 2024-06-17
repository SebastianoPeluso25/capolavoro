export let prerender = true;

export function load(params) {

    console.log("ESECUZIONE FUNZIONE LOAD ", Date.now());

    const visited = 'false';

    return{
        visited: visited === 'true'
    };
    
}