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


  //define js variables
  var form = '<div class="form"><br>Who is this? (first name only)<br> \
                <input type="text" name="name"> \
                <button type="button" name="submit" class="try">Submit</button></div>';


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

  var shuffledPhotos = shuffleArray(photoSet);
  // start the game when the user clicks the button
  $('.start').click(function(){
    //randomly choose an item from an object and return it's key
    //this is from stack overflow: http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    var randomPhoto = photoSet[Math.floor(Math.random()*photoSet.length)];
    var photo = '<img class="photo" alt="'+randomPhoto[0]+'" src="'+randomPhoto[1]+'">';
    $('.start').remove();
    $('.photo').remove();
    $('.guess').remove();
    $('body').append(photo);
    $('body').append(form);




  //process user input and return answer along with new photo
  for (var i = 0; i < shuffledPhotos.length; i++) {
    var userInput = $('input[name="name"]').val();
    var nameGuess = userInput.toLowerCase();
    var answer = $('img').attr('alt');
    var photo = '<img class="photo" alt="'+shuffledPhotos[i][0]+'" src="'+shuffledPhotos[i][1]+'">';
    var winner = '<h3 class="message">Nice Work!</h3>';
    var loser = '<h3 class="message">Sorry, that was actually '+answer+'</h3>';
    var counter = 0;
    var score = '<h3 class="score">Your score so far:  '+counter+'</h3>';

    if (i === shuffledPhotos.length) {
      $('.try').click(function(){
        $('body').append('<h3>Game over!</h3>');
      });
    }
    else if (nameGuess === answer) {
      $('.try').click(function(){
        counter = counter + 1;
        $('.try').remove();
        $('.photo').remove();
        $('.form').remove();
        $('.message').remove();
        //$('.score').remove();
        $('body').append(winner);
        //$('body').append(score);
        $('body').append(photo);
        $('body').append(form);
      });
    }
    else{
      $('.try').click(function(){
        $('.try').remove();
        $('.photo').remove();
        $('.form').remove();
        $('.message').remove();
        //$('.score').remove();
        $('body').append(loser);
        //$('body').append(score);
        $('body').append(photo);
        $('body').append(form);
      });
    }




 }

});
});
