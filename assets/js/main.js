let imgArr = [
    "assets/img/rock.png",
    "assets/img/paper.png",
    "assets/img/scissors.png"
];
let compImg = document.querySelector("#resultsUserImg img");
let resultsUserImgPoints = document.querySelector("#resultsUserImgPoints");
let resultsUser = document.querySelector("#resultsUser");
let resultsComp = document.querySelector("#resultsComp");
let rounds = document.querySelector("#rounds");
let buttons = document.querySelector("#buttons");
let buttons1 = document.querySelector("#buttons1");

let resultUser = 0;
let resultComp = 0;
let trys=0;
function enter(a) {
    let rnd = Math.floor(Math.random() * imgArr.length);
    trys+=1;
    compImg.setAttribute("src", imgArr[rnd]);
    if (a == rnd) {
        resultsUserImgPoints.innerHTML = "Draw";
        trys-=1;
    }
    if (a == 0 && rnd == 1) {
        resultsUserImgPoints.innerHTML = "You lose";
        resultComp += 1;
        resultsComp.innerHTML = resultComp
    }
    if (a == 0 && rnd == 2) {
        resultsUserImgPoints.innerHTML = "You win";
        resultUser += 1;
        resultsUser.innerHTML = resultUser
    }
    if (a == 1 && rnd == 0) {
        resultsUserImgPoints.innerHTML = "You win";
        resultUser += 1;
        resultsUser.innerHTML = resultUser
    }
    if (a == 1 && rnd == 2) {
        resultsUserImgPoints.innerHTML = "You lose";
        resultComp += 1;
        resultsComp.innerHTML = resultComp
    }
    if (a == 2 && rnd == 0) {
        resultsUserImgPoints.innerHTML = "You lose";
        resultComp += 1;
        resultsComp.innerHTML = resultComp
    }
    if (a == 2 && rnd == 1) {
        resultsUserImgPoints.innerHTML = "You win";
        resultUser += 1;
        resultsUser.innerHTML = resultUser
    }
    if(trys==rounds.value){
        buttons.style.display = "none"
        buttons1.style.display = "block"
        if(resultUser<resultComp){
            resultsUserImgPoints.innerHTML="Computer Wins";
            resultsUserImgPoints.style.color="red";
        }if(resultUser>resultComp){
            resultsUserImgPoints.innerHTML="User Wins";
            resultsUserImgPoints.style.color="green";
        }else{
            resultsUserImgPoints.innerHTML="Draw";
        }
    }
}
function reload(){
    location.reload();
};