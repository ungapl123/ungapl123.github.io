
const title = document.querySelector('input')
const renderBtn = document.getElementById('render')
const valInput = document.getElementsByName('gridVal')
const workplace = document.getElementById('workplace')
const td = document.getElementsByTagName('tb')
title.value = document.title;
let color = 240
renderBtn.addEventListener('click',()=>{
    let temp = '';
    if(valInput[0].value > 50){
        alert('Za duzo Limit A: 50')
    }else if(valInput[0].value > 60){
        alert('Za duzo Limit B: 60')
    }else{
    console.log(valInput[0].value*1)
    for(let i = 0;i < valInput[0].value*1; i++){
        
        for(let j = 0;j < valInput[1].value*1; j++){
            temp += `<tb style="left:${15*j+1}px"></tb>`
        }

        temp += '<br/>'
    }
    workplace.innerHTML = temp;
    workplace.style.left = `${(valInput[1].value+1)*2/(valInput[0].value)}px`
    for(const e of td){

        e.addEventListener('mouseover',(e)=>{
            e.target.style.backgroundColor = `hsla(${color}, 100%, 50%, 1)`
            e.target.style.borderColor = `hsla(${color}, 100%, 50%, 1)`
    
        }) 
    }
}
})
window.addEventListener('keydown',(e)=>{
    if(e.keyCode == 37){
        color--
        for(const a of document.getElementsByClassName('bi')){
            a.style.color = `hsla(${color}, 100%, 50%, 1)`
        }
    }else if(e.keyCode == 39){
        color++
        for(const a of document.getElementsByClassName('bi')){
            a.style.color = `hsla(${color}, 100%, 50%, 1)`
        }
    }
    else if(e.keyCode == 8){
        color=240
        for(const a of document.getElementsByClassName('bi')){
            a.style.color = `hsla(${color}, 100%, 50%, 1)`
        }
    }
    else if(e.keyCode == 81){
        color-=120
        for(const a of document.getElementsByClassName('bi')){
            a.style.color = `hsla(${color}, 100%, 50%, 1)`
        }
    }else if(e.keyCode == 69){
        color-=120
        for(const a of document.getElementsByClassName('bi')){
            a.style.color = `hsla(${color}, 100%, 50%, 1)`
        }
    }
    console.log(e.keyCode)


})
document.querySelector('input').addEventListener('keydown',e=>{
    setTimeout(()=>document.title = e.target.value,100)
    
})
