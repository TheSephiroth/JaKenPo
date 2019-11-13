let card = document.querySelectorAll('.card');
let resultsDisplay = document.querySelector('.results');
let userChoiceDisplay = document.getElementById('user-choice');
let pcChoiceDisplay = document.getElementById('pc-choice');
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let converted = Array.from(card);

function arrayChoices(){
	let a = [];
	for(let i = 0; i<3;i++){
		a.push(converted[i].id);
	}
	return a;
}



document.addEventListener('DOMContentLoaded',function(){
	function pcChooses(){
		let choices = arrayChoices();
		return choices[Math.floor(Math.random() * 3)]

	}	
	
    
	function addEventListenerList(list, event, fn) {
	    for (var i = 0, len = list.length; i < len; i++) {
	        list[i].addEventListener(event, fn, false);
	    }
	}
	function show(list){
		for(var i = 0, len = list.length; i<len;i++){
			list[i].classList.add("show");
		}
	}	
	addEventListenerList(card, 'click', function(){
		let p = document.getElementsByTagName("p")
		show(card);
		show(p);

		rock.addEventListener("click",function(){
			if(pcChooses() === "rock"){
				tie();	
				addText(pcChooses(),"rock");
			}  
				else if(pcChooses() === "paper") lose();		
				else if(pcChooses() === "scissors") win();

		})
		paper.addEventListener("click",function(){
		if(pcChooses() === "paper")  tie()	
			else if(pcChooses() === "rock") win();		
			else if(pcChooses() === "scissors") lose();		
		})
		scissors.addEventListener("click",function(){
		if(pcChooses() === "scissors")  tie()	
			else if(pcChooses() === "rock") lose();		
			else if(pcChooses() === "paper") win();		
		})

		function win(){
			if(userChoiceDisplay.classList.contains("tie") || userChoiceDisplay.classList.contains("lose") || pcChoiceDisplay.classList.contains("tie") || pcChoiceDisplay.classList.contains("win") ){
				userChoiceDisplay.classList.remove("tie");
				userChoiceDisplay.classList.remove("lose");
				pcChoiceDisplay.classList.remove("tie");
				pcChoiceDisplay.classList.remove("win");
				userChoiceDisplay.classList.add("win");
				pcChoiceDisplay.classList.add("lose");

			}
			

		}
		function addText(userText,pcText){
			let pcDisplay = document.querySelector("#pc");
			let userDisplay = document.querySelector("#user");
			pcDisplay.innerHTML = pcText;
			userDisplay.innerHTML = userText;
		}
		function lose(){
			userChoiceDisplay.classList.add("lose");
			pcChoiceDisplay.classList.add("win");
		}
		function tie(){
			userChoiceDisplay.classList.add("tie");
			pcChoiceDisplay.classList.add("tie");
		}

	});




})
