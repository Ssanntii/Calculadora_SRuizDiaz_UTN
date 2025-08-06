import {input} from "./utils.mjs"
import { Calculadora } from "./class.mjs"

while (true) {
    console.clear()
    console.log("====================================")
    console.log("\tMENÚ PRINCIPAL")
    console.log("1. Sumar")
    console.log("2. Restar")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Resto")
    console.log("6. Potencia")
    console.log("7. Salir")
    console.log("====================================")
    const operacion = await input("Ingrese la operación: ")
        
    const calculadora = new Calculadora()
    
    try {
        let resultado,a,b
        if (operacion === "7") {
            console.clear()
            console.log("Saliendo del programa...")
            await input("")
            break
        }
        if (!["1","2","3","4","5","6"].includes(operacion)) {
            console.clear()
            console.log("Operación no válida")
            await input("")
        }
        if(operacion === "1") {
             a = parseFloat(await input("Ingrese el primer número: "))
             b = parseFloat(await input("Ingrese el segundo número: "))
            resultado = calculadora.sumar(a, b)

        }
        if(operacion === "2") {
             a = parseFloat(await input("Ingrese el primer número: "))
             b = parseFloat(await input("Ingrese el segundo número: "))
            resultado = calculadora.restar(a, b)
        }
        if(operacion === "3") {
             a = parseFloat(await input("Ingrese el primer número: "))
             b = parseFloat(await input("Ingrese el segundo número: "))
            resultado = calculadora.multiplicar(a, b)
        }
        if(operacion === "4") {
             a = parseFloat(await input("Ingrese el primer número: "))
             b = parseFloat(await input("Ingrese el segundo número: "))
            resultado = calculadora.dividir(a, b)
        }
        if(operacion === "5") {
             a = parseFloat(await input("Ingrese el primer número: "))
             b = parseFloat(await input("Ingrese el segundo número: "))
            resultado = calculadora.resto(a, b)
        }
        if(operacion === "6") {
             a = parseFloat(await input("Ingrese la base: "))
             b = parseFloat(await input("Ingrese el exponente: "))
            resultado = calculadora.potencia(a, b)
        }
        console.log(`El resultado de ${operacion} entre ${a} y ${b} es: ${resultado}`)
        await input("")
    }catch (error) {
        console.error(error.message)
        await input("Presione Enter para continuar...")
    }
}
