let searsh = document.querySelector(".special");
let inp = document.querySelector("input");
let btnWhenSmall = document.querySelector(".toggle-menu");
let btnOfScreenSmall = document.querySelector(".btn");
let link = document.querySelector("a")


/* code of search*/
searsh.addEventListener("click", () => {
        searsh.style.marginLeft = "10px";
        searsh.style.marginTop = "5px";
        link.style.padding = "50px 0px !important";



        if (inp.style.display === "block") {
            inp.style.display = "none"
        } else { inp.style.display = "block" }

    })
    /* code of btnWhenSmall of header*/
btnWhenSmall.addEventListener("click", () => {
    if (btnOfScreenSmall.style.display === "none") {
        btnOfScreenSmall.style.display = "block"
    } else { btnOfScreenSmall.style.display = "none" }
})



/************* button of more for see more photos *************/
let btnDivMORE = document.querySelector(".btnDiv");
let allImageSpecial = document.querySelectorAll(".imgSpes")
let btnDIv = document.querySelector(".btnDivMore")

allImageSpecial.forEach((elm) => {
    elm.style.display = "none";

})

btnDivMORE.addEventListener("click", () => {
        allImageSpecial.forEach((elm) => {
            if (elm.style.display === "none") {
                btnDIv.innerHTML = "BACK &#8593;"
                elm.style.display = "block";


            } else {
                btnDIv.innerHTML = "MORE"
                elm.style.display = "none"
            }
        })
    })
    /********************** display backend frontend ext ....*******************/

let frontend = document.querySelector(".frontEnd");
let backend = document.querySelector(".backEnd");
let point = document.querySelector(".point");
let APP = document.querySelector(".APP");
let allImage = document.querySelector(".images")
    /** all button **/
let all = document.querySelector(".all");
let ap = document.querySelector(".ap");
let FE = document.querySelector(".FE")
let BE = document.querySelector(".BE")
let PT = document.querySelector(".PT")

frontend.style.display = "none";
backend.style.display = "none";
point.style.display = "none";
APP.style.display = "none";


all.addEventListener("click", () => {
    allImage.style.display = "flex"
    frontend.style.display = "none";
    backend.style.display = "none";
    point.style.display = "none";
    APP.style.display = "none";
})
ap.addEventListener("click", () => {
    allImage.style.display = "none"
    frontend.style.display = "none";
    backend.style.display = "none";
    point.style.display = "none";
    APP.style.display = "flex";
})
FE.addEventListener("click", () => {
    allImage.style.display = "none"
    frontend.style.display = "flex";
    backend.style.display = "none";
    point.style.display = "none";
    APP.style.display = "none";
})
BE.addEventListener("click", () => {
    allImage.style.display = "none";
    frontend.style.display = "none";
    backend.style.display = "flex";
    point.style.display = "none";
    APP.style.display = "none";
})
PT.addEventListener("click", () => {
    allImage.style.display = "none"
    frontend.style.display = "none";
    backend.style.display = "none";
    point.style.display = "flex";
    APP.style.display = "none";
})


/************** video ****************/
let video = document.getElementById("video");
let restVideos = document.querySelector(".restVideos")
let btnOfRestVideos = document.querySelector(".btnOfRestVideos")
let captionOfVideo = document.getElementById("captionOfVideo")
let count = 0;

video.addEventListener("play", () => {
    captionOfVideo.style.display = "none";
})
video.addEventListener("pause", () => {
    captionOfVideo.style.display = "block";
})

restVideos.style.display = "none";

btnOfRestVideos.addEventListener("click", () => {
    if (restVideos.style.display === "none") {
        btnOfRestVideos.innerHTML = "BACK &#8593;"
        restVideos.style.display = "flex";
    } else {
        btnOfRestVideos.innerHTML = "SEE MORE"
        restVideos.style.display = "none";
    }
})

/************************* UP *************************/
let up = document.querySelector(".up");


window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if (scrollY > 200) {
        up.style.display = "block"

    } else { up.style.display = "none" }
})