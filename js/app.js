// mark the li checked by making a strickthrow
$('li').on('click',function(){
  $(this).toggleClass('checked');

});
//delete the hole li on click of the X
$('.deleteMe').on('click',function(event){
  $(this).parent().addClass('deleted');
  event.stopPropagation();
})