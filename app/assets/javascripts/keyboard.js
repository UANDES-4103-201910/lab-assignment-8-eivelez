// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	function KeyboardController(){
	  $(".key").click(function()
	  {
	    var x =$(".console");
	    var y =document.getElementsByClassName("output");
	    y[0].innerHTML+=$(this).text();
	    var clickedBtnclass = $(this).attr("class");

	  });
	}
	KeyboardController();
});
