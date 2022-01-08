def show_the_heart():
    basic.show_icon(IconNames.HEART,400)
    basic.clear_screen()
    basic.pause(200)
    basic.show_icon(IconNames.SMALL_HEART,140)
    basic.show_icon(IconNames.HEART,400)
    basic.clear_screen()
    basic.pause(200)
    basic.show_icon(IconNames.SMALL_HEART,140)
    basic.clear_screen()
repeatheart = False
show_the_heart()
while (repeatheart):
    show_the_heart()

