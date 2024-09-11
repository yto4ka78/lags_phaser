import { Entity } from './entity'; // Импортируем класс Entity

export class Player extends Entity {
    constructor(scene: Phaser.Scene, x: number, y: number, skeletonKey: string) {
        super(scene, x, y,'', skeletonKey);
    }


    update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        const body = this.body as Phaser.Physics.Arcade.Body;

        body.setVelocity(0);

        // Управляем движением игрока на основе ввода с клавиатуры
        if (cursors.left.isDown) {

        } else if (cursors.right.isDown) {

        } else {

        }

        // Обновляем позицию Spine персонажа

    }
}
