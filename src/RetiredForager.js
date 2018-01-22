var RetiredForagerBee = function() {
  ForagerBee.call(this);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

  // .food inherited from Grub via Bee
  // .treasureChest inherited from ForagerBee
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// .eat() inherited from Grub via Bee

// masking of the .forage() method
RetiredForagerBee.prototype.forage = function forage() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function gamble(treasure) {
  this.treasureChest.push(treasure);
};