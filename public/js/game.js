

const imageContainer1 = document.getElementById('imageContainer1');


// ARRAY Lista de imágenes o url

const watermelon = './public/img/WatermelonHappyBig.png';
const orange = './public/img/OrangeangryBig.png';
const cherry = './public/img/CherryHappy.png';

const imageUrls = [watermelon, orange, cherry];

// Función aleatorio, para obtener imagen del array aleatorio

// si necesitamos un easy u unhard, esto estaria fuera o  randomidex se calculafuera
// cambiaria la pcnstante randomIndex por dificultIndex   -> 

//modifica el nª de imagenes
// EASY dificultIndex = 1;
// Normal dificultIndex = Math.floor(Math.random() * 2;
// Hard dificultIndex = Math.floor(Math.random() *  imageUrls.length);

// EASY dificultIndex = 1;
// Normal dificultIndex = Math.floor(Math.random() * 2;
// Hard dificultIndex = Math.floor(Math.random() *  imageUrls.length);



function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

//! añadir constante de numImges para el numero de imagnees segun dificultad
//! añadir contante de 

// Función para crear y mostrar imágenes aleatorias
function showRandomImages() {
    imageContainer1.innerHTML = ''; // Limpiar imágenes anteriores
    const numImages = 300;  //número de imágenes mostradas💢

    // Clonar las imágenes existentes para hacer la secuencia infinita
    const existingImages = imageContainer1.querySelectorAll('.image-fruit');  
    existingImages.forEach((existingImage) => {
        const clone = existingImage.cloneNode(true);
        imageContainer1.appendChild(clone);
    });

    // Agregar nuevas imágenes
    for (let i = 0; i < numImages; i++) {
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
}


// ! sacar una variable de dificultad y muestre el tiempo 30000 30seg
// normal 100000 easy 200000   Aunque yo le 
// easy cambia tiempo y frutas y numero de imagenes


// Mostrar imágenes aleatorias inicialmente y luego actualizar cada x segundos

showRandomImages();
setInterval(() => {
    showRandomImages();
}, 30000);

    


let totalScore = 0;
const totalScoreElement = document.getElementById('totalScore');
totalScoreElement.textContent = `${totalScore}`;


//========================exito y fallo + audio

const displayGame = document.getElementById('displayGame');


displayGame.addEventListener('click', function (event) {
    const clickedElement = event.target;
    let gameSound= document.createElement("audio")
    let shootSound;


    if (clickedElement.classList.contains("image-fruit")) {
        //  console.log("exito");
         shootAudio = './public/sounds/sucessSound.mp3';

    } else {
        totalScore -= 1
        // console.log(`Fallo -1! ${totalScore}`);
        totalScoreElement.textContent = `${totalScore}`;
        shootAudio = './public/sounds/failedSound.mp3';
    }
    

    gameSound.setAttribute("src", "./public/sounds/sucessSound.mp3")
    etiquetaAudio.play()
   
});

//========================puntuaciones en las frutas y animaciones

const shootSuccess = document.querySelectorAll(".moving-fruit");
let fruitPointImage;
// const fruta = document.querySelectorAll(".image-fruit");
document.body
// shootSuccess

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
      //  pointImage.style.animation = "starSlideUp 1s ease-in-out"; // 

        // Agrega la nueva imagen al documento
        displayGame.appendChild(pointImage);

        //elimina la Imagen
        // setTimeout(function () {
        //     addEventListener
        //      displayGame.removeChild(pointImage);
        // }, 1100);

    });
});


displayGame




