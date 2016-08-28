import Chart from 'chart.js'

export default function pieChart(chart, percentage) {

const perc_right = Number(percentage)*100 || 0 

const data = {
    labels: [
        "Wrong",
        "Right"
    ],
    datasets: [
        {
            data: [perc_right, 100 - perc_right],
            backgroundColor: [
                "#FF6384",
                "#36A2EB"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
            ]
        }]
};

// debugger; 


  new Chart(chart,{
    type: 'pie',
    data: data, 
    options: {
        responsive: true
    }
});

}