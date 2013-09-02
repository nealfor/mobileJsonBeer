$(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

   var getTemp = function(){

                
            $.getJSON("http://nicktravis.com/beertemp/get.php?format=json&num=1", function(json) {
               $('#temp').append('<p>Temp : ' + json.posts[0].reading+ '</p>');
			   
                     });
        return false;
   }
   
   $('#search').click(getTemp);

});
