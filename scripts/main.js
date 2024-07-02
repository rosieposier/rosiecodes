document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section-wrapper");
  const footerNavBtns = document.querySelectorAll(".footer-nav-btn");
  const closeBtn = document.querySelector("[aria-label='Close']");
  const questionBtn = document.querySelector("[aria-label='Question']");
  const minBtn = document.querySelector("[aria-label='Minimise']");
  const maxBtn = document.querySelector("[aria-label='Maximise']");
  const aboutWindow = document.querySelector(".about-main");
  const contactWindow = document.querySelector(".contact-main");
  const projectWindow = document.querySelector(".projects-main");
  const blogWindow = document.querySelector(".blog-main");
  const allBtn = document.querySelector("#all-projects");
  const tinyBtn = document.querySelector("#tiny-projects");
  const giantBtn = document.querySelector("#giant-projects");
  const projectsCount = document.querySelector("#projects-counter");
  const projects = document.querySelectorAll(".project-wrapper");
  let activeProject;
  const tinyFigs = document.querySelectorAll(".projects-tiny");
  const giantFigs = document.querySelectorAll(".projects-giant");
  const date = document.querySelector("#date");
  function updateTime() {
    const now = new Date();
    date.textContent = now.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    date.textContent = now.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  closeBtn.addEventListener("click", function () {
    function random(max) {
      return Math.floor(Math.random() * max);
    }
    function getRandomColour() {
      const letters = "0123456789ABCDEF";
      let colour = "#";
      for (let i = 0; i < 6; i++) {
        colour += letters[random(16)];
      }
      return colour;
    }
    const rect = closeBtn.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    let c = document.createDocumentFragment();
    for (let i = 0; i < 100; i++) {
      let styles = `transform: translate3d(${random(500) - 250}px, ${
        random(200) - 150
      }px, 0) rotate(${random(360)}deg);
                    background: ${getRandomColour()};
                    animation: bang 700ms ease-out forwards;
                    opacity: 0;
                    left: ${buttonCenterX}px;
                    top: ${buttonCenterY}px;`;
      let confettiPiece = document.createElement("div");
      confettiPiece.className = "confetti-piece";
      confettiPiece.style.cssText = styles;
      c.appendChild(confettiPiece);
    }
    document.body.appendChild(c);
    const confettiPieces = document.querySelectorAll(".confetti-piece");
    confettiPieces.forEach((piece) => {
      piece.addEventListener("animationend", () => {
        piece.remove();
      });
    });
  });
  maxBtn.addEventListener("click", function () {
    contactWindow.classList.add("big");
    setTimeout(() => {
      contactWindow.classList.remove("big");
    }, 500);
  });
  minBtn.addEventListener("click", function () {
    aboutWindow.classList.add("hidden");
    setTimeout(() => {
      aboutWindow.classList.remove("hidden");
    }, 500);
  });
  questionBtn.addEventListener("click", function () {
    projectWindow.classList.add("spin");
    setTimeout(() => {
      projectWindow.classList.remove("spin");
    }, 1000);
  });
  allBtn.addEventListener("click", function () {
    projects.forEach((project) => {
      project.classList.remove("hidden");
    });
    projectsCount.textContent = `${projects.length} object(s)`;
  });
  tinyBtn.addEventListener("click", function () {
    tinyFigs.forEach((fig) => {
      fig.classList.remove("hidden");
    });
    giantFigs.forEach((fig) => {
      fig.classList.add("hidden");
    });
    projectsCount.textContent = `${tinyFigs.length} object(s)`;
  });
  giantBtn.addEventListener("click", function () {
    tinyFigs.forEach((fig) => {
      fig.classList.add("hidden");
    });
    giantFigs.forEach((fig) => {
      fig.classList.remove("hidden");
    });
    projectsCount.textContent = `${giantFigs.length} object(s)`;
  });

  // add event listener to show details when project is clicked and remove active from other projects
  // work in progress rosie
  projects.forEach((project) => {
    project.addEventListener("click", function (e) {
      e.stopPropagation();

      projects.forEach((p) => p.classList.remove("active"));

      activeProject = this;
      this.classList.add("active");
    });
  });

  // add event listener close project details when another project or button is clicked or elsewhere in the window
  // actually want to close the project details unless view or more info is clicked 
  document.addEventListener('click', function(event) {
    if(activeProject.classList.contains("active")) {
      if (!event.target.closest(".project-wrapper")) {      
        projects.forEach((p) => p.classList.remove("active"));
      }
    }
  });

  document.addEventListener("scroll", function () {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        currentSection = section.getAttribute("id");
      }
    });

    footerNavBtns.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.getAttribute("href").substring(1) === currentSection) {
        btn.classList.add("active");
      }
    });
  });

  footerNavBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      footerNavBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  projectsCount.textContent = `${projects.length} object(s)`;
  updateTime();       
});
