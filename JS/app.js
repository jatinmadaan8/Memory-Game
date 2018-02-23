var symbols =['facebook', 'facebook', 'twitter', 'twitter', 'snapchat', 'snapchat', 'instagram', 'instagram', 'whatsapp', 'whatsapp', 'linkedin', 'linkedin', 'google-plus', 'google-plus', 'youtube', 'youtube'];
var gameCards = symbols.length / 2,
    stars3 = gameCards + 2,
    stars2 = gameCards + 6,
    stars1 = gameCards + 10,
    match = 0,
    moves = 0,
    sec =0;

function initGame(){
  assign();
}

function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
return array;
}

function assign(){
  var cards = shuffle(symbols);
  for (var i = 0; i < cards.length; i++) {
		let node = document.createElement('i');
    node.setAttribute('class','fa fa-'+ cards[i]);
    $(".card")[i].append(node);
	}
  cardListner();
}

//starRating

function starRating() {
   if(moves > stars3 && moves <= stars2)
   {
     $('.stars li:nth-child(3)').remove();
   }
   else if(moves > stars2 && moves <= stars1)
   {
     $('.stars li:nth-child(2)').remove();
   }
   else if(moves > stars1)
   {
     $('.stars li:nth-child(1)').remove();
   }
  setTimeout(starRating,1000);
}

//Card Listner
 function cardListner() {
   var clicked =0,nodes =[];
   $('.card').on('click' ,function(){
     $(this).addClass('open show');
     nodes.push(this);
      clicked++;

//Match Cards

     if(clicked >1){
          moves++;
       $('.moves').empty().append(moves);
    if($(nodes[0]).find('i').attr('class') == $(nodes[1]).find('i').attr('class'))
    {
      $('.deck').find('.open').addClass('match');
      setTimeout(function() {
      $('.deck').find('.match').removeClass('show');
    }, 800);
      match++;
    }
    else{
      setTimeout(function() {
      $('.deck').find('.open').removeClass('open show');
    }, 800);
    }

    if(match == 8)
    {
      endGame();
    }
  clicked =0;
  nodes = [];
      }

		});
	}


  //timer

  function updateTime(){
  sec = sec + 1;
  $('.sec').empty().append(sec);
  setTimeout(updateTime,1000);
  }

//restart

$('.restart').on('click',function(){
  alert('Are you sure ?,You can lose your progress');
  location.reload();
});



//endGame
function endGame() {
  alert("Congratulation !!\nYou have completed the game with"+moves+" Moves");
  var r = confirm("Wanna start the game again");
if (r == true) {
    location.reload();
} else {

}
}


initGame();
updateTime();
starRating();
