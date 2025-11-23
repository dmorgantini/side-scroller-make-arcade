scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
function addSpike (x: number) {
    mySprite2 = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    mySprite2.setPosition(9 + 16 * x, 105)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`GD Square`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
addSpike(6)
addSpike(16)
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
