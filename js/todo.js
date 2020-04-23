/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("ul").on('click','li',function(){
    $(this).toggleClass("completed");
})

$("ul").on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input").keypress(function(event){
    if(event.which===13)
    {
        var todomessage=$(this).val();
        $(this).val("");
        $("ul").append("<li><span> <i class='fa fa-trash'> </i> </span>"+ todomessage +"</li>");
       
    }
})