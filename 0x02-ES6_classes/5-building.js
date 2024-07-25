export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    this.override();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  override() {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage must be implemented in subclass');
  }
}
