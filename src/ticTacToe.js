
            //for (var i = 0; i < 10; i++) {
                //document.write(i + "<br>");
                //console.log("BLAH:" + i)//console.log is only code you can see
            //}
   
            var GRID_SIZE = 3;
            function ticTacToeGame() {
              this.grid = null;
              this.initializeBoard = function(gridSize){
                  this.grid = new Array(gridSize);//creates gridSize rows
                  for(var row = 0; row < gridSize; row++){
                    this.grid[row] = new Array(gridSize);//inside of rows,creates gridSize columns
                  }
                  
                  for (var row = 0; row < this.grid.length; row++) {
                    for (var col = 0; col < this.grid[row].length; col++) {
                      this.grid[row][col] = "_";
                    }
                  }
              };
              this.drawBoard = function(){
                for(var row = 0;row < this.grid.length;row++){
                  for(var col = 0; col < this.grid[row].length; col++){
                    document.write(this.grid[row][col] + " ");
                    
                  }
                  document.write("<br>");
                }
                document.write("<hr>");
              };
              this.showHelp = function() {
                console.log("HELPME!!!");
              };
              this.checkWin = function() {
                for(var row = 0; row < this.grid.length; row++){
                  for(var col = 0 ; col < this.grid[row].length ;col++){
                    if(this.grid[row]=== "x"||this.grid[checkCol]=== "x"){
                      alert("player 1 wins!");
                    }
                  }
                }
              }
            };
          
            
            var t = new ticTacToeGame();
            t.initializeBoard(GRID_SIZE);
            //t.grid[1][1] = "x";
            t.drawBoard();
            var winner = "";
            var userOneRow =0;
            var u1row = 0;
            var userOneCol = 0;
            var u1col = 0;
            var userTwoRow =0;
            var u2row = 0;
            var userTwoCol = 0;
            var u2col = 0;
            var winningXMarksRow = 0;
            var winningXMarksCol = -1;
            var XDiagL = 0;
            var XDiagR = 0;
            var winningOMarksRow = 0;
            var winningOMarksCol = -1;
            var ODiagL = 0;
            var ODiagR = 0;
            
            var gameGoing = true;
            while (gameGoing){
              var asking = true;
              while(asking){
                userOneRow = prompt("Player 1, what row would you like to make your move?");//make sure to subtract one from the input
                u1row = parseInt(userOneRow) - 1; 
                //console.log(u1row);
                userOneCol = prompt("Player 1,what column would you like to make your move?");                
                u1col = parseInt(userOneCol) - 1;
                //console.log(u1col);
                if(isNaN(u1row) || isNaN(u1col)){
                  alert("invalid coordinates!!!");
                }else if (((u1row > GRID_SIZE || u1row < 0) || (u1col > GRID_SIZE || u1col < 0)) || (t.grid[u1row][u1col] !== "_")){
                      alert("invalid coordinates!!!");                
                  } else {
                      t.grid[u1row][u1col] = "x";
                      t.drawBoard();
                      asking = false;
                      console.log(gameGoing);
                    }                                         
                  };
                
              
              for(var col = 0; col < t.grid.length;col++){
                if(t.grid[u1row][col] === "x"){
                  winningXMarksRow++;
                  console.log(winningXMarksRow);
                }
              };
              
              for(var row = 0; row < t.grid.length;row++){
                if(t.grid[row][u1col] === "x"){
                  winningXMarksCol++;
                  console.log(winningXMarksCol);
                }
              };
            
              
              for(var row = 0; row < t.grid.length;row++){
                for (var col = 0; col < t.grid[row].length;col++){
                  if(t.grid[row][col] === "x"){
                    if(row === col){
                    XDiagL++;
                    }
                  }
                }
              };
              
              for(var row = 0; row < t.grid.length;row++){
                for(var col = 0;col < t.grid[row].length;col++){
                  if(t.grid[row][col] === "x"){
                    if((row + col)/(t.grid.length - 1) === 1){
                      XDiagR ++;
                    }
                  }  
                }
              };
              
           
             if((winningXMarksRow === 3 || winningXMarksCol === 3 || XDiagL === 3 || XDiagR === 3)){
                alert("PLAYER 1! WINS!!!");
                winner = "player 1";
                gameGoing =false;
                //console.log(gameGoing);
             };
              
              while(gameGoing === false){
                alert("good job! " + winner);
              };
    
    
    
    
              asking = true;
              while(asking){
                userTwoRow = prompt("Player 2,what row would you like to make your move?");//make sure to subtract one from the input
                u2row = parseInt(userTwoRow) - 1;
                //console.log(u2row);
                userTwoCol = prompt("Player 2,what column would you like to make your move?");
                u2col = parseInt(userTwoCol) - 1;  
                //console.log(u2col);
                if(isNaN(u2row) || isNaN(u2col)){
                  alert("invalid coordinates!!!");
                }else{
                  if (((u2row > GRID_SIZE || u2row < 0) || (u2col > GRID_SIZE || u2col < 0) || (t.grid[u2row][u2col] !== "_"))){
                  alert("invalid coordinates!!!");                    
                  } else {
                    t.grid[u2row][u2col] = "o";
                    t.drawBoard();
                    asking = false;
                    console.log(gameGoing);
                  }           
                }
              };
            
              
              for(var col = 0; col < t.grid.length;col++){
                if(t.grid[u2row][col] === "x"){
                  winningOMarksRow++;
                  console.log(winningOMarksRow);
                }
              };
              
              for(var row = 0; row < t.grid.length;row++){
                if(t.grid[row][u1col] === "x"){
                  winningOMarksCol++;
                  console.log(winningOMarksCol);
              }
            };
              
              for(var row = 0; row < t.grid.length;row++){
                for (var col = 0; col < t.grid[row].length;col++){
                  if(t.grid[row][col] === "x"){
                    if(row === col){
                    ODiagL++;
                    }
                  }
                }
              };
              
              for(var row = 0; row < t.grid.length;row++){
                for(var col = 0;col < t.grid[row].length;col++){
                  if(t.grid[row][col] === "x"){
                    if((row + col)/(t.grid.length - 1) === 1){
                      ODiagR ++;
                    }
                  }  
                }
              };
              
              if((winningOMarksRow === 3 || winningOMarksCol === 3 || ODiagL === 3 || ODiagR === 3)){
                alert("PLAYER 2! WINS!!!");
                winner = "player 2";
                gameGoing =false;
                //console.log(gameGoing);
             };
             
             while(gameGoing === false){
                alert("good job! " + winner);
              };
              //if(winningOMarksRow > 2 || winningOMarksCol > 2 || ODiagL > 2 || ODiagR > 2){
                //alert("PLAYER 2! WINS!!!");
              //};
              //if(/*(winningXMarksRow < 3 || winningXMarksCol < 3 || XDiagL < 3 || XDiagR < 3) */(winningOMarksRow === 3 || winningOMarksCol === 3 || ODiagL === 3 || ODiagR === 3 )){
                //alert("PLAYER 2! WINS!!!");
                //gameGoing = false;
                //console.log(gameGoing);
              //}else{
                //gameGoing = true;
                //console.log(gameGoing);
              //};
              
            };
            
            
            
            
             
