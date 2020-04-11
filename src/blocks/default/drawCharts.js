export const drawCharts = () => {
  fetch("/wp-json/api-charts/v1/data-table/")
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      console.log(JSON.stringify(jsonData));
      // Load the Visualization API and the piechart package.
      google.charts.load("current", { packages: ["corechart"] });

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        // Create our data table out of JSON data loaded from server.
        var data = new google.visualization.DataTable(jsonData);

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(
          document.getElementById("chart_div")
        );
        console.log(chart);
        chart.draw(data, { width: 400, height: 240 });
      }
    });
};
