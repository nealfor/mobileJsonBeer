$(document).ready(function(){

   

   var getTemp = function(){

                
            $.getJSON("http://nicktravis.com/beertemp/get.php?format=json&num=1", function(json) {			    
				var d = new Date(json.posts[0].timestamp*1000);
				var formattedDate = (d.getMonth() + 1)+ "-" +d.getDate() + "-" + d.getFullYear();
				var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
				var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
				var formattedTime = hours + ":" + minutes;
				var dateTime = formattedDate +" at "+ formattedTime;

formattedDate = formattedDate + " " + formattedTime;
			   $('#temp').empty();
               $('#temp').append('<p>Temp : ' + json.posts[0].reading+"\u00B0"+"F "+ ' at '+dateTime+'</p>');

                     });
        return false;
   }
   
   var myDate
   
   $('#search').click(getTemp);

});
