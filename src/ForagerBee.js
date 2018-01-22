var ForagerBee = function() {
  // inherit differentiated properties from Bee
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  // .color = 'yellow' inherited from Bee
  // .food = 'jelly' inherited from Grub via Bee

  this.canFly = true;
  this.treasureChest = [];
};
// inherit shared/similar properties from Bee.prototype
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// .eat() method inherited from Grub via Bee

ForagerBee.prototype.forage = function forage(treasure) {
  this.treasureChest.push(treasure);
};