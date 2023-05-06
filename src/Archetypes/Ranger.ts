import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _numberInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._numberInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {  
    return this._numberInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}