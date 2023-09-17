import * as Phaser from 'phaser';
import { createPlayer,loadSprites } from './fausto';

export default class Estagio1 extends Phaser.Scene
{   player;
    constructor ()
    {
        super('Estagio1');
    }

    preload ()
    {
       this.load.image('tiles','./assets/maps/estagio1/grass.png');
       this.load.image('border','./assets/maps/estagio1/water.png');
       this.load.tilemapTiledJSON('map','./assets/maps/estagio1/map.json');
       loadSprites(this)
    }

    create ()
    {
        const  map =this.make.tilemap({key:'map'})
        const tilesetGrass= map.addTilesetImage("grass","tiles");
        const tilesetWater= map.addTilesetImage("water","border");

        //layer
        const ground = map.createLayer('grass',tilesetGrass,0,0)
        const water = map.createLayer('water',tilesetWater,0,0)

        //player
        this.player = createPlayer(this);

    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 640,
    scene: [Estagio1],
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{
                y:0
            }
        }

    }
};

const game = new Phaser.Game(config);
