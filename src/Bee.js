var Bee = function() {
  Grub.call(this);

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

  // inherits 'food' from Grub
  // inherits '.eat()' from Grub.prototype
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


