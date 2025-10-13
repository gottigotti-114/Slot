import { Slot_controller } from "./Slot_controller.js";
import { Point_controller } from "./Point_controller.js";

export class Home_controller{
 #slot1;
 #slot2;
 #slot3;
 #button1;
 #button2;
 #button3;
 #symbols;
 #pointSymbol;

 constructor(slot1,slot2,slot3,button1,button2,button3,symbols,pointSymbol){
  this.slot = new Slot_controller(slot1,slot2,slot3,button1,button2,button3,symbols);
  this.point = new Point_controller(pointSymbol);
  this.#slot1 = slot1;
  this.#slot2 = slot2;
  this.#slot3 = slot3;
  this.#button1 = button1;
  this.#button2 = button2;
  this.#button3 = button3;
  this.#symbols = symbols;
  this.#pointSymbol = pointSymbol;
 }

 pushed_rever() {
  this.slot.pushed_rever();
 }

 pushed_button1() {
  this.slot.pushed_button1();
 }

 pushed_button2() {
  this.slot.pushed_button2();
 }

 pushed_button3() {
  this.slot.pushed_button3();
 }

 getReview() {
  return this.slot.review();
 }

 getPoint(key) {
  if(this.getReview() == "A"){
   return this.point.getPoint(key);
  }else{
   return 0;
  }
 }

 setKakuritus( parameter ) {
  this.slot.setKakuritus( parameter );
 }

 setKakuritu( key,value ){
  this.slot.setKakuritu(key,value);
 }

 slot_finish() {
  if(this.slot.button.button_flag == false) {
   return true;
  }else{
   return false;
  }
 }
}