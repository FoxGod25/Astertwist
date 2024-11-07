namespace SpriteKind {
    export const TowerEnemy = SpriteKind.create()
    export const Contrast = SpriteKind.create()
    export const UnoReverseProjectile = SpriteKind.create()
    export const CutsceneNPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(8, 3))
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile11`)) {
        game.showLongText("You read : \"For some reason someone put a weird old tower here so stay away I guess... You expect a reason? I'm just a sign.\"", DialogLayout.Bottom)
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile2`)) {
        game.showLongText("It's locked... Maybe something in your inventory could unlock it from the inside (Click menu for the random bag thingy called an inventory)", DialogLayout.Bottom)
        if (story.checkLastAnswer("Pocket Fox")) {
            game.showLongText("The fox opened it from the inside somehow! (Maybe because the fox is the FBI)", DialogLayout.Bottom)
            tiles.setTileAt(tiles.getTileLocation(10, 0), assets.tile`myTile13`)
            tiles.setWallAt(tiles.getTileLocation(10, 0), false)
            TrapDrUnlock = true
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CharacterSwitchOn) {
        if (!(CharacterFoxOn)) {
            CharacterFoxOn = true
            animation.runImageAnimation(
            mySprite,
            [img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f f . . 
                . f d f f d f 4 f . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f f . . 
                . f f d d f f 4 4 . 
                . f d f f d f 4 4 f 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . f . . . . f . . . 
                . f f . . f f . . . 
                . f 4 f f 4 f . . . 
                . f f 4 4 f f . . . 
                . f 1 f f 1 f f . . 
                . f f f f f f 1 f . 
                f 4 1 1 1 1 4 f 4 f 
                . f 4 1 1 4 f 4 4 f 
                . f 4 f f 4 f f f . 
                . f f f f f f . . . 
                `],
            100,
            false
            )
            info.setScore(30)
            info.setLife(15)
        } else if (CharacterFoxOn) {
            CharacterFoxOn = false
            animation.runImageAnimation(
            mySprite,
            [img`
                . f . . . . f . . . 
                . f f . . f f . . . 
                . f 4 f f 4 f . . . 
                . f f 4 4 f f . . . 
                . f 1 f f 1 f f . . 
                . f f f f f f 1 f . 
                f 4 1 1 1 1 4 f 4 f 
                . f 4 1 1 4 f 4 4 f 
                . f 4 f f 4 f f f . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f f . . 
                . f f d d f f 4 4 . 
                . f d f f d f 4 4 f 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f f . . 
                . f d f f d f 4 f . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `],
            100,
            false
            )
            info.setLife(25)
            info.setScore(15)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Contrast, function (sprite, otherSprite) {
    if (OverWorldAtk) {
        info.changeLifeBy(-1)
        pause(500)
        mySprite.setVelocity(randint(-100, 100), randint(-100, 100))
        mySprite.setBounceOnWall(true)
        timer.after(1000, function () {
            mySprite.setVelocity(0, 0)
            mySprite.setBounceOnWall(false)
            game.showLongText("Maybe I can hit the projectiles back?", DialogLayout.Bottom)
        })
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(9, 2))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CharacterFoxOn) {
        if (Weapon) {
            OverWorldAtk = true
            animation.runImageAnimation(
            mySprite,
            [img`
                . f . . . . f . . . 
                . f f . . f f . . . 
                . f 4 f f 4 f . . . 
                . f f 4 4 f f . . . 
                . f 4 f f 4 f . . . 
                f f f f f f e f . . 
                f 4 1 1 1 e d e . . 
                . f 4 f e e e . . . 
                . f 4 e e e f . . . 
                . f f f e f f . . . 
                `,img`
                . . . f . . f . . . 
                . . . f f . f f . . 
                . . f 4 4 f 4 f . . 
                . . f 4 f 4 f f . . 
                . . f 4 1 f 1 f . . 
                . . f f e e f 4 f . 
                . . f 4 1 f 4 f 1 . 
                . . f 4 4 e e 1 . 1 
                . . f 4 f e e e 1 . 
                . . f f f f e e . . 
                `,img`
                . . f . . . . f . . 
                . . f f . . f f . . 
                . . f 4 f f 4 f . . 
                . . f f 4 4 f f . . 
                . . f 1 f f 1 f . . 
                . f 4 f e e f 4 f . 
                . . f 4 f f 4 f 1 . 
                . . f 4 e e 1 1 . . 
                . . f 4 e e 4 f 1 . 
                . . f f e e 1 1 . . 
                `,img`
                . . . f . . f . . . 
                . . f f . f f . . . 
                . . f 4 f 4 4 f . . 
                . . f f 4 f 4 f . . 
                . . f 1 f 1 4 f . . 
                . f 4 f e e f f . . 
                . 1 f 4 f 1 4 f . . 
                1 . 1 e e 4 4 f . . 
                . 1 e e e f 4 f . . 
                . . e e f f f f . . 
                `,img`
                . f . . . . f . . . 
                . f f . . f f . . . 
                . f 4 f f 4 f . . . 
                . f f 4 4 f f . . . 
                . f 4 f f 4 f . . . 
                f f f f f f e f . . 
                f 4 1 1 1 e d e . . 
                . f 4 f e e e . . . 
                . f 4 e e e 1 . . . 
                . f f f e 1 f 1 . . 
                `,img`
                . f . . . . f . . . 
                . f f . . f f . . . 
                . f 4 f f 4 f . . . 
                . f f 4 4 f f . . . 
                . f 1 f f 1 f . . . 
                f f f f f f f f . . 
                f 4 1 1 1 1 4 f . . 
                . f 4 1 1 4 f . . . 
                . f 4 f f 4 f . . . 
                . f f f f f f . . . 
                `],
            100,
            false
            )
            timer.after(500, function () {
                OverWorldAtk = false
            })
        }
    } else {
        if (Weapon) {
            OverWorldAtk = true
            animation.runImageAnimation(
            mySprite,
            [img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 e f . . 
                f d 2 2 2 e d e . . 
                . f 8 8 e e e . . . 
                . f 8 e e e f . . . 
                . f f f e f f . . . 
                `,img`
                . . . f f f f . . . 
                . . . f f f f f . . 
                . . f d d d d f . . 
                . . f d f d f f . . 
                . . f d d f d f . . 
                . . f b e e b 2 f . 
                . . f 2 2 d 2 f 1 . 
                . . f 8 8 e e 1 . 1 
                . . f 8 f e e e 1 . 
                . . f f f f e e . . 
                `,img`
                . . . f f f f . . . 
                . . f f f f f f . . 
                . . f d d d d f . . 
                . . f f d d f f . . 
                . . f d f f d f . . 
                . f 2 b e e b 2 f . 
                . . f 2 d d 2 f 1 . 
                . . f 8 e e 1 1 . . 
                . . f 8 e e 8 f 1 . 
                . . f f e e 1 1 . . 
                `,img`
                . . . f f f f . . . 
                . . f f f f f . . . 
                . . f d d d d f . . 
                . . f f d f d f . . 
                . . f d f d d f . . 
                . f 2 b e e b f . . 
                . . f 2 d 2 2 f . . 
                . . f e e 8 8 f . . 
                . . e e e 1 8 1 . . 
                . . e e 1 f 1 f . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 e f . . 
                f d 2 2 2 e d e . . 
                . f 8 8 e e e . . . 
                . f 8 e e e 1 . . . 
                . f f f e 1 f 1 . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `],
            100,
            false
            )
            timer.after(500, function () {
                OverWorldAtk = false
            })
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    mySprite2 = sprites.create(img`
        . . f f f f . . 
        . f f f f f f . 
        . f c c c c f . 
        . f f c c f f . 
        . f c f f c f . 
        f f f f f f f f 
        f c f f f f c f 
        . f b b b b f . 
        . f b f f b f . 
        . f f f f f f . 
        `, SpriteKind.Enemy)
    Ambush = 10
    tiles.placeOnTile(mySprite2, location)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 9))
    game.showLongText("\"We got someone! Let's beat 'em up!\"", DialogLayout.Bottom)
    sprites.destroy(mySprite2)
    for (let index = 0; index < 10; index++) {
        mySprite2 = sprites.create(img`
            . . f f f f . . 
            . f f f f f f . 
            . f c c c c f . 
            . f f c c f f . 
            . f c f f c f . 
            f f f f f f f f 
            f c f f f f c f 
            . f b b b b f . 
            . f b f f b f . 
            . f f f f f f . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
        mySprite2.follow(mySprite, 75)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (TrapDrUnlock) {
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnTile(sprite, tiles.getTileLocation(1, 4))
    } else {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(sprite, tiles.getTileLocation(1, 4))
    }
})
sprites.onOverlap(SpriteKind.Contrast, SpriteKind.UnoReverseProjectile, function (sprite, otherSprite) {
    if (BossFight) {
        FightBack += -1
        if (FightBack <= 0) {
            timer.throttle("action", 100000000000000000000, function () {
                timer.after(500, function () {
                    controller.moveSprite(mySprite, 0, 0)
                    sprite.setImage(img`
                        . . . . . . 6 6 6 6 . . . . . . 
                        . . . . 6 6 6 5 5 6 6 6 . . . . 
                        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
                        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
                        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
                        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
                        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
                        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
                        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
                        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
                        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
                        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
                        . . . . 6 6 8 8 8 8 6 6 . . . . 
                        . . . . . . 6 6 6 6 . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                    while (FightBack == 0) {
                        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                        sprites.destroyAllSpritesOfKind(SpriteKind.UnoReverseProjectile)
                    }
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
                    mySprite4 = sprites.create(img`
                        . f . . . . f . . . 
                        . f f . . f f . . . 
                        . f 4 f f 4 f . . . 
                        . f f 4 4 f f . . . 
                        . f 1 f f 1 f f . . 
                        f f f f f f f 1 f . 
                        f 4 1 1 1 1 4 f 4 f 
                        . f 4 1 1 4 f 4 4 f 
                        . f 4 f f 4 f f f . 
                        . f f f f f f . . . 
                        `, SpriteKind.CutsceneNPC)
                    tiles.placeOnTile(mySprite4, tiles.getTileLocation(8, 11))
                    game.showLongText("Now it is my time to go.", DialogLayout.Bottom)
                    game.showLongText("I can finally go and live my life!", DialogLayout.Bottom)
                    game.showLongText("The stars are \"aligned\".", DialogLayout.Bottom)
                    game.showLongText("Thank you.", DialogLayout.Bottom)
                    game.showLongText("I guess I'd better go now.", DialogLayout.Bottom)
                    for (let index = 0; index < 10; index++) {
                        pause(100)
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . b . . . . . . . 
                            . . . . . . . b d b . . . . . . 
                            . . . . . . b 5 5 5 b . . . . . 
                            . . . . . b b 5 5 5 b b . . . . 
                            . . b b b b 5 5 5 1 1 b b b b . 
                            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
                            . . b d d 5 5 5 5 5 5 5 d d b . 
                            . . . b d d 5 5 5 5 5 d d b . . 
                            . . . c b 5 5 5 5 5 5 5 b c . . 
                            . . . c b 5 5 5 5 5 5 5 b c . . 
                            . . . c 5 5 d d b d d 5 5 c . . 
                            . . . c 5 d d c c c d d 5 c . . 
                            . . . c c c c . . . c c c c . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, StarfallInd1, -100, 100)
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . b . . . . . . . 
                            . . . . . . . b d b . . . . . . 
                            . . . . . . b 5 5 5 b . . . . . 
                            . . . . . b b 5 5 5 b b . . . . 
                            . . b b b b 5 5 5 1 1 b b b b . 
                            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
                            . . b d d 5 5 5 5 5 5 5 d d b . 
                            . . . b d d 5 5 5 5 5 d d b . . 
                            . . . c b 5 5 5 5 5 5 5 b c . . 
                            . . . c b 5 5 5 5 5 5 5 b c . . 
                            . . . c 5 5 d d b d d 5 5 c . . 
                            . . . c 5 d d c c c d d 5 c . . 
                            . . . c c c c . . . c c c c . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, StarfallInd2, 100, 100)
                    }
                    mySprite4.setVelocity(0, -25)
                })
            })
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(9, 2))
    TowerAmbush = true
    for (let index = 0; index < 10; index++) {
        mySprite2 = sprites.create(img`
            . . f f f f . . 
            . f f f f f f . 
            . f c c c c f . 
            . f 2 c c 2 f . 
            . f c 2 2 c f . 
            f f f f f f f f 
            f c f f f f c f 
            . f c c c c f . 
            . f c f f c f . 
            . f f f f f f . 
            `, SpriteKind.TowerEnemy)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile33`)
        mySprite2.follow(mySprite, 75)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (Itm1 == "") {
        Itm1 = "Cracked Bat"
        tiles.setTileAt(location, assets.tile`myTile0`)
        game.showLongText("You got a Cracked Bat! Click the menu button on your interface to equip it!", DialogLayout.Bottom)
    } else if (Itm2 == "") {
        Itm2 = "Cracked Bat"
        tiles.setTileAt(location, assets.tile`myTile0`)
        game.showLongText("You got a Cracked Bat! Click the menu button on your interface to equip it!", DialogLayout.Bottom)
    } else if (Itm3 == "") {
        Itm3 = "Cracked Bat"
        tiles.setTileAt(location, assets.tile`myTile0`)
        game.showLongText("You got a Cracked Bat! Click the menu button on your interface to equip it!", DialogLayout.Bottom)
    } else if (Itm4 == "") {
        Itm4 = "Cracked Bat"
        tiles.setTileAt(location, assets.tile`myTile0`)
        game.showLongText("You got a Cracked Bat! Click the menu button on your interface to equip it!", DialogLayout.Bottom)
    } else if (Itm5 == "") {
        Itm4 = "Cracked Bat"
        tiles.setTileAt(location, assets.tile`myTile0`)
        game.showLongText("You got a Cracked Bat! Click the menu button on your interface to equip it!", DialogLayout.Bottom)
    } else {
        game.showLongText("Inventory is too full!", DialogLayout.Bottom)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 5))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    game.setDialogFrame(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 . . . 6 . . . 6 . . . 6 6 
        6 6 . . 6 . . . . . 6 . . 6 6 
        6 6 . 6 6 6 6 6 6 6 6 6 . 6 6 
        6 6 6 . 6 f f f f f 6 . 6 6 6 
        6 6 . . 6 f f f f f 6 . . 6 6 
        6 6 . . 6 f f f f f 6 . . 6 6 
        6 6 . . 6 f f f f f 6 . . 6 6 
        6 6 6 . 6 f f f f f 6 . 6 6 6 
        6 6 . 6 6 6 6 6 6 6 6 6 . 6 6 
        6 6 . . 6 . . . . . 6 . . 6 6 
        6 6 . . . 6 . . . 6 . . . 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    game.setDialogTextColor(6)
    Psi3 = "Starfall Omega"
    game.showLongText("The fox learned how to actually nuke!(Technically they are stars but who cares) Actually he learned \"Starfall Omega\"!!(Click the menu in the top-right of your interface)", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`myTile8`)
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 . . . 1 . . . 1 . . . 1 1 
        1 1 . . 1 . . . . . 1 . . 1 1 
        1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 
        1 1 1 . 1 d d d d d 1 . 1 1 1 
        1 1 . . 1 d d d d d 1 . . 1 1 
        1 1 . . 1 d d d d d 1 . . 1 1 
        1 1 . . 1 d d d d d 1 . . 1 1 
        1 1 1 . 1 d d d d d 1 . 1 1 1 
        1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 
        1 1 . . 1 . . . . . 1 . . 1 1 
        1 1 . . . 1 . . . 1 . . . 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(9, 2))
    TowerAmbush2 = true
    for (let index = 0; index < 10; index++) {
        mySprite2 = sprites.create(img`
            . . f f f f f f . . 
            . . f c c c c f . . 
            . . f 2 2 2 c f . . 
            . . f b b c c f . . 
            . . f f b c f f . . 
            . f b b b b b b f . 
            f b f b b b b f b f 
            f f . f b b f . f f 
            . . . f b b f . . . 
            . . f b b b b f . . 
            . . f f f f f f . . 
            `, SpriteKind.TowerEnemy)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile33`)
        mySprite2.follow(mySprite, 75)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(10, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (OverWorldAtk) {
        otherSprite.setKind(SpriteKind.UnoReverseProjectile)
        otherSprite.vx += -100
        otherSprite.vy += -100
        otherSprite.follow(mySprite3)
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 . . . 2 . . . 2 . . . 2 2 
        2 2 . . 2 . . . . . 2 . . 2 2 
        2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 
        2 2 2 . 2 f f f f f 2 . 2 2 2 
        2 2 . . 2 f f f f f 2 . . 2 2 
        2 2 . . 2 f f f f f 2 . . 2 2 
        2 2 . . 2 f f f f f 2 . . 2 2 
        2 2 2 . 2 f f f f f 2 . 2 2 2 
        2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 
        2 2 . . 2 . . . . . 2 . . 2 2 
        2 2 . . . 2 . . . 2 . . . 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.setDialogTextColor(2)
    Psi1 = "HpUp Alpha"
    game.showLongText("The fox learned how to summon a nuke!(Not really) Actually he learned \"HpUp Alpha\"!(Use by selecting Psi in inventory)", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`myTile8`)
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 . . . 1 . . . 1 . . . 1 1 
        1 1 . . 1 . . . . . 1 . . 1 1 
        1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 
        1 1 1 . 1 d d d d d 1 . 1 1 1 
        1 1 . . 1 d d d d d 1 . . 1 1 
        1 1 . . 1 d d d d d 1 . . 1 1 
        1 1 . . 1 d d d d d 1 . . 1 1 
        1 1 1 . 1 d d d d d 1 . 1 1 1 
        1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 
        1 1 . . 1 . . . . . 1 . . 1 1 
        1 1 . . . 1 . . . 1 . . . 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    story.showPlayerChoices("Exit", Itm1, Itm2, "More")
    if (story.checkLastAnswer("More")) {
        story.showPlayerChoices(Itm3, Itm4, Itm5, "Psi")
        if (story.checkLastAnswer("Psi")) {
            let Psi5 = 0
            story.showPlayerChoices(Psi1, Psi2, Psi3, Psi4)
            if (story.checkLastAnswer("HpUp Alpha")) {
                if (info.score() >= 1) {
                    info.changeScoreBy(-1)
                    info.changeLifeBy(5)
                    if (info.life() >= MaxHP) {
                        info.setLife(MaxHP)
                        game.showLongText("HP maxed out!", DialogLayout.Bottom)
                    } else if (HP != MaxHP) {
                        game.showLongText("HP +5!", DialogLayout.Bottom)
                    }
                } else {
                    game.showLongText("Not enough PP!", DialogLayout.Bottom)
                }
            } else if (story.checkLastAnswer("HpUp Beta")) {
                if (info.score() >= 5) {
                    info.changeScoreBy(-5)
                    info.changeLifeBy(10)
                    if (info.life() >= MaxHP) {
                        info.setLife(MaxHP)
                        game.showLongText("HP maxed out!", DialogLayout.Bottom)
                    } else if (HP != MaxHP) {
                        game.showLongText("HP +10!", DialogLayout.Bottom)
                    }
                } else {
                    game.showLongText("Not enough PP!", DialogLayout.Bottom)
                }
            } else if (story.checkLastAnswer("CureStatus Alpha")) {
                if (info.score() >= 5) {
                    info.changeScoreBy(-5)
                    game.showLongText("Cured all statuses!", DialogLayout.Bottom)
                } else {
                    game.showLongText("Not enough PP!", DialogLayout.Bottom)
                }
            } else if (story.checkLastAnswer("Starfall Omega")) {
                if (info.score() == 15) {
                    info.changeScoreBy(-15)
                    controller.moveSprite(mySprite, 0, 0)
                    animation.runImageAnimation(
                    mySprite,
                    [img`
                        . . f f f f . . . . 
                        . f f f f f f . . . 
                        . f d d d d f . . . 
                        . f f d d f f . . . 
                        . f d f f d f . . . 
                        f 2 2 2 2 2 2 f . . 
                        f d 2 2 2 2 d f . . 
                        . f 8 8 8 8 f . . . 
                        . f 8 f f 8 f . . . 
                        . f f f f f f . . . 
                        `,img`
                        . . f f f f . . . . 
                        . f f f f f f . . . 
                        . f d d d d f . . . 
                        . f f d d f f f . . 
                        . f d f f d f 4 f . 
                        f 2 2 2 2 2 2 f . . 
                        f d 2 2 2 2 d f . . 
                        . f 8 8 8 8 f . . . 
                        . f 8 f f 8 f . . . 
                        . f f f f f f . . . 
                        `,img`
                        . . f f f f . . . . 
                        . f f f f f f . . . 
                        . f d d d d f f . . 
                        . f f d d f f 4 4 . 
                        . f d f f d f 4 4 f 
                        f 2 2 2 2 2 2 f . . 
                        f d 2 2 2 2 d f . . 
                        . f 8 8 8 8 f . . . 
                        . f 8 f f 8 f . . . 
                        . f f f f f f . . . 
                        `,img`
                        . . f f f f . . . . 
                        . f f f f f f . f . 
                        . f d d d d f f f f 
                        . f f d d f f 4 1 f 
                        . f d f f d f 4 4 4 
                        f 2 2 2 2 2 2 f 1 f 
                        f d 2 2 2 2 d f 1 f 
                        . f 8 8 8 8 f f f 4 
                        . f 8 f f 8 f . f 1 
                        . f f f f f f . . f 
                        `,img`
                        . . f f f f . . f . 
                        . f f f f f f f f f 
                        . f d d d d f 4 1 f 
                        . f f d d f f 4 4 4 
                        . f d f f d f 1 1 f 
                        f 2 2 2 2 2 f 1 1 f 
                        f d 2 2 2 2 d f f 4 
                        . f 8 8 8 8 f . f 1 
                        . f 8 f f 8 f . f f 
                        . f f f f f f . . . 
                        `,img`
                        . . f f f f . . . . 
                        . f f f f f f . f . 
                        . f d d d d f f f f 
                        . f f d d f f 4 1 f 
                        . f d f f d f 4 4 4 
                        f 2 2 2 2 2 2 f 1 f 
                        f d 2 2 2 2 d f 1 f 
                        . f 8 8 8 8 f f f 4 
                        . f 8 f f 8 f . f 1 
                        . f f f f f f . . f 
                        `,img`
                        . . f f f f . . f . 
                        . f f f f f f f f f 
                        . f d d d d f 4 1 f 
                        . f f d d f f 4 4 4 
                        . f d f f d f 1 1 f 
                        f 2 2 2 2 2 f 1 1 f 
                        f d 2 2 2 2 d f f 4 
                        . f 8 8 8 8 f . f 1 
                        . f 8 f f 8 f . f f 
                        . f f f f f f . . . 
                        `,img`
                        . . f f f f . . . . 
                        . f f f f f f . f . 
                        . f d d d d f f f f 
                        . f f d d f f 4 1 f 
                        . f d f f d f 4 4 4 
                        f 2 2 2 2 2 2 f 1 f 
                        f d 2 2 2 2 d f 1 f 
                        . f 8 8 8 8 f f f 4 
                        . f 8 f f 8 f . f 1 
                        . f f f f f f . . f 
                        `,img`
                        . . f f f f . . . . 
                        . f f f f f f . . . 
                        . f d d d d f f . . 
                        . f f d d f f 4 4 . 
                        . f d f f d f 4 4 f 
                        f 2 2 2 2 2 2 f . . 
                        f d 2 2 2 2 d f . . 
                        . f 8 8 8 8 f . . . 
                        . f 8 f f 8 f . . . 
                        . f f f f f f . . . 
                        `,img`
                        . . f f f f . . . . 
                        . f f f f f f . . . 
                        . f d d d d f . . . 
                        . f f d d f f f . . 
                        . f d f f d f 4 f . 
                        f 2 2 2 2 2 2 f . . 
                        f d 2 2 2 2 d f . . 
                        . f 8 8 8 8 f . . . 
                        . f 8 f f 8 f . . . 
                        . f f f f f f . . . 
                        `,img`
                        . . f f f f . . . . 
                        . f f f f f f . . . 
                        . f d d d d f . . . 
                        . f f d d f f . . . 
                        . f d f f d f . . . 
                        f 2 2 2 2 2 2 f . . 
                        f d 2 2 2 2 d f . . 
                        . f 8 8 8 8 f . . . 
                        . f 8 f f 8 f . . . 
                        . f f f f f f . . . 
                        `],
                    100,
                    false
                    )
                    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
                    for (let index = 0; index < 10; index++) {
                        pause(100)
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . b . . . . . . . 
                            . . . . . . . b d b . . . . . . 
                            . . . . . . b 5 5 5 b . . . . . 
                            . . . . . b b 5 5 5 b b . . . . 
                            . . b b b b 5 5 5 1 1 b b b b . 
                            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
                            . . b d d 5 5 5 5 5 5 5 d d b . 
                            . . . b d d 5 5 5 5 5 d d b . . 
                            . . . c b 5 5 5 5 5 5 5 b c . . 
                            . . . c b 5 5 5 5 5 5 5 b c . . 
                            . . . c 5 5 d d b d d 5 5 c . . 
                            . . . c 5 d d c c c d d 5 c . . 
                            . . . c c c c . . . c c c c . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, StarfallInd1, -100, 100)
                        projectile = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . b . . . . . . . 
                            . . . . . . . b d b . . . . . . 
                            . . . . . . b 5 5 5 b . . . . . 
                            . . . . . b b 5 5 5 b b . . . . 
                            . . b b b b 5 5 5 1 1 b b b b . 
                            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
                            . . b d d 5 5 5 5 5 5 5 d d b . 
                            . . . b d d 5 5 5 5 5 d d b . . 
                            . . . c b 5 5 5 5 5 5 5 b c . . 
                            . . . c b 5 5 5 5 5 5 5 b c . . 
                            . . . c 5 5 d d b d d 5 5 c . . 
                            . . . c 5 d d c c c d d 5 c . . 
                            . . . c c c c . . . c c c c . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, StarfallInd2, 100, 100)
                    }
                } else {
                    game.showLongText("Not enough PP!", DialogLayout.Bottom)
                }
            } else {
            	
            }
        }
        if (story.checkLastAnswer("Pocket Fox")) {
            game.showLongText("\"Pocket Fox\" This small fox seems eager to follow you. So small he can fit in a pocket.", DialogLayout.Bottom)
        }
    }
    if (story.checkLastAnswer("Cracked Bat")) {
        game.showLongText("Atk +5!", DialogLayout.Bottom)
        game.showLongText("Press \"A\" or \"Spacebar\" to use in the overworld!", DialogLayout.Bottom)
        EquipAtk += 5
        Weapon = true
        ItmList.shift()
        Trash = story.getLastAnswer()
        if (story.checkLastAnswer(Itm1)) {
            Itm1 = ""
        } else if (story.checkLastAnswer(Itm2)) {
            Itm2 = ""
        } else if (story.checkLastAnswer(Itm3)) {
            Itm3 = ""
        } else if (story.checkLastAnswer(Itm4)) {
            Itm4 = ""
        } else if (story.checkLastAnswer(Itm5)) {
            Itm5 = ""
        }
    } else if (story.checkLastAnswer("Sandwich")) {
        HP += 15
        info.changeLifeBy(15)
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
        } else if (story.checkLastAnswer(Itm4)) {
            Itm4 = ""
        } else if (story.checkLastAnswer(Itm5)) {
            Itm5 = ""
        }
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.CutsceneNPC, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    animation.runImageAnimation(
    mySprite,
    [img`
        . f . . . . f . . . 
        . f f . . f f . . . 
        . f 4 f f 4 f . . . 
        . f f 4 4 f f . . . 
        . f 1 f f 1 f f . . 
        . f f f f f f 1 f . 
        f 4 1 1 1 1 4 f 4 f 
        . f 4 1 1 4 f 4 4 f 
        . f 4 f f 4 f f f . 
        . f f f f f f . . . 
        `,img`
        . f . . . . f . . . 
        . f f . . f f . . . 
        . f 4 f f 4 f . . . 
        . f f 4 4 f f . . . 
        . f 1 f f 1 f f . . 
        . f f f f f 4 f f . 
        f 4 1 1 1 1 f 4 4 f 
        . f 4 1 1 4 f 4 4 f 
        . f 4 f f 4 f f f . 
        . f f f f f f . . . 
        `],
    1000,
    true
    )
    sprites.destroy(sprite, effects.disintegrate, 5000)
    timer.after(6000, function () {
        game.gameOver(true)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TowerEnemy, function (sprite, otherSprite) {
    if (OverWorldAtk) {
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
        pause(1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level21`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
    game.setDialogFrame(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 2 2 2 2 2 2 2 2 2 2 2 2 2 6 
        6 2 . . . 2 . . . 2 . . . 2 6 
        6 2 . . 2 . . . . . 2 . . 2 6 
        6 2 . 2 2 2 2 2 2 2 2 2 . 2 6 
        6 2 2 . 2 1 1 1 1 1 2 . 2 2 6 
        6 2 . . 2 1 1 1 1 1 2 . . 2 6 
        6 2 . . 2 1 1 1 1 1 2 . . 2 6 
        6 2 . . 2 1 1 1 1 1 2 . . 2 6 
        6 2 2 . 2 1 1 1 1 1 2 . 2 2 6 
        6 2 . 2 2 2 2 2 2 2 2 2 . 2 6 
        6 2 . . 2 . . . . . 2 . . 2 6 
        6 2 . . . 2 . . . 2 . . . 2 6 
        6 2 2 2 2 2 2 2 2 2 2 2 2 2 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . f f f f . . . . 
        . f f f f f f . . . 
        . f d d d d f . . . 
        . f f d d f f . . . 
        . f d f f d f . . . 
        f 2 2 2 2 2 2 f . . 
        f d 2 2 2 2 d f . . 
        . f 8 8 8 8 f . . . 
        . f 8 f f 8 f . . . 
        . f f f f f f . . . 
        `,img`
        . . f f f f . . . . 
        . f f f f f f . . . 
        . f d d d d f . . . 
        . f f d d f f f . . 
        . f d f f d f 4 f . 
        f 2 2 2 2 2 2 f . . 
        f d 2 2 2 2 d f . . 
        . f 8 8 8 8 f . . . 
        . f 8 f f 8 f . . . 
        . f f f f f f . . . 
        `,img`
        . . f f f f . . . . 
        . f f f f f f . . . 
        . f d d d d f f . . 
        . f f d d f f 4 4 . 
        . f d f f d f 4 4 f 
        f 2 2 2 2 2 2 f . . 
        f d 2 2 2 2 d f . . 
        . f 8 8 8 8 f . . . 
        . f 8 f f 8 f . . . 
        . f f f f f f . . . 
        `],
    100,
    false
    )
    timer.after(300, function () {
        game.showLongText("Also, if this is it, I need to tell you, thank you for getting this far. Just thank you so much.", DialogLayout.Bottom)
        game.showLongText("Now let's turn this world back to normal!", DialogLayout.Bottom)
        game.showLongText("You can now switch characters by pressing \"B\"", DialogLayout.Bottom)
        CharacterSwitchOn = true
        CharacterFoxOn = false
        mySprite3 = sprites.create(img`
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . 1 1 f f f f 1 1 . . . . 
            . . . 1 f f f f f f 1 f 1 . . . 
            . . 1 f 1 f 1 f f f 1 f f 1 . . 
            . . 1 f 1 1 1 f f f 1 1 f 1 . . 
            . . 1 f 1 1 1 f f 1 1 1 f 1 . . 
            . . 1 f 1 1 1 1 f 1 1 1 f 1 . . 
            . . 1 f f f 1 1 1 1 f f f 1 . . 
            . . 1 f f f 1 1 1 1 f f f 1 . . 
            . . 1 f f f 1 1 1 1 f f f 1 . . 
            . . . 1 f f f f f f f f 1 . . . 
            . . 1 f f f f f f f f f f 1 . . 
            . . 1 f f f f f f f f f f 1 . . 
            . . 1 1 1 f f f f f f 1 1 1 . . 
            . . . . 1 f f f f f f 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            `, SpriteKind.Contrast)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(8, 8))
        BossFight = true
        FightBack = 5
        while (BossFight) {
            pause(randint(500, 1000))
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 1 . . . . . . . 
                . . . . . . . 1 1 1 . . . . . . 
                . . . . . . 1 f f f 1 . . . . . 
                . . . . . 1 1 f f f 1 1 . . . . 
                . . 1 1 1 1 f f f 1 1 1 1 1 1 . 
                . . 1 f f f f f f 1 1 f f f 1 . 
                . . 1 1 1 f f f f f f f 1 1 1 . 
                . . . 1 1 1 f f f f f 1 1 1 . . 
                . . . 1 1 f f f f f f f 1 1 . . 
                . . . 1 1 f f f f f f f 1 1 . . 
                . . . 1 f f 1 1 1 1 1 f f 1 . . 
                . . . 1 f 1 1 1 1 1 1 1 f 1 . . 
                . . . 1 1 1 1 . . . 1 1 1 1 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite3, randint(-100, 100), randint(-100, 100))
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    game.showLongText("You... And that fox... You are destined to finally restore peace to the land. I will just yeet you to the final boss if you want. It just costs five dollars. I'm joking of course, but the danger is real.", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`myTile24`)
    timer.after(500, function () {
        game.showLongText("Return to the old tower... ", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level8`)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (OverWorldAtk) {
        Ambush += -1
        sprites.destroy(otherSprite)
    } else {
        info.changeLifeBy(-1)
        pause(5000)
    }
})
let projectile2: Sprite = null
let mySprite3: Sprite = null
let TowerAmbush2 = false
let TowerAmbush = false
let projectile: Sprite = null
let mySprite4: Sprite = null
let FightBack = 0
let BossFight = false
let Ambush = 0
let mySprite2: Sprite = null
let OverWorldAtk = false
let CharacterFoxOn = false
let CharacterSwitchOn = false
let TrapDrUnlock = false
let StarfallInd2: Sprite = null
let StarfallInd1: Sprite = null
let Psi4 = ""
let Psi3 = ""
let Psi2 = ""
let Psi1 = ""
let ItmList: string[] = []
let HP = 0
let MaxHP = 0
let Weapon = false
let Trash = ""
let Itm5 = ""
let Itm4 = ""
let Itm3 = ""
let Itm2 = ""
let Itm1 = ""
let mySprite: Sprite = null
game.setDialogFrame(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 . . . 1 . . . 1 . . . 1 1 
    1 1 . . 1 . . . . . 1 . . 1 1 
    1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 
    1 1 1 . 1 d d d d d 1 . 1 1 1 
    1 1 . . 1 d d d d d 1 . . 1 1 
    1 1 . . 1 d d d d d 1 . . 1 1 
    1 1 . . 1 d d d d d 1 . . 1 1 
    1 1 1 . 1 d d d d d 1 . 1 1 1 
    1 1 . 1 1 1 1 1 1 1 1 1 . 1 1 
    1 1 . . 1 . . . . . 1 . . 1 1 
    1 1 . . . 1 . . . 1 . . . 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
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
    f b d f f f f d b f 
    f d f f f f f f d f 
    f d f d d d d f d f 
    f d f f d d f f d f 
    f b f d f f d f b f 
    8 6 6 6 6 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 
    e e e e e e e e e e 
    e e e e e e e e e e 
    e e f f f f f f e e 
    `,img`
    e e e e e e e e e e 
    f b d d d d d d b f 
    f d 1 f f f f 1 d f 
    f d f f f f f f d f 
    f d f d d d d f d f 
    f b f f d d f f b f 
    8 6 6 6 6 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 
    8 6 6 6 6 6 6 6 6 8 
    e e e e e e e e e e 
    e e e e e e e e e e 
    e e f f f f f f e e 
    `],
1000,
true
)
let BedAnim = true
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
    BedAnim = false
})
Itm1 = "Sandwich"
Itm2 = "Sandwich"
Itm3 = "Pocket Fox"
Itm4 = ""
Itm5 = ""
Trash = ""
let EquipAtk = 0
Weapon = false
let BAtk = 5
MaxHP = 30
HP = 30
ItmList = [
Itm1,
Itm2,
Itm3,
Itm4,
Itm5
]
Psi1 = ""
Psi2 = ""
Psi3 = ""
Psi4 = ""
let Psi = [
Psi1,
Psi2,
Psi3,
Psi4
]
info.setLife(25)
info.setScore(15)
StarfallInd1 = sprites.create(img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
StarfallInd2 = sprites.create(img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
forever(function () {
    if (!(BedAnim)) {
        if (story.isMenuOpen()) {
            controller.moveSprite(mySprite, 0, 0)
            pauseUntil(() => !(story.isMenuOpen()))
        } else {
            controller.moveSprite(mySprite, 100, 100)
        }
    }
})
forever(function () {
    if (TowerAmbush) {
        if (sprites.allOfKind(SpriteKind.TowerEnemy).length == 0) {
            TowerAmbush = false
            animation.runImageAnimation(
            mySprite,
            [img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f f . . 
                . f d f f d f 4 f . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f f . . 
                . f f d d f f 4 4 . 
                . f d f f d f 4 4 f 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f f . . 
                . f f d d f f 4 4 . 
                . f d f f d f 4 4 f 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f f . . 
                . f d f f d f 4 f . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `],
            100,
            false
            )
            tiles.setCurrentTilemap(tilemap`level9`)
            timer.after(300, function () {
                game.showLongText("Hey, what's that orb thing in the center?", DialogLayout.Bottom)
            })
        }
    }
})
forever(function () {
    if (TowerAmbush2) {
        if (sprites.allOfKind(SpriteKind.TowerEnemy).length == 0) {
            TowerAmbush2 = false
            animation.runImageAnimation(
            mySprite,
            [img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f f . . 
                . f d f f d f 4 f . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f f . . 
                . f f d d f f 4 4 . 
                . f d f f d f 4 4 f 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f f . . 
                . f f d d f f 4 4 . 
                . f d f f d f 4 4 f 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f f . . 
                . f d f f d f 4 f . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `],
            100,
            false
            )
            tiles.setCurrentTilemap(tilemap`level14`)
            timer.after(300, function () {
                game.showLongText("Almost at the top! I wonder what's there? Whatever it is, we can defeat! And I can finally do what I wanted to do for so long!", DialogLayout.Bottom)
            })
        }
    }
})
forever(function () {
    if (Ambush) {
        if (sprites.allOfKind(SpriteKind.Enemy).length == 0) {
            Ambush = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f f . . 
                . f d f f d f 4 f . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f f . . 
                . f f d d f f 4 4 . 
                . f d f f d f 4 4 f 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f f . . 
                . f f d d f f 4 4 . 
                . f d f f d f 4 4 f 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f f . . 
                . f d f f d f 4 f . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `,img`
                . . f f f f . . . . 
                . f f f f f f . . . 
                . f d d d d f . . . 
                . f f d d f f . . . 
                . f d f f d f . . . 
                f 2 2 2 2 2 2 f . . 
                f d 2 2 2 2 d f . . 
                . f 8 8 8 8 f . . . 
                . f 8 f f 8 f . . . 
                . f f f f f f . . . 
                `],
            100,
            false
            )
            timer.after(300, function () {
                game.showLongText("That was weird.. I've never seen people act so violently before... Oh no... The astral forces are angered. Something bad must be happening...", DialogLayout.Bottom)
            })
        }
    }
})
forever(function () {
    if (info.score() > 15) {
        info.setScore(15)
    }
    StarfallInd1.setPosition(160, 0)
    StarfallInd2.setPosition(0, 0)
    StarfallInd2.setStayInScreen(true)
    StarfallInd1.setStayInScreen(true)
})
game.onUpdateInterval(10000, function () {
    info.changeScoreBy(1)
})
