def on_pin_pressed_p0():
    basic.show_leds("""
        . # # # .
                . # . . #
                . # . . #
                . # . . #
                . # # # .
    """)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_logo_long_pressed():
    basic.show_leds("""
        . # # # .
                # . . . .
                # . . . .
                # . . . .
                . # # # .
    """)
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_button_pressed_a():
    basic.show_leds("""
        . . # . .
                . # . # .
                # . . . #
                # # # # #
                # . . . #
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    basic.show_leds("""
        . # # # .
                . # . . .
                . # # # .
                . # . . .
                . # . . .
    """)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_b():
    basic.show_leds("""
        # # # . .
                # . . # .
                # # # . .
                # . . # .
                # # # . .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    basic.show_leds("""
        # # # . .
                # . . . .
                # # # . .
                # . . . .
                # # # . .
    """)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_forever():
    if input.button_is_pressed(Button.B) and input.pin_is_pressed(TouchPin.P1):
        basic.show_leds("""
            . # # # .
                        # . . . .
                        # . # # .
                        # . . # .
                        . # # # .
        """)
basic.forever(on_forever)
