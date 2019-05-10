// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	function KeyboardController()
	{
	  $(".key").click(function()
	  {
	    var clickedBtnclass = $(this).attr("class")//save 4 use;

	    alert($(this).text());
	  });
	};
	
	KeyboardController();
});
