submitbtn=document.querySelector(".submitButton");
resetbtn=document.querySelector(".resetButton");
resettbtn=document.querySelector(".resettButton");
allInputs=document.querySelectorAll("#box1");
statement=document.querySelector("#statement");
para=document.querySelector(".para");
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
                    for(let i=i;i<j+19;i+=9){
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
    window.alert("HURRAY!!");

}else{
    para.style.color="brown";
    window.alert("ERROR!!");
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


    resetbtn.addEventListener('click', () => {
        const arr = [];
        allInputs.forEach((e) => {
          arr.push(e.value !== "" ? e.value-'0' : 0);
        });
      
        const jsonData = JSON.stringify(arr);
      
        fetch('/modify-array', {
          method: 'POST',
          body: jsonData,
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
          if (!response.ok) {
            console.error('Error fetching data from server:', response.statusText);
            console.log('Received response status:', response.status); // Log status code
            return; // Exit the chain since there's no valid JSON to parse
          }
          return response.json();
        })
        .then(modifiedArray => {
          console.log('Modified array from Python:', modifiedArray);
          for(let i=0;i<81;i++){
            allInputs[i].value=modifiedArray[i];
        }
        })
        .catch(error => {
          console.error('Error processing Sudoku array:', error);
          // You can display a generic error message to the user here
        });
        
      
        // Optional: Log sent data for debugging
        console.log('Sent data to server:', jsonData);
      });
      
  
// resetbtn.addEventListener("click",()=>{
//     var arr=new Array(81);
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
// })