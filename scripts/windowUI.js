
/* Window UI Drag */ 
var intervalId = window.setInterval(function(){
    $(document).ready(function () {
$(".blank-window").draggable({containment: "#desktop", handle: '.window-navigation', scroll: false});
$('.blank-window').on('mousedown', function(event) { 
    $('.blank-window').css('z-index','1');
    $( this ).css('z-index','1000');
});
});
}, 50);


