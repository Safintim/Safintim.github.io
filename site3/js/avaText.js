$(document).ready(function(){
    $("#dream").click(function(){
       $("#avaT, #avaD").removeClass("out").addClass("fade");
    });
    $("#avaD").click(function(){
        $(".widj-l").removeClass("out").addClass("fade");
    });
    $("#avaT").click(function(){
        $(".widj-r").removeClass("out").addClass("fade");
    });
});