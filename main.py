def on_button_pressed_a():
    global letter_1
    if letter_1 == 0:
        basic.clear_screen()
        basic.show_string("A")
    elif letter_1 == 1:
        basic.clear_screen()
        basic.show_string("B")
    elif letter_1 == 2:
        basic.clear_screen()
        basic.show_string("C")
    elif letter_1 == 3:
        basic.clear_screen()
        basic.show_string("D")
    elif letter_1 == 4:
        basic.clear_screen()
        basic.show_string("E")
    elif letter_1 == 5:
        basic.clear_screen()
        basic.show_string("F")
    elif letter_1 == 6:
        basic.clear_screen()
        basic.show_string("G")
    elif letter_1 == 7:
        basic.clear_screen()
        basic.show_string("H")
    elif letter_1 == 8:
        basic.clear_screen()
        basic.show_string("I")
    elif letter_1 == 9:
        basic.clear_screen()
        basic.show_string("J")
    elif letter_1 == 10:
        basic.clear_screen()
        basic.show_string("K")
    elif letter_1 == 11:
        basic.clear_screen()
        basic.show_string("L")
    elif letter_1 == 12:
        basic.clear_screen()
        basic.show_string("M")
    elif letter_1 == 13:
        basic.clear_screen()
        basic.show_string("N")
    elif letter_1 == 14:
        basic.clear_screen()
        basic.show_string("O")
    elif letter_1 == 15:
        basic.clear_screen()
        basic.show_string("P")
    elif letter_1 == 16:
        basic.clear_screen()
        basic.show_string("Q")
    elif letter_1 == 17:
        basic.clear_screen()
        basic.show_string("R")
    elif letter_1 == 18:
        basic.clear_screen()
        basic.show_string("S")
    elif letter_1 == 19:
        basic.clear_screen()
        basic.show_string("T")
    elif letter_1 == 20:
        basic.clear_screen()
        basic.show_string("U")
    elif letter_1 == 21:
        basic.clear_screen()
        basic.show_string("V")
    elif letter_1 == 22:
        basic.clear_screen()
        basic.show_string("W")
    elif letter_1 == 23:
        basic.clear_screen()
        basic.show_string("X")
    elif letter_1 == 24:
        basic.clear_screen()
        basic.show_string("Y")
    elif letter_1 == 25:
        basic.clear_screen()
        basic.show_string("Z")
    else:
        letter_1 = -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global letter_1
    pins.analog_write_pin(AnalogPin.P0, letter_1)
    basic.clear_screen()
    basic.pause(100)
    letter_1 = -1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global letter_1
    letter_1 += 1
    if letter_1 == 0:
        basic.clear_screen()
        basic.show_string("A")
    elif letter_1 == 1:
        basic.clear_screen()
        basic.show_string("B")
    elif letter_1 == 2:
        basic.clear_screen()
        basic.show_string("C")
    elif letter_1 == 3:
        basic.clear_screen()
        basic.show_string("D")
    elif letter_1 == 4:
        basic.clear_screen()
        basic.show_string("E")
    elif letter_1 == 5:
        basic.clear_screen()
        basic.show_string("F")
    elif letter_1 == 6:
        basic.clear_screen()
        basic.show_string("G")
    elif letter_1 == 7:
        basic.clear_screen()
        basic.show_string("H")
    elif letter_1 == 8:
        basic.clear_screen()
        basic.show_string("I")
    elif letter_1 == 9:
        basic.clear_screen()
        basic.show_string("J")
    elif letter_1 == 10:
        basic.clear_screen()
        basic.show_string("K")
    elif letter_1 == 11:
        basic.clear_screen()
        basic.show_string("L")
    elif letter_1 == 12:
        basic.clear_screen()
        basic.show_string("M")
    elif letter_1 == 13:
        basic.clear_screen()
        basic.show_string("N")
    elif letter_1 == 14:
        basic.clear_screen()
        basic.show_string("O")
    elif letter_1 == 15:
        basic.clear_screen()
        basic.show_string("P")
    elif letter_1 == 16:
        basic.clear_screen()
        basic.show_string("Q")
    elif letter_1 == 17:
        basic.clear_screen()
        basic.show_string("R")
    elif letter_1 == 18:
        basic.clear_screen()
        basic.show_string("S")
    elif letter_1 == 19:
        basic.clear_screen()
        basic.show_string("T")
    elif letter_1 == 20:
        basic.clear_screen()
        basic.show_string("U")
    elif letter_1 == 21:
        basic.clear_screen()
        basic.show_string("V")
    elif letter_1 == 22:
        basic.clear_screen()
        basic.show_string("W")
    elif letter_1 == 23:
        basic.clear_screen()
        basic.show_string("X")
    elif letter_1 == 24:
        basic.clear_screen()
        basic.show_string("Y")
    elif letter_1 == 25:
        basic.clear_screen()
        basic.show_string("Z")
    else:
        letter_1 = -1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_released():
    global letter_1
    letter_1 = pins.analog_read_pin(AnalogPin.P0)
input.on_logo_event(TouchButtonEvent.RELEASED, on_logo_released)

letter_1 = 0
letter_1 = -1

def on_forever():
    pass
basic.forever(on_forever)
