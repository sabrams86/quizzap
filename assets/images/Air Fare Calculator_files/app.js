var submit = document.getElementsByClassName('button')[0];

submit.addEventListener('click', function(e) {
  e.preventDefault();
  var departCity = document.getElementById('departure').value;
  var arriveCity = document.getElementById('arrival').value;
  var bags = document.getElementById('bags').value;
  var planeClass = document.getElementById('class').value;
  var wifi = document.getElementById('wifi').checked;
  var discount = document.getElementById('dcode').value;

  var price = calculatePrice(departCity, arriveCity, bags, planeClass, wifi, discount);
  var total = document.getElementsByClassName('total')[0];
  total.innerHTML = "<h3>Your Price is: $"+price.toFixed(2)+"</h3>"
});
