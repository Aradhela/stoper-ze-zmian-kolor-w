const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let countTime;

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;


let timesArr = [];

// zmiana kolorów
const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');
const colorFive = document.querySelector('.five');



let root = document.documentElement;


const handleStart = () => {
    clearInterval(countTime);

    countTime = setInterval(() => {
        if (miliseconds < 9) {
            miliseconds++;

            if(seconds <= 9){

                if(minutes <= 9){
                    stopwatch.textContent = `${hours}:0${minutes}:0${seconds}:0${miliseconds}`
                }

                else if((minutes > 9 && minutes <= 59)){

                    stopwatch.textContent = `${hours}:${minutes}:0${seconds}:0${miliseconds}`

                }

                else{
                    minutes = 0;
                    hours++;
                    stopwatch.textContent = `${hours}:00:0${seconds}:0${miliseconds}`
 
                }
            }
            
            else if((seconds > 9 && seconds <= 59)){

                if(minutes <= 9){
                    stopwatch.textContent = `${hours}:0${minutes}:${seconds}:0${miliseconds}`
                }

                else if((minutes > 9 && minutes <= 59)){

                    stopwatch.textContent = `${hours}:${minutes}:${seconds}:0${miliseconds}`

                }

                else{
                    minutes = 0;
                    hours++;
                    stopwatch.textContent = `${hours}:00:${seconds}:0${miliseconds}`
 
                }



            }

            
            else{
             minutes++;
             seconds = 0;

             if(minutes <= 9){
                stopwatch.textContent = `${hours}:0${minutes}:00:0${miliseconds}`

            }

            else if((minutes > 9 && minutes <= 59)){

                stopwatch.textContent = `${hours}:${minutes}:00:0${miliseconds}`

            }

            else{
                minutes = 0;
                hours++;
                stopwatch.textContent = `${hours}:00:00:0${miliseconds}`

            }



            }


        }
        
        else if (miliseconds >= 9 && miliseconds < 99) {
            miliseconds++;

            if(seconds <= 9){

                if(minutes <= 9){
                    stopwatch.textContent = `${hours}:0${minutes}:0${seconds}:${miliseconds}`
                }

                else if((minutes > 9 && minutes <= 59)){

                    stopwatch.textContent = `${hours}:${minutes}:0${seconds}:${miliseconds}`

                }

                else{
                    minutes = 0;
                    hours++;
                    stopwatch.textContent = `${hours}:00:0${seconds}:${miliseconds}`
 
                }



            }
            
            else if((seconds > 9 && seconds <= 59)){

                if(minutes <= 9){
                    stopwatch.textContent = `${hours}:0${minutes}:${seconds}:${miliseconds}`
                }

                else if((minutes > 9 && minutes <= 59)){

                    stopwatch.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`

                }

                else{
                    minutes = 0;
                    hours++;
                    stopwatch.textContent = `${hours}:00:${seconds}:${miliseconds}`
 
                }

            }
            
            else{
                minutes++;
                seconds = 0;

                if(minutes <= 9){
                    stopwatch.textContent = `${hours}:0${minutes}:00:${miliseconds}`
    
                }
    
                else if((minutes > 9 && minutes <= 59)){
    
                    stopwatch.textContent = `${hours}:${minutes}:00:${miliseconds}`
    
                }
    
                else{
                    minutes = 0;
                    hours++;
                    stopwatch.textContent = `${hours}:00:00:${miliseconds}`
    
                }

 
            }

        }
        
        else {
            seconds++;
            miliseconds = 0

            if(seconds <= 9){

                if(minutes <= 9){
                    stopwatch.textContent = `${hours}:0${minutes}:0${seconds}:00`
                }

                else if((minutes > 9 && minutes <= 59)){

                    stopwatch.textContent = `${hours}:${minutes}:0${seconds}:00`

                }

                else{
                    minutes = 0;
                    hours++;
                    stopwatch.textContent = `${hours}:00:0${seconds}:00`
 
                }

            }
            
            else if((seconds > 9 && seconds <= 59)){

                if(minutes <= 9){
                    stopwatch.textContent = `${hours}:0${minutes}:${seconds}:00`
                }

                else if((minutes > 9 && minutes <= 59)){

                    stopwatch.textContent = `${hours}:${minutes}:${seconds}:00`

                }

                else{
                    minutes = 0;
                    hours++;
                    stopwatch.textContent = `${hours}:00:${seconds}:00`
 
                }

            }

            
            else{
                minutes++;
                seconds = 0;

                if(minutes <= 9){
                    stopwatch.textContent = `${hours}:0${minutes}:00:00`
    
                }
    
                else if((minutes > 9 && minutes <= 59)){
    
                    stopwatch.textContent = `${hours}:${minutes}:00:00`
    
                }
    
                else{
                    minutes = 0;
                    hours++;
                    stopwatch.textContent = `${hours}:00:00:00`
    
                }


            }


        }




    }, 10);
}

const handleStop = () => {

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    if (stopwatch.textContent !== '0:00:00:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent)
    };

    clearStuff();
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleReset = () => {
    time.style.visibility = 'hidden';
    timesArr = [];
    clearStuff();
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00:00:00';
    timeList.textContent = '';
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
}

const showHistory = () => {

    timeList.textContent = '';
    let num = 1;

    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`

        timeList.appendChild(newTime);
        num++;
    })
}

const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    };

    modalShadow.classList.toggle('modal-animation')
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);


// zmiana kolorów
colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
    root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
});

colorFour.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(229, 255, 0)');
    root.style.setProperty('--hover-color', 'rgb(201, 219, 32)');
});

colorFive.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(255, 0, 212)');
    root.style.setProperty('--hover-color', 'rgb(197, 37, 170)');
});
