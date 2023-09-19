/*
<!------- © 2023 | Todos os Direitos Reservados | © 2023 -------->
<!------- © 2023 | Todos os Direitos Reservados | © 2023 -------->
<!---------------|     FEITO POR DAVID BEN      | --------------->
<!------- © 2023 | Todos os Direitos Reservados | © 2023 -------->
<!------- © 2023 | Todos os Direitos Reservados | © 2023 -------->
*/

new TypeIt("#animation",  {
    speed: 35,
    startDelay: 900,
                        })
    
    .type(" seu email ", { delay: 100 })
    .move(-15, { delay: 100 })
    .type("f", { delay: 400 })
    .move(null, { to: "START", instant: true, delay: 300 })
    .move(1, { delay: 200 })
    .delete(1)
    .type("Q", { delay: 225 })
    .pause(200)
    .move(2, { instant: true })
    .pause(200)
    .move(5, { instant: true })
    .move(5, { delay: 200 })
    .type(" filmes e séries", { delay: 350 })
    .move(null, { to: "END" })
    .type(" para riar")
    .move(-4, { delay: 150 })
    .type("c")
    .move(null, { to: "END" })
    .type(' sua <span class="place">conta</span>', { delay: 800 })
    .pause(400)
    .delete(".place", { delay: 900, instant: true })
    .type('<em><strong class="font-semibold"><u id="line-red">assinatura</u>.</strong></em>', {
    speed: 300,
    })
    .go();

    /* ÁREA PARA FAZER O ACORDEON ABRIR E FECHAR AO CLIQUE */

    function aoSelecionarInput (event) {
        const inputClicado = event.target
    
        function removeSelecao () {
            inputClicado.checked = false
        }
        inputClicado.addEventListener('click', removeSelecao, { once: true })
    }

/* 
<!------- © 2023 | Todos os Direitos Reservados | © 2023 -------->
<!------- © 2023 | Todos os Direitos Reservados | © 2023 -------->
<!---------------|     FEITO POR DAVID BEN      | --------------->
<!------- © 2023 | Todos os Direitos Reservados | © 2023 -------->
<!------- © 2023 | Todos os Direitos Reservados | © 2023 -------->
*/