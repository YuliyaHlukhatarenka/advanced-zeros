function simpleBase(base){
  var numberBase = [];
  for (var i = 2; i <= base; i++) {
     while (base % i === 0) {
        numberBase.push(i);
        base = base/i;
              };
    }
    var h = new Object();
    for(var j = 0; j < numberBase.length; j++) {
  	  if (h[numberBase[j]] == undefined) {
  	  	h[numberBase[j]] = 1;
  	  }
  	  else {
  	  	h[numberBase[j]] += 1;
  	  }
  	}

    return h;
}

function Power(p,number){
  var k = 0;
  var pow =1;
  //var end = 0;
  while(true){
    pow = pow*p;
    var end = Math.floor(number/pow);
    if(end === 0){
      return k;
    }
    k = k + end;

  }
}

module.exports = function getZerosCount(number, base){
  var numberArray, baseArray;
  baseArray = simpleBase(base);
  var result = [];
  for (var v in baseArray) {
    if (Math.floor( Power(v,number) / baseArray[v]) > 0) {
      result.push(Math.floor((Power(v,number) / baseArray[v])));
    }
  }
  var min = result[0];
  for (var m = 0; m < result.length; m++) {
    if( min > result[m]){
      min = result[m];
    }
  }
  return min;
}
