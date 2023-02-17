import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
import Monster from '../Monster';

class PVE extends Battle {
  constructor(
    private _player1: Fighter,
    private _monster: SimpleFighter[] | Fighter[] | Monster[],
  ) {
    super(_player1);
    this._player1 = _player1;
    this._monster = _monster;
  }

  fight(): number {
    this._monster.forEach((monster) => {
      this._player1.attack(monster);
      monster.attack(this._player1);
    });
    return this._player1.lifePoints === -1 ? -1 : 1; // video mentoria Danielle e Herique Gouvea - se pontos de player1 é igual a -1 ele morreu e retorne - 1 , se nao retorne vida (1)
  }
}

export default PVE;