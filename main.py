def on_button_pressed_a():
    global readpin, lenght, letter_2, l1_lock, letter_1
    readpin = 0
    if pins.analog_read_pin(AnalogPin.P0) >= 1:
        lenght += 1
        if pins.analog_read_pin(AnalogPin.P1) >= 1:
            lenght += 1
            if pins.analog_read_pin(AnalogPin.P2) >= 1:
                lenght += 1
                if pins.analog_read_pin(AnalogPin.P3) >= 1:
                    lenght += 1
                    if pins.analog_read_pin(AnalogPin.P4) >= 1:
                        lenght += 1
                        if pins.analog_read_pin(AnalogPin.P10) >= 1:
                            lenght += 1
    for index in range(lenght):
        if readpin == 0:
            letter_2 = pins.analog_read_pin(AnalogPin.P0)
        elif readpin == 1:
            letter_2 = pins.analog_read_pin(AnalogPin.P1)
        elif readpin == 2:
            letter_2 = pins.analog_read_pin(AnalogPin.P2)
        elif readpin == 3:
            letter_2 = pins.analog_read_pin(AnalogPin.P3)
        elif readpin == 4:
            letter_2 = pins.analog_read_pin(AnalogPin.P4)
        elif readpin == 5:
            letter_2 = pins.analog_read_pin(AnalogPin.P10)
        else:
            pass
        if letter_2 == 1:
            basic.clear_screen()
            basic.show_string("A")
        elif letter_2 == 2:
            basic.clear_screen()
            basic.show_string("B")
        elif letter_2 == 3:
            basic.clear_screen()
            basic.show_string("C")
        elif letter_2 == 4:
            basic.clear_screen()
            basic.show_string("D")
        elif letter_2 == 5:
            basic.clear_screen()
            basic.show_string("E")
        elif letter_2 == 6:
            basic.clear_screen()
            basic.show_string("F")
        elif letter_2 == 7:
            basic.clear_screen()
            basic.show_string("G")
        elif letter_2 == 8:
            basic.clear_screen()
            basic.show_string("H")
        elif letter_2 == 9:
            basic.clear_screen()
            basic.show_string("I")
        elif letter_2 == 10:
            basic.clear_screen()
            basic.show_string("J")
        elif letter_2 == 11:
            basic.clear_screen()
            basic.show_string("K")
        elif letter_2 == 12:
            basic.clear_screen()
            basic.show_string("L")
        elif letter_2 == 13:
            basic.clear_screen()
            basic.show_string("M")
        elif letter_2 == 14:
            basic.clear_screen()
            basic.show_string("N")
        elif letter_2 == 15:
            basic.clear_screen()
            basic.show_string("O")
        elif letter_2 == 16:
            basic.clear_screen()
            basic.show_string("P")
        elif letter_2 == 17:
            basic.clear_screen()
            basic.show_string("Q")
        elif letter_2 == 18:
            basic.clear_screen()
            basic.show_string("R")
        elif letter_2 == 19:
            basic.clear_screen()
            basic.show_string("S")
        elif letter_2 == 20:
            basic.clear_screen()
            basic.show_string("T")
        elif letter_2 == 21:
            basic.clear_screen()
            basic.show_string("U")
        elif letter_2 == 22:
            basic.clear_screen()
            basic.show_string("V")
        elif letter_2 == 23:
            basic.clear_screen()
            basic.show_string("W")
        elif letter_2 == 24:
            basic.clear_screen()
            basic.show_string("X")
        elif letter_2 == 25:
            basic.clear_screen()
            basic.show_string("Y")
        elif letter_2 == 26:
            basic.clear_screen()
            basic.show_string("Z")
        else:
            basic.clear_screen()
        readpin += 1
        basic.pause(500)
        basic.clear_screen()
    basic.pause(750)
    basic.clear_screen()
    readpin = 0
    l1_lock = 0
    letter_1 = 0
    letter_2 = 0
    lenght = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global letter_1, l1_lock
    if l1_lock == 0:
        pins.analog_write_pin(AnalogPin.P0, letter_1)
        basic.clear_screen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 1
    elif l1_lock == 1:
        pins.analog_write_pin(AnalogPin.P1, letter_1)
        basic.clear_screen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 2
    elif l1_lock == 2:
        pins.analog_write_pin(AnalogPin.P2, letter_1)
        basic.clear_screen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 3
    elif l1_lock == 3:
        pins.analog_write_pin(AnalogPin.P3, letter_1)
        basic.clear_screen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 4
    elif l1_lock == 4:
        pins.analog_write_pin(AnalogPin.P4, letter_1)
        basic.clear_screen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 5
    elif l1_lock == 5:
        pins.analog_write_pin(AnalogPin.P10, letter_1)
        basic.clear_screen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 6
    else:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global letter_1
    if l1_lock < 6:
        letter_1 += 1
        if letter_1 == 1:
            basic.clear_screen()
            basic.show_string("A")
        elif letter_1 == 2:
            basic.clear_screen()
            basic.show_string("B")
        elif letter_1 == 3:
            basic.clear_screen()
            basic.show_string("C")
        elif letter_1 == 4:
            basic.clear_screen()
            basic.show_string("D")
        elif letter_1 == 5:
            basic.clear_screen()
            basic.show_string("E")
        elif letter_1 == 6:
            basic.clear_screen()
            basic.show_string("F")
        elif letter_1 == 7:
            basic.clear_screen()
            basic.show_string("G")
        elif letter_1 == 8:
            basic.clear_screen()
            basic.show_string("H")
        elif letter_1 == 9:
            basic.clear_screen()
            basic.show_string("I")
        elif letter_1 == 10:
            basic.clear_screen()
            basic.show_string("J")
        elif letter_1 == 11:
            basic.clear_screen()
            basic.show_string("K")
        elif letter_1 == 12:
            basic.clear_screen()
            basic.show_string("L")
        elif letter_1 == 13:
            basic.clear_screen()
            basic.show_string("M")
        elif letter_1 == 14:
            basic.clear_screen()
            basic.show_string("N")
        elif letter_1 == 15:
            basic.clear_screen()
            basic.show_string("O")
        elif letter_1 == 16:
            basic.clear_screen()
            basic.show_string("P")
        elif letter_1 == 17:
            basic.clear_screen()
            basic.show_string("Q")
        elif letter_1 == 18:
            basic.clear_screen()
            basic.show_string("R")
        elif letter_1 == 19:
            basic.clear_screen()
            basic.show_string("S")
        elif letter_1 == 20:
            basic.clear_screen()
            basic.show_string("T")
        elif letter_1 == 21:
            basic.clear_screen()
            basic.show_string("U")
        elif letter_1 == 22:
            basic.clear_screen()
            basic.show_string("V")
        elif letter_1 == 23:
            basic.clear_screen()
            basic.show_string("W")
        elif letter_1 == 24:
            basic.clear_screen()
            basic.show_string("X")
        elif letter_1 == 25:
            basic.clear_screen()
            basic.show_string("Y")
        elif letter_1 == 26:
            basic.clear_screen()
            basic.show_string("Z")
        else:
            letter_1 = 0
    else:
        basic.show_string("FULL")
        basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_released():
    global readpin, lenght, letter_2, letter_1, l1_lock
    readpin = 0
    if pins.analog_read_pin(AnalogPin.P0) > 0:
        lenght += 1
        if pins.analog_read_pin(AnalogPin.P1) > 0:
            lenght += 1
            if pins.analog_read_pin(AnalogPin.P2) > 0:
                lenght += 1
                if pins.analog_read_pin(AnalogPin.P3) > 0:
                    lenght += 1
                    if pins.analog_read_pin(AnalogPin.P4) > 0:
                        lenght += 1
                        if pins.analog_read_pin(AnalogPin.P10) > 0:
                            lenght += 1
    for index2 in range(lenght):
        if readpin == 0:
            letter_2 = pins.analog_read_pin(AnalogPin.P0)
        elif readpin == 1:
            letter_2 = pins.analog_read_pin(AnalogPin.P1)
        elif readpin == 2:
            letter_2 = pins.analog_read_pin(AnalogPin.P2)
        elif readpin == 3:
            letter_2 = pins.analog_read_pin(AnalogPin.P3)
        elif readpin == 4:
            letter_2 = pins.analog_read_pin(AnalogPin.P4)
        elif readpin == 5:
            letter_2 = pins.analog_read_pin(AnalogPin.P10)
        else:
            pass
        if letter_2 == 1:
            basic.clear_screen()
            basic.show_string("A")
        elif letter_2 == 2:
            basic.clear_screen()
            basic.show_string("B")
        elif letter_2 == 3:
            basic.clear_screen()
            basic.show_string("C")
        elif letter_2 == 4:
            basic.clear_screen()
            basic.show_string("D")
        elif letter_2 == 5:
            basic.clear_screen()
            basic.show_string("E")
        elif letter_2 == 6:
            basic.clear_screen()
            basic.show_string("F")
        elif letter_2 == 7:
            basic.clear_screen()
            basic.show_string("G")
        elif letter_2 == 8:
            basic.clear_screen()
            basic.show_string("H")
        elif letter_2 == 9:
            basic.clear_screen()
            basic.show_string("I")
        elif letter_2 == 10:
            basic.clear_screen()
            basic.show_string("J")
        elif letter_2 == 11:
            basic.clear_screen()
            basic.show_string("K")
        elif letter_2 == 12:
            basic.clear_screen()
            basic.show_string("L")
        elif letter_2 == 13:
            basic.clear_screen()
            basic.show_string("M")
        elif letter_2 == 14:
            basic.clear_screen()
            basic.show_string("N")
        elif letter_2 == 15:
            basic.clear_screen()
            basic.show_string("O")
        elif letter_2 == 16:
            basic.clear_screen()
            basic.show_string("P")
        elif letter_2 == 17:
            basic.clear_screen()
            basic.show_string("Q")
        elif letter_2 == 18:
            basic.clear_screen()
            basic.show_string("R")
        elif letter_2 == 19:
            basic.clear_screen()
            basic.show_string("S")
        elif letter_2 == 20:
            basic.clear_screen()
            basic.show_string("T")
        elif letter_2 == 21:
            basic.clear_screen()
            basic.show_string("U")
        elif letter_2 == 22:
            basic.clear_screen()
            basic.show_string("V")
        elif letter_2 == 23:
            basic.clear_screen()
            basic.show_string("W")
        elif letter_2 == 24:
            basic.clear_screen()
            basic.show_string("X")
        elif letter_2 == 25:
            basic.clear_screen()
            basic.show_string("Y")
        elif letter_2 == 26:
            basic.clear_screen()
            basic.show_string("Z")
        else:
            basic.clear_screen()
        readpin += 1
        basic.pause(500)
        basic.clear_screen()
    basic.pause(750)
    basic.clear_screen()
    readpin = 0
    letter_1 = 0
    letter_2 = 0
    l1_lock = 0
    lenght = 0
input.on_logo_event(TouchButtonEvent.RELEASED, on_logo_released)

l1_lock = 0
letter_2 = 0
lenght = 0
readpin = 0
letter_1 = 0
letter_1 = 0