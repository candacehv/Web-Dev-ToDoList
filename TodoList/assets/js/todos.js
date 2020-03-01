// Check off specific lis by clicking

$("ul").on( "click", "li", function(event) {
    $(this).toggleClass("completed");

});

$("ul").on( "click", "span", function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); 
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if ( event.which ===13) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + newTodo + "</li>");

    }
}); 

$("#form-toggle").click(function() {
    $("input[type='text']").fadeToggle(); 
});


