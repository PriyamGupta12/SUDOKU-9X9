submitbtn=document.querySelector(".submitButton");
resetbtn=document.querySelector(".resetButton");
resettbtn=document.querySelector(".resettButton");
allInputs=document.querySelectorAll("#box1");
statement=document.querySelector("#statement");
para=document.querySelector(".para");
const nextEmptySpot = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  };
  
  const checkRow = (board, row, value) => {
    for (let i = 0; i < board[row].length; i++) {
      if (board[row][i] === value) {
        return false;
      }
    }
    return true;
  };
  
  const checkColumn = (board, column, value) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][column] === value) {
        return false;
      }
    }
    return true;
  };
  
  const checkSquare = (board, row, column, value) => {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(column / 3) * 3;
  
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[boxRow + r][boxCol + c] === value) {
          return false;
        }
      }
    }
    return true;
  };
  
  const checkValue = (board, row, column, value) => {
    return checkRow(board, row, value) &&
           checkColumn(board, column, value) &&
           checkSquare(board, row, column, value);
  };
  
  const solve = (board) => {
    const emptySpot = nextEmptySpot(board);
    const row = emptySpot[0];
    const col = emptySpot[1];
  
    // No empty spots, solved!
    if (row === -1) {
      return board;
    }
  
    for (let num = 1; num <= 9; num++) {
      if (checkValue(board, row, col, num)) {
        board[row][col] = num;
        solve(board); // Recursive call to try next number at empty spot
      }
    }
  
    // Backtrack if no valid number found for this spot
    if (nextEmptySpot(board)[0] !== -1) {
      board[row][col] = 0;
    }
    return board;
  };
// var arr=new Array(81);
// allInputs.forEach((e)=>{
//     if(e.value!==""){
//         arr.push(e.value);
//     }else{
//         arr.push(0);
//     }
// })
// arr.forEach((e)=>{
//     console.log(e);
// })

console.log(typeof allInputs[0]);
checkSudoku=()=>{
    var c=true;
    var b=true;
    for(let k=0;k<81;k+=9){
        var check = [0,0,0,0,0,0,0,0,0];
    for(let i=k;i<k+9;i++){
        if(allInputs[i].value==""){
            statement.innerText="Error! Some Empty value found";
            
            b=false;
            break;
        }else if(allInputs[i].value=="1"){
            if(check[0]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[0]=1;
            }
        }else if(allInputs[i].value=="2"){
            if(check[1]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[1]=1;
            }
        }else if(allInputs[i].value=="3"){
            if(check[2]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[2]=1;
            }
        }else if(allInputs[i].value=="4"){
            if(check[3]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[3]=1;
            }
        }else if(allInputs[i].value=="5"){
            if(check[4]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[4]=1;
            }
        }else if(allInputs[i].value=="6"){
            if(check[5]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[5]=1;
            }
        }else if(allInputs[i].value=="7"){
            if(check[6]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[6]=1;
            }
        }else if(allInputs[i].value=="8"){
            if(check[7]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[7]=1;
            }
        }else if(allInputs[i].value=="9"){
            if(check[8]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[8]=1;
            }
        }else{
            statement.innerText="Some other value than 1-9 found";
            b=false;
            break;
        }
        if(b!=true){
            break;
        }
    }
    if(b!=true){
        c=false;
        break;
    }
}




        if(b==true){
        //cols
        for(let k=0;k<9;k++){
            var check = [0,0,0,0,0,0,0,0,0];
        for(let i=k;i<81;i+=9){
            if(allInputs[i].value==""){
                statement.innerText="Error! Some Empty value found";
                b=false;
                break;
            }else if(allInputs[i].value=="1"){
                if(check[0]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[0]=1;
                }
            }else if(allInputs[i].value=="2"){
                if(check[1]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[1]=1;
                }
            }else if(allInputs[i].value=="3"){
                if(check[2]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[2]=1;
                }
            }else if(allInputs[i].value=="4"){
                if(check[3]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[3]=1;
                }
            }else if(allInputs[i].value=="5"){
                if(check[4]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[4]=1;
                }
            }else if(allInputs[i].value=="6"){
                if(check[5]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[5]=1;
                }
            }else if(allInputs[i].value=="7"){
                if(check[6]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[6]=1;
                }
            }else if(allInputs[i].value=="8"){
                if(check[7]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[7]=1;
                }
            }else if(allInputs[i].value=="9"){
                if(check[8]!=0){
                    statement.innerText="Repetition found";
                    b=false;
                    break;
                }else{
                    check[8]=1;
                }
            }else{
                statement.innerText="Some other value than 1-9 found";
                b=false;
                break;
            }
        }
        if(b!=true){
            c=false;
            break;
        }
            }
        }

            //houses
            if(b==true){
            for(let p=0;p<81;p+=27){
            for(let k=p;k<9;k+=3){
                var check = [0,0,0,0,0,0,0,0,0];
                for(let j=k;j<k+3;j++){
                    for(let i=j;i<j+19;i+=9){
                        if(allInputs[i].value==""){
                            statement.innerText="Error! Some Empty value found";
                            b=false;
                            break;
                        }else if(allInputs[i].value=="1"){
                            if(check[0]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[0]=1;
                            }
                        }else if(allInputs[i].value=="2"){
                            if(check[1]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[1]=1;
                            }
                        }else if(allInputs[i].value=="3"){
                            if(check[2]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[2]=1;
                            }
                        }else if(allInputs[i].value=="4"){
                            if(check[3]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[3]=1;
                            }
                        }else if(allInputs[i].value=="5"){
                            if(check[4]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[4]=1;
                            }
                        }else if(allInputs[i].value=="6"){
                            if(check[5]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[5]=1;
                            }
                        }else if(allInputs[i].value=="7"){
                            if(check[6]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[6]=1;
                            }
                        }else if(allInputs[i].value=="8"){
                            if(check[7]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[7]=1;
                            }
                        }else if(allInputs[i].value=="9"){
                            if(check[8]!=0){
                                statement.innerText="Repetition found";
                                b=false;
                                break;
                            }else{
                                check[8]=1;
                            }
                        }else{
                            statement.innerText="Some other value than 1-9 found";
                            b=false;
                            break;
                        }
                    }
                    if(b!=true){
                        break;
                    }
                }
                if(b!=true){
                    break;
                }
            }
            if(b!=true){
                c=false;
                break;
            }

            }
        }



    
if(c==true){
    para.style.color="green";
    statement.innerText="HURRAY! YOU DID IT....";

}else{
    para.style.color="brown";
}
}


reset=()=>{
    allInputs.forEach(element => {
        element.value="";
        para.style.color="black";
        statement.innerText="LET'S CHECK THE VALIDITY OF A SUDOKU!!";
    });
}
resettbtn.addEventListener("click",reset);
submitbtn.addEventListener("click",checkSudoku);
// resetbtn.addEventListener("click",reset);


resetbtn.addEventListener("click", () => {
let arr = [];
allInputs.forEach((e) => {
    arr.push(e.value !== "" ? e.value-'0' : 0);
});

sudoku=[]
for(let i=0;i<81;i+=9){
    array=[]
    for(let j=i;j<i+9;j++){
        array.push(arr[j]);
    }
    sudoku.push(array);
}
ans=[]
ans=solve(sudoku);
console.log(ans);
modifiedArray=[]
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        modifiedArray.push(ans[i][j]);
    }
}

console.log(modifiedArray);
for(let i=0;i<81;i++){
    allInputs[i].value=modifiedArray[i];
}

});
      
  
