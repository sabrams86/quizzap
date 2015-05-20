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
                      ['vishwam', 'assets/images/card_vishwam.jpg']]


  //define js variables
  var form = '<div class="form"><br>Who is this? (first name only)<br> \
                <input type="text" name="name"> \
                <button type="button" name="submit" class="try">Submit</button></div>';




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
  });

  //process user input and return answer along with new photo

   $(document).on('click', '.try', function(){

     //if input matches the name, return a winner message and display next image
     var userInput = $('input[name="name"]').val();
     var nameGuess = userInput.toLowerCase();
     var answer = $('img').attr('alt');
     var randomPhoto = photoSet[Math.floor(Math.random()*photoSet.length)];
     var photo = '<img class="photo" alt="'+randomPhoto[0]+'" src="'+randomPhoto[1]+'">';
     var winner = '<h3 class="message">Nice Work!</h3>';
     var loser = '<h3 class="message">Sorry, that was actually '+answer+'</h3>';
     var counter = 0;
     var score = '<h3 class="score">Your score so far:  '+counter+'</h3>';

     for (var i=0; i < photoSet.length; i++) {

       if (i === photoSet.length) {
         $('body').append('<h3>Game over!</h3>');
       }
       else if (nameGuess === answer) {
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
       }
       //else return, sorry message with correct name and display next image
       else{
         $('.try').remove();
         $('.photo').remove();
         $('.form').remove();
         $('.message').remove();
         //$('.score').remove();
         $('body').append(loser);
         //$('body').append(score);
         $('body').append(photo);
         $('body').append(form);
       }

     }

   });
});
