
import { SpineGameObject, SpinePlugin } from "@esotericsoftware/spine-phaser";

export class Entity extends SpineGameObject {

    constructor(scene: Phaser.Scene, plugin: SpinePlugin, x: number, y: number, dataKey: string, atlasKey: string) {
        super(scene, plugin, x, y, dataKey, atlasKey);
        this.scene = scene;
    }
}

// Интерфейс для SpineGameObject
// declare module 'phaser' {
//     interface SpineGameObject extends Phaser.GameObjects.GameObject {
//       skeleton: any; // Скелет персонажа
//       setAnimation(trackIndex: number, animationName: string, loop: boolean): SpineGameObject;
//       setSkinByName(skinName: string): void;
//       setMix(from: string, to: string, duration: number): void;
//     }


  
//     interface GameObjectFactory {
//       spine(x: number, y: number, key: string, animationName?: string, loop?: boolean): SpineGameObject;
//     }
//   }

// Класс Entity