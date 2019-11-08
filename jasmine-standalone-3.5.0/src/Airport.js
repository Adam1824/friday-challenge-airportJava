'use strict';

function Airport(){
  this.hanger = [];
  this.DEFAULT_CAPACITY = 20;
}

Airport.prototype.land = function(plane) {
  if(this.hanger.length === this.DEFAULT_CAPACITY) {
    throw new Error('hanger full...unable to land plane')
  }
  this.hanger.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  this.hanger.pop(plane);
}
