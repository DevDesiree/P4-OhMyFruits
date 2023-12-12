import { startGame } from "./countdown.js";
import { togglePlay } from "./sounds.js";

const imageContainer1 = document.getElementById('imageContainer1');


const watermelon = './public/img/WatermelonHappyBig.png';
const orange = './public/img/OrangeAngryBig.png';
const cherry = './public/img/CherryHappy.png';

const imageUrls = [watermelon, orange, cherry];

let numImagen;
let timer;
let totalScore = 0;



function getDifficultyUser() {
    let difficultyUser = localStorage.getItem("Difficulty")

    if (difficultyUser == "easy") {
        numImagen = 300
        timer = 120000;
        

    } else if (difficultyUser == "normal") {
        numImagen = 500
        timer = 60000;
        

    } else if (difficultyUser == "hard") {
        numImagen = 700
        timer = 30000;
        

    } else {
        numImagen = 300
        timer = 120000;
        
    }

    return [numImagen, timer];

}


function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}


function showRandomImages() {
    imageContainer1.innerHTML = ''; 
    actualizar()
    togglePlay("./public/sounds/backgroundSound.mp3")

    let [numberImagesDifficulty, timer] = getDifficultyUser();

    const existingImages = imageContainer1.querySelectorAll('.image-fruit');
    existingImages.forEach((existingImage) => {
        const clone = existingImage.cloneNode(true);
        imageContainer1.appendChild(clone);
    });


    for (let i = 0; i < numberImagesDifficulty; i++) {
        const imageUrl = getRandomImageUrl();
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.classList.add('image-fruit');
        imageElement.classList.add('moving-fruit');

        if (imageUrl === watermelon) {
            imageElement.classList.add('watermelon');

        } else if (imageUrl === cherry) {
            imageElement.classList.add('cherry');
        } else {
            imageElement.classList.add('orange');
        };

        imageContainer1.appendChild(imageElement);
        imageElement.style.animation = "move 30s linear infinite";


    }

    setInterval(() => {
        showRandomImages();
    }, timer);
}

function hitFailCountAndSounds() {
    const displayGame = document.getElementById('displayGame');
    const totalScoreElement = document.getElementById('totalScore');

    displayGame.addEventListener('click', function (event) {
        const clickedElement = event.target;

        if (clickedElement.classList.contains("image-fruit")) {
            togglePlay('./public/sounds/hitSound.mp3');
        } else {
            totalScore -= 1;
            actualizar()
            totalScoreElement.textContent = `${totalScore}`;
            togglePlay('./public/sounds/failedSound.mp3');
        }
    });

    const shootSuccess = document.querySelectorAll(".moving-fruit");

    shootSuccess.forEach(function (shootDown) {
        shootDown.addEventListener("click", function (shootClick) {
            const clickX = shootClick.clientX;
            const clickY = shootClick.clientY;
            this.style.opacity = "0";

            const pointImage = document.createElement("img");
            let fruitPointImage;

            if (shootDown.classList.contains("watermelon")) {
                totalScore += 1;
                actualizar()
                totalScoreElement.textContent = `${totalScore}`;
                fruitPointImage = './public/img/WatermelonHappyBig.png';
                displayGame.removeChild(shootDown);
            } else if (shootDown.classList.contains("cherry")) {
                totalScore += 5;
                actualizar()
                totalScoreElement.textContent = `${totalScore}`;
                fruitPointImage = './public/img/CherryHappy.png';
                displayGame.removeChild(shootDown);
            } else if (shootDown.classList.contains("orange")) {
                totalScore += 3;
                actualizar()
                totalScoreElement.textContent = `${totalScore}`;
                fruitPointImage = './public/img/OrangeAngryBig.png';
                displayGame.removeChild(shootDown);
            }

            totalScoreElement.textContent = `${totalScore}`;
        
            pointImage.src = fruitPointImage;
            pointImage.style.position = "absolute";
            pointImage.style.left = clickX + "px";
            pointImage.style.top = clickY + "px";
            pointImage.style.opacity = "1";
            pointImage.style.width = "150px";
            pointImage.style.animation = "starSlideUp 1s ease-in-out";

            pointImage.addEventListener("click", function () {
               
            });

            displayGame.appendChild(pointImage);

            setTimeout(function () {
                displayGame.removeChild(pointImage);
            }, 1100);
        });
    });
    
}

function actualizar(){
    if (totalScore <= 0){
        totalScore = 0
    }
    localStorage.setItem("totalScore", totalScore)
}


export function launchGame(){
    showRandomImages()
    startGame(timer)
    hitFailCountAndSounds()
}
