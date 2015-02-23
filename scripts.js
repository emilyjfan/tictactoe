function gameOver(winner) {
	alert(winner + " wins!");
	$("td").off("click");
}

$(document).ready(function(){

	var turn = 1

	$('td').click(function(){
		$(this).addClass("black");
		
		if ( turn % 2 === 1) {
			$(this).text('X');
		} else {
			$(this).text('O');
		}
		checkWin();

		if(turn === 9) {
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
				gameOver(one);
				break;
			case four == five && five == six:
				gameOver(four);
				break;
			case sev === eight && eight === nine:
				gameOver(sev);
				break;
			case one === four && four === sev:
				gameOver(one);
				break;
			case two === five && five === eight:
				gameOver(two);
				break;
			case thr === six && six === nine:
				gameOver(thr);
				break;
			case one === five && five === nine:
				gameOver(one);
				break;
			case thr === five && five === sev:
				gameOver(thr);
				break;
			}
	}

$('button').click(function() {
	location.reload();
})

});