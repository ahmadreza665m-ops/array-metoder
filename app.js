const frukter =  ["äpple","päron","citron"]

frukter[2]= "vattenmelon" 
console.log(frukter)
console.log(frukter.length)



const tal = [10,20,30,40]

tal.pop()
console.log(tal)

const bilar = ["bmw","audi","tesla"]
bilar.push("mercedes")
console.log(bilar)
bilar.pop()


const frukterna = ["äpple","banan","päron","kiwi"]
const result = frukterna.slice(1,3)
console.log(result)


const bilarna= ["bmw","volvo", "audi", "mercedes"]
const resultat= bilarna.slice(1,4)
console.log(resultat)


const delar = ["kamrem","vattenpump","rem","sensor","mobil"]
const svar = delar.slice(1,4)
console.log(svar)

const bilar = ["bmw","mini","audi","mercedes","tesla","kia","dacia"]
bilar.splice(1,5)
console.log(bilar)


const frukter = ["päron","banan","kiwi","citron","gurka"]
frukter.splice(2,3)
console.log(frukter)


const nummer = [10,20,40,45]
nummer.forEach((tal) => {
    console.log(tal)
}


)

const nummer = [10,30,45,55,84,83]
nummer.forEach(tal => console.log(tal))
 

const frukter = ["päron","banan","kiwi","äpple"]
frukter.forEach ((frukt)=>{
    console.log(frukt)
}

)

const frukter = ["päron","banan","kiwi","öpple",]
frukter.forEach(frukt => console.log(frukt))


const nummer =[20,30,45,59,80]
const result = nummer.map(tal => tal+2)
console.log(result)


const nummer =[20,30,45,24,23]
const result = nummer.map((tal)=>{
    return tal+1
})
console.log(result)

