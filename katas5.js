// implemente aqui as funções de teste.

const reverseString = (string)=>{
    const texto = string.split('')
    return texto.reverse().join((''))
}

const testReverseString1 = () =>{
    const resultado = reverseString('Testando')
    const esperado = 'odnatseT'
    console.assert(resultado === esperado,`esperado ${esperado}. obtido ${resultado}`)

}
const testReverseString2 = () =>{
    const resultado = reverseString('Suco de Abacaxi')
    const esperado = 'ixacabA ed ocuS'
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)

}

const reverseSentence =(string) =>{
    const frase = string.split(' ')
    return frase.reverse().join(' ')
}

const testReverseSentence1 = () =>{

    const resultado = reverseSentence('testando erros')
    const esperado = 'erros testando'
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const testReverseSentence2 =() =>{
    const resultado = reverseSentence('tomando suco de abacaxi')
    const esperado = 'abacaxi de suco tomando'
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const minimumValue = (arr) =>{
    const numeros = arr
    return Math.min(...numeros)
}

const testMinimumValue1 = () =>{
    const resultado = minimumValue([0,1.3,2,7.7,5,4,-1,3,-4])
    const esperado = -4
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)

}

const testMinimumValue2 = () =>{
    const resultado = minimumValue([-1,-35.3,7,10,15,22,-5.7])
    const esperado = -35.3
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const maximumValue = (arr) =>{
    const numeros = arr
    return Math.max(...numeros)
}

const testMaximumValue1 = () =>{
    const resultado = maximumValue([0,1.3,2,7.7,5,4,-1,3,-4])
    const esperado = 7.7
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const testMaximumValue2 = () =>{
    const resultado = maximumValue([-1,-35.3,7,10,15,22,-5.7])
    const esperado = 22
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const calculateRemainder =(numero, divisor) =>{
    const resto = numero%divisor
    return resto
}

const testCalculateRemainder1 = () =>{
    const resultado = calculateRemainder(4,2)
    const esperado = 0
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const testCalculateRemainder2 = () =>{
    const resultado = calculateRemainder(3,2)
    const esperado = 1
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const distinctValues = (arr) =>{
    const result = []
    arr.forEach(item => {
        if(result.indexOf(item)===-1){
            result.push(item)
        }
    });
    return result
}

const testDistinctValues1 = () =>{
    const resultado = distinctValues([1,3,5,3,7,3,1,1,5])
    const esperado = [1,3,5,7]
    console.assert(resultado.toString === esperado.toString, `esperado ${esperado}, obtido ${resultado}`)
}

const testDistinctValues2 = () =>{
    const resultado = distinctValues([4,8,2,3,4,7,8,9,2,1,4,78,9,0,1,56,47,6,5,7])
    const esperado = [4,8,2,3,7,9,1,78,0,56,47,6,5]
    console.assert(resultado.toString === esperado.toString, `esperado ${esperado}, obtido ${resultado}`)

}

const countValues = (arr) =>{
    const contagem = {}
    let resultado = ''
    arr.forEach(item =>{
        if(contagem[item]===undefined){
            contagem[item] = 1
        }else {
            contagem[item] += 1
        }
    })
    for (const keys in contagem){
        resultado += `${keys}(${contagem[keys]}) `
    }
    return resultado.trim()
}

const testCountValues1 = ()=>{
    const resultado = countValues([1,3,5,3,7,3,1,1,5])
    const esperado = '1(3) 3(3) 5(2) 7(1)'
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const testCountValues2 = () =>{
    const resultado = countValues([4,8,2,3,4,7,8,9,2,1,4,78,9,0,1,56,47,6,5,7])
    const esperado = '0(1) 1(2) 2(2) 3(1) 4(3) 5(1) 6(1) 7(2) 8(2) 9(2) 47(1) 56(1) 78(1)'
    console.assert(resultado === esperado, `esperado ${esperado}, obtido ${resultado}`)
}

const evaluateExpression = (expressao,objNumeros) =>{
    const expressaoSplited = expressao.split('').filter(item => item !== ' ')

    const conta = expressaoSplited.map(item=>{

        if(objNumeros[item]!==undefined){
            return objNumeros[item]
        }else{
            return item
        }
    })
    
    let contagem = conta[0]
    conta.forEach((item,index) =>{
        if(typeof item === 'string'){
            if (item === '+'){
                contagem+=conta[index+1]
            }if (item === '-'){
                contagem-=conta[index+1]
            }
            if (item === '*'){
                contagem*=conta[index+1]
            }
            if (item === '/'){
                contagem/=conta[index+1]
            }
        }
    })
    return  Math.round(contagem)
}
function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testEvaluateExpression2() {
    let result = evaluateExpression("b + b + c- a *j - d", {a: 1, b: 7, c: 3, d: 14, j:10});
    let expected = 146
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testEvaluateExpression3() {
    let result = evaluateExpression("a / b * c - d + y/c +a-j", {a: 1, b: 7, c: 3, d: 14, y:12, j:9});
    let expected = -9
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
