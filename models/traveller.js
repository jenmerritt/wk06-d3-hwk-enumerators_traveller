const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
};

// Set() method:

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const modesOfTransport = this.journeys.map(journey => journey.transport);
//   return [...new Set(modesOfTransport)];
// };


// indexOf returns the position of the first occurrence. So if the index of an item does not equal the first occurrence, then it must not be unique. So it then filters by this rule.

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = this.journeys.map(journey => journey.transport);
  return modesOfTransport.filter((transport, index) => {
    return modesOfTransport.indexOf(transport) === index;
  });
};




module.exports = Traveller;
