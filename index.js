// Code your solutions in this file
function writeCards(name, event){
    const arry =[]
    for (let i = 0; i < name.length; i++) {
        arry[i]= `Thank you, ${name[i]}, for the wonderful surprise gift!`
        //debugger;
    }
    return arry
}

function countDown(num){
    while (num >= 0) {
        console.log(num--);
    }
}