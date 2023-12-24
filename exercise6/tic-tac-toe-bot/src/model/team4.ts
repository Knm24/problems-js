<<<<<<< HEAD
import Bot from "./Bot";
import Piece from "../types/Piece.ts";

class Team4 extends Bot {
  constructor() {
    super("Team 4", "/public/team44.webp");
  }

  
  move(board: Piece[], L3_37_OurBot: Piece) {
  
 

    let enemyPieceSymbol = "o";
    
    if (L3_37_OurBot == 'o')
    {
       enemyPieceSymbol = "x";
    }

    

    let checkUtyMovDiagonal = this.checkUtyMovDiagonal(board, L3_37_OurBot);
 
 
    if(checkUtyMovDiagonal !== undefined) {
      return checkUtyMovDiagonal;
    }

    
    let checkUtyMovVertical = this.checkUtyMovVertical(board, L3_37_OurBot);
 
 
    if(checkUtyMovVertical !== undefined) {
      return checkUtyMovVertical;
    }

        
    let checkUtyMovHorizontal = this.checkUtyMovHorizontal(board, L3_37_OurBot);
 
 
    if(checkUtyMovHorizontal !== undefined) {
      return checkUtyMovHorizontal;
    }


    

    let checkEnemyMovHorizontal = this.checkEnemyMovHorizontal(board, enemyPieceSymbol);
 
 
    if(checkEnemyMovHorizontal !== undefined) {
      return checkEnemyMovHorizontal;
    }


    let checkEnemyMovVertical = this.checkEnemyMovVertical(board, enemyPieceSymbol);
 
 
    if(checkEnemyMovVertical !== undefined) {
      return checkEnemyMovVertical;
    }

    let checkEnemyMovDiagonal = this.checkEnemyMovDiagonal(board, enemyPieceSymbol);
 
 
    if(checkEnemyMovDiagonal !== undefined) {
      return checkEnemyMovDiagonal;
    }


    
    

    if (board[4] === "") {
        return 4;
    }

    
    const corners = [0, 8, 6, 2];
    for (const corner of corners) {
        if (board[corner] === "") {
            return corner;
        }
    }


    return this.getRandomMove(board);
}

private getRandomMove(board: Piece[]) {
    


    const availableMoves = this.getAvailableMoves(board);

    if (availableMoves.length === 0) {
        
        return -1; 
    }

    
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
}

private getAvailableMoves(board: Piece[]) {
    const availableMoves: number[] = [];

    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            availableMoves.push(i);
        }
    }

    return availableMoves;
}


  private checkEnemyMovHorizontal(board:Piece[], EnemyPieceSymbol: string){
      

    for (let i = 0; i < board.length; i++) { 

      //eki
      if (board[i] === "" && board[4] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[3] == '' ? 3 : undefined;
        }
        else if (board[i] === "" && board[3] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[4] == '' ? 4 : undefined;
        }
        else if (board[i] === "" && board[3] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[5] == '' ? 5 : undefined;
        }

        // bir
        if (board[i] === "" && board[1] === EnemyPieceSymbol && board[2] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[0] == '' ? 0 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[2] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[1] == '' ? 1 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[1] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[2] == '' ? 2 : undefined;
        }
        
               // ush
                     if (board[i] === "" && board[7] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[6] == '' ? 6 : undefined;
                      }
                      else if (board[i] === "" && board[6] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[7] == '' ? 7 : undefined;
                      }
                      else if (board[i] === "" && board[6] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[8] == '' ? 8 : undefined;
                      }

                      
    }

    return undefined;
  }



  private checkEnemyMovVertical(board:Piece[], EnemyPieceSymbol: string){
      

    for (let i = 0; i < board.length; i++) { 

      //bir
        if (board[i] === "" && board[3] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
        return board[0] == '' ? 0 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[3] == '' ? 3 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[3] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[6] == '' ? 6 : undefined;
        }
              // eki
              else if (board[i] === "" && board[4] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[1] == '' ? 1 : undefined;
                }
                else if (board[i] === "" && board[1] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[4] == '' ? 4 : undefined;
                }
                else if (board[i] === "" && board[1] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[7] == '' ? 7 : undefined;
                }
                    // ush
                    else if (board[i] === "" && board[5] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                      return board[2] == '' ? 2 : undefined;
                      }
                      else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                      return board[5] == '' ? 5 : undefined;
                      }
                      else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                      return board[8] == '' ? 8 : undefined;
                      }

    }

    return undefined;
  }

  
  private checkUtyMovHorizontal(board:Piece[], EnemyPieceSymbol: string){
      

    for (let i = 0; i < board.length; i++) { 


      //eki
      if (board[i] === "" && board[4] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[3] == '' ? 3 : undefined;
        }
        else if (board[i] === "" && board[3] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[4] == '' ? 4 : undefined;
        }
        else if (board[i] === "" && board[3] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[5] == '' ? 5 : undefined;
        }

        // bir
        if (board[i] === "" && board[1] === EnemyPieceSymbol && board[2] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[0] == '' ? 0 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[2] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[1] == '' ? 1 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[1] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[2] == '' ? 2 : undefined;
        }
        
               // ush
                     if (board[i] === "" && board[7] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[6] == '' ? 6 : undefined;
                      }
                      else if (board[i] === "" && board[6] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[7] == '' ? 7 : undefined;
                      }
                      else if (board[i] === "" && board[6] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[8] == '' ? 8 : undefined;
                      }

                      
    }

    return undefined;
  }



    private checkEnemyMovDiagonal(board:Piece[], EnemyPieceSymbol: string){
      

      for (let i = 0; i < board.length; i++) { 
  
        // sol zhak
          if (board[i] === "" && board[4] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
          // utyga shamam bermeimys 
          return board[0] == '' ? 0 : undefined;
          }
          else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
          // utyga shamam bermeimys 
            return board[4] == '' ? 4 : undefined;
          }
          else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
          // utyga shamam bermeimys 
            return board[8] == '' ? 8 : undefined;
          }
                // on zhak
                else if (board[i] === "" && board[4] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
                  // utyga shamam bermeimys 
                  return board[2] == '' ? 2 : undefined;
                  }
                  else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
                  // utyga shamam bermeimys 
                  return board[4] == '' ? 4 : undefined;
                  }
                  else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
                  // utyga shamam bermeimys 
                  return board[6] == '' ? 6 : undefined;
                  }
                     
  
      }
    return undefined;
  }



  
  private checkUtyMovDiagonal(board:Piece[], EnemyPieceSymbol: string){
      

    for (let i = 0; i < board.length; i++) { 

      // sol zhak
        if (board[i] === "" && board[4] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
        return board[0] == '' ? 0 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[4] == '' ? 4 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[8] == '' ? 8 : undefined;
        }
              // on zhak
              else if (board[i] === "" && board[4] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[2] == '' ? 2 : undefined;
                }
                else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[4] == '' ? 4 : undefined;
                }
                else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[6] == '' ? 6 : undefined;
                }
                   

    }
  return undefined;
}



private checkUtyMovVertical(board:Piece[], EnemyPieceSymbol: string){
      

  for (let i = 0; i < board.length; i++) { 

    //bir
      if (board[i] === "" && board[3] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
      // utyga shamam bermeimys 
      return board[0] == '' ? 0 : undefined;
      }
      else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
      // utyga shamam bermeimys 
        return board[3] == '' ? 3 : undefined;
      }
      else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[3] === EnemyPieceSymbol) {
      // utyga shamam bermeimys 
        return board[6] == '' ? 6 : undefined;
      }
            // eki
            else if (board[i] === "" && board[4] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
              // utyga shamam bermeimys 
              return board[1] == '' ? 1 : undefined;
              }
              else if (board[i] === "" && board[1] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
              // utyga shamam bermeimys 
              return board[4] == '' ? 4 : undefined;
              }
              else if (board[i] === "" && board[1] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
              // utyga shamam bermeimys 
              return board[7] == '' ? 7 : undefined;
              }
                  // ush
                  else if (board[i] === "" && board[5] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                    // utyga shamam bermeimys 
                    return board[2] == '' ? 2 : undefined;
                    }
                    else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                    // utyga shamam bermeimys 
                    return board[5] == '' ? 5 : undefined;
                    }
                    else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
                    // utyga shamam bermeimys 
                    return board[8] == '' ? 8 : undefined;
                    }

  }

  return undefined;
}




}

export default Team4;
    
=======
import Bot from "./Bot";
import Piece from "../types/Piece.ts";

class Team4 extends Bot {
  constructor() {
    super("Team 4", "/public/team44.webp");
  }

  
  move(board: Piece[], L3_37_OurBot: Piece) {
  
 

    let enemyPieceSymbol = "o";
    
    if (L3_37_OurBot == 'o')
    {
       enemyPieceSymbol = "x";
    }

    

    let checkUtyMovDiagonal = this.checkUtyMovDiagonal(board, L3_37_OurBot);
 
 
    if(checkUtyMovDiagonal !== undefined) {
      return checkUtyMovDiagonal;
    }

    
    let checkUtyMovVertical = this.checkUtyMovVertical(board, L3_37_OurBot);
 
 
    if(checkUtyMovVertical !== undefined) {
      return checkUtyMovVertical;
    }

        
    let checkUtyMovHorizontal = this.checkUtyMovHorizontal(board, L3_37_OurBot);
 
 
    if(checkUtyMovHorizontal !== undefined) {
      return checkUtyMovHorizontal;
    }


    

    let checkEnemyMovHorizontal = this.checkEnemyMovHorizontal(board, enemyPieceSymbol);
 
 
    if(checkEnemyMovHorizontal !== undefined) {
      return checkEnemyMovHorizontal;
    }


    let checkEnemyMovVertical = this.checkEnemyMovVertical(board, enemyPieceSymbol);
 
 
    if(checkEnemyMovVertical !== undefined) {
      return checkEnemyMovVertical;
    }

    let checkEnemyMovDiagonal = this.checkEnemyMovDiagonal(board, enemyPieceSymbol);
 
 
    if(checkEnemyMovDiagonal !== undefined) {
      return checkEnemyMovDiagonal;
    }


    
    

    if (board[4] === "") {
        return 4;
    }

    
    const corners = [0, 8, 6, 2];
    for (const corner of corners) {
        if (board[corner] === "") {
            return corner;
        }
    }


    return this.getRandomMove(board);
}

private getRandomMove(board: Piece[]) {
    


    const availableMoves = this.getAvailableMoves(board);

    if (availableMoves.length === 0) {
        
        return -1; 
    }

    
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
}

private getAvailableMoves(board: Piece[]) {
    const availableMoves: number[] = [];

    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            availableMoves.push(i);
        }
    }

    return availableMoves;
}


  private checkEnemyMovHorizontal(board:Piece[], EnemyPieceSymbol: string){
      

    for (let i = 0; i < board.length; i++) { 

      //eki
      if (board[i] === "" && board[4] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[3] == '' ? 3 : undefined;
        }
        else if (board[i] === "" && board[3] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[4] == '' ? 4 : undefined;
        }
        else if (board[i] === "" && board[3] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[5] == '' ? 5 : undefined;
        }

        // bir
        if (board[i] === "" && board[1] === EnemyPieceSymbol && board[2] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[0] == '' ? 0 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[2] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[1] == '' ? 1 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[1] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[2] == '' ? 2 : undefined;
        }
        
               // ush
                     if (board[i] === "" && board[7] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[6] == '' ? 6 : undefined;
                      }
                      else if (board[i] === "" && board[6] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[7] == '' ? 7 : undefined;
                      }
                      else if (board[i] === "" && board[6] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[8] == '' ? 8 : undefined;
                      }

                      
    }

    return undefined;
  }



  private checkEnemyMovVertical(board:Piece[], EnemyPieceSymbol: string){
      

    for (let i = 0; i < board.length; i++) { 

      //bir
        if (board[i] === "" && board[3] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
        return board[0] == '' ? 0 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[3] == '' ? 3 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[3] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[6] == '' ? 6 : undefined;
        }
              // eki
              else if (board[i] === "" && board[4] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[1] == '' ? 1 : undefined;
                }
                else if (board[i] === "" && board[1] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[4] == '' ? 4 : undefined;
                }
                else if (board[i] === "" && board[1] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[7] == '' ? 7 : undefined;
                }
                    // ush
                    else if (board[i] === "" && board[5] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                      return board[2] == '' ? 2 : undefined;
                      }
                      else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                      return board[5] == '' ? 5 : undefined;
                      }
                      else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                      return board[8] == '' ? 8 : undefined;
                      }

    }

    return undefined;
  }

  
  private checkUtyMovHorizontal(board:Piece[], EnemyPieceSymbol: string){
      

    for (let i = 0; i < board.length; i++) { 


      //eki
      if (board[i] === "" && board[4] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[3] == '' ? 3 : undefined;
        }
        else if (board[i] === "" && board[3] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[4] == '' ? 4 : undefined;
        }
        else if (board[i] === "" && board[3] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[5] == '' ? 5 : undefined;
        }

        // bir
        if (board[i] === "" && board[1] === EnemyPieceSymbol && board[2] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[0] == '' ? 0 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[2] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[1] == '' ? 1 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[1] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[2] == '' ? 2 : undefined;
        }
        
               // ush
                     if (board[i] === "" && board[7] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[6] == '' ? 6 : undefined;
                      }
                      else if (board[i] === "" && board[6] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[7] == '' ? 7 : undefined;
                      }
                      else if (board[i] === "" && board[6] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
                      // utyga shamam bermeimys 
                        return board[8] == '' ? 8 : undefined;
                      }

                      
    }

    return undefined;
  }



    private checkEnemyMovDiagonal(board:Piece[], EnemyPieceSymbol: string){
      

      for (let i = 0; i < board.length; i++) { 
  
        // sol zhak
          if (board[i] === "" && board[4] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
          // utyga shamam bermeimys 
          return board[0] == '' ? 0 : undefined;
          }
          else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
          // utyga shamam bermeimys 
            return board[4] == '' ? 4 : undefined;
          }
          else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
          // utyga shamam bermeimys 
            return board[8] == '' ? 8 : undefined;
          }
                // on zhak
                else if (board[i] === "" && board[4] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
                  // utyga shamam bermeimys 
                  return board[2] == '' ? 2 : undefined;
                  }
                  else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
                  // utyga shamam bermeimys 
                  return board[4] == '' ? 4 : undefined;
                  }
                  else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
                  // utyga shamam bermeimys 
                  return board[6] == '' ? 6 : undefined;
                  }
                     
  
      }
    return undefined;
  }



  
  private checkUtyMovDiagonal(board:Piece[], EnemyPieceSymbol: string){
      

    for (let i = 0; i < board.length; i++) { 

      // sol zhak
        if (board[i] === "" && board[4] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
        return board[0] == '' ? 0 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[4] == '' ? 4 : undefined;
        }
        else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
        // utyga shamam bermeimys 
          return board[8] == '' ? 8 : undefined;
        }
              // on zhak
              else if (board[i] === "" && board[4] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[2] == '' ? 2 : undefined;
                }
                else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[4] == '' ? 4 : undefined;
                }
                else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
                // utyga shamam bermeimys 
                return board[6] == '' ? 6 : undefined;
                }
                   

    }
  return undefined;
}



private checkUtyMovVertical(board:Piece[], EnemyPieceSymbol: string){
      

  for (let i = 0; i < board.length; i++) { 

    //bir
      if (board[i] === "" && board[3] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
      // utyga shamam bermeimys 
      return board[0] == '' ? 0 : undefined;
      }
      else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[6] === EnemyPieceSymbol) {
      // utyga shamam bermeimys 
        return board[3] == '' ? 3 : undefined;
      }
      else if (board[i] === "" && board[0] === EnemyPieceSymbol && board[3] === EnemyPieceSymbol) {
      // utyga shamam bermeimys 
        return board[6] == '' ? 6 : undefined;
      }
            // eki
            else if (board[i] === "" && board[4] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
              // utyga shamam bermeimys 
              return board[1] == '' ? 1 : undefined;
              }
              else if (board[i] === "" && board[1] === EnemyPieceSymbol && board[7] === EnemyPieceSymbol) {
              // utyga shamam bermeimys 
              return board[4] == '' ? 4 : undefined;
              }
              else if (board[i] === "" && board[1] === EnemyPieceSymbol && board[4] === EnemyPieceSymbol) {
              // utyga shamam bermeimys 
              return board[7] == '' ? 7 : undefined;
              }
                  // ush
                  else if (board[i] === "" && board[5] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                    // utyga shamam bermeimys 
                    return board[2] == '' ? 2 : undefined;
                    }
                    else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[8] === EnemyPieceSymbol) {
                    // utyga shamam bermeimys 
                    return board[5] == '' ? 5 : undefined;
                    }
                    else if (board[i] === "" && board[2] === EnemyPieceSymbol && board[5] === EnemyPieceSymbol) {
                    // utyga shamam bermeimys 
                    return board[8] == '' ? 8 : undefined;
                    }

  }

  return undefined;
}




}

export default Team4;
    
>>>>>>> 4fda124dbe0e0ee1b05819d30338a475da0ae16d
