namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (Level == 1) {
        if (TT1 != 1) {
            TT1 = 1
        }
        if (TT2 != 1) {
            TT2 = 1
        }
        if (TT3 != 1) {
            TT3 = 1
        }
        game.showLongText("\"Congratulations on beating level 1!\" *You swear you heard a crash in your yard* \"Press A to Start Level 2!", DialogLayout.Full)
        game.splash("ERR404")
        game.splash("Restart Initiated:", "Please Retry")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
        Level = 2
        GlitchA = 1
    } else if (Level == 2) {
        if (TT1 != 2) {
            TT1 = 2
        }
        if (TT2 != 2) {
            TT2 = 2
        }
        if (TT3 != 2) {
            TT3 = 2
        }
        game.showLongText("\"Congratulations on beating level 1!\" *You think you hear a window downstairs break* \"Press A to Start Level 2!", DialogLayout.Full)
        game.splash("ERR404")
        game.splash("Rest@rt 1niti@ted:", "Ple@se Retry")
        tiles.setTilemap(tilemap`level2`)
        mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
        GJ1 = 0
        GlitchA = 0
        Level = 3
    } else if (Level == 3) {
        if (TT1 != 3) {
            TT1 = 3
        }
        if (TT2 != 3) {
            TT2 = 3
        }
        if (TT3 != 3) {
            TT3 = 3
        }
        Level = 4
        game.showLongText("\"Congratulations on beating level 1!\" *You hear the door to your room creak open* \"Press A to Start Level 2!", DialogLayout.Full)
        game.splash("ERR404")
        game.splash("R3st@rt 1niti@t3d:", "Pl3@s3 R3try")
        NPC2.setImage(assets.image`myImage2`)
        animation.stopAnimation(animation.AnimationTypes.All, NPC2)
    } else if (Level == 4) {
        if (TT1 != 3) {
            TT1 = 3
        }
        if (TT2 != 3) {
            TT2 = 3
        }
        if (TT3 != 3) {
            TT3 = 3
        }
        NPC1.setImage(assets.image`myImage`)
        animation.stopAnimation(animation.AnimationTypes.All, NPC1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
    } else {
        game.splash("ERR666")
        game.splash("Failure:", "Game Executed")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (Level == 1 && TT1 == 0) {
        game.showLongText("*Happily Blurbs* blurbblurb", DialogLayout.Bottom)
        TT1 = 1
    } else if (Level == 2 && TT1 == 1) {
        game.showLongText("bLuRbblurBBlurb", DialogLayout.Bottom)
        TT1 = 2
    } else if (Level == 3 && TT1 == 2) {
        game.showLongText("BLURBBLURBBLURBBLURB", DialogLayout.Bottom)
        TT1 = 3
    } else if (Level == 4 && TT1 == 3) {
        game.showLongText("...", DialogLayout.Bottom)
        TT1 = 4
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile14`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
        GlitchJump1()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    if (Level == 1 && TT2 == 0) {
        game.showLongText("*Slime bounces to a stop* Hello there!!!", DialogLayout.Bottom)
        TT2 = 1
    } else if (Level == 2 && TT2 == 1) {
        game.showLongText("*Slime slams into ground hard* HELLO there!!!", DialogLayout.Bottom)
        TT2 = 2
    } else if (Level == 3 && TT2 == 2) {
        game.showLongText("*Slime hit the ground too hard *", DialogLayout.Bottom)
        TT2 = 3
    } else if (Level == 4 && TT2 == 3) {
        game.showLongText("...", DialogLayout.Bottom)
        TT2 = 4
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    mySprite.destroy()
    pause(100)
    Respawn()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    if (Level == 1 && TT3 == 0) {
        game.showLongText("Your New", DialogLayout.Bottom)
        TT3 = 1
    } else if (Level == 2 && TT3 == 1) {
        game.showLongText("Your still here", DialogLayout.Bottom)
        TT3 = 2
    } else if (Level == 3 && TT3 == 2) {
        game.showLongText("*whispers to self* They usually don't last this long...", DialogLayout.Bottom)
        TT3 = 3
    } else if (Level == 4 && TT3 == 3) {
        game.showLongText("Chuckles softly", DialogLayout.Bottom)
        TT3 = 4
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
        GlitchJump1()
    }
})
function Respawn () {
    if (Level == 1) {
        mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    } else if (Level == 2) {
        mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    } else if (Level == 3) {
        mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    }
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 480
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
        GlitchJump1()
    }
})
function GameStart () {
    scene.setBackgroundColor(8)
    tiles.setTilemap(tilemap`level1`)
    mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    NPC1 = sprites.create(assets.image`slime1`, SpriteKind.NPC)
    NPC2 = sprites.create(assets.image`slime`, SpriteKind.NPC2)
    NPC3 = sprites.create(assets.image`myImage3`, SpriteKind.NPC3)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 480
    tiles.placeOnRandomTile(NPC1, assets.tile`myTile1`)
    tiles.placeOnRandomTile(NPC2, assets.tile`Temporary asset`)
    tiles.placeOnRandomTile(NPC3, sprites.castle.saplingPine)
    Level = 1
    Music = 1
    animation.runImageAnimation(
    NPC1,
    assets.animation`clownFishLeft`,
    100,
    true
    )
    animation.runImageAnimation(
    NPC2,
    assets.animation`myAnim`,
    200,
    true
    )
    animation.runImageAnimation(
    NPC3,
    assets.animation`myAnim0`,
    950,
    true
    )
}
function GlitchJump1 () {
    if (GlitchA == 1) {
        mySprite.setImage(assets.image`myImage1`)
        GJ1 = 1
        GlitchA = 0
    } else if (GJ1 == 1) {
        mySprite.setImage(assets.image`myImage0`)
        GJ1 = 0
        GlitchA = 1
    }
}
let Music = 0
let NPC3: Sprite = null
let NPC1: Sprite = null
let NPC2: Sprite = null
let GJ1 = 0
let mySprite2: Sprite = null
let GlitchA = 0
let mySprite: Sprite = null
let TT3 = 0
let TT2 = 0
let TT1 = 0
let Level = 0
scene.setBackgroundColor(15)
game.splash("ERR 404:", "RESTART INITIATED")
game.splash("A Horror Platformer by:", "Team Huuuuuuuuumins")
game.splash("Press A to begin", "your game")
scene.setBackgroundColor(12)
game.showLongText("You bought a retro platformer called Jumpy Block", DialogLayout.Center)
game.showLongText("It appeared that 3 Million people had bought it but it had no reviews or ratings, probably some kind of glitch.", DialogLayout.Center)
game.showLongText("You turn on your new game,\"Welcome to Jumpy Block! Press A to begin your jumping experience!\"", DialogLayout.Center)
GameStart()
forever(function () {
    if (Music == 1) {
        music.playMelody("C5 A G F A G F D ", 120)
    } else if (Music == 2) {
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (Music == 3) {
        music.playMelody("C G A F G E F D ", 40)
    } else {
    	
    }
})
forever(function () {
	
})
