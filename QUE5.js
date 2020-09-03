var count = ["rahil","bruno","aneri","kunj"];
function reverse(Num){
    var i = Num.length, reversed = [];
    while(i) {
        i--;
        reversed.push(Num[i]);
    }
    return reversed;
}
console.log(reverse(count));

    
