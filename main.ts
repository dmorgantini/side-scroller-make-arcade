namespace SpriteKind {
    export const ending = SpriteKind.create()
    export const spike = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    doJump()
})
function playMusic () {
    music.setTempo(170)
    music.playMelody("E B D C A B G A ", 120)
    music.playMelody("E B D C A B G A ", 120)
    music.playMelody("C C F E D E F G ", 120)
    music.playMelody("C C F E D E F G ", 120)
}
function addMultipleGroundSpikes (x: number, y: number, count: number) {
    for (let index = 0; index <= count - 1; index++) {
        addGroundSpike(index + x, y)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    doJump()
})
function addGroundSpike (x: number, y: number) {
    hitboxSprite = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    spikeSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . 6 6 6 . . 
        . . . . . . . . . . . 6 6 6 . . 
        . . 6 . . . . . . . 6 6 6 6 6 . 
        . 6 6 6 . f . . . 6 6 6 6 6 6 6 
        f 6 f 6 f f f . f 6 6 6 f 6 f 6 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.spike)
    setSpikeLocation(x, y, spikeSprite, 8, hitboxSprite)
}
function setSpikeLocation (x: number, y: number, spikeSprite: Sprite, hitBoxOffset: number, hitBoxSprite: Sprite) {
    spikeSprite.setPosition(9 + 16 * x, 9 + 16 * y)
    hitBoxSprite.setPosition(9 + 16 * x, 9 + hitBoxOffset + 16 * y)
}
function addSpike (x: number, y: number) {
    hitboxSprite = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    spikeSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f f f f f f f f f . . . 
        . f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.spike)
    setSpikeLocation(x, y, spikeSprite, 1, hitboxSprite)
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    doJump()
})
function addMultipleSpikes (x: number, y: number, count: number) {
    for (let index = 0; index <= count - 1; index++) {
        addSpike(index + x, y)
    }
}
function addAllSpikes () {
    addSpike(6, 6)
    addMinSpike(16, 6)
    addSpike(17, 6)
    addMultipleSpikes(22, 6, 2)
    addMultipleSpikes(39, 6, 2)
    addSpike(55, 5)
    addSpike(67, 5)
    addMultipleGroundSpikes(25, 6, 3)
    addMultipleGroundSpikes(29, 6, 3)
    addMultipleGroundSpikes(50, 6, 2)
    addMultipleGroundSpikes(59, 6, 2)
}
function doJump () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -140
        if (spriteDirection == "up") {
            timer.after(100, function () {
                mySprite.setImage(assets.image`GD Square0`)
                timer.after(100, function () {
                    mySprite.setImage(assets.image`GD Square1`)
                    spriteDirection = "down"
                })
            })
        } else {
            timer.after(100, function () {
                mySprite.setImage(assets.image`GD Square2`)
                timer.after(100, function () {
                    mySprite.setImage(assets.image`GD Square`)
                    spriteDirection = "up"
                })
            })
        }
    }
}
function addMinSpike (x: number, y: number) {
    hitboxSprite = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    spikeSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.spike)
    setSpikeLocation(x, y, spikeSprite, 6, hitboxSprite)
}
function addMultipleMinSpikes (x: number, y: number, count: number) {
    for (let index = 0; index <= count - 1; index++) {
        addMinSpike(index + x, y)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let spikeSprite: Sprite = null
let hitboxSprite: Sprite = null
let mySprite: Sprite = null
let spriteDirection = ""
spriteDirection = "down"
scene.setBackgroundColor(8)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`GD Square`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
spriteDirection = "up"
mySprite.setPosition(6, 98)
mySprite.ay = 400
mySprite.vx = 110
scene.cameraFollowSprite(mySprite)
addAllSpikes()
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        game.setGameOverMessage(false, "GAME OVER!")
        mySprite.sayText(":)")
        game.gameOver(false)
    }
})
