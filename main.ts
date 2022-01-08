function show_the_heart() {
    basic.showIcon(IconNames.Heart, 400)
    basic.clearScreen()
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart, 140)
    basic.showIcon(IconNames.Heart, 400)
    basic.clearScreen()
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart, 140)
    basic.clearScreen()
}

let repeatheart = false
show_the_heart()
while (repeatheart) {
    show_the_heart()
}
