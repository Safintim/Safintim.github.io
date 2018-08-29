
$(document).ready(function(){
    
        // шрифт меньше при добавлении текста
        var height = $("#resize").height();
        if( height > 48){
            $("#resize").css({fontSize: 16});
        }

//        скролл 
	var fade = function (){	
        var flat = $('.flat-item'),
            flatItems = $('.flat-items'),
            flatWidth = $('.flat-item').width(),
            flatBlocksWidth = $('.flat-wrap').width();

        $('#count').html(flat.length);

        if (flat.length > 3) {
            flatItems.css({
                'width': flat.length * flatWidth + 30
            });
        } else if (flat.length <= 3) {
            flatItems.css({
                'width': '690px'
            });
        }
    };
    fade();
        
    $('#delete').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
		parentFlat = $this.closest('.flat-item');

		parentFlat.fadeOut(500);

		function close () {
			parentFlat.remove();

		};
		setTimeout(close, 500);
		setTimeout(fade, 505)

	});
});