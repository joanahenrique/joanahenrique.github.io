$(document).ready(function () {
	$('.thebigtitle').fadeIn(1500).removeClass('hidden');
});
//Category Filter
$(function(){
	$('#mixit').mixItUp();

	//$('body').jKit();

	 $('.gallery-item').magnificPopup({
	 	delegate: 'a',
	 	type:'ajax',
	 	gallery: {enabled:true}
	 });
});

// Random Stars
var generateStars = function(){
    
    var $galaxy = $(".galaxy");
    var iterator = 0;
    
    while (iterator <= 50){
        var xposition = Math.random();
        var yposition = Math.random();
        var star_type = Math.floor((Math.random() * 3) + 1);
        var position = {
            "x" : $galaxy.width() * xposition,
            "y" : $galaxy.height() * yposition,
        };
        
        $('<div class="star star-type' + star_type + '"></div>').appendTo($galaxy).css({
            "top" : position.y,
            "left" : position.x
        });
        
        iterator++;
    }
    
};

generateStars();

