let arraycito = []
let numbercito = 0;

do{
    numbercito = Number(prompt('Give me a number or press cancel'));
    if (numbercito>=0){
        if (numbercito!=0){
            arraycito.push(numbercito);
            numbercito=null;
        }
}  else {
    alert('Not valid number');
}
}while (numbercito!=0);

console.log(arraycito);