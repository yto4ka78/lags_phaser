import { scenes } from './scenes'
import './style.css'
import Phaser from 'phaser'
import { SpinePlugin } from '@esotericsoftware/spine-phaser';



new Phaser.Game({
  width: 800,
  height: 600,
  title: 'Phaser RPG',
  scene: scenes,
  backgroundColor: '#fff',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    } //TEST
  },
  plugins: {
    scene: [
      {
        key: 'SpinePlugin',
        plugin: SpinePlugin,
        mapping: 'spine'
      }
    ]
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
// Makw some change


