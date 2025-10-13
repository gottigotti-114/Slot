export class Point_controller{
 constructor( point_symbol ){
  this.point_symbols = point_symbol;
 }

 pointChange(key,value){
  this.point_symbols[key] = value;
 }

 getPoint(key) {
  return this.point_symbols[key];
 }
}

//test
//point_symbol = {
// "🍎":10,
// "🍌":20
//}
//const p = new Point_controller(point_symbol);

//console.log(p.getPoint("🍎"));