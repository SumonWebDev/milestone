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
function tinyFriend(name){
    var min=name[0];
    for(var i=0;i<name.length;i++){
        var element=name[i];
        if(element<min){
            min=element;
        }
    }
    return min;
}
var min=tinyFriend(['Nihi','Niva','samiha','sajmin','Ranjana']);
console.log(min);