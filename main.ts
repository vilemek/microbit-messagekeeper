input.onButtonPressed(Button.A, function () {
    readpin = 0
    if (pins.analogReadPin(AnalogPin.P0) >= 1) {
        lenght += 1
        if (pins.analogReadPin(AnalogPin.P1) >= 1) {
            lenght += 1
            if (pins.analogReadPin(AnalogPin.P2) >= 1) {
                lenght += 1
                if (pins.analogReadPin(AnalogPin.P3) >= 1) {
                    lenght += 1
                    if (pins.analogReadPin(AnalogPin.P4) >= 1) {
                        lenght += 1
                        if (pins.analogReadPin(AnalogPin.P10) >= 1) {
                            lenght += 1
                        }
                    }
                }
            }
        }
    }
    for (let index = 0; index < lenght; index++) {
        if (readpin == 0) {
            letter_2 = pins.analogReadPin(AnalogPin.P0)
        } else if (readpin == 1) {
            letter_2 = pins.analogReadPin(AnalogPin.P1)
        } else if (readpin == 2) {
            letter_2 = pins.analogReadPin(AnalogPin.P2)
        } else if (readpin == 3) {
            letter_2 = pins.analogReadPin(AnalogPin.P3)
        } else if (readpin == 4) {
            letter_2 = pins.analogReadPin(AnalogPin.P4)
        } else if (readpin == 5) {
            letter_2 = pins.analogReadPin(AnalogPin.P10)
        } else {
        	
        }
        if (letter_2 == 1) {
            basic.clearScreen()
            basic.showString("A")
        } else if (letter_2 == 2) {
            basic.clearScreen()
            basic.showString("B")
        } else if (letter_2 == 3) {
            basic.clearScreen()
            basic.showString("C")
        } else if (letter_2 == 4) {
            basic.clearScreen()
            basic.showString("D")
        } else if (letter_2 == 5) {
            basic.clearScreen()
            basic.showString("E")
        } else if (letter_2 == 6) {
            basic.clearScreen()
            basic.showString("F")
        } else if (letter_2 == 7) {
            basic.clearScreen()
            basic.showString("G")
        } else if (letter_2 == 8) {
            basic.clearScreen()
            basic.showString("H")
        } else if (letter_2 == 9) {
            basic.clearScreen()
            basic.showString("I")
        } else if (letter_2 == 10) {
            basic.clearScreen()
            basic.showString("J")
        } else if (letter_2 == 11) {
            basic.clearScreen()
            basic.showString("K")
        } else if (letter_2 == 12) {
            basic.clearScreen()
            basic.showString("L")
        } else if (letter_2 == 13) {
            basic.clearScreen()
            basic.showString("M")
        } else if (letter_2 == 14) {
            basic.clearScreen()
            basic.showString("N")
        } else if (letter_2 == 15) {
            basic.clearScreen()
            basic.showString("O")
        } else if (letter_2 == 16) {
            basic.clearScreen()
            basic.showString("P")
        } else if (letter_2 == 17) {
            basic.clearScreen()
            basic.showString("Q")
        } else if (letter_2 == 18) {
            basic.clearScreen()
            basic.showString("R")
        } else if (letter_2 == 19) {
            basic.clearScreen()
            basic.showString("S")
        } else if (letter_2 == 20) {
            basic.clearScreen()
            basic.showString("T")
        } else if (letter_2 == 21) {
            basic.clearScreen()
            basic.showString("U")
        } else if (letter_2 == 22) {
            basic.clearScreen()
            basic.showString("V")
        } else if (letter_2 == 23) {
            basic.clearScreen()
            basic.showString("W")
        } else if (letter_2 == 24) {
            basic.clearScreen()
            basic.showString("X")
        } else if (letter_2 == 25) {
            basic.clearScreen()
            basic.showString("Y")
        } else if (letter_2 == 26) {
            basic.clearScreen()
            basic.showString("Z")
        } else {
            basic.clearScreen()
        }
        readpin += 1
        basic.pause(500)
        basic.clearScreen()
    }
    basic.pause(750)
    basic.clearScreen()
    readpin = 0
    l1_lock = 0
    letter_1 = 0
    letter_2 = 0
    lenght = 0
})
input.onButtonPressed(Button.AB, function () {
    if (l1_lock == 0) {
        pins.analogWritePin(AnalogPin.P0, letter_1)
        basic.clearScreen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 1
    } else if (l1_lock == 1) {
        pins.analogWritePin(AnalogPin.P1, letter_1)
        basic.clearScreen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 2
    } else if (l1_lock == 2) {
        pins.analogWritePin(AnalogPin.P2, letter_1)
        basic.clearScreen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 3
    } else if (l1_lock == 3) {
        pins.analogWritePin(AnalogPin.P3, letter_1)
        basic.clearScreen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 4
    } else if (l1_lock == 4) {
        pins.analogWritePin(AnalogPin.P4, letter_1)
        basic.clearScreen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 5
    } else if (l1_lock == 5) {
        pins.analogWritePin(AnalogPin.P10, letter_1)
        basic.clearScreen()
        basic.pause(100)
        letter_1 = 0
        l1_lock = 6
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (l1_lock <= 6) {
        letter_1 += 1
        if (letter_1 == 1) {
            basic.clearScreen()
            basic.showString("A")
        } else if (letter_1 == 2) {
            basic.clearScreen()
            basic.showString("B")
        } else if (letter_1 == 3) {
            basic.clearScreen()
            basic.showString("C")
        } else if (letter_1 == 4) {
            basic.clearScreen()
            basic.showString("D")
        } else if (letter_1 == 5) {
            basic.clearScreen()
            basic.showString("E")
        } else if (letter_1 == 6) {
            basic.clearScreen()
            basic.showString("F")
        } else if (letter_1 == 7) {
            basic.clearScreen()
            basic.showString("G")
        } else if (letter_1 == 8) {
            basic.clearScreen()
            basic.showString("H")
        } else if (letter_1 == 9) {
            basic.clearScreen()
            basic.showString("I")
        } else if (letter_1 == 10) {
            basic.clearScreen()
            basic.showString("J")
        } else if (letter_1 == 11) {
            basic.clearScreen()
            basic.showString("K")
        } else if (letter_1 == 12) {
            basic.clearScreen()
            basic.showString("L")
        } else if (letter_1 == 13) {
            basic.clearScreen()
            basic.showString("M")
        } else if (letter_1 == 14) {
            basic.clearScreen()
            basic.showString("N")
        } else if (letter_1 == 15) {
            basic.clearScreen()
            basic.showString("O")
        } else if (letter_1 == 16) {
            basic.clearScreen()
            basic.showString("P")
        } else if (letter_1 == 17) {
            basic.clearScreen()
            basic.showString("Q")
        } else if (letter_1 == 18) {
            basic.clearScreen()
            basic.showString("R")
        } else if (letter_1 == 19) {
            basic.clearScreen()
            basic.showString("S")
        } else if (letter_1 == 20) {
            basic.clearScreen()
            basic.showString("T")
        } else if (letter_1 == 21) {
            basic.clearScreen()
            basic.showString("U")
        } else if (letter_1 == 22) {
            basic.clearScreen()
            basic.showString("V")
        } else if (letter_1 == 23) {
            basic.clearScreen()
            basic.showString("W")
        } else if (letter_1 == 24) {
            basic.clearScreen()
            basic.showString("X")
        } else if (letter_1 == 25) {
            basic.clearScreen()
            basic.showString("Y")
        } else if (letter_1 == 26) {
            basic.clearScreen()
            basic.showString("Z")
        } else {
            letter_1 = 0
        }
    } else {
        basic.showString("FULL")
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    readpin = 0
    if (pins.analogReadPin(AnalogPin.P0) > 0) {
        lenght += 1
        if (pins.analogReadPin(AnalogPin.P1) > 0) {
            lenght += 1
            if (pins.analogReadPin(AnalogPin.P2) > 0) {
                lenght += 1
                if (pins.analogReadPin(AnalogPin.P3) > 0) {
                    lenght += 1
                    if (pins.analogReadPin(AnalogPin.P4) > 0) {
                        lenght += 1
                        if (pins.analogReadPin(AnalogPin.P10) > 0) {
                            lenght += 1
                        }
                    }
                }
            }
        }
    }
    for (let index = 0; index < lenght; index++) {
        if (readpin == 0) {
            letter_2 = pins.analogReadPin(AnalogPin.P0)
        } else if (readpin == 1) {
            letter_2 = pins.analogReadPin(AnalogPin.P1)
        } else if (readpin == 2) {
            letter_2 = pins.analogReadPin(AnalogPin.P2)
        } else if (readpin == 3) {
            letter_2 = pins.analogReadPin(AnalogPin.P3)
        } else if (readpin == 4) {
            letter_2 = pins.analogReadPin(AnalogPin.P4)
        } else if (readpin == 5) {
            letter_2 = pins.analogReadPin(AnalogPin.P10)
        } else {
        	
        }
        if (letter_2 == 1) {
            basic.clearScreen()
            basic.showString("A")
        } else if (letter_2 == 2) {
            basic.clearScreen()
            basic.showString("B")
        } else if (letter_2 == 3) {
            basic.clearScreen()
            basic.showString("C")
        } else if (letter_2 == 4) {
            basic.clearScreen()
            basic.showString("D")
        } else if (letter_2 == 5) {
            basic.clearScreen()
            basic.showString("E")
        } else if (letter_2 == 6) {
            basic.clearScreen()
            basic.showString("F")
        } else if (letter_2 == 7) {
            basic.clearScreen()
            basic.showString("G")
        } else if (letter_2 == 8) {
            basic.clearScreen()
            basic.showString("H")
        } else if (letter_2 == 9) {
            basic.clearScreen()
            basic.showString("I")
        } else if (letter_2 == 10) {
            basic.clearScreen()
            basic.showString("J")
        } else if (letter_2 == 11) {
            basic.clearScreen()
            basic.showString("K")
        } else if (letter_2 == 12) {
            basic.clearScreen()
            basic.showString("L")
        } else if (letter_2 == 13) {
            basic.clearScreen()
            basic.showString("M")
        } else if (letter_2 == 14) {
            basic.clearScreen()
            basic.showString("N")
        } else if (letter_2 == 15) {
            basic.clearScreen()
            basic.showString("O")
        } else if (letter_2 == 16) {
            basic.clearScreen()
            basic.showString("P")
        } else if (letter_2 == 17) {
            basic.clearScreen()
            basic.showString("Q")
        } else if (letter_2 == 18) {
            basic.clearScreen()
            basic.showString("R")
        } else if (letter_2 == 19) {
            basic.clearScreen()
            basic.showString("S")
        } else if (letter_2 == 20) {
            basic.clearScreen()
            basic.showString("T")
        } else if (letter_2 == 21) {
            basic.clearScreen()
            basic.showString("U")
        } else if (letter_2 == 22) {
            basic.clearScreen()
            basic.showString("V")
        } else if (letter_2 == 23) {
            basic.clearScreen()
            basic.showString("W")
        } else if (letter_2 == 24) {
            basic.clearScreen()
            basic.showString("X")
        } else if (letter_2 == 25) {
            basic.clearScreen()
            basic.showString("Y")
        } else if (letter_2 == 26) {
            basic.clearScreen()
            basic.showString("Z")
        } else {
            basic.clearScreen()
        }
        readpin += 1
        basic.pause(500)
        basic.clearScreen()
    }
    basic.pause(750)
    basic.clearScreen()
    readpin = 0
    letter_1 = 0
    letter_2 = 0
    l1_lock = 0
    lenght = 0
})
let l1_lock = 0
let letter_2 = 0
let lenght = 0
let readpin = 0
let letter_1 = 0
letter_1 = 0
