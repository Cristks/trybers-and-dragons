import Energy from '../Energy';
import SimpleFighter from './SimpleFigter';

interface Fighter extends SimpleFighter { // aqui desmembramos a interface, pois parte do presuposto que tudo se incia de um lutador simples. é mais comum 
  // lifePoints: number 
  // strength: number
  defense: number
  energy?: Energy // ? significa opcional
  // attack(enemy: Fighter): void
  special?(enemy: Fighter): void
  levelUp(): void
  // receiveDamage(attackPoints: number): number
}

export default Fighter;