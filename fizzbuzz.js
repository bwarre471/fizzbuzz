let i = 1
let k = 1
let t = 1
while(i<=100) {
    let display = true
    if(k==3) {
        process.stdout.write("Fizz")
        display = false
        k = 0
    }
    if(t==5) {
        process.stdout.write("Buzz")
        display = false
        t = 0
    }
    if(display) {
        process.stdout.write(i)
    }
    i++
    k++
    t++
    process.stdout("\n")
}
