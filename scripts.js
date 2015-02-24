function gameOver(winner) {
	alert(winner + " wins!");
	$('div').effect('bounce', { times: 3}, 2000);
	$('td').off('click');
	// $('table').effect('pulsate');
	return true;
}

$(document).ready(function(){

	var turn = 1

	$('td').click(function(){
	
		
		if ( turn % 2 === 1) {
			$(this).html('<div>X</div>');
			$(this).addClass("blue");
		} else {
			$(this).html('<div>O</div>');
			$(this).addClass("red");
		}

		if(checkWin() === false && turn === 9) {	
			alert("DRAW");
		}
		
		turn++;

		$(this).off('click');
	});

	function checkWin() {

		var one = $('#1').text();
		var two = $('#2').text();
		var thr = $('#3').text();
		var four = $('#4').text();
		var five = $('#5').text();
		var six = $('#6').text();
		var sev = $('#7').text();
		var eight = $('#8').text();
		var nine = $('#9').text();

		switch (true) {
			case one === two && two === thr:
				return gameOver(one);
				break;
			case four == five && five == six:
				return gameOver(four);
				break;
			case sev === eight && eight === nine:
				return gameOver(sev);
				break;
			case one === four && four === sev:
				return gameOver(one);
				break;
			case two === five && five === eight:
				return gameOver(two);
				break;
			case thr === six && six === nine:
				return gameOver(thr);
				break;
			case one === five && five === nine:
				return gameOver(one);
				break;
			case thr === five && five === sev:
				return gameOver(thr);
				break;
			}

		return false;
	}

$('button').click(function() {
	location.reload();
})

});