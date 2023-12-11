import { togglePlay } from "./sounds.js";

const imageContainer1 = document.getElementById('imageContainer1');

// ARRAY Lista de imágenes o url
const watermelon = './public/img/WatermelonHappyBig.png';
const orange = './public/img/OrangeangryBig.png';
const cherry = './public/img/CherryHappy.png';

const imageUrls = [watermelon, orange, cherry];

let numImagen;
let timer;
let totalScore


// Depende de dificultad elegida por usuario , se establece unos segundos y numero de imagenes.
function getDifficultyUser() {
    let difficultyUser = localStorage.getItem("difficulty")
    console.log("Dificultad elegida por usuario : " + difficultyUser);

    if (difficultyUser == "easy") {
        numImagen = 300
        timer = 12000;
        return numImagen, timer

    } else if (difficultyUser == "normal") {
        numImagen = 500
        timer = 6000;
        return numImagen, timer

    } else if (difficultyUser == "hard") {
        numImagen = 700
        timer = 30000;
        return numImagen, timer

    }

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

    let numberImagesDifficulty, timer = getDifficultyUser()

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

    //========================exito y fallo + audio

    const displayGame = document.getElementById('displayGame');
    const totalScoreElement = document.getElementById('totalScore');


    displayGame.addEventListener('click', function (event) {
        const clickedElement = event.target;

        if (clickedElement.classList.contains("image-fruit")) {
            //  console.log("exito");
            togglePlay('./public/sounds/sucessSound.mp3');

        } else {
            totalScore -= 1
            // console.log(`Fallo -1! ${totalScore}`);
            totalScoreElement.textContent = `${totalScore}`;
            togglePlay('./public/sounds/failedSound.mp3');
        }
        gameSound.setAttribute("src", "../public/sounds/sucessSound.mp3")
        etiquetaAudio.play()
    });

    //========================puntuaciones en las frutas y animaciones

    const shootSuccess = document.querySelectorAll(".moving-fruit");
    let fruitPointImage;
    togglePlay("./public/sounds/kim-lightyear-leave-the-world-tonight-chiptune-edit-loop-132102.mp3")

    shootSuccess.forEach(function (shootDown) {
        shootDown.addEventListener("click", function (shootClick) {
            const clickX = shootClick.clientX;
            const clickY = shootClick.clientY;
            this.style.opacity = "0";

            if (shootDown.classList.contains("watermelon")) {
                totalScore += 2
                //console.log(`Es una sandía (watermelon)! ${totalScore}`);
                shootDown.classList.remove("image-fruit");
                shootDown.classList.remove("watermelon");
                fruitPointImage = './public/img/WatermelonHappyBig.png';

            } else if (shootDown.classList.contains("cherry")) {
                totalScore += 6
                //console.log(`Es una  (cherry)! ${totalScore}`);
                shootDown.classList.remove("image-fruit");
                shootDown.classList.remove("cherry");
                fruitPointImage = './public/img/CherryHappy.png';

            } else if (shootDown.classList.contains("orange")) {
                totalScore += 4
                //console.log(`Es una  (orange)! ${totalScore}`);
                shootDown.classList.remove("image-fruit");
                shootDown.classList.remove("orange");
                fruitPointImage = './public/img/OrangeangryBig.png';
            }

            totalScoreElement.textContent = `${totalScore}`;
            const pointImage = document.createElement("img");

            // Asigna nueva imagen
            pointImage.src = fruitPointImage;
            console.log(clickY);

            // Establece algunos estilos para la nueva imagen
            pointImage.style.position = "absolute";
            pointImage.style.left = clickX + "px";
            pointImage.style.top = clickY + "px";
            pointImage.style.opacity = "1";
            pointImage.style.width = "150px";
            pointImage.style.animation = "starSlideUp 1s ease-in-out"; // 

            // Agrega la nueva imagen al documento
            shootSuccess.appendChild(pointImage);

            //elimina la Imagen
            setTimeout(function () {
                addEventListener
                displayGame.removeChild(pointImage);
            }, 1100);
        });
    });

}

export function launchGame(){
    showRandomImages()
    hitFailCountAndSounds()
}
