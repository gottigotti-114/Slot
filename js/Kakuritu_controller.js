export class Kakuritu_controller{
 constructor( parameter ){
  this.kakuritu_before = parameter;
  this.change();
 }

 change() {
  let total = 0;
  for(let key in this.kakuritu_before){
   const value = this.kakuritu_before[key];

   total += value;
  }

  this.kakuritu_after = {};
  let total_kakuritu = 0.0;
  for(let key in this.kakuritu_before){
   const value = this.kakuritu_before[key];

   this.kakuritu_after[key] = total_kakuritu + ((value / total) * 10.0);
   total_kakuritu = this.kakuritu_after[key];
  }
 }

 getKakuritu() {
  return this.kakuritu_after;
 }

 setKakuritu( parameter ) {
  this.kakuritu_before = parameter;
  this.change();
 }

 up(key,upValue){
  this.kakuritu_before[key] += upValue;
  this.change();
 }

 down(key,downValue) {
  this.kakuritu_before[key] -= downValue;
  this.change();
 }

 test() {
  return this.kakuritu_after;
 }

 static default_kakuritu( symbols ){
  let cnt = 0;
  for( let child in symbols ){
   cnt += 1;
  }

  let default_value = (cnt / 10.0) * 10.0;
  let kakuritu = {};
  for( let child in symbols){
   kakuritu[child] = default_value;
  }
  return kakuritu;
 }

 static default_parameter( symbols ){
  let kakuritu = {};
  symbols.forEach((child) => {
   kakuritu[child] = 10.0;
  });
  return kakuritu;
 }
}