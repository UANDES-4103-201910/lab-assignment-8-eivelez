// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	var shift=0;
	function KeyboardController(){
	  $(".key").click(function()
	  {
	    //var x =$(".console"); (other way)
	    //var clickedBtnclass = $(this).attr("class"); (getting attr)
	    var pressedKey = $(this);
	    var pressedKeyText = pressedKey.text();
	    var console =document.getElementsByClassName("output");

	    if(pressedKey.attr("class")=="key bksp"){
	    } else if(pressedKey.attr("class")=="key shift special"){
		shift=1;
	    } else if(shift==1){
		console[0].innerHTML+=pressedKeyText;
		shift=0;
	    } else {
		console[0].innerHTML+=pressedKeyText.toLowerCase();
	    } 
	  });
	}
	KeyboardController();
});
