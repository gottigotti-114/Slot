export class Random_symbol {
 constructor( kakuritu_symbol ){
  this.kakuritu = kakuritu_symbol;
 }

 out() {
  
  let random_index = this.random_index();
  this.test1 = random_index;
  let symbol = "";
  let prev = 0.0;
  for(let key in this.kakuritu){
   const value = this.kakuritu[key];
   
   if( prev <= random_index && random_index <= value ) {
    symbol = String(key);
    break;
   }
   prev = value;
  }
  return symbol;
 }

 random_index(){
  return Math.random() * 10.0;
 }

 test(){
  return this.test1;
 }
}