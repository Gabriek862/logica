// Importando o módulo 'readline' para entrada de dados
const readline = require('readline');

// Criando uma interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para obter a escolha do computador
function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Função para determinar o vencedor
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Empate!";
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        return "Você ganhou!";
    } else {
        return "Você perdeu!";
    }
}

// Função principal do jogo
function playGame() {
    console.log("Bem-vindo ao Jokenpô!");
    console.log("Escolha: pedra, papel ou tesoura.");

    rl.question('Qual é a sua escolha? ', (playerChoice) => {
        playerChoice = playerChoice.toLowerCase();

        if (!['pedra', 'papel', 'tesoura'].includes(playerChoice)) {
            console.log("Escolha inválida! Por favor, escolha entre pedra, papel ou tesoura.");
            rl.close();
            return;
        }

        const computerChoice = getComputerChoice();
        console.log(`Computador escolheu: ${computerChoice}`);

        const result = determineWinner(playerChoice, computerChoice);
        console.log(result);

        rl.close(); // Fecha a interface
    });
}

// Inicia o jogo
playGame();