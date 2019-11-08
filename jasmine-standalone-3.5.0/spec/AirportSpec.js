'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane')
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
});
