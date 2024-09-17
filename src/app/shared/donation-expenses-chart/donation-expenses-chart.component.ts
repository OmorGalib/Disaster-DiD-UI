import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-donation-expenses-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation-expenses-chart.component.html',
  styleUrls: ['./donation-expenses-chart.component.scss']
})
export class DonationExpensesChartComponent {
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5','6','7','8','9','10','11', '12', '13', '14', '15','16','17','18','19','20','21', '22', '23', '24', '25','26','27','28','29','30'],
        datasets: [
          {
            label: "Donations",
            data: ["10000", "5000", "2000", "30000", "7000","0", "2500", "2000", "15000", "3000","5000", "000", "0", "3000", "5000","0", "2500", "7000", "0", "6000"],
            backgroundColor: "#076b20",
          },
          {
            label: "Expenses",
            data: ["5000", "000", "0", "3000", "5000","0", "2500", "7000", "0", "6000","10000", "5000", "2000", "5000", "7000","0", "2500", "2000", "15000"],
            backgroundColor: "#BB271A",
          }
        ]
      },
      options: {
        aspectRatio: 2,
        plugins: {
          title: {
            display: true,
            text: "Daily Donations & Expenses(Sep,2024)",
            font: {
              size: 16,
              weight: 'bold',
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
              }
            }
          },
        },
        scales: {
          x: {
            grid: {
              display: false // Hide X-axis grid lines for cleaner look
            },
            ticks: {
              font: {
                size: 10
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Add a light grey color to Y-axis grid lines
            },
            ticks: {
              font: {
                size: 10
              },
            }
          }
        }
      }
    });
  }
}
