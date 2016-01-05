(function(testCase){

  console.debug('Testing JavaScript Array with 1000 Integer elements');
  console.debug('***************************************************');

  var data_01 = d3.range(0, 1000);
  var data_02 = d3.range(500, 1000);
  var data_03 = d3.range(10, 100);

  var index = function(d, i) { return i; };
  var accessor = function(d, i) { return d; };

  testCase('default join', [[data_01, data_02, data_03], undefined, accessor]);
  testCase('join on index key', [[data_01, data_02, data_03], index, accessor]);
  testCase('join on value key', [[data_01, data_02, data_03], accessor, accessor]);

})(testCase);