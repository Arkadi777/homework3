
	//FIRST TASK
	function JustaFunction1(a , b , c){
     const num1 = a + b
     const num2 = a + b + c
     const num3 = a * b * c
     return num1 + num2 + num3
     }
    console.log  (JustaFunction1(1 , 2 , 3)) ;

   //SECOND TASK
    function JustaFunction2() {
    	const g = 262 + 626
    	return g
    	
    }
    console.log  (JustaFunction2() ) ;
    // THIRD TASK
    function JustaFunction3(d , e , f ) {
       const h = d + e + f 
    }
    console.log  ( JustaFunction3 ( 5 , 2 , 'yay' ))  ;
    // FOURTH TASK
    
    function JustaFunction4( i , k , m) {
      if (i.length > k.length && i.length > m.length) {
      return i
      } 
      if (k.length > i.length && k.length > m.length) {
      return k	
      }
      if (m.length > i.length && m.length > k.length) {
      return m	
      }
     }
    console.log  (JustaFunction4 ('abc' , 'abcd' , 'abcde'))
    // FIFTH TASK
    function JustaFunction5 ( n , p ) {
    if ( n === p ){
    	return 0
    }
    if ( n > p ){
    	return 1
    }
    if ( n > p ){
    	return -1
    }

    }
 console.log ( JustaFunction5 (1 , 2)) ;
 //SIXTH TASK
  function JustaFunction6 (r , s){
  return r * s 
 }
  console.log (JustaFunction6( 10 , 7 )) ; 
  // SEVENTH TASK
  function JustaFunction7 (t , u) {
    return t/u
  }
  console.log ( JustaFunction7( 144 , 6 )) ;
  
 // EIGHT TASK
function triangleArea (base , height) {
   return base * height / 2
}
console.log ( triangleArea (6 , 7) ) ;
 // NINETH TASK
 function NumLength (z) {
   return z.toString().length
   
   
 }
console.log ( NumLength (62626)) ;

function JustaFunction8 (x , y , u) {
if ( x.length + y.length > u) {
  return 1
}
else {
  return -1
} 
}
console.log (JustaFunction8 ("hello" , "aua" , 100)) ;

function runStaff ( aa , bb , cc ) {
if (cc = "rectangle"){
  return aa * bb
}
 else if (cc = "triangle") {
  return bb * aa / 2
}
else {
  return -1
}
}
console.log (JustaFunction8( 10 , 6 , "triangle") ) ;
