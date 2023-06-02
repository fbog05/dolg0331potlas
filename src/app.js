/*  
    * File: app.js
    * Author: Ferencsik Boglárka
    * Group: SZOFT I/2/N
    * Date: 2023-06-02
    * Github: https://github.com/fbog05
    * Licenc: GNU GPL
*/

const doc = {
    aOldal: document.querySelector('#aOldal'),
    bOldal: document.querySelector('#bOldal'),
    cOldal: document.querySelector('#cOldal'),
    calcButton: document.querySelector('#calcButton'),
    volume: document.querySelector('#volume')
};

window.addEventListener('load', () => {
    init();
});

function init(){
    doc.calcButton.addEventListener('click', () => {
        calculate();
    });
};

function calculate(aOldal, bOldal, cOldal){
        console.log(
            (aOldal * bOldal * cOldal) + "m2");
};