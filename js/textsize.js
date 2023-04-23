let textsize = localStorage.getItem('textsize');
const textToggleSmall = document.querySelector('#text-size-small');
const textToggleMedium = document.querySelector('#text-size-medium');
const textToggleBig = document.querySelector('#text-size-big');

//set to small by default

const enableSmallText = () => {
    document.body.classList.add('textsmall');
    document.body.classList.remove('textmedium');
    document.body.classList.remove('textbig');
    localStorage.setItem("textsize", "small");
    textToggleSmall.setAttribute("checked", "true");
}

const enableMediumText = () => {
    document.body.classList.add('textmedium');
    document.body.classList.remove('textsmall');
    document.body.classList.remove('textbig');
    localStorage.setItem("textsize", "medium");
    textToggleMedium.setAttribute("checked", "true");
}

const enableBigText = () => {
    document.body.classList.add('textbig');
    document.body.classList.remove('textsmall');
    document.body.classList.remove('textmedium');
    localStorage.setItem("textsize", "big");
    textToggleBig.setAttribute("checked", "true");
}

document.onload = console.log(textsize);
if (textsize !== 'medium' && textsize !== 'big'){
   enableSmallText()
}

if (textsize == 'small') {
    enableSmallText();
}

if (textsize == 'medium') {
    enableMediumText();
}

if (textsize == 'big') {
    enableBigText();
}

textToggleSmall.addEventListener("click", () => {
    textsize = localStorage.getItem('textsize');
    if (textsize !== 'small') {
        enableSmallText();
    }
});

textToggleMedium.addEventListener("click", () => {
    textsize = localStorage.getItem('textsize');
    if (textsize !== 'medium') {
        enableMediumText();
    }
});

textToggleBig.addEventListener("click", () => {
    textsize = localStorage.getItem('textsize');
    if (textsize !== 'big') {
        enableBigText();
    }
});