const itemThumbnail = document.querySelectorAll('.item-photos a');

Array.prototype.forEach.call(itemThumbnail, function(el, i){
    for(let i = 0; i < itemThumbnail.length; i++) {
        let thumburl = el.href;
        let newurl = thumburl.replace('f800', 'full');
        el.href = newurl;
        el.querySelector('img').removeAttribute('style');
        el.querySelector('img').removeAttribute('data-src');
        el.querySelector('img').src = newurl;
    }
});

const contentImg = document.querySelector('.profile__info .c-image__content');
let contentImgUrl = contentImg.src;
let newcontentImgUrl = contentImgUrl.replace('f800', 'full');
contentImg.src = newcontentImgUrl;
