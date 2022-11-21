// Events (события)
const btn=document.createElement('button');
document.body.appendChild(btn);
btn.innerText='Click me!!!!';
btn.style.fontSize='13px';
//подписывыаемся на событие  "нажатия"
btn.addEventListener('click',()=>{
    console.log('click!!!')
});// выбираем событие "клик"
let count=0;
const f =()=>{
console.log('cli-cli!!!')
count++;
if(count===10){
//отписываемся от второго события
btn.removeEventListener('click',f);
}
};
btn.addEventListener('click',f);
//btn.removeEventListener('click')//удаление события
let fsize=parseFloat( btn.style.fontSize.substring(0,btn.style.fontSize.length-2));
const delta= 0.5;//+-0.5 px
btn.addEventListener('wheel',(event)=>{
const isUp=event.deltaY <0;
if(isUp){
   fsize+=delta
} else{
    fsize-=delta
}
btn.style.fontSize=`${fsize}px`;
});
//кошки -мышки
const mouse=document.createElement('div');
mouse.classList.add('mouse');
function cssToFloat(t){
    return parseFloat(t.substring(0,t.length-2))
}
const mouseWidth=cssToFloat(mouse.style.width);
const mouseHeigth=cssToFloat(mouse.style.height)
setInterval(()=>{
// получаем размер окна просмотра
const w = document.documentElement.clientWidth;
const h = document.documentElement.clientHeight;
},1000)