// function of show and off dropdown menu 
// NSW
function menuNSWshow() {
    document.querySelector("#menu-vic").classList.remove("show");
    document.querySelector("#menu-qld").classList.remove("show");
    document.querySelector("#menu-wa").classList.remove("show");
    document.querySelector("#menu-sa").classList.remove("show");
    document.querySelector("#menu-act").classList.remove("show");
    document.querySelector("#menu-tas").classList.remove("show");
    document.querySelector("#menu-nt").classList.remove("show");
    document.querySelector("#menu-nsw").classList.add("show");
  }
  
  document
  .querySelector("#Nav-State-NSW")
  .addEventListener("mouseover", menuNSWshow);
  
  function dropdownmenuOffNSW() {
    document.querySelector("#menu-nsw").classList.remove("show");
  }
  document
    .querySelector("#menu-nsw")
    .addEventListener("mouseleave", dropdownmenuOffNSW);

// VIC
function menuVICshow() {
    document.querySelector("#menu-qld").classList.remove("show");
    document.querySelector("#menu-wa").classList.remove("show");
    document.querySelector("#menu-sa").classList.remove("show");
    document.querySelector("#menu-act").classList.remove("show");
    document.querySelector("#menu-tas").classList.remove("show");
    document.querySelector("#menu-nt").classList.remove("show");
    document.querySelector("#menu-nsw").classList.remove("show");
    document.querySelector("#menu-vic").classList.add("show");
}
document
.querySelector("#Nav-State-VIC")
.addEventListener("mouseover", menuVICshow);

function dropdownmenuOffVIC() {
    document.querySelector("#menu-vic").classList.remove("show");
}
document
    .querySelector("#menu-vic")
    .addEventListener("mouseleave", dropdownmenuOffVIC);

// QLD
function menuQLDshow() {
    document.querySelector("#menu-wa").classList.remove("show");
    document.querySelector("#menu-sa").classList.remove("show");
    document.querySelector("#menu-act").classList.remove("show");
    document.querySelector("#menu-tas").classList.remove("show");
    document.querySelector("#menu-nt").classList.remove("show");
    document.querySelector("#menu-nsw").classList.remove("show");
    document.querySelector("#menu-vic").classList.remove("show");
    document.querySelector("#menu-qld").classList.add("show");
}
document
.querySelector("#Nav-State-QLD")
.addEventListener("mouseover", menuQLDshow);

function dropdownmenuOffQLD() {
    document.querySelector("#menu-qld").classList.remove("show");
}
document
    .querySelector("#menu-qld")
    .addEventListener("mouseleave", dropdownmenuOffQLD);
// WA
function menuWAshow() {
    document.querySelector("#menu-sa").classList.remove("show");
    document.querySelector("#menu-act").classList.remove("show");
    document.querySelector("#menu-tas").classList.remove("show");
    document.querySelector("#menu-nt").classList.remove("show");
    document.querySelector("#menu-nsw").classList.remove("show");
    document.querySelector("#menu-vic").classList.remove("show");
    document.querySelector("#menu-qld").classList.remove("show");
    document.querySelector("#menu-wa").classList.add("show");
}
document
.querySelector("#Nav-State-WA")
.addEventListener("mouseover", menuWAshow);

function dropdownmenuOffWA() {
    document.querySelector("#menu-wa").classList.remove("show");
}
document
    .querySelector("#menu-wa")
    .addEventListener("mouseleave", dropdownmenuOffWA);
// SA
function menuSAshow() {
    document.querySelector("#menu-act").classList.remove("show");
    document.querySelector("#menu-tas").classList.remove("show");
    document.querySelector("#menu-nt").classList.remove("show");
    document.querySelector("#menu-nsw").classList.remove("show");
    document.querySelector("#menu-vic").classList.remove("show");
    document.querySelector("#menu-qld").classList.remove("show");
    document.querySelector("#menu-wa").classList.remove("show");
    document.querySelector("#menu-sa").classList.add("show");
}
document
.querySelector("#Nav-State-SA")
.addEventListener("mouseover", menuSAshow);

function dropdownmenuOffSA() {
    document.querySelector("#menu-sa").classList.remove("show");
}
document
    .querySelector("#menu-sa")
    .addEventListener("mouseleave", dropdownmenuOffSA);
// ACT
function menuACTshow() {
    document.querySelector("#menu-tas").classList.remove("show");
    document.querySelector("#menu-nt").classList.remove("show");
    document.querySelector("#menu-nsw").classList.remove("show");
    document.querySelector("#menu-vic").classList.remove("show");
    document.querySelector("#menu-qld").classList.remove("show");
    document.querySelector("#menu-wa").classList.remove("show");
    document.querySelector("#menu-sa").classList.remove("show");
    document.querySelector("#menu-act").classList.add("show");
}
document
.querySelector("#Nav-State-ACT")
.addEventListener("mouseover", menuACTshow);

function dropdownmenuOffACT() {
    document.querySelector("#menu-act").classList.remove("show");
}
document
    .querySelector("#menu-act")
    .addEventListener("mouseleave", dropdownmenuOffACT);
// TAS
function menuTASshow() {
    document.querySelector("#menu-nt").classList.remove("show");
    document.querySelector("#menu-nsw").classList.remove("show");
    document.querySelector("#menu-vic").classList.remove("show");
    document.querySelector("#menu-qld").classList.remove("show");
    document.querySelector("#menu-wa").classList.remove("show");
    document.querySelector("#menu-sa").classList.remove("show");
    document.querySelector("#menu-act").classList.remove("show");
    document.querySelector("#menu-tas").classList.add("show");
}
document
.querySelector("#Nav-State-TAS")
.addEventListener("mouseover", menuTASshow);

function dropdownmenuOffTAS() {
    document.querySelector("#menu-tas").classList.remove("show");
}
document
    .querySelector("#menu-tas")
    .addEventListener("mouseleave", dropdownmenuOffTAS);
// NT
function menuNTshow() {
    document.querySelector("#menu-nsw").classList.remove("show");
    document.querySelector("#menu-vic").classList.remove("show");
    document.querySelector("#menu-qld").classList.remove("show");
    document.querySelector("#menu-wa").classList.remove("show");
    document.querySelector("#menu-sa").classList.remove("show");
    document.querySelector("#menu-act").classList.remove("show");
    document.querySelector("#menu-tas").classList.remove("show");
    document.querySelector("#menu-nt").classList.add("show");
}
document
.querySelector("#Nav-State-NT")
.addEventListener("mouseover", menuNTshow);

function dropdownmenuOffNT() {
    document.querySelector("#menu-nt").classList.remove("show");
}
document
    .querySelector("#menu-nt")
    .addEventListener("mouseleave", dropdownmenuOffNT);

// gallery button on mobile
function showGallery() {
    document.querySelector(".galleryMenu-Mobile").classList.add("show-mobile");
    console.log('11')
}
document.querySelector("#hamburgerButton").addEventListener("click",showGallery);
// gallery switch off 
document.querySelector("#close-gallery-button").addEventListener("click",gallerySwitchOff);
function gallerySwitchOff() {
    document.querySelector(".galleryMenu-Mobile").classList.remove("show-mobile");   
}

// search engine

const goButton = document.querySelector("#submit-button")

goButton.addEventListener("click", gotoDesiredCity)


function gotoDesiredCity(event) {

    const city = document.getElementById("city-name-input").value
    const cityTrim = city.toLowerCase().trim()
    event.preventDefault();
  
    switch(cityTrim) {
        case "ade":
        case "adelaide":
        window.open("./city_Adelaide.html", "_self");  
        break;

        case "ballarat":
        window.open("./city_Ballarat.html", "_self");  
        break;

        case "bris":
        case "brisbane":
        window.open("./city_Brisbane.html", "_self");  
        break;

        case "bendigo":
        window.open("./city_Bendigo.html", "_self");  
        break;

        case "cai":
        case "cairns":
        window.open("./city_Cairns.html", "_self");  
        break;

        case "can":
        case "canberra":
        window.open("./city_Canberra.html", "_self");  
        break;

        case "dar":
        case "darwin":
        window.open("./city_Darwin.html", "_self");  
        break;

        case "ade":
        case "adelaide":
        window.open("./city_Adelaide.html", "_self");  
        break;

        case "gee":
        case "geelong":
        window.open("./city_Geelong.html", "_self");  
        break;

        case "gc":
        case "gold":
        case "coast":
        case "goldcoast":
        window.open("./city_GoldCoast.html", "_self");  
        break;

        case "ade":
        case "adelaide":
        window.open("./city_Adelaide.html", "_self");  
        break;

        case "hobart":
        window.open("./city_Hobart.html", "_self");  
        break;

        case "mel":
        case "melbourne":
        window.open("./city_Melbourne.html", "_self");  
        break;

        case "newcastle":
        window.open("./city_Newcastle.html", "_self");  
        break;

        case "perth":
        window.open("./city_Perth.html", "_self");  
        break;

        case "albury":
        window.open("./city_sample_Albury.html", "_self");  
        break;

        case "syd":
        case "sydney":
        window.open("./city_Sydney.html", "_self");  
        break;
        
        case "too":
        case "toowoomba":
        window.open("./city_Toowoomba.html", "_self");  
        break;

        case "townsville":
        window.open("./city_Townsville.html", "_self");  
        break;

        case "wollongong":
        window.open("./city_Wollongong.html", "_self");  
        break;
        
    }

}
