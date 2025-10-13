import { Spin_controller } from "./Spin_controller.js";
import { Button_Controller } from "./Button_Controller.js";

export class Slot_controller{
 constructor(slot1,slot2,slot3,button1,button2,button3,symbols){
  this.slot1 = slot1;
  this.slot2 = slot2;
  this.slot3 = slot3;
  this.button1 = button1;
  this.button2 = button2;
  this.button3 = button3;
  this.symbols = symbols;

  this.spin1 = new Spin_controller(100, this.symbols, slot1);
  this.spin2 = new Spin_controller(100, this.symbols, slot2);
  this.spin3 = new Spin_controller(100, this.symbols, slot3);

  this.button = new Button_Controller(this.button1,this.button2,this.button3);
 }

 pushed_rever(){
  this.button.pushed_rever();
  this.spin1.start();
  this.spin2.start();
  this.spin3.start();
 }

 pushed_button1() {
  this.spin1.stop();
  this.button.pushed1();
 }

 pushed_button2() {
  this.spin2.stop();
  this.button.pushed2();
 }

 pushed_button3() {
  this.spin3.stop();
  this.button.pushed3();
 }

 review() {
  if(this.button.button_flag == false ){
   const text1 = this.slot1.textContent;
   const text2 = this.slot2.textContent;
   const text3 = this.slot3.textContent;

   if(text1 == text2 && text2 == text3){
    return "A";
   }else if(text1 == text2 || text2 == text3 || text1 == text3 ){
    return "B";
   }else {
    return "C";
   }
  }
 }

 setKakuritu( key,value ){
  this.spin1.setKakuritu(key,value);
  this.spin2.setKakuritu(key,value);
  this.spin3.setKakuritu(key,value);
 }

 setKakuritus( parameter ){

  this.spin1 = new Spin_controller(100, this.symbols, slot1, parameter);
  this.spin2 = new Spin_controller(100, this.symbols, slot2, parameter);
  this.spin3 = new Spin_controller(100, this.symbols, slot3, parameter);

 }
}