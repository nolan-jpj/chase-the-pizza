sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 f 3 f 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 f f f 3 . . . . . . . 
    . . . 3 . 3 3 3 . 3 . . . . . . 
    . . . . 3 3 e 3 3 . . . . . . . 
    . . . . . 3 e 3 . . . . . . . . 
    . . . . . 3 e 3 . . . . . . . . 
    . . . . . 3 . 3 . . . . . . . . 
    . . . . . 3 . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let bacon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 4 . 4 . 4 . 4 . . . . . . . 
    . . e 4 e 4 e 4 e . . . . . . . 
    . . 4 e 4 e 4 e 4 . . . . . . . 
    . . . 4 . 4 . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
