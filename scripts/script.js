{
  const navArr = [
    {
      imgSrc:
        "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000",

      headOne: "Building digital products, brands & experiences.",
      subHead:
        "We help brands in building beautiful websites, mobile apps and helping them carve their stories through engaging digital product experiences.",
    },
    {
      imgSrc:
        "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000",

      headOne: "Building digital products, brands & experiences.",
      subHead:
        "We help brands in building beautiful websites, mobile apps and helping them carve their stories through engaging digital product experiences.",
    },

    {
      imgSrc: "./images/backgrounds/hector-j-rivas-1FxMET2U5dU-unsplash.webp",
      headOne: "Heading 2",
      subHead: "This is the subHeading",
    },

    {
      imgSrc:
        "https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-13390.jpg?w=2000",
      headOne: "Heading 3",
      subHead: "This is the subHeading",
    },

    {
      imgSrc:
        // "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000",
        "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      headOne: "Heading 4",
      subHead: "This is the subHeading",
    },
  ];

  const homePageCarousel = document.querySelector(".section-1");
  const secOneImage = document.getElementById("secOneImage");
  const headOne = document.getElementById("main-head");
  const subHead = document.getElementById("sub-head");
  const navDots = document.querySelectorAll(".navigator-dots");
  const carouselImgDiv = document.querySelector(".section1-img-coontainer");
  const carouselTextDiv = document.querySelector(".section1-text-container ");

  const navArrow = document.querySelectorAll(".nav-arrow");
  let currInd;

  navArrow.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let direction = e.currentTarget.dataset.nav;
      navDots[currInd].classList.remove("selected-dot-background");
      if (direction === "left") {
        currInd === 0 ? (currInd = navArr.length - 1) : currInd--;
        if (secOneImage) {
          secOneImage.setAttribute("src", navArr[currInd].imgSrc);
        }
        carouselImgDiv.classList.add("translate-right-to-left");
        carouselTextDiv.classList.add("translate-right-to-left");
      } else {
        currInd === navArr.length - 1 ? (currInd = 0) : currInd++;
        if (secOneImage) {
          secOneImage.setAttribute("src", navArr[currInd].imgSrc);
        }
        carouselImgDiv.classList.add("translate-left-to-right");
        carouselTextDiv.classList.add("translate-left-to-right");
      }
      // homePageCarousel.classList.add("translate-right-to-left");
      headOne.innerText = navArr[currInd].headOne;
      subHead.innerText = navArr[currInd].subHead;
      navDots[currInd].classList.add("selected-dot-background");
      setTimeout(() => {
        if (direction === "left") {
          carouselImgDiv.classList.remove("translate-right-to-left");
          carouselTextDiv.classList.remove("translate-right-to-left");
        } else {
          carouselImgDiv.classList.remove("translate-left-to-right");
          carouselTextDiv.classList.remove("translate-left-to-right");
        }
      }, 600);
    });
  });

  function onLoad() {
    headOne.innerText = navArr[0].headOne;
    subHead.innerText = navArr[0].subHead;
    if (secOneImage) {
      secOneImage.setAttribute("src", navArr[0].imgSrc);
    }
    navDots[0].classList.add("selected-dot-background");
    currInd = 0;
  }

  onLoad();
}
