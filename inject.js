console.log("%cCreated by: 2 uwu's", 'color: red; font-weight: bold;');
console.log("Loaded AP Dark Theme");


colorSchema = {
    bgColor: '#252525',
    bgColorsec: '#1d1d1d',
    fontColor: '#7a7a7a',
    borderColor: '#373a3c',
    transparent: '#ffffff00'
}
const { bgColor, bgColorsec, fontColor, borderColor, transparent} = colorSchema;
document.body.style.color = fontColor;
let navbar = document.querySelector('.navbar');
navbar.style.backgroundColor = bgColor;
let navLink = document.querySelectorAll('.nav-link');
navLink.forEach(x => {
    x.style.color = fontColor;
})
let btnSec = document.querySelectorAll('.btn-secondary');
btnSec.forEach(x => {
    x.style.color = fontColor;
    x.style.backgroundColor = bgColorsec;
    x.style.borderColor = transparent;
});
let userButton = document.querySelector('.userbutton');
userButton.style.color = fontColor;
let a = document.querySelectorAll('a');
a.forEach (a => {
    a.style.color = fontColor;
});
let card = document.querySelectorAll('.card');
card.forEach(x => {
    x.style.backgroundColor = bgColorsec;
});
let regionMain = document.querySelector('#region-main');
regionMain.style.cssText = `background-color: ${bgColor} !important`;
let  listGroupItem = document.querySelectorAll('.list-group-item');
listGroupItem.forEach(x => {
    x.style.backgroundColor = bgColor;
})
let listGroupItemAction = document.querySelector('.list-group-item-action');
listGroupItemAction.style.backgroundColor = bgColorsec

let btnOutlineSec = document.querySelectorAll('.btn-outline-secondary');
btnOutlineSec.forEach(x => {
    x.style.borderColor = borderColor;
})
let dFlex = document.querySelectorAll('.d-flex');
dFlex.forEach(x => {
    x.style.backgroundColor = bgColorsec;
})
let active = document.querySelector('.active');
active.style.backgroundColor = bgColor;
let pageContent = document.querySelectorAll('#region-main section');
pageContent.forEach(x => {
    x.style.border = `solid 1px ${borderColor}`;
})
let checkTime = 5;
setInterval( () => {
    if(document.querySelectorAll('.h6').length > 0) {
        let listGroupItem = document.querySelectorAll('.list-group-item');
        let h6 = document.querySelectorAll('.h6');
        let eventName = document.querySelectorAll('.event-name');
        listGroupItem.forEach(x => {
            x.style.backgroundColor = bgColorsec;
            x.style.padding = "1%";
        });

        h6.forEach(x => {
            x.style.backgroundColor = bgColorsec;
        });

        eventName.forEach(x => {
            x.style.color = fontColor;
        })

        let dFlex = document.querySelectorAll('.d-flex');
        dFlex.forEach(x => {
            x.style.backgroundColor = bgColorsec;
        })
    } else {
        checkTime === 0;
    }
}, 5)