(function ($) {

	//document ready empty the selected cards
	$('.videoIDContTab1').val("");
	$('.Tab1ButtonPlaySelected').hide();
	$(".contYoutubebody").hide();
	var IDs ="";
	var IDsArr = new Array();
	
	var Counter=0;
	// card click count and store in hidden input field	
	$(document).on("click",".cardCont",function() {
		 $(this).toggleClass("cardborderOrange");
		 var videoId= $(this).attr('data-videoid');
	
		
		var IDstring = "";
		if ( $( this ).hasClass( "cardborderOrange" ) ) {
 	
			IDstring=$('.videoIDContTab1').val();
		
			$('.videoIDContTab1').val(IDstring+","+videoId);
			
		 
		    }else{
			
			IDs = $('.videoIDContTab1').val();

			IDsArr = IDs.split(",");
			
			var removeItem = videoId;
			
			IDsArr = jQuery.grep(IDsArr, function(value) {
			  return value != removeItem;
			});
			
		 	IDstring=IDsArr.toString();
			$('.videoIDContTab1').val(IDstring);

			$('.contCounter-'+videoId).html("");
			

		}

		// to identify the card click series of events
		var IDsCounter = $('.videoIDContTab1').val();

			var trimYoutubIds =IDsCounter;
			IDsArrCounter = IDsCounter.split(",");

			
			Counter= IDsArrCounter.length;			

			if(Counter >=2){
				$('.Tab1ButtonPlaySelected').show();
			}else{
				$('.Tab1ButtonPlaySelected').hide();
			}

			var i=0;
			var yIds=[];
			$.each( IDsArrCounter, function( index, value ){
			        $('.contCounter-'+value).html("<span class='sCount'>"+i+"</span>");
			
				i++;
			});
			
		       
			trimYoutubIds = trimYoutubIds.replace(/(^,)|(,$)/g, "");			
			$('.playSelectedBtn').html('<a href="#" class="eventButton eventytplaylistselected">Play Selected</a>');
            /////////////////////////////////////////////////////////////////////// prevent defaults
            $("a.eventytplaylistselected").click(function(e) {e.preventDefault();});
       
    $('a.eventytplaylistselected').click(function(event){
    console.log (trimYoutubIds);
    window.history.pushState({}, '', '?ids=' + trimYoutubIds +'');
        
    $.get('../../events/mwc/event-yt-playlist?ids='+ trimYoutubIds + '', function(data){
    $("div.yt-event-playlist-overlay").append(data);
    });
        
    $( "a.event-YT-video-close" ).css( "display", "block"); 
    $( "div.yt-event-playlist-overlay" ).css( "height", "100%");
        
    });
        
	});

} 
 
(jQuery));