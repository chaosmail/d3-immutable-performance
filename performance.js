const iterations = 100;

/*
 ***************************
 * Performance Measurement *
 ***************************
*/

function tester(testFn, setupFn, teardownFn) {
  return function(name, args) {
    args = [].concat(args) || [];
    console.time(name);
    var i = 0;
    for (;i<iterations;i++) {
      if (setupFn) {
        setupFn();
      }
      // Run the function
      testFn.apply(this, args);
      if (teardownFn) {
        teardownFn();
      }
    }
    console.timeEnd(name);
  }
}

/*
 ***************************
 * Create default testCase *
 ***************************
*/

console.debug('Iteratons: ' + iterations);

const $svg = d3.select('svg')
const testCase = tester(testFn, cleanup, cleanup);

function testFn(data, key, xAccsessor) {
  [].concat(data).forEach(function(_data) {
    $circ = $svg.selectAll('circle')
      .data(_data, key);
    $circ.enter()
      .append('circle')
        .attr({cx: 50, cy: 50, r: 50, fill: 'black'});
    $circ
      .attr('fill', 'red')
      .attr('cx', xAccsessor);
    $circ.exit()
      .remove();
  });
}

function cleanup() {
  $svg.node().innerHTML = '';
}

