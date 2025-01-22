function randomNumber(num) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    let i=0
    while (i>0) {
        if (num === randomNumber) {
            document.writeln(`${randomNumber}=${num} Yes! number is match.`)
        }
        else {
            document.writeln(`${randomNumber}=${num} Yes! number is match.`)
        }
      i++
    }
}
let number = Number(prompt("Guess the number:"))
randomNumber(number)