import Phaser from 'phaser';
import { LAYERS, TILES, SIZES, SPRITES } from '../utils/constants';
import * as spine from "@esotericsoftware/spine-phaser"
import { Player } from '../entities/player';
import { SpineGameObject } from '@esotericsoftware/spine-phaser';


export class Gunger extends Phaser.Scene{
    protected heroBody: any;
    protected hero: any;
    protected weaponBone: any;
    protected button: any;
    boneGraphics: Phaser.GameObjects.Graphics;
    constructor(){
        super('GungerScene');
    }

    preload () {
        this.load.image(TILES.GUNGER, './src/assets/spritesheet_retina.png');
        this.load.tilemapTiledJSON('map', './src/assets/gunger.json');

        this.load.spineJson('hero', './src/assets/characters/alien-ess.json');
        this.load.spineAtlas('heroAtlas', './src/assets/characters/alien.atlas');
        
    }

    create () {
        //WORLD
        this.physics.world.gravity.y = 300;
        const map = this.make.tilemap ({ key: "map"})
        const tileset = map.addTilesetImage('spritesheet_retina', TILES.GUNGER, SIZES.TILE, SIZES.TILE)
        const groundLayer = map.createLayer(LAYERS.GROUND, tileset);
        const camera = this.cameras.main;

        // PLAYER
        this.heroBody = this.physics.add.sprite(500, 200, null);
        this.heroBody.setCollideWorldBounds(true);
        this.heroBody.body.setSize(309, 292);

        //this.hero = new SpineGameObject(this, this.spine, 300, 300, 'hero', 'heroAtlas');
        //this.add.existing(this.hero);
        //this.weaponBone = this.hero.skeleton.findBone('кость10');
        this.hero = this.add.spine(300, 300, 'hero', 'heroAtlas')
        console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(this.hero)));


    }

        

    update(time: number, delta: number): void {
        // if (this.hero && this.heroBody) {
        //     this.hero.x = this.heroBody.x - 10;
        //     this.hero.y = this.heroBody.y + 130;
        // }

        // const targetBone = this.hero.skeleton.findBone('target2');
                
        // const gunBone = this.hero.skeleton.findBone('кость10');
        // if (targetBone) {
        //     const pointer = this.input.activePointer;
        //     // Устанавливаем координаты кости в зависимости от положения курсора
        //     const localX = pointer.worldX - this.hero.x;
        //     const localY = pointer.worldY - this.hero.y;
        //     if (localX < 0) {
        //         gunBone.shearY = -180;
        //     } else {
        //         gunBone.shearY = -0;
        //     }
        //     // Устанавливаем координаты кости в локальных координатах
        //     targetBone.x = localX;
        //     targetBone.y = -localY;
        //     //console.log(targetBone.x , targetBone.y, "И мышь",pointer.worldX, pointer.worldY )
        // }
    }
}


