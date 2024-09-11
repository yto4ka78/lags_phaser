
import { SpineGameObject } from "@esotericsoftware/spine-phaser";

export class Entity extends Phaser.Physics.Arcade.Sprite {
    protected spineCharacter: SpineGameObject;
    
    constructor(scene: Phaser.Scene, x: number, y: number, texture?: string, skeletonKey?: string) {
        super(scene, x, y, texture || '');
        this.scene = scene;
        
        // Добавляем физическое тело
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setCollideWorldBounds(true); // Ограничение по границам сцены
        
        // Создаем персонажа Spine
        this.spineCharacter = this.scene.add.spine(x, y, skeletonKey, '');
        this.spineCharacter.setScale(0.5);
        
        // Добавляем Spine персонажа на сцену
        this.scene.add.existing(this.spineCharacter);
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