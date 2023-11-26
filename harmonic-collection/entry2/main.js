document.addEventListener('DOMContentLoaded', function () {
    var imageUrl = 'imgs/star.png';
    var imageWidth = 70; // Replace with your desired width
    var imageHeight = 70;


    function insertImage(event) {

        var imgElement = document.createElement('img');


        imgElement.src = imageUrl;
        imgElement.width = imageWidth;
        imgElement.height = imageHeight;


        imgElement.style.position = 'absolute';
        
        imgElement.style.left = event.clientX + "px";
        imgElement.style.top = event.clientY + "px";

        document.body.appendChild(imgElement);
    }

    document.addEventListener('click', insertImage);
});