// creating grid
const gameBoard = (function(){
    let turn = true;
    let board = [0,0,0,0,0,0,0,0,0];
    let gameEnd = false;
    //Creating Board
    const createBoard = function(){
        const container = document.querySelector('.container');
        for(let i =1;i<10;i++){
            const box = document.createElement('div');
            box.id = `grid${i}`;
            box.classList.add('box');
            container.appendChild(box);
        }
        const reset = document.querySelector('button');
        reset.addEventListener('click',resetBoard);
    }

    // Reset
    const resetBoard = function(){
        const imgs = document.querySelectorAll('img');
        imgs.forEach(key => key.remove());
        board = [0,0,0,0,0,0,0,0,0];
        turn = true; gameEnd = false;
        document.querySelector('.winner').textContent ='';
    }

    //To add X or O
    const addImage = function(event){
        if(gameEnd){return;}
        const identity = this.id.charAt(4) - 1;
        if(board[identity]){return;}
        const img = document.createElement('img');
        if(turn){
            img.src = 'images/x.png';
            this.appendChild(img);
            board[identity] = 1;
            turn = false;
        }
        else{
            img.src = 'images/o.svg';
            this.appendChild(img);
            board[identity] = 2;
            turn = true;
        }
        let winner = checkWinner();
        if(winner){
            document.querySelector('.winner').textContent = `Player ${winner} wins!`;
            gameEnd=true;
        }
        // console.log(board);
    }
    //Adding listeners to grid
    const listenBoard = ()=>{
        const grids = document.querySelectorAll('.box');
        grids.forEach(key => key.addEventListener('click',addImage));
    } 

    //Check the winner
    const checkWinner = function(){
        if(board[0] !== 0 && board[0] === board[1] &&  board[1] === board[2]){return board[0];}
        if(board[3] !== 0 && board[3] === board[4] &&  board[4] === board[5]){return board[3];}
        if(board[6] !== 0 && board[6] === board[7] &&  board[7] === board[8]){return board[6];}

        if(board[0] !== 0 && board[0] === board[3] &&  board[3] === board[6]){return board[0];}
        if(board[1] !== 0 && board[1] === board[4] &&  board[4] === board[7]){return board[1];}
        if(board[2] !== 0 && board[2] === board[5] &&  board[5] === board[8]){return board[2];}

        if(board[0] !== 0 && board[0] === board[4] &&  board[4] === board[8]){return board[0];}
        if(board[2] !== 0 && board[2] === board[4] &&  board[4] === board[6]){return board[2];}
        return 0;
    }
    return {listenBoard,createBoard};
})();


gameBoard.createBoard();
gameBoard.listenBoard();

