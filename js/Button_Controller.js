export class Button_Controller{
 constructor(button1,button2,button3){
  this.button1 = button1;
  this.button2 = button2;
  this.button3 = button3;

  this.button1

  this.button1_flag = true;
  this.button2_flag = true;
  this.button3_flag = true;

  this.button_flag = false;
 }

 pushed1() {
  if(this.button1_flag == false && this.button_flag == true){
   this.button1_flag = true;
   this.button1.style.backgroundImage = "url('./images/button_pushed.png')";
   this.check();
  }

 }

 pushed2() {
  if(this.button2_flag == false && this.button_flag == true){
   this.button2_flag = true;
   this.button2.style.backgroundImage = "url('./images/button_pushed.png')";
   this.check();
  }
 }

 pushed3() {
  if(this.button3_flag == false && this.button_flag == true){
   this.button3_flag = true;
   this.button3.style.backgroundImage = "url('./images/button_pushed.png')";
   this.check();
  }

 }

 pushed_rever() {
  this.reset();
  this.button_flag = true;
 }

 check() {
  setTimeout(() => {
   if(this.button3_flag == true && this.button2_flag == true && this.button1_flag == true ){
    this.button1_flag = false;
    this.button2_flag = false;
    this.button3_flag = false;
    this.button_flag = false;
    this.button1.style.backgroundImage = "";
    this.button2.style.backgroundImage = "";
    this.button3.style.backgroundImage = "";
   }
  },100);
 }

 reset() {
  this.button1.style.backgroundImage = "url('./images/button_default.png')";
  this.button2.style.backgroundImage = "url('./images/button_default.png')";
  this.button3.style.backgroundImage = "url('./images/button_default.png')";

  this.button1_flag = false;
  this.button2_flag = false;
  this.button3_flag = false;
 }
}