

$(document).ready(function(){

	// Test if all elemebts match a CSS selector
	$.fn.all = function(selector) { 
		return this.not(selector).length === 0
	}


	function checkWin() {
		for (var i = 1; i <= 8; i++) {
			if ($("."+i).all(".X")) {
				return "X"
			}
			if ($("."+i).all(".O")) {
				return "O"
			}
		}
		return false
	}

	function draw() {
		return $("td").all(".X, .O")
	}

	function victoryDance(winner) {
		$(this).off('click');
		$('.'+winner).solitaireVictory({dt: 0, g: -1, stagger: 800, endVelocity: 5});
		return true;
	}

	function mark(cell, callback) {
		$(cell).find("div").text(turn);
		$(cell).addClass(turn);
		$(cell).find('div').toggle('bounce', { times: 2 }, 600, callback);
	}

	function next_turn() {
    // turnary operator
		turn = (turn === "X") ? "O" : "X"
	}

	$("td").html("<div></div>")
	$("td div").hide()

	var turn = "X"

	$('td').click(function(){
	
		$(this).off('click');

		mark(this, function(){
			if(winner = checkWin()) {
				victoryDance(winner);
			} else if (draw()) {
				$('div').effect('bounce', { times: 3}, 2000);
			}	
		});

		next_turn();

	});

	// function checkWin() {

	// 	var one = $('#1').text();
	// 	var two = $('#2').text();
	// 	var thr = $('#3').text();
	// 	var four = $('#4').text();
	// 	var five = $('#5').text();
	// 	var six = $('#6').text();
	// 	var sev = $('#7').text();
	// 	var eight = $('#8').text();
	// 	var nine = $('#9').text();

	// 	switch (true) {
	// 		case one === two && two === thr:
	// 			return gameOver(one);
	// 			break;
	// 		case four == five && five == six:
	// 			return gameOver(four);
	// 			break;
	// 		case sev === eight && eight === nine:
	// 			return gameOver(sev);
	// 			break;
	// 		case one === four && four === sev:
	// 			return gameOver(one);
	// 			break;
	// 		case two === five && five === eight:
	// 			return gameOver(two);
	// 			break;
	// 		case thr === six && six === nine:
	// 			return gameOver(thr);
	// 			break;
	// 		case one === five && five === nine:
	// 			return gameOver(one);
	// 			break;
	// 		case thr === five && five === sev:
	// 			return gameOver(thr);
	// 			break;
	// 		}

	// 	return false;
	// }

$('button').click(function() {
	location.reload();
})

});