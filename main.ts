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
function addSpike (x: number) {
    spike_hit = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    spike_hit.setPosition(9 + 16 * x, 105)
    spike_hit.setFlag(SpriteFlag.Invisible, true)
    mySprite2 = sprites.create(img`
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
    mySprite2.setPosition(9 + 16 * x, 104)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.confetti)
})
function addminSpike (x: number) {
    spike_hit = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    spike_hit.setPosition(9 + 16 * x, 110)
    mySprite2 = sprites.create(img`
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
    mySprite2.setPosition(9 + 16 * x, 104)
}
function doJump () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -130
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite2: Sprite = null
let spike_hit: Sprite = null
let mySprite: Sprite = null
let spriteDirection = ""
spriteDirection = "down"
scene.setBackgroundColor(8)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`GD Square`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
spriteDirection = "up"
addSpike(6)
addminSpike(16)
addSpike(17)
addSpike(23)
addSpike(22)
mySprite.setPosition(6, 98)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        game.setGameOverMessage(false, "GAME OVER!")
        mySprite.sayText(":)")
        game.gameOver(false)
    }
})
