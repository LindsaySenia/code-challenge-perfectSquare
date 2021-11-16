const nextSquare = (num) => {
    let squareRoot = Math.sqrt(num);
    if (Number.isInteger(squareRoot)) {
      let nextSqrt = squareRoot + 1
      nextSqrt = nextSqrt * nextSqrt
      return nextSqrt
      } else {
        return -1
      }
    }
  
    console.log(nextSquare(25))
    console.log(nextSquare(30))
    console.log(nextSquare(289))