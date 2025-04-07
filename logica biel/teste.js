// Importando o módulo 'readline' para entrada de dados
const readline = require('readline');

// Criando uma interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal do jogo
function playGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
    let attempts = 0;

    console.log("Bem-vindo ao jogo 'Adivinhe o Número'!");
    console.log("Tente adivinhar o número entre 1 e 100.");

    // Função para fazer perguntas ao jogador
    function askGuess() {
        rl.question('Qual é o seu palpite? ', (answer) => {
            const guess = parseInt(answer);
            attempts++;

            if (isNaN(guess)) {
                console.log("Por favor, insira um número válido.");
                askGuess();
            } else if (guess < randomNumber) {
                console.log("Muito baixo! Tente novamente.");
                askGuess();
            } else if (guess > randomNumber) {
                console.log("Muito alto! Tente novamente.");
                askGuess();
            } else {
                console.log(`Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas.`);
                rl.close(); // Fecha a interface
            }
        });
    }

    askGuess(); // Inicia o jogo
}

// Inicia o jogo
playGame();