const labels_day = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];
const labels_month = ["1","2","3","4","5","6","7","8","9","10","11","12","13", "14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"] 
const labels_year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dataPJulyCost = []
const dataRJulyCost = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 10.39, 9.42, 10.43, 10.98, 10.43, 9.61, 10.86, 10.84, 10.84, 10.02, 10.50, 10.07, 9.54, 9.57, 10.41, 9.99, 9.63, 11.00]
const dataPJuly = []
const dataRJuly = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 10.39, 9.42, 10.43, 10.98, 10.43, 9.61, 10.86, 10.84, 10.84, 10.02, 10.50, 10.07, 9.54, 9.57, 10.41, 9.99, 9.63, 11.00]
const dataPAugustCost = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 10.05, 9.9, 10.1, 10.12, 9.79, 9.85, 10.74, 10.74, 10.34, 10.55, 10.74, 10.45, 9.88, 10.32]
const dataRAugustCost = [9.96, 9.81, 9.10, 9.90, 9.76, 10.14, 9.38, 9.45, 9.77, 11.26, 9.61, 10.11, 10.67, 9.84, 9.99, 10.00, 10.74, 10.27, 10.27, 10.52, 10.49, 10.84, 10.02, 10.49]
const dataPAugust = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 10.12, 10.1, 10.05, 10.27, 10.03, 9.87, 10.72, 10.71, 10.38, 10.44, 10.70, 10.37, 9.90, 10.48 ]
const dataRAugust = [9.96, 9.81, 9.10, 9.90, 9.76, 10.14, 9.38, 9.45, 9.77, 11.26, 9.61, 10.11, 10.67, 9.84, 9.99, 10.00, 10.74, 10.27, 10.27, 10.52, 10.49, 10.84, 10.02, 10.49]


const dataAugust = {
    labels: labels_month,
    datasets: [
    {
        label: 'Real Data',
        data: dataRAugust,
        borderColor: 'rgba(0, 100, 255, 1)',
        backgroundColor: 'rgba(0, 100, 255, 0.2)',
        fill: true,
        tension: 0.4
    }
    ]
};
// </block:setup>

// <block:config:0>
const configAugust = {
    type: 'line',
    data: dataAugust,
    options: {
    responsive: true,
    plugins: {
        title: {
        display: true,
        text: 'Real Data Pengeluaran Per Bulan Agustus 2021 (kWh)'
        },
    },
    interaction: {
        intersect: false,
    },
    scales: {
        x: {
        display: true,
        title: {
            display: true
        }
        },
        y: {
        display: true,
        title: {
            display: true,
            text: 'kWh'
        },
        suggestedMin: 0,
        suggestedMax: 20
        }
    }
    },
};
// </block:config>

const myChartAugust = new Chart(
    document.getElementById('myChartAugust'),
    configAugust
    );

document.getElementById("myDIV").style.display = 'none';
document.getElementById("myalert").style.display = 'none';
function myFunction() {
var x1 = document.getElementById("myDIV");
var x2 = document.getElementById("myalert");
var y = document.getElementById("idtext");
if (x1.style.display === "none" && y.value == 1234567890) {
    x1.style.display = "block";
    x2.style.display = "none";
} else if (y.value != 1234567890 && y.value != ''){
    x1.style.display = "none";
    x2.style.display = "block";
}
}