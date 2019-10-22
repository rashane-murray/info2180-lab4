var flag = 0; //used to keep track of player turn
window.onload = function(){
    this.game()
    document.getElementsByClassName("btn")[0].onclick = function(){
        for(let i = 0; i < squares.length; i++){
            squares[i].innerHTML = ("")
    }
    document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
    document.getElementById("status").classList.remove("you-won")
    hold(document.getElementById("status"))
    }   
}

/*initializes the gameplay*/
function game(){
    squares = document.querySelectorAll('#board div');    
    for(let i = 0; i < squares.length; i++){
        squares[i].classList.add("square")
        squares[i].onmouseover = function(){squares[i].classList.toggle("hover",true)}
        squares[i].onmouseout = function(){squares[i].classList.toggle("hover",false)}
        squares[i].onclick = function(){
            if (flag % 2 === 0 && squares[i].innerHTML === ""){
                squares[i].innerHTML = "X"
                squares[i].classList.toggle("X",true)
                check(squares)
                flag += 1;
            }
            else if(flag % 2 === 1 && squares[i].innerHTML === ""){
                squares[i].innerHTML = "O"
                squares[i].classList.toggle("O",true)
                check(squares)
                flag += 1;
            }
        }
    }
}

/*determines the winner*/
function check(squares){
        if (squares[0].innerHTML !== "" && squares[0].innerHTML === squares[1].innerHTML && squares[0].innerHTML === squares[2].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML =   "Congratulations! "+ squares[0].innerHTML + " is the Winner!"
         }
         else if (squares[3].innerHTML !== "" && squares[3].innerHTML === squares[4].innerHTML && squares[3].innerHTML === squares[5].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ squares[3].innerHTML + " is the Winner!"
         }
         else if (squares[6].innerHTML !== "" && squares[6].innerHTML === squares[7].innerHTML && squares[6].innerHTML === squares[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ squares[6].innerHTML + " is the Winner!"
         }
         else if (squares[0].innerHTML !== "" && squares[0].innerHTML === squares[3].innerHTML && squares[0].innerHTML === squares[6].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ squares[0].innerHTML + " is the Winner!"
         }
         else if (squares[1].innerHTML !== "" && squares[1].innerHTML === squares[4].innerHTML && squares[1].innerHTML === squares[7].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ squares[1].innerHTML + " is the Winner!"
         }
         else if (squares[0].innerHTML !== "" && squares[0].innerHTML === squares[4].innerHTML && squares[0].innerHTML === squares[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ squares[0].innerHTML + " is the Winner!"
         }
         else if (squares[6].innerHTML !== "" && squares[6].innerHTML === squares[4].innerHTML && squares[6].innerHTML === squares[2].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML =  "Congratulations! "+ squares[6].innerHTML + " is the Winner!"
         }
         else if (squares[2].innerHTML !== "" && squares[2].innerHTML === squares[5].innerHTML && squares[2].innerHTML === squares[8].innerHTML){
            document.getElementById('status').className = "you-won"
            document.getElementById('status').innerHTML = "Congratulations! "+ squares[2].innerHTML + " is the Winner!"
         }
    
}