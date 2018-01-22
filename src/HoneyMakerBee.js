var HoneyMakerBee = function() {
  // inherit differentiated properties from Bee
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  // inherits .color = 'yellow' from Bee
  // inherits .food = 'jelly' from Bee <= Grub

  this.honeyPot = 0;
};
// inherit shared/similar properties from Bee.prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// inherits .eat() from Bee.prototype <= Grub.prototype

HoneyMakerBee.prototype.makeHoney = function makeHoney() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function giveHoney() {
  this.honeyPot--;
};