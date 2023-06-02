/*  
    * File: app.js
    * Author: Ferencsik Boglárka
    * Group: SZOFT I/2/N
    * Date: 2023-06-02
    * Github: https://github.com/fbog05
    * Licenc: GNU GPL
*/

const doc = {
    calcButton: document.querySelector('#calcButton')
}

window.addEventListener('load', () => {
    init();
});

function init(){
    doc.calcButton.addEventListener('click', () => {
        calculate();
    });
};

function calculate(){
    let aOldal = document.getElementById('aOldal').value;
    let bOldal = document.getElementById('bOldal').value;
    let cOldal = document.getElementById('cOldal').value;
    let volume;

    volume = (aOldal * bOldal * cOldal);

    console.log(volume);
    document.getElementById('output').textContent = volume + " m3";
    return false;

};