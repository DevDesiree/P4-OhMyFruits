import { startGame } from "./countdown.js";
import { togglePlay } from "./sounds.js";

const imageContainer1 = document.getElementById('imageContainer1');

// ARRAY Lista de imágenes o url
const watermelon = './public/img/WatermelonHappyBig.png';
const orange = './public/img/OrangeangryBig.png';
const cherry = './public/img/CherryHappy.png';

const imageUrls = [watermelon, orange, cherry];

let numImagen;
let timer;
let totalScore = 0;


// Depende de dificultad elegida por usuario , se establece unos segundos y numero de imagenes.
function getDifficultyUser() {
    let difficultyUser = localStorage.getItem("Difficulty")
    console.log("Dificultad elegida por usuario : " + difficultyUser);

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

// Se escogen aleatoriamente las imagenes.
function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

// Se muestran aleatoriamente las imagenes.
function showRandomImages() {
    console.log('Showing random images...');
    imageContainer1.innerHTML = ''; // Limpiar imágenes anteriores
    actualizar()
    togglePlay("./public/sounds/kim-lightyear-leave-the-world-tonight-chiptune-edit-loop-132102.mp3")

    let [numberImagesDifficulty, timer] = getDifficultyUser();
    console.log(numberImagesDifficulty);
    console.log(timer);

    // Clonar las imágenes existentes para hacer la secuencia infinita
    const existingImages = imageContainer1.querySelectorAll('.image-fruit');
    existingImages.forEach((existingImage) => {
        const clone = existingImage.cloneNode(true);
        imageContainer1.appendChild(clone);
    });

    // Agregar nuevas imágenes
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

        //💢si hay dificultades, cambiar los 30seguntos
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

        // Asegúrate de que solo estás tratando clics en elementos específicos dentro de displayGame
        if (clickedElement.classList.contains("image-fruit")) {
            togglePlay('./public/sounds/dificultyButtons.mp3');
        } else {
            totalScore -= 1;
            actualizar()
            totalScoreElement.textContent = `${totalScore}`;
            togglePlay('./public/sounds/failedSound.mp3');
        }
    });

    // Obtén los elementos más recientes con la clase moving-fruit
    const shootSuccess = document.querySelectorAll(".moving-fruit");

    shootSuccess.forEach(function (shootDown) {
        shootDown.addEventListener("click", function (shootClick) {
            const clickX = shootClick.clientX;
            const clickY = shootClick.clientY;
            this.style.opacity = "0";

            const pointImage = document.createElement("img");
            let fruitPointImage;

            if (shootDown.classList.contains("watermelon")) {
                totalScore += 2;
                actualizar()
                totalScoreElement.textContent = `${totalScore}`;
                fruitPointImage = './public/img/WatermelonHappyBig.png';
                // Elimina el elemento clicado después de agregar el nuevo elemento
                displayGame.removeChild(shootDown);
            } else if (shootDown.classList.contains("cherry")) {
                totalScore += 6;
                actualizar()
                totalScoreElement.textContent = `${totalScore}`;
                fruitPointImage = './public/img/CherryHappy.png';
                displayGame.removeChild(shootDown);
            } else if (shootDown.classList.contains("orange")) {
                totalScore += 4;
                actualizar()
                totalScoreElement.textContent = `${totalScore}`;
                fruitPointImage = './public/img/OrangeangryBig.png';
                displayGame.removeChild(shootDown);
            }

            totalScoreElement.textContent = `${totalScore}`;
        

            // Configura la nueva imagen
            pointImage.src = fruitPointImage;
            pointImage.style.position = "absolute";
            pointImage.style.left = clickX + "px";
            pointImage.style.top = clickY + "px";
            pointImage.style.opacity = "1";
            pointImage.style.width = "150px";
            pointImage.style.animation = "starSlideUp 1s ease-in-out";

            // Agrega el evento clic al nuevo elemento
            pointImage.addEventListener("click", function () {
                // Cualquier acción que desees realizar en clic de la nueva imagen
            });

            // Agrega la nueva imagen al documento
            displayGame.appendChild(pointImage);

            // Elimina la imagen después de 1100 ms
            setTimeout(function () {
                displayGame.removeChild(pointImage);
            }, 1100);
        });
    });
    
}

function actualizar(){
    localStorage.setItem("totalScore", totalScore)
}


export function launchGame(){
    showRandomImages()
    startGame(timer)
    hitFailCountAndSounds()
}
