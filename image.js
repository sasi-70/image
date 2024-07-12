const imageSources = [',image.1.jpg','image.2.jpg','image.3.jpg','image.4.webp','image.5.jpg','image.6.jpg','image.7.webp','image.8.jpg','image.9.jpg','image.10.jpg'];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);