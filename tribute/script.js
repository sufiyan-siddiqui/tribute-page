
// ````````````````````````````````````````````````````````````````````` main suntitle
var text = document.querySelector("header section h3");
strText = text.textContent;
split = strText.split("");
text.textContent = "";
for (let i = 0; i < split.length; i++) {
    text.innerHTML += "<span>" + split[i] + "</span>";
}
let char = 0, timer = setInterval(onTick, 100);

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("sub");
    char++;
    if(char === split.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
} 
// ````````````````````````````````````````````````````````````````````` About
window.addEventListener('scroll',()=>{
    screen = window.innerHeight;
    if(document.querySelector('.about h1').getBoundingClientRect().top < screen/1.3 ){
        document.querySelector('.about h1').style.transform = 'translateX(0)';
        document.querySelector('.about h1').style.opacity = '1';
    }
    if(document.querySelector('.about p').getBoundingClientRect().top < screen/1.3 ){
        document.querySelector('.about p').style.transform = 'translateX(0)';
        document.querySelector('.about p').style.opacity = '1';
    }
    if(document.querySelector('.timeline h1').getBoundingClientRect().top < screen/1.3 ){
        document.querySelector('.timeline h1').style.transform = 'translateX(0)';
        document.querySelector('.timeline h1').style.opacity = '1';
    }
    if(document.querySelector('.facts h1').getBoundingClientRect().top < screen/1.3 ){
        document.querySelector('.facts h1').style.transform = 'translateX(0)';
        document.querySelector('.facts h1').style.opacity = '1';
    }
    if(document.querySelector('.contact h1').getBoundingClientRect().top < screen/1.1){
        document.querySelector('.contact h1').style.transform = 'translateX(0)';
        document.querySelector('.contact h1').style.opacity = '1';
    }
    document.querySelectorAll('.timeline .container .l').forEach((leftMttr)=>{
        if(leftMttr.getBoundingClientRect().top < screen/1.3){
            leftMttr.style.transform = 'translateX(0)';
            leftMttr.style.opacity = '1';
        }
    })
    document.querySelectorAll('.timeline .container .r').forEach((rytMttr)=>{
        if(rytMttr.getBoundingClientRect().top < screen/1.3){
            rytMttr.style.transform = 'translateX(0)';
            rytMttr.style.opacity = '1';
        }
    })
    document.querySelectorAll('.facts ul li').forEach((list)=>{
        if(list.getBoundingClientRect().top < screen/1.3){
            list.style.transform = 'translateX(0)';
            list.style.opacity = '1';
        }
    })
    if(document.querySelector('.tribute').getBoundingClientRect().top < screen/1.1 )
        document.querySelector('.tribute').classList.add('js');
})



