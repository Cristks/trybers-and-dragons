import Energy from '../Energy';

interface Fighter {
  lifePoints: number
  strength: number
  defense: number
  energy?: Energy // ? significa opcional
  attack(enemy: Fighter): void
  special?(enemy: Fighter): void
  levelUp(): void
  receiveDamage(attackPoints: number): number
}

export default Fighter;