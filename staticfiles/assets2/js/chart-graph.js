function numberWithCommas(x) {

  let word = x.toString();
  let arrWord = word.split(".");

  let t1 = arrWord[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let t2 = "," + arrWord[1];

  return t1+t2;

}

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

var sumPJuly = 0;
var sumRJuly = 0;
var sumPAugust = 0;
var sumRAugust = 0;
var sumRYear = 0;

for (let i = 0; i<31; i++) {
  dataPJulyCost[i] = dataPJulyCost[i]*1444.70;
  dataRJulyCost[i] = dataRJulyCost[i]*1444.70;
  dataPAugustCost[i] = dataPAugustCost[i]*1444.70;
  dataRAugustCost[i] = dataRAugustCost[i]*1444.70;
}

for(let j=0; j<31; j++) {
  if (!(isNaN(dataPJuly[j]))) {
    sumPJuly = sumPJuly + dataPJuly[j];
  }
  if (!(isNaN(dataRJuly[j]))) {
    sumRJuly = sumRJuly + dataRJuly[j];
  }
  if (!(isNaN(dataPAugust[j]))) {
    sumPAugust = sumPAugust + dataPAugust[j];
  }
  if (!(isNaN(dataRAugust[j]))) {
    sumRAugust = sumRAugust + dataRAugust[j];
  }

}

sumRYear = sumRJuly + sumRAugust;

document.getElementById("bulan-r").innerHTML = sumRAugust.toFixed(2) + " kWh";
document.getElementById("bulan-r-cost").innerHTML = "Rp" + numberWithCommas(sumRAugust.toFixed(2)*1444.70);
document.getElementById("tahun-r").innerHTML = sumRYear.toFixed(2) + " kWh";
document.getElementById("tahun-r-cost").innerHTML = "Rp" + numberWithCommas(sumRYear.toFixed(2)*1444.70);


const dataJulyCost = {
  labels: labels_month,
  datasets: [
    {
      label: 'Prediction',
      data: dataPJulyCost,
      borderColor: 'rgba(255, 0, 0, 1)',
      fill: false,
      tension: 0.4
    }, {
      label: 'Real Data',
      data: dataRJulyCost,
      borderColor: 'rgba(0, 100, 255, 1)',
      backgroundColor: 'rgba(0, 100, 255, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
};
// </block:setup>

// <block:config:0>
const configJulyCost = {
  type: 'line',
  data: dataJulyCost,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Prediction vs Real Data Pengeluaran Per Bulan (Rupiah)'
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
          text: 'rupiah'
        },
        suggestedMin: 0,
        suggestedMax: 50000
      }
    }
  },
};
// </block:config>
const myChartJulyCost = new Chart(
  document.getElementById('myChartJulyCost'),
  configJulyCost
  );

const dataJuly = {
    labels: labels_month,
    datasets: [
    {
        label: 'Prediction',
        data: dataPJuly,
        borderColor: 'rgba(255, 0, 0, 1)',
        fill: false,
        tension: 0.4
    }, {
        label: 'Real Data',
        data: dataRJuly,
        borderColor: 'rgba(0, 200, 50, 1)',
        backgroundColor: 'rgba(0, 200, 50, 0.2)',
        fill: true,
        tension: 0.4
    }
    ]
};
// </block:setup>

// <block:config:0>
const configJuly = {
    type: 'line',
    data: dataJuly,
    options: {
    responsive: true,
    plugins: {
        title: {
        display: true,
        text: 'Prediction vs Real Data Pengeluaran Per Bulan Juli 2021 (kWh)'
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

const myChartJuly = new Chart(
    document.getElementById('myChartJuly'),
    configJuly
    );


const dataAugustCost = {
  labels: labels_month,
  datasets: [
    {
      label: 'Prediction',
      data: dataPAugustCost,
      borderColor: 'rgba(255, 0, 0, 1)',
      fill: false,
      tension: 0.4
    }, {
      label: 'Real Data',
      data: dataRAugustCost,
      borderColor: 'rgba(0, 100, 255, 1)',
      backgroundColor: 'rgba(0, 100, 255, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
};
// </block:setup>

// <block:config:0>
const configAugustCost = {
  type: 'line',
  data: dataAugustCost,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Prediction vs Real Data Pengeluaran Per Minggu (Rupiah)'
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
          text: 'rupiah'
        },
        suggestedMin: 0,
        suggestedMax: 50000
      }
    }
  },
};
// </block:config>

const myChartAugustCost = new Chart(
  document.getElementById('myChartAugustCost'),
  configAugustCost
  );


const dataAugust = {
    labels: labels_month,
    datasets: [
    {
        label: 'Prediction',
        data: dataPAugust,
        borderColor: 'rgba(255, 0, 0, 1)',
        fill: false,
        tension: 0.4
    }, {
        label: 'Real Data',
        data: dataRAugust,
        borderColor: 'rgba(0, 200, 50, 1)',
        backgroundColor: 'rgba(0, 200, 50, 0.2)',
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
        text: 'Prediction vs Real Data Pengeluaran Per Bulan Agustus 2021 (kWh)'
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