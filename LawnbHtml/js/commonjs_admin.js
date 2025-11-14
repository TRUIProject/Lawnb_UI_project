  
 
// 본문 사이즈 조절
function setHeight() {
    var rightH = $('.center_container').outerHeight();
    var leftH = $('#left_container ul').outerHeight(); 
 
	$('.center_container').height( Math.max( leftH,rightH ));

	 
} 
 
$(document).ready(function () { 
		
	 

	var tNav = $('.tree');
	var tNavPlus = '\<button type=\"button\" class=\"tNavToggle plus\"\>+\<\/button\>';
	var tNavMinus = '\<button type=\"button\" class=\"tNavToggle minus\"\>-\<\/button\>';
	 
	tNav.find('li>ol:hidden').parent('li').prepend(tNavPlus);
	tNav.find('li>ol:visible').parent('li').prepend(tNavMinus); 
	
	tNav.find('li:first-child').addClass('open').parents('li').addClass('open');
	tNav.find('li.open>.tNavToggle').text('-').removeClass('plus').addClass('minus');   
	tNav.find('li>ol>li>ol:visible').hide().parent('li').removeClass('open').addClass('close'); 
	tNav.find('li.close>.tNavToggle').text('+').removeClass('minus').addClass('plus');   

	$('.tree .tNavToggle').click(function(){
		t = $(this);
		t.parent('li').toggleClass('open');
		if(t.parent('li').hasClass('open')){
			t.text('-').removeClass('plus').addClass('minus');
			t.parent('li').find('>ol').slideDown(100);
		} else {
			t.text('+').removeClass('minus').addClass('plus');
			t.parent('li').find('>ol').slideUp(100);
		}
		return false;
	});
	$('.tree label').click(function(){
		t = $(this);
		t.parent('li').toggleClass('open');
		if(t.parent('li').hasClass('open')){
			t.prev('button.tNavToggle').text('-').removeClass('plus').addClass('minus');
			t.parent('li').find('>ol').slideDown(100);
		} else {
			t.prev('button.tNavToggle').text('+').removeClass('minus').addClass('plus');
			t.parent('li').find('>ol').slideUp(100);
		}
		return false;
	});

	
}); 