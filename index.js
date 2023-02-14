const numOfRampsBelow = (num) => {
  let counter = 0
  for (let i=0; i < num; i++) {
    let numbers = i.toString().split("").map(Number)
    let isRamp = true
    for (let j=0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        isRamp = false
    }
  }
    if (isRamp) {
      counter++
    }
  }
  return console.log(counter)
}

numOfRampsBelow(123)