export class Kata {
  static spinWords(words: string): string {
    const str = words.split(" ")
    const arr: string[] = []
    str.forEach(el =>
      el.length >= 5 ? arr.push(el.split("").reverse().join("")) : arr.push(el)
    )
    return arr.join(" ")
  }
}

console.log(Kata.spinWords("Hey fellow warriors"))
