$(document).ready(function(){
  // define an array with name, image
  var photoSet = [['aanal', 'assets/images/card_anal.jpg'],
                  ['akhil', 'assets/images/card_akhil.jpg'],
                  ['amanda', 'assets/images/card_amanda.jpg'],
                  ['andrew', 'assets/images/card_andrew_3.jpg'],
                  ['anna', 'assets/images/card_anna.jpg'],
                  ['ashley', 'assets/images/card_ashley_2.jpg'],
                  ['barry', 'assets/images/card_barry.jpg'],
                  ['roberto', 'assets/images/card_berto_2.jpg'],
                  ['brian', 'assets/images/card_brian_3.jpg'],
                  ['vishwam', 'assets/images/card_vishwam.jpg'],
                  ['carrie','assets/images/card_carrie.jpg'],
                  ['claire','assets/images/card_claire.jpg'],
                  ['derek','assets/images/card_derek_v.jpg'],
                  ['derek','assets/images/card_derek.jpg'],
                  ['dylan','assets/images/card_dylan.jpg'],
                  ['jake','assets/images/card_jacob.jpg'],
                  ['jared','assets/images/card_jared.jpg'],
                  ['jaylyn','assets/images/card_jaylyn.jpg'],
                  ['john','assets/images/card_john.jpg'],
                  ['judy','assets/images/card_judylin.jpg'],
                  ['lucas','assets/images/card_lucas.jpg'],
                  ['mattias','assets/images/card_mattias.jpg'],
                  ['micah','assets/images/card_micah.jpg'],
                  ['nick','assets/images/card_nick.jpg'],
                  ['sam','assets/images/card_sam.jpg'],
                  ['steve','assets/images/card_steve.jpg'],
                  ['szilvia','assets/images/card_szilvia.jpg'],
                  ['trevor','assets/images/card_trevor.jpg'],
                  ['zack','assets/images/card_zack.jpg']];



  var maxScore = photoSet.length;
  var counter = 0;
  var penalty = 0;
  // random shuffle of array: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  // perhaps first create a shuffled array, then loop through the new array
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  // set a new variable to a shuffled set of photos
  var shuffledPhotos = shuffleArray(photoSet);
  // set a variable to the html needed to generate a form
  var form = '<div class="form">\
    <form action="#" method="get">\
      <p>Who is this? (first name only)</p> \
      <p><input type="text" name="name" autofocus></p> \
      <input type="submit" name="submit" value="Submit" class="try">\
    </form></div>';
  // set a variable to the html needed to generate a form that will reload the page when the user wants to play again
  var playAgain = '<form action="index.html" method="get"><input class="retry" type="submit" name="again" value="Play Again!"></form>';

  // **************************************************
  // * start the game when the user clicks the button *
  // **************************************************
  $('.start').click(function(){
    var startTime = new Date();
    event.preventDefault();
    // get the last element from the shuffledPhotos from the array
    //setting the alt as the student's name and the src as the image path
    var photo = '<img class="photo" alt="'+shuffledPhotos[shuffledPhotos.length-1][0]+'" src="'+shuffledPhotos[shuffledPhotos.length-1][1]+'">';
    //remove start button
    $('.start').remove();
    $('#instructions').remove();
    //add a photo and guess form
    $('#game').append(photo);
    $('#game').append(form);
    document.getElementsByName('name')[0].focus();
    //remove the last element from shuffledPhotos array (the one that was just displayed)
    shuffledPhotos.pop();


  // when the user clicks a button, evaluate their answer, clear the existing html and insert new
  // html with updated scoreboard and a winner or loser message.
  $(document).on('click', '.try', function(){
    event.preventDefault();
    //set some variables for comparing the user input to the alt value in the img
    var userInput = $('input[name="name"]').val();
    var nameGuess = userInput.toLowerCase();
    var answer = $('img').attr('alt');
    var displayAnswer = answer.charAt(0).toUpperCase() + answer.slice(1);
    var winner = '<h3 class="message">Nice Work!</h3>';
    var loser = '<h3 class="message">Sorry, that was actually '+displayAnswer+'</h3>';



    if (shuffledPhotos.length>0){
      //if there are still photos in the array, reset the photo variable to the current last element in the array
      var photo = '<img class="photo" alt="'+shuffledPhotos[shuffledPhotos.length-1][0]+'" src="'+shuffledPhotos[shuffledPhotos.length-1][1]+'">';
    }
    if (shuffledPhotos.length === 0) {
      //if the array is empty (all photos have been shown) clear the board and put the game over message up
      //along with a button to restart the game
      if (nameGuess === answer) {
        counter = counter + 1;
      }else{
        penalty = penalty + 5;
      }
      var final = '<h3 class="finalscore">Final Score:  '+counter+' / '+maxScore+'</h3>';
      $('.form').remove();
      $('.photo').remove();
      $('.score').remove();
      var endTime = new Date();
      var totalTime = (endTime.getTime() - startTime.getTime())/1000;
      console.log(counter);
      console.log(totalTime);
      $('#game').append(final);
      console.log(penalty);
      $('#game').append('<h3>Your time (with penalties): '+(Number(penalty)+Number(totalTime.toFixed(2)))+' Seconds')
      $('#game').append('<h3>Game over!</h3>');
      $('#game').append(playAgain);
    }
    else if (nameGuess === answer) {
      //if the user guesses correctly, add one to the score counter, clear the board, put up the next photo
      //and remove the last photo from the array
      counter = counter + 1;
      $('.try').remove();
      $('.photo').remove();
      $('.form').remove();
      $('.message').remove();
      $('.score').remove();
      var score = '<h3 class="score">Your score so far:  '+counter+' / '+maxScore+'</h3>';
      $('#game').append(winner);
      $('#game').append(score);
      $('#game').append(photo);
      $('#game').append(form);
      document.getElementsByName('name')[0].focus();
      shuffledPhotos.pop();
    }
    else{
      penalty = penalty + 5;
      //if the user guesses wrong, clear the board, put up the next photo
      //tell the user who the last photo was of, and remove the last photo from the array
      $('.try').remove();
      $('.photo').remove();
      $('.form').remove();
      $('.message').remove();
      $('.score').remove();
      var score = '<h3 class="score">Your score so far:  '+counter+' / '+maxScore+'</h3>';
      $('#game').append(loser);
      $('#game').append(score);
      $('#game').append(photo);
      $('#game').append(form);
      document.getElementsByName('name')[0].focus();
      shuffledPhotos.pop();
    }
  });

});

});
