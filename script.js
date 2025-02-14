const messages = [
    "yo fr? :(",
    "You sure??",
    "Are you sure????",
    "please...?",
    "Just think about it!",
    "If you say no, I will be very sad(maybe)...",
    "pleace think twice before pressing me",
    "I will be very very very very very  sad ToT(maybe yes)...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes pleaseeeee! :D"
];

let messageindex = 0;
let noClickCount = 0;
const maxNoClicks = 7; 

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesbutton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageindex];
    noClickCount++;
    noButton.style.transition = "left 0.3s ease-in-out, top 0.3s ease-in-out";
    

messageindex = (messageindex + 1) % messages.length;
const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

const currentSize = parseFloat(window.getComputedStyle(document.querySelector('.yes-button')).fontSize);
  yesbutton.style.fontSize = `${currentSize * 3.5}px`;}

function handleYesClick() 
    {window.location.href= "yes_home.html";}
    function createLoveEffect(element) {
        const love = document.createElement('div');
        love.classList.add('love');
        love.textContent = "❤️";
        document.body.appendChild(love);
    
        // Posisi love muncul di sekitar tombol "No"
        const rect = element.getBoundingClientRect();
        love.style.left = `${rect.left + rect.width / 2}px`;
        love.style.top = `${rect.top}px`;
    }
    createLoveEffect(noButton);