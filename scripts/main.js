document.addEventListener("DOMContentLoaded",function(){const sections=document.querySelectorAll("section");const links=document.querySelectorAll(".nav-btn");const closeBtn=document.querySelector("[aria-label='Close']");const questionBtn=document.querySelector("[aria-label='Question']");const minBtn=document.querySelector("[aria-label='Minimise']");const maxBtn=document.querySelector("[aria-label='Maximise']");const aboutWindow=document.querySelector(".about-main");const contactWindow=document.querySelector(".contact-main");const projectWindow=document.querySelector(".projects-main");const allBtn=document.querySelector("#all-projects");const jsBtn=document.querySelector("#js-projects");const pyBtn=document.querySelector("#py-projects");const projectsCount=document.querySelector("#projects-counter");const projectFigs=document.querySelectorAll(".projects-fig");const jsFigs=document.querySelectorAll(".projects-js");const pyFigs=document.querySelectorAll(".projects-py");const date=document.querySelector("#date");function updateTime(){const now=new Date();date.textContent=now.toLocaleDateString("en-AU",{year:"numeric",month:"long",day:"numeric",});date.textContent=now.toLocaleDateString("en-AU",{year:"numeric",month:"long",day:"numeric",})}
closeBtn.addEventListener("click",function(){function random(max){return Math.floor(Math.random()*max)}
function getRandomColour(){const letters="0123456789ABCDEF";let colour="#";for(let i=0;i<6;i++){colour+=letters[random(16)]}
return colour}
const rect=closeBtn.getBoundingClientRect();const buttonCenterX=rect.left+rect.width/2;const buttonCenterY=rect.top+rect.height/2;let c=document.createDocumentFragment();for(let i=0;i<100;i++){let styles=`transform: translate3d(${random(500) - 250}px, ${
        random(200) - 150
      }px, 0) rotate(${random(360)}deg);
                    background: ${getRandomColour()};
                    animation: bang 700ms ease-out forwards;
                    opacity: 0;
                    left: ${buttonCenterX}px;
                    top: ${buttonCenterY}px;`;let confettiPiece=document.createElement("div");confettiPiece.className="confetti-piece";confettiPiece.style.cssText=styles;c.appendChild(confettiPiece)}
document.body.appendChild(c);const confettiPieces=document.querySelectorAll(".confetti-piece");confettiPieces.forEach((piece)=>{piece.addEventListener("animationend",()=>{piece.remove()})})});maxBtn.addEventListener("click",function(){contactWindow.classList.add("big");setTimeout(()=>{contactWindow.classList.remove("big")},500)});minBtn.addEventListener("click",function(){aboutWindow.classList.add("hidden");setTimeout(()=>{aboutWindow.classList.remove("hidden")},500)});questionBtn.addEventListener("click",function(){projectWindow.classList.add("spin");setTimeout(()=>{projectWindow.classList.remove("spin")},1000)});allBtn.addEventListener("click",function(){projectFigs.forEach((fig)=>{fig.classList.remove("hidden")});projectsCount.textContent=`${projectFigs.length} object(s)`});jsBtn.addEventListener("click",function(){jsFigs.forEach((fig)=>{fig.classList.remove("hidden")});pyFigs.forEach((fig)=>{fig.classList.add("hidden")});projectsCount.textContent=`${jsFigs.length} object(s)`});pyBtn.addEventListener("click",function(){jsFigs.forEach((fig)=>{fig.classList.add("hidden")});pyFigs.forEach((fig)=>{fig.classList.remove("hidden")});projectsCount.textContent=`${pyFigs.length} object(s)`});document.addEventListener("scroll",function(){let currentSection="";sections.forEach((section)=>{const sectionTop=section.offsetTop;const sectionHeight=section.clientHeight;if(window.scrollY>=sectionTop-sectionHeight/2){currentSection=section.getAttribute("id")}});links.forEach((link)=>{link.classList.remove("active");if(link.getAttribute("href").substring(1)===currentSection){link.classList.add("active")}})});links.forEach((link)=>{link.addEventListener("click",function(){links.forEach((l)=>l.classList.remove("active"));this.classList.add("active")})});document.addEventListener("keydown",function(event){if(event.key==="Tab"){const activeElement=document.activeElement;if(activeElement.tagName==="A"&&activeElement.closest(".footer")){links.forEach((link)=>link.classList.remove("active"));activeElement.classList.add("active")}}});updateTime()})