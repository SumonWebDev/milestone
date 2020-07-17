//feetToMile
function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
var mile=feetToMile(8000);
console.log(mile);


//woodCalculator
function woodCalculator(chair,table,khat){
    var chairCount=chair*1;
    var tableCount=table*1;
    var khatCount=khat*1;
    var totalCount=chairCount+tableCount+khatCount;
    return totalCount;
}
var woodResult=woodCalculator(1,3,5);
console.log(woodResult);

//tinyFriend
function tinyFriend(age){
    var min=age[0];
    for(var i=0;i<age.length;i++){
        var element=age[i];
        if(element<min){
            min=element;
        }
    }
    return min;
}
var min=tinyFriend([12,13,15,77,88,99]);
console.log(min);