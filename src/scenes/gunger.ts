import Phaser from 'phaser';
import { LAYERS, TILES, SIZES, SPRITES } from '../utils/constants';
import { Player } from '../entities/player';


export class Gunger extends Phaser.Scene{
    private player?: Player;
    constructor(){
        super('GungerScene');
    }

    preload () {
        this.load.image(TILES.GUNGER, './src/assets/spritesheet_retina.png');
        this.load.tilemapTiledJSON('map', './src/assets/gunger.json');

        this.load.spine(SPRITES.PLAYER_HOLD, './src/assets/characters/hero.json', './src/assets/characters/hero.atlas');
    }

    create () {
        //WORLD
        this.physics.world.gravity.y = 300;
        const map = this.make.tilemap ({ key: "map"})
        const tileset = map.addTilesetImage('spritesheet_retina', TILES.GUNGER, SIZES.TILE, SIZES.TILE)
        const groundLayer = map.createLayer(LAYERS.GROUND, tileset);

        //PLAYER
        // const spinePlugin = this.spine as any;
        // spinePlugin.add(400, 300, SPRITES.PLAYER_HOLD, 'walk', true);
        //this.player = this.add.spine(400, 300, SPRITES.PLAYER_HOLD, 'idle', true);
        //this.player = new Player(this, 450, 250, SPRITES.PLAYER_HOLD);
        // this.player = new Player(this, 450, 250, SPRITES.PLAYER_HOLD_RIGHT)
        // this.player.setCollideWorldBounds(true);

        //CAMERA
        // this.cameras.main.startFollow(this.player);
        // this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // this.cameras.main.setZoom(0.9);
        
        //PHYSYC
        // this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // this.physics.add.collider(this.player, groundLayer);
        // groundLayer.setCollisionByExclusion([-1]);
    }

    update(time: number, delta: number): void {

    }
}

