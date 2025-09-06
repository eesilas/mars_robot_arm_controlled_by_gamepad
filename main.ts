radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("A")
        basic.showString("A")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("B")
        basic.showString("B")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("C")
        basic.showString("C")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("D")
        basic.showString("D")
    }
    if (pins.analogReadPin(AnalogReadWritePin.P2) > 550 && (pins.analogReadPin(AnalogReadWritePin.P1) > 400 && pins.analogReadPin(AnalogReadWritePin.P1) < 600)) {
        radio.sendString("f")
        basic.showString("f")
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 450 && (pins.analogReadPin(AnalogReadWritePin.P1) > 400 && pins.analogReadPin(AnalogReadWritePin.P1) < 600)) {
        radio.sendString("b")
        basic.showString("b")
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) < 450 && (pins.analogReadPin(AnalogReadWritePin.P2) > 400 && pins.analogReadPin(AnalogReadWritePin.P2) < 600)) {
        radio.sendString("l")
        basic.showString("l")
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) > 550 && (pins.analogReadPin(AnalogReadWritePin.P2) > 400 && pins.analogReadPin(AnalogReadWritePin.P2) < 600)) {
        radio.sendString("r")
        basic.showString("r")
    } else {
        radio.sendString("s")
        basic.showString("s")
    }
})
