'use strict';

function Airport(){
  this.hanger = []
}

Airport.prototype.land = function(plane) {
  this.hanger.push(plane); 
}
