let homeScore = 0;
let awayScore = 0;

let home = document.getElementById("homeScore");
let away = document.getElementById("awayScore");
let started = false;

function add(team, point){
    if(team == 'home'){
        homeScore += point;
        home.textContent = homeScore.toString();
    } else if(team == 'away'){
        awayScore += point;
        away.textContent = awayScore.toString();
    }
    
    if(homeScore > awayScore){
        document.getElementById("homeScoreDiv").style.boxShadow = "0 0 15px #FFFFFF";
        document.getElementById("awayScoreDiv").style.boxShadow = "none";
    } else if(awayScore > homeScore){
        document.getElementById("awayScoreDiv").style.boxShadow = "0 0 15px #FFFFFF";
        document.getElementById("homeScoreDiv").style.boxShadow = "none";
    } else {
        document.getElementById("awayScoreDiv").style.boxShadow = "none";
        document.getElementById("homeScoreDiv").style.boxShadow = "none";
    }
}

function newGame(){
    homeScore = 0;
    home.textContent = "0";
    document.getElementById("homeScoreDiv").style.boxShadow = "none";
    awayScore = 0;
    away.textContent = "0";
    document.getElementById("awayScoreDiv").style.boxShadow = "none";
}
