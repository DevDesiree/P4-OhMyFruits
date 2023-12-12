const imageContainer1 = document.getElementById('imageContainer1');

const watermelon = './public/img/WatermelonHappyBig.png';
const orange = './public/img/OrangeangryBig.png';
const cherry = './public/img/CherryHappy.png';

const imageUrls = [watermelon, orange, cherry];


function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

export function showRandomImages() {
    imageContainer1.innerHTML = ''; 

    const numImages = 300; 

    const existingImages = imageContainer1.querySelectorAll('.image-fruit');
    existingImages.forEach((existingImage) => {
        const clone = existingImage.cloneNode(true);
        imageContainer1.appendChild(clone);
    });


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

    }
}


showRandomImages();
setInterval(() => {
    showRandomImages();
}, 30000);

let totalScore = 0;
const totalScoreElement = document.getElementById('totalScore');
totalScoreElement.textContent = `${totalScore}`;

const displayGame = document.getElementById('displayGame');

displayGame.addEventListener('click', function (event) {
    const clickedElement = event.target;
    let gameSound = document.createElement("audio")
    let shootSound;

    if (clickedElement.classList.contains("image-fruit")) {
        shootAudio = './public/sounds/sucessSound.mp3';
    } else {
        totalScore -= 1

        totalScoreElement.textContent = `${totalScore}`;
        shootAudio = './public/sounds/failedSound.mp3';
    }
    gameSound.setAttribute("src", "../public/sounds/sucessSound.mp3")
    etiquetaAudio.play()
});

const shootSuccess = document.querySelectorAll(".moving-fruit");
let fruitPointImage;

shootSuccess.forEach(function (shootDown) {
    shootDown.addEventListener("click", function (shootClick) {
        const clickX = shootClick.clientX;
        const clickY = shootClick.clientY;
        this.style.opacity = "0";

        if (shootDown.classList.contains("watermelon")) {
            totalScore += 2
            shootDown.classList.remove("image-fruit");
            shootDown.classList.remove("watermelon");
            fruitPointImage = './public/img/WatermelonHappyBig.png';

        } else if (shootDown.classList.contains("cherry")) {
            totalScore += 6
            shootDown.classList.remove("image-fruit");
            shootDown.classList.remove("cherry");
            fruitPointImage = './public/img/CherryHappy.png';

        } else if (shootDown.classList.contains("orange")) {
            totalScore += 4
            shootDown.classList.remove("image-fruit");
            shootDown.classList.remove("orange");
            fruitPointImage = './public/img/OrangeangryBig.png';
        }

        totalScoreElement.textContent = `${totalScore}`;
        const pointImage = document.createElement("img");

        pointImage.src = fruitPointImage;

        pointImage.style.position = "absolute";
        pointImage.style.left = clickX + "px";
        pointImage.style.top = clickY + "px";
        pointImage.style.opacity = "1";
        pointImage.style.width = "150px";
        pointImage.style.animation = "starSlideUp 1s ease-in-out"; // 

        shootSuccess.appendChild(pointImage);

        setTimeout(function () {
            addEventListener
            displayGame.removeChild(pointImage);
        }, 1100);
    });
});
