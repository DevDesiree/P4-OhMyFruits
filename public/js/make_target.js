    //DEFINo CONSTANTES<-- como tengo muchos genera un array???¿
       // const imageContainer1 = document.getElementById('imageContainer1');
       const imageContainer1 = document.querySelector('.image-container');
       console.log (imageContainer1);
       const imageContainer2 = document.getElementById('imageContainer2');   

       // ARRAY Lista de imágenes o url

       const watermelon = './public/img/WatermelonHappyBig.png';
       const orange =  './public/img/OrangeangryBig.png';
       const cherry = './public/img/CherryHappy.png';


       const imageUrls = [watermelon, orange, cherry
       ];

       // Función aleatorio, para obtener imagen del array aleatorio
       function getRandomImageUrl() {
           const randomIndex = Math.floor(Math.random() * imageUrls.length);
           return imageUrls[randomIndex];
       }

       // Función para crear y mostrar imágenes aleatorias
       function showRandomImages() {
           
           const numImages = 300;  // Ajusta el número de imágenes mostradas, puede cambiar con la dificultad

           const existingImages = imageContainer1.querySelectorAll('.image-fruit');  // Clonar las imágenes existentes para hacer la secuencia infinita
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

               if (imageUrl === watermelon){
                   imageElement.classList.add('watermelon');
                   
               }else if(imageUrl === cherry) {
                   imageElement.classList.add('cherry');
               }else {
                   imageElement.classList.add('orange');
               };
               
               imageContainer1.appendChild(imageElement);
               imageElement.style.animation = "move 30s linear infinite";
           }
       }










       // Mostrar imágenes aleatorias inicialmente y luego actualizar cada x segundos
       showRandomImages();
       setInterval(() => {
           imageContainer1.innerHTML = ''; // Limpiar imágenes anteriores
           showRandomImages();
       }, 30000);


     
      /////// !! constante y funcion de derrivar fruta  y puntuacion Hay que hacer condicional      ///////       /////// 
       const shootSuceess = document.querySelectorAll(".image-fruit"); 
       const shootError = document.getElementById("stage-bkg-img");
       
       let totalHits = 1 
     
  /////// !! FUNCION y funcion de derrivar fruta  y puntuacion Hay que hacer condicional 
           shootSuceess.forEach(function(shootDown) {
               shootDown.addEventListener("click", function(event) {
                       const clickX = event.clientX;
                       const clickY = event.clientY;    
                       this.style.opacity = "0";
                      
       
                       const starImage = document.createElement("img");
                       // Asigna la fuente de la nueva imagen

               
                       starImage.src = "./public/img/star.png"; // Cambia esto por la ruta de tu nueva imagen
                           

                       // Establece algunos estilos para la nueva imagen
                       starImage.style.position = "absolute";
                       starImage.style.left = clickX + "px";
                       starImage.style.top = clickY + "px";
                       starImage.style.opacity = "0";
                       starImage.style.width = "150px";
                       starImage.style.animation = "starSlideUp 1s ease-in-out"; // Ajusta la duración y la función de temporización según sea necesario
       
                       // Agrega la nueva imagen al documento
                       document.body.appendChild(starImage);
                       totalHits++;
                       console.log (totalHits);
       
                       //elimina la Imagen
                       setTimeout(function() {addEventListener
                           document.body.removeChild(starImage);
                       }, 1100);

                       });
                   });
   
