const openAnswer = [...document.querySelectorAll(".respostas>span")]
console.log(openAnswer)

openAnswer.map((el)=>{
    el.addEventListener('click',(evt)=>{
        el.classList.toggle("changeColor")
        el.nextElementSibling.classList.toggle("showAnswer")
    })
})