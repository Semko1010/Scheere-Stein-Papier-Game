let imgArr = [
    "assets/img/rock.png",
    "assets/img/paper.png",
    "assets/img/scissors.png"
];
let compImg = document.querySelector("#resultsUserImg img");
let resultsUserImgPoints = document.querySelector("#resultsUserImgPoints");
let resultsUser = document.querySelector("#resultsUser");
let resultsComp = document.querySelector("#resultsComp");

let resultUser = 0;
let resultComp = 0;

function enter(a) {
    let rnd = Math.floor(Math.random() * imgArr.length);
    compImg.setAttribute("src", imgArr[rnd]);
    if (a == rnd) {
        resultsUserImgPoints.innerHTML = "Again";
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
}