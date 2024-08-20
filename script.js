let gameInterval;
let score = 0;
let timeRemaining = 60;
let currentChallenge = { type: 'efficiency', fixedColdTemp: 0, fixedHotTemp: 1 };

function setNewChallenge() {
    const fixedColdTemp = Math.floor(Math.random() * 200) + 100;
    currentChallenge.fixedColdTemp = fixedColdTemp;

    const fixedHotTemp = Math.floor(Math.random() * 300) + 300;
    currentChallenge.fixedHotTemp = fixedHotTemp;

    const challengeText = document.getElementById('challengeText');
    
    challengeText.innerText = `Com os dados fornecidos, faça os cálculos e descubra o trabalho que está sendo feito.`;

    document.getElementById('fixedTempColdDisplay').innerText = `Calor Frio: ${fixedColdTemp} J`;
    document.getElementById('fixedTempHotDisplay').innerText = `Calor Quente: ${fixedHotTemp} J`;

    document.getElementById('init').style.display = 'none';
    document.getElementById('wInput').style.display = 'flex';
    document.getElementById('tempHot').style.display = 'flex';
    document.getElementById('check').style.display = 'flex';
}

function checkChallenge() {
    const T_h = currentChallenge.fixedHotTemp;
    const T_c = currentChallenge.fixedColdTemp;
    const workInput = document.getElementById('tempHot');
    const workValue = parseInt(workInput.value);

    const efficiency = 1 - (T_c / T_h);
    const work = T_h * efficiency;

    if (workValue == work) {
        alert('Desafio Completo!');
    } else {
        alert('Desafio Não Completo!');
    }

    document.getElementById('check').style.display = 'none';
    document.getElementById('wInput').style.display = 'none';
    document.getElementById('tempHot').style.display = 'none';
    document.getElementById('init').style.display = 'flex';

    document.getElementById('fixedTempHotDisplay').innerText = "Calor Quente: -- J";
    document.getElementById('fixedTempColdDisplay').innerText = "Calor Frio: -- J";
}
