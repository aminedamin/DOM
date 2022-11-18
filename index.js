var btnsPlus = document.querySelectorAll('.plus')
var btnsMoins = document.querySelectorAll('.moins')
var btntrash = document.querySelectorAll('.fa-trash-can')
var btnheart=document.querySelectorAll('.fa-shield-heart')



for(let i = 0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
        sommetotal()
        })
}





for(let i = 0; i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        if(btnsMoins[i].nextElementSibling.innerText>0){
            btnsMoins[i].nextElementSibling.innerText--
            sommetotal()
        }
    })
}

for (let i=0; i<btntrash.length;i++){
    btntrash[i].addEventListener('click',function()
    {
        btntrash[i].parentElement.parentElement.remove()
        sommetotal()
    })
}

for (let i=0;i<btnheart.length;i++){
    btnheart[i].addEventListener('click',function(){
        btnheart[i].classList.toggle('hear')
    })
}

function sommetotal(){
    var prix=document.querySelectorAll('.prix')
    var qte=document.querySelectorAll('.qte')
    var sum=document.querySelector('.somme')
    var s=0
for(let i=0;i<prix.length;i++){
    s=s+(prix[i].innerText * qte[i].innerText)

}
  sum.innerText=s
}  



