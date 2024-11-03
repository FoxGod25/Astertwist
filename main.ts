scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (Itm1 == "") {
        Itm1 = "Cracked Bat"
        tiles.setTileAt(location, assets.tile`myTile0`)
    } else if (Itm2 == "") {
        Itm2 = "Cracked Bat"
        tiles.setTileAt(location, assets.tile`myTile0`)
    } else if (Itm3 == "") {
        Itm3 = "Cracked Bat"
        tiles.setTileAt(location, assets.tile`myTile0`)
    } else {
        game.showLongText("Inventory is too full!", DialogLayout.Bottom)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 5))
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    story.showPlayerChoices("Exit", Itm1, Itm2, Itm3)
    if (story.checkLastAnswer("Cracked Bat")) {
        game.showLongText("Atk +5!", DialogLayout.Bottom)
        Equip += 5
        ItmList.shift()
        Trash = story.getLastAnswer()
        if (story.checkLastAnswer(Itm1)) {
            Itm1 = ""
        } else if (story.checkLastAnswer(Itm2)) {
            Itm2 = ""
        } else if (story.checkLastAnswer(Itm3)) {
            Itm3 = ""
        }
    } else if (story.checkLastAnswer("Sandwich")) {
        HP += 15
        if (HP >= MaxHP) {
            HP = MaxHP
            game.showLongText("HP maxed out!", DialogLayout.Bottom)
        } else if (HP != MaxHP) {
            game.showLongText("HP +15!", DialogLayout.Bottom)
        }
        Trash = story.getLastAnswer()
        if (story.checkLastAnswer(Itm1)) {
            Itm1 = ""
        } else if (story.checkLastAnswer(Itm2)) {
            Itm2 = ""
        } else if (story.checkLastAnswer(Itm3)) {
            Itm3 = ""
        }
    } else if (story.checkLastAnswer("Pocket Fox")) {
        game.showLongText("\"Pocket Fox\" This small fox seems eager to follow you. So small he can fit in a pocket.", DialogLayout.Bottom)
    } else if (false) {
    	
    } else {
    	
    }
})
let ItmList: string[] = []
let HP = 0
let MaxHP = 0
let Trash = ""
let Itm3 = ""
let Itm2 = ""
let Itm1 = ""
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . f f f f . . 
    . f f f f f f . 
    . f d d d d f . 
    . f f d d f f . 
    . f d f f d f . 
    f 2 2 2 2 2 2 f 
    f d 2 2 2 2 d f 
    . f 8 8 8 8 f . 
    . f 8 f f 8 f . 
    . f f f f f f . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 5))
animation.runImageAnimation(
mySprite,
[img`
    e e e e e e e e e e 
    f 1 1 f f f f 1 1 f 
    f 1 f f f f f f 1 f 
    f 1 f d d d d f 1 f 
    f 1 f f d d f f 1 f 
    f 1 f d f f d f 1 f 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    e e e e e e e e e e 
    e e e e e e e e e e 
    e e f f f f f f e e 
    `,img`
    e e e e e e e e e e 
    f 1 1 1 1 1 1 1 1 f 
    f 1 1 f f f f 1 1 f 
    f 1 f f f f f f 1 f 
    f 1 f d d d d f 1 f 
    f 1 f f d d f f 1 f 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    e e e e e e e e e e 
    e e e e e e e e e e 
    e e f f f f f f e e 
    `],
1000,
true
)
timer.after(5000, function () {
    scene.cameraShake(4, 1000)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . f f f f . . 
        . f f f f f f . 
        . f d d d d f . 
        . f f d d f f . 
        . f d f f d f . 
        f 2 2 2 2 2 2 f 
        f d 2 2 2 2 d f 
        . f 8 8 8 8 f . 
        . f 8 f f 8 f . 
        . f f f f f f . 
        `)
    controller.moveSprite(mySprite)
})
Itm1 = "Sandwich"
Itm2 = "Sandwich"
Itm3 = "Pocket Fox"
Trash = ""
let Equip = 0
let BAtk = 5
MaxHP = 30
HP = 30
ItmList = [Itm1, Itm2, Itm3]
