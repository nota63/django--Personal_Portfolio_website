const ctx1 = document.getElementById('siteConsumptionTrend').getContext('2d');
const ctx2 = document.getElementById('trafficSources').getContext('2d');
const ctx3 = document.getElementById('averageVisitTime').getContext('2d');
const ctx4 = document.getElementById('onlineTransaction').getContext('2d');
const ctx5 = document.getElementById('typeOfVisitors').getContext('2d');

const siteConsumptionTrend = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'Apr'],
        datasets: [
            {
                label: 'Organic',
                data: [4, 5, 3, 4],
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            },
            {
                label: 'Social',
                data: [2, 3, 2, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const trafficSources = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Organic', 'Social', 'Referral', 'Other'],
        datasets: [{
            data: [58, 23, 10, 9],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const averageVisitTime = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'March', 'Apr'],
        datasets: [
            {
                label: 'Organic',
                data: [40, 35, 30, 25],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                fill: true
            },
            {
                label: 'Social',
                data: [50, 45, 40, 35],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const onlineTransaction = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Complete', 'Pending'],
        datasets: [{
            data: [70, 30],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        rotation: -1.5 * Math.PI,
        circumference: 1.5 * Math.PI
    }
});

const typeOfVisitors = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'March', 'Apr'],
        datasets: [
            {
                label: 'New User',
                data: [2, 4, 3, 5],
                borderColor: 'rgba(54, 162, 235, 0.6)',
                fill: false
            },
            {
                label: 'Repeat User',
                data: [3, 5, 4, 3],
                borderColor: 'rgba(75, 192, 192, 0.6)',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Animate the doughnut chart
function animateDoughnut() {
    const interval = setInterval(() => {
        onlineTransaction.data.datasets[0].data[0] += 1;
        onlineTransaction.data.datasets[0].data[1] -= 1;
        if (onlineTransaction.data.datasets[0].data[0] > 100) {
            onlineTransaction.data.datasets[0].data[0] = 0;
            onlineTransaction.data.datasets[0].data[1] = 100;
        }
        onlineTransaction.update();
    }, 100);
}

animateDoughnut();