import { Slot_controller } from "./Slot_controller.js";
import { Point_controller } from "./Point_controller.js";

export class Home_controller{
 //カプセル化する変数
 #slot1;
 #slot2;
 #slot3;
 #button1;
 #button2;
 #button3;
 #symbols;
 #pointSymbol;

 //コンストラクタ
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

 //レバーオン
 pushed_rever() {
  this.slot.pushed_rever();
 }

 //リール１を回転
 pushed_button1() {
  this.slot.pushed_button1();
 }

 //リール２を回転
 pushed_button2() {
  this.slot.pushed_button2();
 }

 //リール３を回転
 pushed_button3() {
  this.slot.pushed_button3();
 }

 //リールを見比べてA,B,C評価する
 getReview() {
  return this.slot.review();
 }

 //指定したシンボルの付与ポイント数を返す
 getPoint(key) {
  if(this.getReview() == "A"){
   return this.point.getPoint(key);
  }else{
   return 0;
  }
 }

 //シンボル出現確率を専用パラメータでセットする
 setKakuritus( parameter ) {
  this.slot.setKakuritus( parameter );
 }

 //指定したシンボルの出現確率を上げたり下げたりする
 setKakuritu( key,value ){
  this.slot.setKakuritu(key,value);
 }

 //もし全てのリールが回ってなかったらtrueを返す
 slot_finish() {
  if(this.slot.button.button_flag == false) {
   return true;
  }else{
   return false;
  }
 }

 //現在使用されている専用確率パラメータを返す
 getKakuritus() {
    return this.slot.spin1.kakuritu.getKakuritus();
 }

 //確率インスタンスを返す（参照用）
 getKakuritu() {
    return this.slot.spin1.kakuritu;
 }

 //現在リールが回っているかどうか返す。回っていたら「spinNow」、回っていなかったら「stop」を返す
 getStatus() {
   if(this.Slot1_spin_now() == false && this.Slot2_spin_now() == false && this.Slot3_spin_now() == false) {
      return "stop";
   }else{
      return "spinNow";
   }
 }

 //ボタン状態からリール１がスピン常態どうか判定（回っていたらtrueを返す）
 Slot1_spin_now() {
   if(this.slot.button.button1_flag == false) {
      return true;
   }else if(this.slot.button.button1_flag == true) {
      return false;
   }
   return false;
 }

  //リール２が回っていたらtrueを返す
  Slot2_spin_now() {
   if(this.slot.button.button2_flag == false) {
      return true;
   }else if(this.slot.button.button2_flag == true) {
      return false;
   }
   return false;
 }

  //リール３が回っていたらtrue返す
  Slot3_spin_now() {
   if(this.slot.button.button3_flag == false) {
      return true;
   }else if(this.slot.button.button3_flag == true) {
      return false;
   }
   return false;
 }
}