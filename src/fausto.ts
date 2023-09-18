export const createPlayer = (scene:Phaser.Scene) =>{
    const player =scene.physics.add.sprite(200,200,'fausto_idle');
    creatAnimations(scene);
    return player


}

export const loadSprites = (scene: Phaser.Scene):void =>{
    scene.load.spritesheet('fausto_idle','./assets/fausto/fausto-parado.png',{
        frameWidth: 47,
        frameHeight:60
        
    });

    scene.load.spritesheet('fausto_left','./assets/fausto/faustoLeft.png',{
        frameWidth: 47,
        frameHeight: 60,
        spacing: 45
    });

    scene.load.spritesheet('fausto_right','./assets/fausto/fautoRight.png',{
        frameWidth: 40,
        frameHeight: 60,
        spacing: 45
        
    });

    scene.load.spritesheet('fausto_up','./assets/fausto/faustoUp.png',{
        frameWidth: 40,
        frameHeight: 60,
        spacing: 45
        

    });

    scene.load.spritesheet('fausto_down','./assets/fausto/faustoDown.png',{
        frameWidth: 47,
        frameHeight: 60,
        spacing: 45
        

    });
};

export const creatAnimations =(scene:Phaser.Scene):void =>{
    scene.anims.create({
        key:'fausto_left',
        frames:scene.anims.generateFrameNames('fausto_left',{
            start: 0,
            end:5

        }),
        frameRate:9,
        repeat: -1,
        yoyo:true
    });


    scene.anims.create({
        key:'fausto_right',
        frames:scene.anims.generateFrameNames('fausto_right',{
            start: 0,
            end:7

        }),
        frameRate:9,
        repeat: -1,
        yoyo:true
    });


    scene.anims.create({
        key:'fausto_Up',
        frames:scene.anims.generateFrameNames('fausto_Up',{
            start: 0,
            end:6

        }),
        frameRate:7,
        repeat: -1,
        yoyo:true
    });

    scene.anims.create({
        key:'fausto_down',
        frames:scene.anims.generateFrameNames('fausto_down',{
            start: 0,
            end:5

        }),
        frameRate:8,
        repeat: -1,
        yoyo:true
    });




}