document.addEventListener('DOMContentLoaded', function () {
    let imageUrl = 'imgs/star.png';
    let imageWidth = 200;
    let imageHeight = 200;

    function insertImage(event) {
        let imgElement = document.createElement('img');
         let container = document.querySelector(".container");
        container.appendChild(imgElement);

        imgElement.src = imageUrl;
        imgElement.width = imageWidth;
        imgElement.height = imageHeight;

        imgElement.style.position = 'absolute';
        imgElement.style.left = (event.clientX - imageWidth / 2) + "px";
        imgElement.style.top = (event.clientY - imageHeight/1.5) + "px";
        console.log(event.clientX, event.clientY);

        container.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }

    document.addEventListener('click', insertImage);
});