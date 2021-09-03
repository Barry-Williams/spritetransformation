/**
 * controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
 * 
 * mySprite.vx = _xx * speed
 * 
 * mySprite.vy = _yy * speed
 * 
 * })
 * 
 * controller.down.onEvent(ControllerButtonEvent.Released, function () {
 * 
 * mySprite.vx = 0
 * 
 * mySprite.vy = 0
 * 
 * })
 * 
 * controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
 * 
 * transformSprites.changeRotation(mySprite, 45)
 * 
 * getAngle()
 * 
 * })
 * 
 * controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
 * 
 * transformSprites.changeRotation(mySprite, -45)
 * 
 * getAngle()
 * 
 * })
 * 
 * controller.up.onEvent(ControllerButtonEvent.Released, function () {
 * 
 * mySprite.vx = 0
 * 
 * mySprite.vy = 0
 * 
 * })
 * 
 * controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
 * 
 * mySprite.vx = (0 - _xx) * speed
 * 
 * mySprite.vy = (0 - _yy) * speed
 * 
 * })
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	let projectile = sprites.createProjectileFromSprite(img`
     1 1 1 1 1 1 1 1
     1 3 3 3 3 3 3 1
     1 3 3 3 3 3 3 1
     1 3 3 3 3 3 3 1
     1 3 3 3 3 3 3 1
     1 3 3 3 3 3 3 1
     1 3 3 3 3 3 3 1
     1 1 1 1 1 1 1 1
 `, mySprite, _xx * speed, _yy * speed)
})
let _yy = 0
let mySprite: Sprite = null
let _xx = 0
_xx = 1
let speed = 100
let bspeed= 50
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let getAngle = () => {
    _xx = Math.cos((transformSprites.getRotation(mySprite)) * Math.PI / 180)
    _yy = Math.sin((transformSprites.getRotation(mySprite)) * Math.PI / 180)
}
forever(function () {
    mySprite.vy = 0
    mySprite.vx = 0
    if (controller.up.isPressed()) {
        mySprite.vx = _xx * speed
        mySprite.vy = _yy * speed
    }
    if (controller.down.isPressed()) {
        mySprite.vx = _xx * (0 - speed)
        mySprite.vy = _yy * (0 - speed)
    }
    if (controller.left.isPressed()) {
        transformSprites.changeRotation(mySprite, -5)
        getAngle()
    }
    if (controller.right.isPressed()) {
        transformSprites.changeRotation(mySprite, 5)
        getAngle()
    }
})
