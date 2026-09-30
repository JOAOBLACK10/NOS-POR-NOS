function entrarNoSite() {

    document
        .getElementById("telaLogin")
        .classList
        .add("escondido");

    document
        .getElementById("site")
        .classList
        .remove("escondido");
}


function sair() {

    document
        .getElementById("site")
        .classList
        .add("escondido");

    document
        .getElementById("telaLogin")
        .classList
        .remove("escondido");
}


function mostrarPagina(pagina) {

    const conteudo =
        document.getElementById("conteudo");


    if (pagina === "jogos") {

        conteudo.innerHTML = `
            <h2>🏀 JOGOS</h2>

            <p>
                Próximo jogo: NOS POR NÓS x Adversário
            </p>

            <p>
                Data: 20/09/2026
            </p>

            <p>
                Horário: 15:00
            </p>
        `;
    }


    if (pagina === "treinos") {

        conteudo.innerHTML = `
            <h2>🏋️ TREINOS</h2>

            <p>
                Segunda-feira e Quarta-feira
            </p>

            <p>
                Horário: 18:00 - 20:00
            </p>

            <p>
                Vila Cruzeiro - Campo do Ordem
            </p>
        `;
    }


    if (pagina === "uniformes") {

        conteudo.innerHTML = `
            <h2>👕 UNIFORMES</h2>

            <p>
                Manto Principal: Preto e Amarelo
            </p>

            <p>
                Manto Reserva: Branco
            </p>
        `;
    }


    if (pagina === "clube") {

        conteudo.innerHTML = `
            <h2>🏆 NÓS POR NÓS</h2>

            <p>
                Projeto social e clube de basquete.
            </p>

            <p>
                Basquete, união, evolução e inclusão social.
            </p>
        `;
    }


    if (pagina === "perfil") {

        conteudo.innerHTML = `
            <h2>👤 PERFIL</h2>

            <p>
                Clube: NOS POR NÓS
            </p>

            <p>
                Vila Cruzeiro - Campo do Ordem
            </p>

            <p>
                contato@nospornos.org
            </p>
        `;
    }
}