'use strict';
const DEFAULT_CAPACITY = 20;


function Airport(cap = DEFAULT_CAPACITY){
  this.hanger = [];
  this.DEFAULT_CAPACITY = cap;
}

Airport.prototype.land = function(plane) {
  if(this.hanger.length === this.DEFAULT_CAPACITY) {
    throw new Error('hanger full...unable to land plane')
  }
  this.hanger.push(plane);
}

Airport.prototype.takeoff = function(plane, weather_status) {
  if(weather_status === true) {
    throw new Error('cannot take off due to stormy weather')
  }
  this.hanger.pop(plane);
}

// Airport.prototype.isStormy = function(weather_status) {
//   this.stormy = weather_status
// }
