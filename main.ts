input.onButtonPressed(Button.A, function () {
    if (letter_1 == 0) {
        basic.clearScreen()
        basic.showString("A")
    } else if (letter_1 == 1) {
        basic.clearScreen()
        basic.showString("B")
    } else if (letter_1 == 2) {
        basic.clearScreen()
        basic.showString("C")
    } else if (letter_1 == 3) {
        basic.clearScreen()
        basic.showString("D")
    } else if (letter_1 == 4) {
        basic.clearScreen()
        basic.showString("E")
    } else if (letter_1 == 5) {
        basic.clearScreen()
        basic.showString("F")
    } else if (letter_1 == 6) {
        basic.clearScreen()
        basic.showString("G")
    } else if (letter_1 == 7) {
        basic.clearScreen()
        basic.showString("H")
    } else if (letter_1 == 8) {
        basic.clearScreen()
        basic.showString("I")
    } else if (letter_1 == 9) {
        basic.clearScreen()
        basic.showString("J")
    } else if (letter_1 == 10) {
        basic.clearScreen()
        basic.showString("K")
    } else if (letter_1 == 11) {
        basic.clearScreen()
        basic.showString("L")
    } else if (letter_1 == 12) {
        basic.clearScreen()
        basic.showString("M")
    } else if (letter_1 == 13) {
        basic.clearScreen()
        basic.showString("N")
    } else if (letter_1 == 14) {
        basic.clearScreen()
        basic.showString("O")
    } else if (letter_1 == 15) {
        basic.clearScreen()
        basic.showString("P")
    } else if (letter_1 == 16) {
        basic.clearScreen()
        basic.showString("Q")
    } else if (letter_1 == 17) {
        basic.clearScreen()
        basic.showString("R")
    } else if (letter_1 == 18) {
        basic.clearScreen()
        basic.showString("S")
    } else if (letter_1 == 19) {
        basic.clearScreen()
        basic.showString("T")
    } else if (letter_1 == 20) {
        basic.clearScreen()
        basic.showString("U")
    } else if (letter_1 == 21) {
        basic.clearScreen()
        basic.showString("V")
    } else if (letter_1 == 22) {
        basic.clearScreen()
        basic.showString("W")
    } else if (letter_1 == 23) {
        basic.clearScreen()
        basic.showString("X")
    } else if (letter_1 == 24) {
        basic.clearScreen()
        basic.showString("Y")
    } else if (letter_1 == 25) {
        basic.clearScreen()
        basic.showString("Z")
    } else {
        letter_1 = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (l1_lock == 0) {
        pins.analogWritePin(AnalogPin.P0, letter_1)
        basic.clearScreen()
        basic.pause(100)
        letter_1 = -1
        l1_lock = 1
    } else if (l1_lock == 1) {
        pins.analogWritePin(AnalogPin.P0, letter_2)
        basic.clearScreen()
        basic.pause(100)
        letter_2 = -1
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    letter_1 += 1
    if (letter_1 == 0) {
        basic.clearScreen()
        basic.showString("A")
    } else if (letter_1 == 1) {
        basic.clearScreen()
        basic.showString("B")
    } else if (letter_1 == 2) {
        basic.clearScreen()
        basic.showString("C")
    } else if (letter_1 == 3) {
        basic.clearScreen()
        basic.showString("D")
    } else if (letter_1 == 4) {
        basic.clearScreen()
        basic.showString("E")
    } else if (letter_1 == 5) {
        basic.clearScreen()
        basic.showString("F")
    } else if (letter_1 == 6) {
        basic.clearScreen()
        basic.showString("G")
    } else if (letter_1 == 7) {
        basic.clearScreen()
        basic.showString("H")
    } else if (letter_1 == 8) {
        basic.clearScreen()
        basic.showString("I")
    } else if (letter_1 == 9) {
        basic.clearScreen()
        basic.showString("J")
    } else if (letter_1 == 10) {
        basic.clearScreen()
        basic.showString("K")
    } else if (letter_1 == 11) {
        basic.clearScreen()
        basic.showString("L")
    } else if (letter_1 == 12) {
        basic.clearScreen()
        basic.showString("M")
    } else if (letter_1 == 13) {
        basic.clearScreen()
        basic.showString("N")
    } else if (letter_1 == 14) {
        basic.clearScreen()
        basic.showString("O")
    } else if (letter_1 == 15) {
        basic.clearScreen()
        basic.showString("P")
    } else if (letter_1 == 16) {
        basic.clearScreen()
        basic.showString("Q")
    } else if (letter_1 == 17) {
        basic.clearScreen()
        basic.showString("R")
    } else if (letter_1 == 18) {
        basic.clearScreen()
        basic.showString("S")
    } else if (letter_1 == 19) {
        basic.clearScreen()
        basic.showString("T")
    } else if (letter_1 == 20) {
        basic.clearScreen()
        basic.showString("U")
    } else if (letter_1 == 21) {
        basic.clearScreen()
        basic.showString("V")
    } else if (letter_1 == 22) {
        basic.clearScreen()
        basic.showString("W")
    } else if (letter_1 == 23) {
        basic.clearScreen()
        basic.showString("X")
    } else if (letter_1 == 24) {
        basic.clearScreen()
        basic.showString("Y")
    } else if (letter_1 == 25) {
        basic.clearScreen()
        basic.showString("Z")
    } else {
        letter_1 = -1
    }
})
let letter_2 = 0
let l1_lock = 0
let letter_1 = 0
letter_1 = -1
basic.forever(function () {
    if (letter_1 == -1) {
        letter_1 = pins.analogReadPin(AnalogPin.P0)
        letter_2 = pins.analogReadPin(AnalogPin.P1)
    }
})
