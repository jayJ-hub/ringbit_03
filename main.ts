RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
})
basic.forever(function () {
    RingbitCar.forward()
    basic.pause(1000)
    RingbitCar.turnright()
    basic.pause(1000)
})
