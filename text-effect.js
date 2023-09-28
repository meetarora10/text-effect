const get=document.getElementById('main');
const lastWord=['HTML','CSS','JavaScript','Python','React'];
let wordIndex=0;
let charIndex=0;
wordUpdate();
function wordUpdate(){
    charIndex++;
    get.innerHTML=`${lastWord[wordIndex].slice(0,charIndex)}`;
    if(charIndex===lastWord[wordIndex].length){
        wordIndex++;
        charIndex=0;
    }
    if(wordIndex===lastWord.length){
        wordIndex=0;
    }
    setTimeout(wordUpdate,600);
}