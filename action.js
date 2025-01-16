$( document ).ready(function() {
    $(".infoMain").on( "click", function() {
        $(".infoMain").slideToggle(1000, function(){
            $(".razon1").slideToggle(1000)
        });
      } );

      $(".razon1").on( "click", function() {
        $(".razon1").slideToggle(1000, function(){
             $(".razon2").slideToggle(1000)
        });
      } );

      $(".razon2").on( "click", function() {
        $(".razon2").slideToggle(1000, function(){
             $(".razon3").slideToggle(1000)
        });
      } );

});