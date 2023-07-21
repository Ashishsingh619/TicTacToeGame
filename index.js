var allCell = document.querySelectorAll("td");

var count = 0;
for (var i = 0; i < allCell.length; i++) {
  allCell[i].addEventListener("click", function () {
    play(this);
  });
}
var gameEnd=false;
function gameComplete(winner){
    var tableTag=document.querySelector("table");
    tableTag.setAttribute("border","0");
    tableTag.classList.add("gameOverDisplay");
    var resDisplayer=document.querySelector(".resultDisp");
    for (var i = 0; i < allCell.length; i++) {
        allCell[i].textContent="";
        
    }
    if(winner==="Tie"){
        var res="<td colspan='3'>"+"Its an Tie"+"</td>"
    
    }
    else{
        var res="<td colspan='3'>"+winner+" Wins"+"</td>"
    }
    resDisplayer.innerHTML=res;
    var btn=document.querySelector("button");
    btn.style.display="Block";
    btn.addEventListener("click",function(){
        location.reload();
    })
    gameEnd=true;
}

var chanceDisplayer = document.querySelector(".section3 p");
function play(obj) {
  if (obj.textContent != "X" && obj.textContent != "0" && !gameEnd) {
   
    if (count % 2 == 0) {
      obj.textContent = "X";
      chanceDisplayer.textContent = "Player 2's Chance";
      obj.setAttribute("checkItem", "X");
    } else {
      obj.textContent = "0";
      chanceDisplayer.textContent = "Player 1's Chance";
      obj.setAttribute("checkItem", "0");
    }

    if (
      allCell[0].getAttribute("checkItem") ==
        allCell[1].getAttribute("checkItem") &&
      allCell[1].getAttribute("checkItem") ==
        allCell[2].getAttribute("checkItem")
    ) {
      chanceDisplayer.textContent = allCell[0].textContent + " wins";
      gameComplete(allCell[0].textContent);
    } else if (
      allCell[3].getAttribute("checkItem") ==
        allCell[4].getAttribute("checkItem") &&
      allCell[4].getAttribute("checkItem") ==
        allCell[5].getAttribute("checkItem")
    ) {
      chanceDisplayer.textContent = allCell[3].textContent + " wins";
      gameComplete(allCell[3].textContent);
    } else if (
      allCell[6].getAttribute("checkItem") ==
        allCell[7].getAttribute("checkItem") &&
      allCell[7].getAttribute("checkItem") ==
        allCell[8].getAttribute("checkItem")
    ) {
      chanceDisplayer.textContent = allCell[6].textContent + " wins";
      gameComplete(allCell[6].textContent);
    } else if (
      allCell[0].getAttribute("checkItem") ==
        allCell[3].getAttribute("checkItem") &&
      allCell[3].getAttribute("checkItem") ==
        allCell[6].getAttribute("checkItem")
    ) {
      chanceDisplayer.textContent = allCell[3].textContent + " wins";
      gameComplete(allCell[3].textContent);
    } else if (
      allCell[1].getAttribute("checkItem") ==
        allCell[4].getAttribute("checkItem") &&
      allCell[4].getAttribute("checkItem") ==
        allCell[7].getAttribute("checkItem")
    ) {
      chanceDisplayer.textContent = allCell[4].textContent + " wins";
      gameComplete(allCell[4].textContent);
    } else if (
      allCell[2].getAttribute("checkItem") ==
        allCell[5].getAttribute("checkItem") &&
      allCell[5].getAttribute("checkItem") ==
        allCell[8].getAttribute("checkItem")
    ) {
      chanceDisplayer.textContent = allCell[2].textContent + " wins";
      gameComplete(allCell[5].textContent);
    } else if (
      allCell[0].getAttribute("checkItem") ==
        allCell[4].getAttribute("checkItem") &&
      allCell[4].getAttribute("checkItem") ==
        allCell[8].getAttribute("checkItem")
    ) {
      chanceDisplayer.textContent = allCell[0].textContent + " wins";
      gameComplete(allCell[0].textContent);
    } else if (
      allCell[2].getAttribute("checkItem") ==
        allCell[4].getAttribute("checkItem") &&
      allCell[4].getAttribute("checkItem") ==
        allCell[6].getAttribute("checkItem")
    ) {
      chanceDisplayer.textContent = allCell[2].textContent + " wins";
      gameComplete(allCell[4].textContent);
    }
    if(count>7 && !gameEnd){
        gameComplete("Tie");
        return ;
    }
  }
  count++;
}
