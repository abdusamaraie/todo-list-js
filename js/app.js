// mark the li checked by making a strickthrow
$('ul').on('click','li',function(){
  $(this).toggleClass('checked');

});
//delete the hole li on click of the X
$('ul').on('click','span',function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
})

//Add new todo
$("input[type='text']").on('keypress',function(event){
  if(event.which === 13){
    //Grabbing the text from input
    var todo = $(this).val();
    $('ul').append('<li>' +"<span><i class='fa fa-trash'></i></span>"+ todo + '</li>');
    /// clear the text input
    $(this).val("");
  }
})

//toggle input
$('#toggle-form').on('click',function(){
  $("input[type='text']").fadeToggle();
})