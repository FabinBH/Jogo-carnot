let gameInterval;
let score = 0;
let timeRemaining = 60;
let timerInterval;
let currentChallenge = { type: 'efficiency', fixedColdTemp: 0, fixedHotTemp: 1 };

function setNewChallenge() {
    const fixedColdTemp = Math.floor(Math.random() * 200) + 100;
    currentChallenge.fixedColdTemp = fixedColdTemp;

    const fixedHotTemp = Math.floor(Math.random() * 300) + 300;
    currentChallenge.fixedHotTemp = fixedHotTemp;

    document.getElementById('challengeText').style.display = 'flex';
    document.getElementById('fixedTempColdDisplay').innerText = `Calor Frio: ${fixedColdTemp} J`;
    document.getElementById('fixedTempHotDisplay').innerText = `Calor Quente: ${fixedHotTemp} J`;

    document.getElementById('init').style.display = 'none';
    document.getElementById('wInput').style.display = 'flex';
    document.getElementById('tempHot').style.display = 'flex';
    document.getElementById('check').style.display = 'flex';
    document.getElementById('score').style.display = 'flex';
    document.getElementById('score').innerText = 'Pontuação:';

    document.getElementById('timer').style.display = 'flex';

    startTimer();
}

function checkChallenge() {
    const T_h = currentChallenge.fixedHotTemp;
    const T_c = currentChallenge.fixedColdTemp;
    const workInput = document.getElementById('tempHot');
    const workValue = parseInt(workInput.value);

    const work = T_h - T_c;

    scorePontuation(workValue === work);
    clearInterval(timerInterval);

    document.getElementById('reset').style.display = 'flex';
    document.getElementById('check').style.display = 'none';
}

function startTimer() {
    timeRemaining = 60;
    document.getElementById('timer').innerText = `Tempo Restante: ${timeRemaining}s`;
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('timer').innerText = `Tempo Restante: ${timeRemaining}s`;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Tempo esgotado! A bomba explodiu!");
        }
    }, 1000);
}

function resetGame() {
    document.getElementById('check').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('wInput').style.display = 'none';
    document.getElementById('tempHot').style.display = 'none';
    document.getElementById('init').style.display = 'flex';

    document.getElementById('fixedTempHotDisplay').innerText = "Calor Quente: -- J";
    document.getElementById('fixedTempColdDisplay').innerText = "Calor Frio: -- J";

    document.getElementById('challengeText').style.display = 'none';
    document.getElementById('score').style.display = 'none';

    document.getElementById('timer').style.display = 'none';
}

function scorePontuation(comparation) {
    if (comparation) {
        score = Math.round(timeRemaining * 100 / 60);
        document.getElementById('score').innerText = `Pontuação: ${score}`;
        alert('Parabéns! Você acertou a quantidade exata e desarmou a bomba. Missão cumprida!!');
    } else {
        document.getElementById('score').innerText = 'Pontuação: 0';
        alert('Infelizmente você errou');
    }
}
function startGame() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'flex';
}
function startGame() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('instructionsScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'flex';
}

function goToInstructions() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('instructionsScreen').style.display = 'flex';
}

function goBackToWelcome() {
    document.getElementById('instructionsScreen').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'flex';
}
