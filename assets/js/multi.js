var turn = 'X' ;
numberOfSteps = 0;
var finish =false;
document.getElementById('title').innerHTML='X Player'

var squares =[];
var winnerName ='';


function play(id){
  if(numberOfSteps <9){
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == ''){
      element.innerHTML= 'X'
      element.style.color='#E00800'
      turn='O'
      document.getElementById('title').innerHTML='O Player'
      numberOfSteps++;
    }
    else  if(turn === 'O' && element.innerHTML == ''){
      element.innerHTML= 'O'
      element.style.color='#C6A25B'
      turn='X'
      document.getElementById('title').innerHTML='X Player'
      numberOfSteps++;
    }
  }else{
    setTimeout(() => {
      document.getElementById('congratTitle').innerHTML = `negative draw`;
      document.querySelector('.winnerText').innerHTML = ``;
      document.getElementById('winnerPopup').style.display='block'
    finish = true;
      document.querySelector('#item1').disabled = true;
      document.querySelector('#item2').disabled = true;
      document.querySelector('#item3').disabled = true;
      document.querySelector('#item4').disabled = true;
      document.querySelector('#item5').disabled = true;
      document.querySelector('#item6').disabled = true;
      document.querySelector('#item7').disabled = true;
      document.querySelector('#item8').disabled = true;
      document.querySelector('#item9').disabled = true;
    }, 200);
  }

  winner();
  check()

}

function winner(){
  for(let i = 1 ; i<10 ; i++){
    squares[i] = document.getElementById('item' + i)?.innerHTML;
  }

  if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !=''){
    end(1,2,3);
  }
  else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !=''){
    end(4,5,6);
  }
  else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !=''){
    end(7,8,9);
  }
  else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !=''){
    end(1,4,7);
  }
  else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] !=''){
    end(2,5,8);
  }
  else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] !=''){
    end(3,6,9);
  }
  else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !=''){
    end(1,5,9);
  }
  else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] !=''){
    end(3,5,7);
  }
}

function end(num1 ,num2 ,num3 ){
  document.getElementById('item' + num1).classList.add("done");
  document.getElementById('item' + num2).classList.add("done")
  document.getElementById('item' + num3).classList.add("done")
  document.getElementById('congratTitle').innerHTML = `Congratulations ${squares[num1]} 🎉`;
  document.querySelector('.winnerText').innerHTML = `Winner`;
  document.getElementById('winnerPopup').style.display='block'
  finish = true;
  document.querySelector('#item1').disabled = true;
  document.querySelector('#item2').disabled = true;
  document.querySelector('#item3').disabled = true;
  document.querySelector('#item4').disabled = true;
  document.querySelector('#item5').disabled = true;
  document.querySelector('#item6').disabled = true;
  document.querySelector('#item7').disabled = true;
  document.querySelector('#item8').disabled = true;
  document.querySelector('#item9').disabled = true;
}

function TryAgain(){
  location.reload()
}

function check(){
  if(numberOfSteps == 9 && finish == false){
    document.getElementById('congratTitle').innerHTML = `negative draw`;
    document.querySelector('.winnerText').innerHTML = ``;
    document.getElementById('winnerPopup').style.display='block'
  finish = true;
    document.querySelector('#item1').disabled = true;
    document.querySelector('#item2').disabled = true;
    document.querySelector('#item3').disabled = true;
    document.querySelector('#item4').disabled = true;
    document.querySelector('#item5').disabled = true;
    document.querySelector('#item6').disabled = true;
    document.querySelector('#item7').disabled = true;
    document.querySelector('#item8').disabled = true;
    document.querySelector('#item9').disabled = true;
  }
}