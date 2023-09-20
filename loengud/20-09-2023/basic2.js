
// anonüümne funktsioon, mis kohe kutsub end välja
(() => {
    console.log('hi')
})()

// muuta string intiks
let actuallyANumber = '1'
// lollikindel variant on parseInt
console.log(parseInt(actuallyANumber))
console.log(+actuallyANumber)

;(async () => {
    const myPromise = () =>
    new Promise(resolve =>
        setTimeout(() => resolve('myPromise() resolved in 100ms'), 100)
        )
    const myPromise2 = new Promise(resolve =>
        setTimeout(() => resolve('myPromise2 resolved in 200ms'), 200)
        )
    
        const asyncAwait = async () => {
            const myPromiseResponse = await myPromise()
            const myPromiseResponse2 = await myPromise2

            return { myPromiseResponse, myPromiseResponse2}
        }
        
        console.log(await asyncAwait())
})()

    const massiiv = [1, 2, 3, 4, 47]
    let a = massiiv[4]
    console.log(a)

const raimo = {
    name: 'Raimo',
    school: 'TLU',
    'other stuff': 'yo'
}

console.log(raimo.name + ' ' + raimo.school)
console.log(raimo['name'] + ' ' + raimo['school'])
console.log(raimo['other stuff'])

const myObject = {
    city: 1,
    place: 4,
    name: "fgd"
}
// võtab objektist city ja place'i ja paneb nende väärtused eraldi muutujatesse
const deconstruct = () => {
    const {city, place} = myObject

    return {city, place}
}

console.log(deconstruct())