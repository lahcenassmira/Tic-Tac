
let title = document.querySelector('.title');
let turn = "x";
let squares = []; //ga3 square kinin wst hd array
// had fct sahlat 3lya nb9a n3awdha fi kol condition  
function end(num1,num2,num3){
   title.innerHTML = `${squares[num1]} Winner`;
  title.style.color = "green";
  document.getElementById('item' + num1).style.background = "green";
  document.getElementById('item' + num2).style.background = "green";
  document.getElementById('item' + num3).style.background = "green";
  setInterval(() => title.innerHTML += "." , 1000); // ... 
  setTimeout( () => location.reload(),4000);
}
function winner() {
    for (let i = 1; i < 10; i++) {
        //hna dart i tbda bi wa7d mn ba3d fi item ibda itabi 1 et 2 ... item1 ..etc
        squares[i] = document.getElementById('item' + i).innerHTML;  // ghdi ijin 9 l3anasir + khasni n9arn innerHTML X O

    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
           end(1,2,3)
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
        end(4,5,6)
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
        end(7,8,9)
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        end(1,4,7)
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        end(2,5,8)
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[5] != '') {
        end(3,6,9)
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
        end(1,5,9)
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
        end(3,5,7)
    }
}
function game(id) {
    let ele = document.getElementById(id);
    if (turn === "x" && ele.innerHTML === "") {
        ele.innerHTML = "x";
        turn = "o";
        title.innerHTML = "0"

    }
    else if (turn === "o" && ele.innerHTML === "") {
        ele.innerHTML = "o";
        turn = "x";
        title.innerHTML = "x"
    }
    winner();
}



