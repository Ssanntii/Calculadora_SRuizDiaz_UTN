export class Calculadora {
  constructor() {
    this.resultado = 0
  }

  sumar(a, b) {
    this.resultado = a + b
    return this.resultado
  }

  restar(a, b) {
    this.resultado = a - b
    return this.resultado
  }

  multiplicar(a, b) {
    this.resultado = a * b
    return this.resultado
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por 0.")
    }
    this.resultado = a / b
    return this.resultado
  }

  resto(a, b) {
    if (b === 0) {
      throw new Error("No se puede calcular el resto con divisor 0.")
    }
    this.resultado = a % b
    return this.resultado
  }

  potencia(a, b) {
    this.resultado = Math.pow(a, b)
    return this.resultado
  }
}