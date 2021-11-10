input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # . . #
        . # . . #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # # # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # # .
            # . . # .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . # . . #
            . # . . #
            . # # # #
            . # . . #
            . # . . #
            `)
    }
})
basic.forever(function () {
    if (input.logoIsPressed() && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            # . # . .
            # # # . .
            `)
    }
})
basic.forever(function () {
    if (input.logoIsPressed() && input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . . # .
            # . # . .
            # # . . .
            # . # . .
            # . . # .
            `)
    }
})
basic.forever(function () {
    if (input.logoIsPressed() && input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . # .
            # . . # .
            . # # . .
            `)
    }
})
