$(document).ready(function(){

$('.btn').click(function(){
	var programType = $('[name="program-type"]').val();
	var programTypeSelector = programType ? "." + programType: '';

	var eduLevel = $('[name="edu-level"]').val();
	var eduLevelSelector = eduLevel ? "." +eduLevel :'';
	var combinedSelector = programTypeSelector + eduLevelSelector;

	if(combinedSelector ===""){
	$('.image img').addClass('active');
	}else{
	$('.images.img').removeClass('active');
	console.log(combinedSelector);
	}
	
});
	
});