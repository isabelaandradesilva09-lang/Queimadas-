// Array de dicas que mudam de forma dinâmica a cada clique
const dicas = [
    "Não queime lixo doméstico! Use sempre o serviço de coleta da sua cidade.",
    "Nunca jogue bitucas de cigarro no chão ou na beira de estradas e rodovias.",
    "Ao acampar, certifique-se de apagar totalmente fogueiras usando água e terra.",
    "Avistou uma queimada ilegal ou fumaça suspeita? Denuncie imediatamente ligando para os Bombeiros no número 193!"
];

function mostrarDica() {
    // Escolhe uma dica aleatória dentro da lista acima
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    const dicaEscolhida = dicas[indiceAleatorio];
    
    // Exibe a dica na tela em uma caixa de alerta limpa
    alert("🚨 DICA DE PREVENÇÃO:\n\n" + dicaEscolhida);
}
