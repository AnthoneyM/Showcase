$(document).keyup(function(event) {
    if (event.which === 13) {
    	document.getElementById('enter').style.display = 'none';
    	document.getElementById('originalC').style.display = 'inherit';
        typeSentence("ftp 89.145.229.237 story.txt", "#ftpcommand", 100)
		setTimeout(modem, 4000);
    }
});

async function typeSentence(sentence, eleRef, delay) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


function noise() {
	var computer_noise = new Audio('boot.mp3');
	document.getElementById('logo').style.display = "inherit";
	document.getElementById('inside').style.backgroundColor = '#848786';
	computer_noise.play();
	setTimeout(change, 13000);	
}

function change() {
	document.getElementById('running').play();
	document.getElementById('logo').style.display = "none";
	document.getElementById('ms-dos').style.display = "inherit";
	document.getElementById("power").disabled = true;
}

function modem () {
	document.getElementById('ftpser').style.display = 'inherit';
	var modem = new Audio('modem.mp3');
	modem.play();
	document.getElementById("power").disabled = false;
	setTimeout(incoming, 28000);
}

function incoming () {
	typeSentence("The Lion and the Mouse Once, as a lion lay sleeping in his den, a naughty little mouse ran up his tail, and onto his back and up his mane and danced and jumped on his head.  …so that the lion woke up. The lion grabbed the mouse and, holding him in his large claws, roared in anger. ‘How dare you wake me up! Don’t you know that I am King of the Beasts? Anyone who disturbs my rest deserves to die! I shall kill you and eat you!’ The lion grabbed the mouse. The terrified mouse, shaking and trembling, begged the lion to let him go. ‘Please don’t eat me Your Majesty! I did not mean to wake you, it was a mistake. I was only playing. Please let me go – and I promise I will be your friend forever. Who knows but one day I could save your life?’. he lion looked at the tiny mouse and laughed. ‘You save my life? What an absurd idea!’ he said scornfully. ‘But you have made me laugh, and put me into a good mood again, so I shall let you go.’ And the lion opened his claws and let the mouse go free. ‘Oh thank you, your majesty,’ squeaked the mouse, and scurried away as fast as he could. A few days later the lion was caught in a hunter’s snare. Struggle as he might, he couldn’t break free and became even more entangled in the net of ropes. He let out a roar of anger that shook the forest. Every animal heard it, including the tiny mouse.‘My friend the lion is in trouble,’ cried the mouse. He ran as fast as he could in the direction of the lion’s roar, and soon found the lion trapped in the hunter’s snare. ‘Hold still, Your Majesty,’ squeaked the mouse. ‘I’ll have you out of there in a jiffy!’ And without further delay, the mouse began nibbling through the ropes with his sharp little teeth. Very soon the lion was free. ‘I did not believe that you could be of use to me, little mouse, but today you saved my life,’ said the lion humbly. ‘It was my turn to help you, Sire,’ answered the mouse.", "#writtenstorytext", 10);
	setTimeout(lastone, 30000);
}

function lastone () {
	document.getElementById('storytext').style.display = 'inherit';
}