scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
function addEnemy (x: number, y: number) {
    mySprite2 = sprites.create(assets.image`Hit Box`, SpriteKind.Enemy)
    mySprite2.setPosition(x, y)
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
addEnemy(473, 105)
addEnemy(489, 105)
addEnemy(505, 105)
mySprite.setPosition(6, 98)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
