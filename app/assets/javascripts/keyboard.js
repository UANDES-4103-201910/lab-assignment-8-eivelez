// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	var shift=0;
	var hiddenK=0;
	function KeyboardController(){
	  $(".key").click(function()
	  {
	    //var x =$(".console"); (other way)
	    //var clickedBtnclass = $(this).attr("class"); (getting attr)
	    var pressedKey = $(this);
	    var pressedKeyText = pressedKey.text();
	    var console =document.getElementsByClassName("output");

	    if(pressedKey.attr("class")=="key bksp"){
	    }else if(pressedKey.attr("class")=="key shift special"){
		shift=1;
		pressedKey.css('background-color', 'RGB(255,0,0)');
		shiftKey = pressedKey;
	    }else if(shift==1){
		console[0].innerHTML+=pressedKeyText;
		shift=0;
		shiftKey.css('background-color', 'RGB(64,255,0)');
	    }else{
		console[0].innerHTML+=pressedKeyText.toLowerCase();
	    }
	  });
	}
	KeyboardController();
	function KeyboardHide(){
	  $(".toogle").click(function()
	  {
	    var keyboard =$(".kcontainer");
	    var keys =$(".keys");
	    if (hiddenK==0){

	      keyboard.css('visibility','hidden');
	      hiddenK=1;
	      $(this).css("margin-top","80vh");

	    }else if (hiddenK==1){
	      keyboard.css('visibility','visible');
	      hiddenK=0;
	      $(this).css("margin-top","55vh");
	    }

	  });
	}
	KeyboardHide();
});
