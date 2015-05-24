var calculatePrice = function(city1, city2, bags, planeClass, wifi, dcode) {
  var tripCost;
  var bagCost;
  var wifiCost;
  var classCost;
  var discount;

  if (city1 === "Chicago") {
    if (city2 === "New York") {
      tripCost = 250;
    }
    else if (city2 === "Los Angeles"){
      tripCost = 350;
    }
    else{
      tripCost = 0;
    }
  }
  else if (city1 === "Los Angeles"){
    if (city2 === "New York") {
      tripCost = 545;
    }
    else if (city2 === "Chicago") {
      tripCost = 350;
    }
    else {
      tripCost = 0;
    }
  }
  else if (city1 === "New York") {
    if (city2 === "Chicago") {
      tripCost = 250;
    }
    else if (city2 === "Los Angeles") {
      tripCost = 545;
    }
    else {
      tripCost = 0;
    }
  }

  if (bags > 0) {
    bagCost = bags * 25;
  }
  else {
    bagCost = 0;
  }
  
  if (planeClass === "business"){
    classCost = 200;
  } else if (planeClass === "first"){
    classCost = 500;
  } else {
    classCost = 0;
  }
  if (wifi) {
    wifiCost = 12;
  } else {
    wifiCost = 0;
  }

  if (dcode === "10OFF"){
    discount = 0.9;
  } else if (dcode === "20OFF"){
    discount = 0.8;
  } else {
    discount = 1;
  }

  var totalCost = tripCost*discount + bagCost + classCost + wifiCost;

  return totalCost;
}
