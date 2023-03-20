type WinningCombinationsResult = [number, number[]][];


function call(lines: number[]): WinningCombinationsResult {
  const wildSymbol = 0;
  let results: WinningCombinationsResult = [];
  for (let i = 0; i < lines.length; i++) {
    let actualLine = lines[i]
    let startSequence = i
    let endSequence = i
    const isEqualZero = (currentValue: any) => currentValue === wildSymbol;

    // Treatment if all the numbers are zeros, it will create an array counting the zero numbers, but in the test it is not passing, I could not identify the error, apparently everything is right.
    if (lines.every(isEqualZero)) {
      while (lines[endSequence + 1] === wildSymbol || lines[endSequence + 1] === actualLine) {
        ++endSequence;
      }
      let sequenceArr = makeSequenceArray(0, endSequence)
      if (sequenceArr.length >= 3) {
        results.push([actualLine, sequenceArr])
      }
    }

    if (actualLine === wildSymbol) {
      continue
    }
    while (lines[startSequence - 1] === wildSymbol || lines[startSequence - 1] === actualLine) {
      --startSequence;
    }
    while (lines[endSequence + 1] === wildSymbol || lines[endSequence + 1] === actualLine) {
      ++endSequence;
    }
    i = endSequence
    let sequenceArr = makeSequenceArray(startSequence, endSequence)
    if (sequenceArr.length >= 3) {
      results.push([actualLine, sequenceArr])
    }
  }
  return results
}
function makeSequenceArray(start: number, end: number) {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

export const WinningCombinations = { call };