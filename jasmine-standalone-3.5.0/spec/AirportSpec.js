'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;


  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    // weather = jasmine.createSpyObj('weather', ['isStormy'])
    weather = new Weather();
  });

  describe('Airport can have a hanger', function() {
    it('has an empty hanger by default', function() {
      expect(airport.hanger).toEqual([]);
    });
  });

  describe('Airport can land a plane', function() {
    it('a plane can land at an airport', function() {
      airport.land(plane);
      expect(airport.hanger).toContain(plane)
    });
  });

  describe('A plane can take off from the airport', function() {
    it('can take off a plane', function(){
      airport.land(plane);
      airport.takeoff(plane);

      expect(airport.hanger).not.toContain(plane);
    });
  });

  describe('Prevent landing when the airport is full', function() {
    it('cannot land a plane when the hanger is full', function() {
      for(var i = 0; i < airport.DEFAULT_CAPACITY; i++) {
        airport.land(plane)
      };
      expect(function(){ airport.land(plane); }).toThrowError('hanger full...unable to land plane');
    });
  });

  describe('Airport can have a default capacity which can be overridden', function() {
    it('has a default capacity', function() {
      expect(airport.DEFAULT_CAPACITY).toBeDefined()
    });
    it('can be overridden', function() {
      airport.DEFAULT_CAPACITY = 5
      expect(airport.DEFAULT_CAPACITY).toEqual(5)
    });
  });

  describe('when weather is stomry', function() {
    it('a plane cannot takeoff', function() {
      weather = weather.isStormy()
      if (weather === false){
        weather = true
      }
      expect(function(){ airport.takeoff(plane, weather); }).toThrowError('cannot take off due to stormy weather')
    });
  });
});
