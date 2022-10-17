let homeStoreEl = document.getElementById("scoreBgH")
let guestStoreEl = document.getElementById("scoreBgG")
let homeScore = 0
let guestScore = 0

let highlighterWH = document.getElementById("home-el")
let highlighterWG = document.getElementById("guest-el")


function highlightedW(){
    if(homeScore > guestScore){
        highlighterWH.style.color = "#A5C9CA";
        highlighterWH.style.border = "thick dotted #A5C9CA";
        highlighterWH.style.marginTop = "30px";
        
        highlighterWG.style.color = "#9AABD8";
        highlighterWG.style.border = "none";
        highlighterWG.style.marginTop = "40px";
        
        
    } else if (homeScore < guestScore){
        highlighterWG.style.color = "#A5C9CA";
        highlighterWG.style.border = "thick dotted #A5C9CA";
        highlighterWG.style.marginTop = "30px";
        
        highlighterWH.style.color = "#9AABD8";
        highlighterWH.style.border = "none";
        highlighterWH.style.marginTop = "40px";
        
        
    } else {
        highlighterWG.style.color = "#9AABD8";
        highlighterWG.style.border = "none";
        highlighterWG.style.marginTop = "40px";
        
        highlighterWH.style.color = "#9AABD8";
        highlighterWH.style.border = "none";
        highlighterWH.style.marginTop = "40px";
    }
    
    
}

function addH1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
    console.log(homeScore)
    highlightedW()

}
function addH2(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
    console.log(homeScore)
    highlightedW()
}

function addH3(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
    console.log(guestScore)
    highlightedW()
}


function addG1(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
    console.log(guestScore)
    highlightedW()
}
function addG2(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
    console.log(guestScore)
    highlightedW()

}
function addG3(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
    console.log(guestScore)
    highlightedW()
}

