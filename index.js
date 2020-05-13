// Code your solutions in this file
function writeCards(gifts){
  let a=gifts.length;
  for(let i=0;i<a;i++){
    gifts[i]=( `Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
  }
  return gifts;
}
gifts=['Lisa','Kaitlin','Jan' ];
 writeCards(gifts);
 
 function 