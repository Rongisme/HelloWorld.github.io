const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesbtn = document.querySelector(".yes-btn")
const nobtn = document.querySelector(".no-btn")

yesbtn.addEventListener("click",()=> {
    question.innerHTML= "yeah I love you Too";
    gif.src="https://i.pinimg.com/originals/e5/aa/24/e5aa2451fd295761bba0d0cd79e78b9d.gif";
})
 
    nobtn.addEventListener("mouseover", ()=>{
        const nobtnRect = nobtn.getBoundingClientRect();
            const maxX = window.innerWidth - nobtnRect.width;
            const maxY = window.innerHeight - nobtnRect.height;

            const randomX = Math.floor(Math.random() * maxX)
            const randomY = Math.floor(Math.random() * maxY)

            nobtn.style.left = randomX + "px";
            nobtn.style.top = randomY + "px";
    })
