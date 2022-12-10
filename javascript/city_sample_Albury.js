// switch between different dimensions
const climate = document.querySelector("#climate")
climate.addEventListener("click",showContent1);
function showContent1() {
    document.querySelector("#climate-content").setAttribute("style","display: block")
    document.querySelector("#economy-content").setAttribute("style","display: none")
    document.querySelector("#population-content").setAttribute("style","display: none")
    document.querySelector("#culture-content").setAttribute("style","display: none")
}

const economy= document.querySelector("#economy")
economy.addEventListener("click",showContent2);
function showContent2() {
    document.querySelector("#climate-content").setAttribute("style","display: none")
    document.querySelector("#economy-content").setAttribute("style","display: block")
    document.querySelector("#population-content").setAttribute("style","display: none")
    document.querySelector("#culture-content").setAttribute("style","display: none")
}
const population= document.querySelector("#population")
population.addEventListener("click",showContent3);
function showContent3() {
    document.querySelector("#climate-content").setAttribute("style","display: none")
    document.querySelector("#economy-content").setAttribute("style","display: none")
    document.querySelector("#population-content").setAttribute("style","display: block")
    document.querySelector("#culture-content").setAttribute("style","display: none")
}
const culture= document.querySelector("#culture")
culture.addEventListener("click",showContent4);
function showContent4() {
    document.querySelector("#climate-content").setAttribute("style","display: none")
    document.querySelector("#economy-content").setAttribute("style","display: none")
    document.querySelector("#population-content").setAttribute("style","display: none")
    document.querySelector("#culture-content").setAttribute("style","display: block")
}