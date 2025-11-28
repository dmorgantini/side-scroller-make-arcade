namespace SpriteKind {
    export const ending = SpriteKind.create()
    export const spike = SpriteKind.create()
}
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    doJump()
})
function addAllSpikes () {
    addSpike(6, 6)
    addMinSpike(16, 6)
    addSpike(17, 6)
    addSpike(23, 6)
    addSpike(22, 6)
    addSpike(39, 6)
    addSpike(40, 6)
    addSpike(55, 5)
    addGroundSpike(25, 6)
    addGroundSpike(26, 6)
    addGroundSpike(27, 6)
    addGroundSpike(29, 6)
    addGroundSpike(30, 6)
    addGroundSpike(31, 6)
    addGroundSpike(50, 6)
    addGroundSpike(51, 6)
    addGroundSpike(51, 6)
    addGroundSpike(51, 6)
    addGroundSpike(59, 6)
    addGroundSpike(60, 6)
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
