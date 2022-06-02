var a = 5
var b = 5
var c = 20
function teste() {
  if ((a + b > c) & (a + c > b) & (b + c > a)) {
    if ((a === b) & (a === c)) {
      return 'TriÂngulo equilatero'
    } else if (a === b || b === c || a === c) {
      return 'Triângulo isosceles'
    } else {
      return 'triangulo escaleno'
    }
  } else {
    return 'não é um triangulo'
  }
}
console.log(teste())
