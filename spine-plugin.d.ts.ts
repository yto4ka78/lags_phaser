import Phaser from 'phaser';

declare module 'phaser' {
  interface SpineGameObject extends Phaser.GameObjects.GameObject {
    skeleton: any; // Скелет персонажа
    setAnimation(trackIndex: number, animationName: string, loop: boolean): SpineGameObject;
    setSkinByName(skinName: string): void;
    setMix(from: string, to: string, duration: number): void;
  }

  interface GameObjectFactory {
    spine(x: number, y: number, key: string, animationName?: string, loop?: boolean): SpineGameObject;
  }
}
