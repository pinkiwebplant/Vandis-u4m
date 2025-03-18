$('.u4m-events .pagination a').on('click', function(e){
	e.preventDefault();
  var loadUrl = $(this).attr('data-href')
  console.log(loadUrl); 
  $( ".postCardsWrap" ).load(loadUrl + " .postCardsInr");
});
