import {Random_symbol} from "./Random_symbol.js";
import {Kakuritu_controller} from "./Kakuritu_controller.js";
export class Spin_controller{
 constructor(speed,symbols,slot,parameter=null){
  this.speed = speed;
  this.symbols = symbols;
  this.stopped = true;
  this.plusCount = 0;
  this.slot = slot;
  if(parameter==null){
   this.kakuritu = new Kakuritu_controller(Kakuritu_controller.default_parameter(this.symbols));
   this.random = new Random_symbol( this.kakuritu.getKakuritus() );
  }else{
   this.kakuritu = new Kakuritu_controller(parameter);
   this.random = new Random_symbol( this.kakuritu.getKakuritus());
  }
 }

 start() {
  this.stopped = false;
  const interval = setInterval(() => {
   if(this.stopped == true) {
    clearInterval(interval);
   }
   this.random = new Random_symbol( this.kakuritu.getKakuritus());
   this.slot.textContent = this.random.out();
  },this.speed);
 }

 stop() {
  this.stopped = true;
 }

 setKakuritus( kakuritu_parameter ) {
  this.kakuritu.setKakuritu( kakuritu_parameter );
 }

 setKakuritu( key, value ){
  this.kakuritu.up(key,value);
 }
}