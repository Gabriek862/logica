// Importando o módulo 'readline' para entrada de dados
const readline = require('readline');

// Criando uma interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista de palavras para o jogo
const words = ['javascript', 'nodejs', 'programacao', 'desenvolvimento', 'computador'];
const randomWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let attempts = 6; // Número de tentativas

// Função para exibir o estado atual da palavra
function displayWord() {
    let display = randomWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    console.log(`Palavra: ${display}`);
}

// Função principal do jogo
function playGame() {
    console.log("Bem-vindo ao jogo 'Adivinhe a Palavra'!");
    console.log(`Você tem ${attempts} tentativas para adivinhar a palavra.`);

    const askForLetter = () => {
        displayWord();

        rl.question('Adivinhe uma letra: ', (letter) => {
            letter = letter.toLowerCase();

            if (guessedLetters.includes(letter)) {
                console.log("Você já adivinhou essa letra. Tente outra.");
                askForLetter();
                return;
            }

            guessedLetters.push(letter);

            if (!randomWord.includes(letter)) {
                attempts--;
                console.log(`Letra não encontrada! Você ainda tem ${attempts} tentativas.`);
            }

            if (attempts === 0) {
                console.log(`Você perdeu! A palavra era: ${randomWord}`);
                rl.close();
            } else if (randomWord.split('').every(letter => guessedLetters.includes(letter))) {
                console.log(`Parabéns! Você adivinhou a palavra: ${randomWord}`);
                rl.close();
            } else {
                askForLetter();
            }
        });
    };

    askForLetter(); // Inicia o jogo
}

// Inicia o jogo
playGame();