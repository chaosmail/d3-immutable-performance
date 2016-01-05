(function(testCase){

  console.debug('Testing JavaScript Array with 1000 Object elements');
  console.debug('**************************************************');

  var data = d3.range(0, 1000).map(function(d, i){
    return { x: i, y: d };
  });

  var index = function(d, i) { return i; };
  var ref = function(d, i) { return d; };
  var accessor = function(d, i) { return d['x']; };

  testCase('default join', [[data], undefined, accessor]);
  testCase('join on index key', [[data], index, accessor]);
  testCase('join on value key', [[data], accessor, accessor]);
  testCase('join on ref key', [[data], ref, accessor]);

})(testCase);