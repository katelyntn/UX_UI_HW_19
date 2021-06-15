$('.dlresumebutton').on("click", function() {
    alert("Resume downloaded");
});

$('.myworkimg').hover(function(){
    $(this).width(1.03*$(this).width());
    $(this).height(1.03*$(this).height());
}, function(){
    $(this).width(0.97*$(this).width());
    $(this).height(.97*$(this).height());

    console.log("mouse leave");
});

