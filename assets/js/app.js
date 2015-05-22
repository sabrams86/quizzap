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
                  ['jacob','assets/images/card_jacob.jpg'],
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
  var counter = 0;
  var shuffledPhotos = shuffleArray(photoSet);
  var form = '<div class="form"><br>Who is this? (first name only)<br> \
              <input type="text" name="name" autofocus><br><br> \
              <button type="button" name="submit" class="try">Submit</button></div>';
  var playAgain = '<form action="index.html" method="get"><input class="retry" type="submit" name="again" value="Play Again!"></form>';

  // start the game when the user clicks the button
  $('.start').click(function(){
    var photo = '<img class="photo" alt="'+shuffledPhotos[shuffledPhotos.length-1][0]+'" src="'+shuffledPhotos[shuffledPhotos.length-1][1]+'">';
    //start loop around photo array
    $('.start').remove();
    //$('#game').append(score);
    $('#game').append(photo);
    $('#game').append(form);
    shuffledPhotos.pop();
  });

  $(document).on('click', '.try', function(){

    //if input matches the name, return a winner message and display next image
    var userInput = $('input[name="name"]').val();
    var nameGuess = userInput.toLowerCase();
    var answer = $('img').attr('alt');
    var displayAnswer = answer.charAt(0).toUpperCase() + answer.slice(1);
    var winner = '<h3 class="message">Nice Work!</h3>';
    var loser = '<h3 class="message">Sorry, that was actually '+displayAnswer+'</h3>';


    var final = '<h3 class="finalscore">Final Score:  '+counter+' / '+maxScore+'</h3>';
    if (shuffledPhotos.length>0){
      var photo = '<img class="photo" alt="'+shuffledPhotos[shuffledPhotos.length-1][0]+'" src="'+shuffledPhotos[shuffledPhotos.length-1][1]+'">';
    }
      if (shuffledPhotos.length === 0) {
        console.log('over');
        $('.form').remove();
        $('.photo').remove();
        $('.score').remove();
        $('#game').append(final);
        $('#game').append('<h3>Game over!</h3>');
        $('#game').append(playAgain);
      }
      else if (nameGuess === answer) {
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
        shuffledPhotos.pop();
        console.log(shuffledPhotos.length);
        console.log(counter);
      }
      //else return, sorry message with correct name and display next image
      else{
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
        shuffledPhotos.pop();
        console.log(shuffledPhotos.length);
      }

  });


});
