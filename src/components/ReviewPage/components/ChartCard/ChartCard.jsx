import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

function ChartCard() {

  const chartData = useSelector((store) => store.chart.chartData)

  const chartDates = [];
  const chartRatings = [];
  const backgroundColor = [];
  const borderColor =[];

    const formatData = () => {
      chartDates.length = 0;
      chartRatings.length = 0;
      backgroundColor.length = 0;
      borderColor.length = 0;
      chartData.map((chart, i) => {
        chartDates.unshift(chart.date.substring(5, 10));
      });
      chartData.map((chart, i) => {
        chartRatings.unshift(chart.end_of_day_rating);
        switch (chart.end_of_day_rating) {
          case 1:
            backgroundColor.unshift('red');
            borderColor.unshift('red');
            break;
          case 2:
            backgroundColor.unshift('darkOrange');
            borderColor.unshift('darkOrange');
            break;
          case 3:
            backgroundColor.unshift('gold');
            borderColor.unshift('gold');
            break;
          case 4:
            backgroundColor.unshift('green');
            borderColor.unshift('green');
            break;
          case 5:
            backgroundColor.unshift('blue');
            borderColor.unshift('blue');
            break;
          default:
            backgroundColor.unshift('white');
            borderColor.unshift('white');
        }
      });
    }

  const reflectionsChart = () => {
    const ctx = document.getElementById('reflections-chart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartDates,
        datasets: [{
          label: 'Rating',
          data: chartRatings,
          borderWidth: 1,
          backgroundColor: backgroundColor,
          borderColor: borderColor
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  useEffect(() => {
    formatData();
    reflectionsChart();
    console.log(chartData);
  }, []);

  return (
    <div className="form text-center">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">Last 7 Reflections:</h6>
          <div className="chart-box">
            <canvas id="reflections-chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartCard;