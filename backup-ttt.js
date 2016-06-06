// var x = document.getElementById("X");
var turn = 'X';
var winner = null;

function clearBox (number) {
  document.getElementById(number).innerHTML = "";
}


$('#newGame').click(function() {
  for(var i=0; i<9; i++) {
    clearBox(i);
  }
  winner = null;


})

function playerBackground (player) {
  if(player === 'X') {
    document.body.style.backgroundColor = "blue";
  }
  else if(player === 'O') {
    document.body.style.backgroundColor = "green";
  }
  else {
    document.body.style.backgroundColor = "yellow";
  }
}


function startGame () {
  if(Math.random() < 0.5) {
    turn = "O";
  }

  setPlayer(turn);

}

function setPlayer(player) {
    document.getElementById(player).style.color = "black";
}

function revertPlayer (player) {
  document.getElementById(player).style.color = "grey";
}

$('td').click(function (square) {
  console.log(square);
  if(winner !== null) {
    alert(winner + " already won the game.");
  } else if(square.currentTarget.innerHTML == "") {
    $(this).html(turn);
    switchTurn();
    // console.log(findWinner("X"));
    // console.log(getBox("0"));
    // console.log(checkRow(0,1,2,'X'));
   }
  else {
    alert("This position is already used");
   }
})


function switchTurn() {
  if(findWinner(turn)) {
    alert("Congratulations " + turn + ", you win!");
    winner = turn;
  } else if(turn === 'X') {
    turn = 'O';
    revertPlayer('X');
  }
  else {
    turn = 'X';
    revertPlayer('O');
  }
  setPlayer(turn);
  playerBackground(turn);
}

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
