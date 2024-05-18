let color = 'black';
let click = true;

document.querySelector('.mode').textContent = " colouring";
function populateboard(size)
{
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size*size;
  for(let i = 0; i<amount; i++)
  {
    let square = document.createElement("div");
    square.addEventListener('mouseover',colorSquare)
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend",square);
  }

}

populateboard(16);

function changesize(input)
{
  if(input>=2 || input <= 100)
  {
    populateboard(input);
  }
  else
    console.log("too many squares");
}

function colorSquare()
{
  if(click)
  {
    if(color === 'random')
    {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      console.log(randomColor);
      this.style.backgroundColor = '#'+randomColor;
    }
    else
    {
      this.style.backgroundColor = color;
    }
  }
}


function changeColor(choice)
{
  color = choice;
}

function resetBoard(){
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector("body").addEventListener("click", ()=>{
  click = !click;
  if(click)
    document.querySelector('.mode').textContent = " colouring";
  else
    document.querySelector('.mode').textContent = " not colouring";
});


