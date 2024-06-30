let r = 0
let q = 0
let s = 0
let t = 0
while (t < 60) {
    s = t % 15
    q = Math.idiv(s, 5)
    r = s % 5
    led.toggle(r, q)
    t += 1
    basic.pause(500)
}
basic.forever(function () {
	
})
