// content menu
$('#contentMenu').on('click', function(e){
  e.preventDefault();
  $('.sidebar').toggleClass('minimized');

  $('.sidebar-body').scrollTop(0);
  sb.update();
});

// mobile menu
$('#mobileMenu').on('click', function(e){
  e.preventDefault();
  $('body').toggleClass('sidebar-show');
});


// admin line chart
var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'Transaksi',
      data: [30,40,110,50,49,60,70,91,125,100,76,54]
    }],
    xaxis: {
      categories: ["Jan","Feb","Mar","April","Mei","Juni","Juli", "Agust","Sept","Okt","Nov","Des"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();