function playSound(id: string): void {
  const sound = document.getElementById(id) as HTMLAudioElement;
  sound.currentTime = 0;
  sound.play().catch(e => console.log("Sound play failed:", e));
}

function animatePowerLevel(power: number): void {
  const powerLevel = document.getElementById('power-level') as HTMLDivElement;
  let currentPower = 0;
  const interval = setInterval(() => {
    if (currentPower >= power) {
      clearInterval(interval);
      return;
    }
    currentPower += 2;
    powerLevel.style.width = `${currentPower}%`;
  }, 20);
}

function showAlien(reaction: 'happy' | 'sad'): void {
  const alien = document.getElementById('alien') as HTMLDivElement;
  const mouth = alien.querySelector('.mouth') as HTMLDivElement;
  
  alien.classList.remove('hidden');
  
  if (reaction === 'happy') {
    mouth.style.height = '15px';
    mouth.style.width = '30px';
    mouth.style.borderRadius = '0 0 15px 15px';
    mouth.style.left = '15px';
    mouth.style.bottom = '10px';
  } else {
    mouth.style.height = '3px';
    mouth.style.width = '30px';
    mouth.style.borderRadius = '0';
    mouth.style.left = '15px';
    mouth.style.bottom = '20px';
  }
  
  setTimeout(() => {
    alien.classList.add('hidden');
  }, 3000);
}

function checkArmstrongNumber(): void {
  const inputNum = parseFloat((document.getElementById('num') as HTMLInputElement).value);
  const gNum = inputNum.toString();
  const output = document.getElementById('result') as HTMLDivElement;
  const resultText = output.querySelector('.result-text') as HTMLElement;
  const scanning = output.querySelector('.scanning') as HTMLDivElement;
  
  // Reset
  resultText.classList.remove('success', 'fail', 'error');
  scanning.classList.remove('hidden');
  resultText.classList.add('hidden');
  playSound('scan-sound');
  
  setTimeout(() => {
    scanning.classList.add('hidden');
    resultText.classList.remove('hidden');
    
    if (isNaN(inputNum)) {
      resultText.textContent = "INVALID COSMIC CODE DETECTED";
      resultText.classList.add('error');
      animatePowerLevel(10);
      showAlien('sad');
      playSound('fail-sound');
      return;
    }
    
    if (gNum.length !== 3) {
      resultText.textContent = "COSMIC CODE MUST BE 3 DIGITS";
      resultText.classList.add('error');
      animatePowerLevel(30);
      showAlien('sad');
      playSound('fail-sound');
      return;
    }
    
    const [d1, d2, d3] = gNum.split('').map(n => parseFloat(n));
    const isArmstNum = d1**3 + d2**3 + d3**3 === inputNum;
    
    if (isArmstNum) {
      resultText.innerHTML = `CODE <span class="blink">${inputNum}</span> IS ARMSTRONG!<br>ACCESS GRANTED`;
      resultText.classList.add('success');
      animatePowerLevel(100);
      showAlien('happy');
      playSound('success-sound');
      
      // Create confetti
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 3000);
      }
    } else {
      resultText.innerHTML = `CODE ${inputNum} IS NOT ARMSTRONG<br>ACCESS DENIED`;
      resultText.classList.add('fail');
      animatePowerLevel(50);
      showAlien('sad');
      playSound('fail-sound');
    }
  }, 2000);
}

// Add confetti style dynamically
const style = document.createElement('style');
style.textContent = `
  .confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background: #f00;
    top: -10px;
    opacity: 1;
    z-index: 9999;
    animation: fall linear forwards;
  }
  
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
  
  .blink {
    animation: blink 0.5s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);

(window as any).cheArm = checkArmstrongNumber;

