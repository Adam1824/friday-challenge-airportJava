'use strict';

function Airport(){
  this.hanger = []
}

Airport.prototype.land = function(plane) {
  this.hanger.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  this.hanger.pop(plane);
}
