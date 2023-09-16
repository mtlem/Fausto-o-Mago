import * as Phaser from 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
       
    }

    create ()
    {
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Phaser.Game(config);
