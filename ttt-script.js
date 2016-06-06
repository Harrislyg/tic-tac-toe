var turn = 'X';
var winner = null;


// function setPlayer(player) {
//     document.getElementById(player).style.color = "black";
// }
//
// function revertPlayer (player) {
//   document.getElementById(player).style.color = "grey";
// }


function startGame () {
  if(Math.random() < 0.5) {
    turn = "O";
  } else {
    turn = 'X';
  }

  if(turn == "X") {
    playerPerson();
  }
  else {
    comPlayer();
  }

}


function playerPerson() {
  $('td').on("click", function (square){
    console.log("Click");
    $('td').off("click");

    if(square.currentTarget.innerHTML == "") {
      $(this).html("X");
    }
    else {
      alert("This position is already used");
    }

    if(findWinner(turn)) {
      alert("Player 1 WIN!")

    } else{
      turn = 'O';

      setTimeout(comPlayer, 500);
    }
  })



};

//   if(findWinner(turn)) {
//     winner = turn;
//   }
//
// // alert(winner + " already won the game.");
//
//WINNING CONDITION
function findWinner (move) {
  var result = false;
  if(checkRow(0,1,2,move) || checkRow(3,4,5,move) || checkRow(6,7,8,move) || checkRow(0,3,6,move) || checkRow(1,4,7, move) || checkRow(2,5,8,move) || checkRow(0,4,8, move) || checkRow(2,4,6,move)) {
    result = true;
  }
  return result;
}

function checkRow (a,b,c,move) {
  var result = false;
  if(getBox(a)==move && getBox(b)==move && getBox(c)==move) {
    result = true;
  }
  return result;
}

//To retrieve the box
function getBox (number) {
  return document.getElementById(number).innerText;
}
//END OF WINNING CONDITION



var comPlayer = function () {
  console.log('Computer turn');
  var myIndex = Math.floor(Math.random() * 8);

  if($('#' + myIndex).html() === "") {
    $('#' + myIndex).html("O")
  }
  else {
    myIndex = Math.floor(Math.random()*8);
    comPlayer();
    return;//to stop recursion
  }

  if(findWinner(turn)) {
    alert("Player 2 WIN!")
  } else{
    turn = 'X';
    playerPerson();

  }

}
