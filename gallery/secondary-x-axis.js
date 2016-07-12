/*global Gallery,Dygraph,data */
Gallery.register(
  'secondary-x',
  {
    name: 'Secondary X Axis',
    title: 'Chart with per-series properties',
    setup: function(parent) {
      parent.innerHTML = "<div id='demodiv'>";
    },
    run: function() {
      new Dygraph(
              document.getElementById("demodiv"),
              function() {
                var zp = function(x) { if (x < 10) return "0"+x; else return x; };
                var r = [];
                // var r = [date,date2,parabola,line,another line,sine wave];
                for (var i=1; i<=31; i++) {
                  r.push([
                    i,
                    i + 5,
                    10 * (i * (31 - i)),
                    10 * (8 * i),
                    10 * (250 - 8 * i),
                    10 * (125 + 125 * Math.sin(0.3 * i))
                  ])
                  // r += "200610" + zp(i);
                  // r += ", 200610" + zp(i);
                  // r += "," + 10*(i*(31-i));
                  // r += "," + 10*(8*i);
                  // r += "," + 10*(250 - 8*i);
                  // r += "," + 10*(125 + 125 * Math.sin(0.3*i));
                  // r += "\n";
                }
                return r;
              },
              {
                labels: ['date', 'date2', 'parabola', 'line', 'another line', 'sine wave'],
                hasSecondaryXAxis: true,
                strokeWidth: 2,
                series: {
                  'parabola': {
                    axis: 'y2',
                    xAxis: 'x2',
                    strokeWidth: 0.0,
                    drawPoints: true,
                    pointSize: 4,
                    highlightCircleSize: 6
                  },
                  'line': {
                    axis: 'y',
                    xAxis: 'x',
                    strokeWidth: 1.0,
                    drawPoints: true,
                    pointSize: 1.5
                  },
                  'sine wave': {
                    xAxis: 'x',
                    axis: 'y',
                    strokeWidth: 3,
                    highlightCircleSize: 10
                  }
                }
              }
          );
    }
  });
