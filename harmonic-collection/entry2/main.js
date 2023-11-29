document.addEventListener('DOMContentLoaded', function () {
    let imageUrl = 'imgs/star.png';
    let imageWidth = 70;
    let imageHeight = 70;


    function insertImage(event) {

        let imgElement = document.createElement('img');


        imgElement.src = imageUrl;
        imgElement.width = imageWidth;
        imgElement.height = imageHeight;


        imgElement.style.position = 'absolute';
        
        imgElement.style.left = event.clientX + "px";
        imgElement.style.top = event.clientY + "px";
        console.log(event.clientX, event.clientY);

        document.body.appendChild(imgElement);
    }

    document.addEventListener('click', insertImage);
});