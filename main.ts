namespace SpriteKind {
    export const ending = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
        if (direction == "up") {
            mySprite.vy = -150
            timer.after(100, function () {
                mySprite.setImage(assets.image`GD Square0`)
                timer.after(100, function () {
                    mySprite.setImage(assets.image`GD Square1`)
                    direction = "down"
                })
            })
        } else {
            timer.after(100, function () {
                mySprite.setImage(assets.image`GD Square2`)
                timer.after(100, function () {
                    mySprite.setImage(assets.image`GD Square`)
                    direction = "up"
                })
            })
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
        if (direction == "up") {
            mySprite.vy = -150
            timer.after(100, function () {
                mySprite.setImage(assets.image`GD Square0`)
                timer.after(100, function () {
                    mySprite.setImage(assets.image`GD Square1`)
                    direction = "down"
                })
            })
        } else {
            timer.after(100, function () {
                mySprite.setImage(assets.image`GD Square2`)
                timer.after(100, function () {
                    mySprite.setImage(assets.image`GD Square`)
                    direction = "up"
                })
            })
        }
    }
})
function addSpike (x: number) {
    spike_hit = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    spike_hit.setPosition(9 + 16 * x, 105)
    spike_hit.setFlag(SpriteFlag.Invisible, false)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.confetti)
})
function addminSpike (x: number) {
    spike_hit = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    spike_hit.setPosition(9 + 16 * x, 110)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let spike_hit: Sprite = null
let mySprite: Sprite = null
let direction = ""
direction = "down"
scene.setBackgroundColor(8)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`GD Square`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
direction = "up"
addSpike(6)
addminSpike(16)
addSpike(17)
addSpike(29)
addSpike(30)
addSpike(31)
addSpike(41)
addSpike(42)
addSpike(43)
mySprite.setPosition(6, 98)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
