q = 0
r = 0
s = 0
while s < 16:
    q = Math.idiv(s, 5)
    r = s % 5
    led.toggle(r, q)
    s += 1
    sleep 1000

def on_forever():
    pass
basic.forever(on_forever)
