import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
export default Warrior;