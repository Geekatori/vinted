const cell = document.querySelector('.profile__items-wrapper div:nth-child(3) .c-cell__title span');
let nomberOfArticles = cell.innerHTML.replace(' articles', '');

const favicon = document.querySelector('[rel="icon"]');
const faviconSize = 32;

const canvas = document.createElement('canvas');
canvas.width = faviconSize;
canvas.height = faviconSize;

const context = canvas.getContext('2d');
const img = document.createElement('img');
img.src = favicon.href;


img.onload = () => {
    // Draw Original Favicon as Background
    context.drawImage(img, 0, 0, faviconSize, faviconSize);

    // Draw Notification Circle
    context.beginPath();
    context.arc(canvas.width - faviconSize / 2.5 , faviconSize / 2.5, faviconSize / 2.5, 0, 2*Math.PI);
    context.fillStyle = '#000000';
    context.fill();

    // Draw Notification Number
    context.font = '20px "helvetica", Arial, sans-serif';
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = '#ffffff';
    context.fillText(nomberOfArticles, canvas.width - faviconSize / 2.5, faviconSize / 2.2);

    // Replace favicon
    favicon.href = canvas.toDataURL('image/png');
};
