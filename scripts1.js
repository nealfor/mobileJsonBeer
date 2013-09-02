$.ajax({
    url:"http://nicktravis.com/beertemp/get.php?format=json&num=1",
    type:'GET',
    dataType:'JSONP',
    success: function(data){
        $('body').append( "Temp: " + data );
    }
});

$('#search').click(getTemp);
