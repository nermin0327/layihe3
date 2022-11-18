const btnwrapper = document.querySelector('btnwrapper')
const right = document.querySelector('right')
const left = document.querySelector('left')
const rub1 = document.getElementById("rub1")
const rub2 = document.getElementById("rub2")
const usd1 = document.getElementById("usd1")
const usd2 = document.getElementById("usd2")
const eur1 = document.getElementById("eur1")
const eur2 = document.getElementById("eur2")
const gbp1 = document.getElementById("gbp1")
const gbp2 = document.getElementById("gbp2")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let show1 = document.querySelector("#show1")
let show2 = document.querySelector("#show2")

rub1.addEventListener('click', changeActive)
usd1.addEventListener('click', changeActive)
eur1.addEventListener('click', changeActive)
gbp1.addEventListener('click', changeActive)

rub2.addEventListener('click', changeActive)
usd2.addEventListener('click', changeActive)
eur2.addEventListener('click', changeActive)
gbp2.addEventListener('click', changeActive)





function changeActive(e) {

    console.log("wef")

    if (e.target.className === "btn") {
        const valyutalar = [...e.target.parentElement.children]
        valyutalar.forEach((item) => {
            if (item.classList.contains("active")) {
                item.classList.remove("active")
            }
        })

        e.target.classList.add("active")

    }


    // // RUB
    // if (rub1.classList.contains("active") && rub2.classList.contains("active")) {

    //     show1.innerText = `1 RUB = 1 RUB`
    //     input2.value = input1.value
    //     show2.innerText = `1 RUB = 1 RUB`

    // }

    // if (rub1.classList.contains("active") && usd2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 RUB = ${data.rates.USD} USD`
    //             input2.value = (input1.value * data.rates.USD).toFixed(3)
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    //     fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
    //         .then(res => res.json())
    //         .then((data) => {
    //             input2.innerText = `1 USD = ${data.rates.RUB} RUB`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)

    // })


    // if (rub1.classList.contains("active") && eur2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 RUB = ${data.rates.EUR} EUR`
    //             input2.value = (input1.value * data.rates.EUR).toFixed(3)

    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //          })
    //     fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 EUR = ${data.rates.RUB} RUB`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    // })



    // if (rub1.classList.contains("active") && gbp2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 RUB = ${data.rates.GBP} GBP`
    //             input2.value = (input1.value * data.rates.GBP).toFixed(3)

    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //          })
    //     fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 GBP = ${data.rates.RUB} RUB`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    // })

    // // USD
    // if (usd1.classList.contains("active") && rub2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 USD = ${data.rates.RUB} RUB`
    //             input2.value = (input1.value * data.rates.RUB).toFixed(3)

    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })

    //     fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 RUB = ${data.rates.USD} USD`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    // }
    // if (usd1.classList.contains("active") && gbp2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 USD = ${data.rates.GBP} GBP`
    //             input2.value = (input1.value * data.rates.GBP).toFixed(3)

    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    //     fetch('https://api.exchangerate.host/latest?base=GBP&symbols=USD')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 GBP = ${data.rates.USD} USD`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    // }
    // if (usd1.classList.contains("active") && eur2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 USD = ${data.rates.EUR} EUR`
    //             input2.value = (input1.value * data.rates.EUR).toFixed(3)

    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    //     fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 EUR = ${data.rates.USD} USD`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    // }
    // if (usd1.classList.contains("active") && usd2.classList.contains("active")) {

    //     show1.innerText = `1 USD = 1 USD`
    //     input2.value = input1.value
    //     show2.innerText = `1 USD = 1 USD`

    // }

    // // EUR
    // if (eur1.classList.contains("active") && eur2.classList.contains("active")) {

    //     show1.innerText = `1 EUR = 1 EUR`
    //     input2.value = input1.value
    //     show2.innerText = `1 EUR = 1 EUR`

    // }

    // if (eur1.classList.contains("active") && rub2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 EUR = ${data.rates.RUB} RUB`
    //             input2.value = (input1.value * data.rates.RUB).toFixed(3)
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    //     fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 RUB = ${data.rates.EUR} EUR`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    // }
    // if (eur1.classList.contains("active") && usd2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 EUR = ${data.rates.USD} USD`
    //             input2.value = (input1.value * data.rates.USD).toFixed(3)
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    //     fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 USD = ${data.rates.EUR} EUR`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    // }
    // if (eur1.classList.contains("active") && gbp2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 EUR = ${data.rates.GBP} GBP`
    //             input2.value = (input1.value * data.rates.GBP).toFixed(3)
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    //     fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 GBP = ${data.rates.EUR} EUR`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //          })
    // }

    // // GBP
    // if (gbp1.classList.contains("active") && gbp2.classList.contains("active")) {

    //     show1.innerText = `1 GBP = 1 GBP`
    //     input2.value = input1.value
    //     show2.innerText = `1 GBP = 1 GBP`

    // }
    // if (gbp1.classList.contains("active") && rub2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 GBP = ${data.rates.RUB} RUB`
    //             input2.value = (input1.value * data.rates.RUB).toFixed(3)
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    //     fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 RUB = ${data.rates.GBP} GBP`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    // } if (gbp1.classList.contains("active") && usd2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=GBP&symbols=USD')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 GBP = ${data.rates.USD} USD`
    //             input2.value = (input1.value * data.rates.USD).toFixed(3)
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })
    //     fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 USD = ${data.rates.GBP} GBP`
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })        
    
    // }
    // if (gbp1.classList.contains("active") && eur2.classList.contains("active")) {
    //     fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
    //         .then(res => res.json())
    //         .then((data) => {
    //             show1.innerText = `1 GBP = ${data.rates.EUR} EUR`
    //             input2.value = (input1.value * data.rates.EUR).toFixed(3)
    //         })
    //         .catch((error)=>{
    //             error = "failed to fetch"
    //             console.log(error);
    //             alert(error)
    //         })

    //     fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             show2.innerText = `1 EUR = ${data.rates.GBP} GBP`
    //         })
            // .catch((error)=>{
            //     error = "failed to fetch"
            //     console.log(error)
            //     alert(error)
            // })
        
    // }
       // RUB
    if (rub1.classList.contains("active") && rub2.classList.contains("active")) {

        show1.innerText = `1 RUB = 1 RUB`
        input2.value = input1.value
        show2.innerText = `1 RUB = 1 RUB`

    }

    if (rub1.classList.contains("active") && usd2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 RUB = ${data.rates.USD} USD`
                input2.value = (input1.value * data.rates.USD).toFixed(3)

            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
            
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 USD = ${data.rates.RUB} RUB`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })


    }


    if (rub1.classList.contains("active") && eur2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 RUB = ${data.rates.EUR} EUR`
                input2.value = (input1.value * data.rates.EUR).toFixed(3)

            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
            fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 EUR = ${data.rates.RUB} RUB`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })

    }



    if (rub1.classList.contains("active") && gbp2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 RUB = ${data.rates.GBP} GBP`
                input2.value = (input1.value * data.rates.GBP).toFixed(3)

            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 GBP = ${data.rates.RUB} RUB`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }

    // USD
    if (usd1.classList.contains("active") && rub2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 USD = ${data.rates.RUB} RUB`
                input2.value = (input1.value * data.rates.RUB).toFixed(3)

            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                p2.innerText = `1 RUB = ${data.rates.USD} USD`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }
    if (usd1.classList.contains("active") && gbp2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 USD = ${data.rates.GBP} GBP`
                input2.value = (input1.value * data.rates.GBP).toFixed(3)

            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 GBP = ${data.rates.USD} USD`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }
    if (usd1.classList.contains("active") && eur2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 USD = ${data.rates.EUR} EUR`
                input2.value = (input1.value * data.rates.EUR).toFixed(3)

            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 EUR = ${data.rates.USD} USD`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }
    if (usd1.classList.contains("active") && usd2.classList.contains("active")) {

        show1.innerText = `1 USD = 1 USD`
        input2.value = input1.value
        show2.innerText = `1 USD = 1 USD`

    }

    // EUR
    if (eur1.classList.contains("active") && eur2.classList.contains("active")) {

        show1.innerText = `1 EUR = 1 EUR`
        input2.value = input1.value
        show2.innerText = `1 EUR = 1 EUR`

    }

    if (eur1.classList.contains("active") && rub2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 EUR = ${data.rates.RUB} RUB`
                input2.value = (input1.value * data.rates.RUB).toFixed(3)
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 RUB = ${data.rates.EUR} EUR`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }
    if (eur1.classList.contains("active") && usd2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 EUR = ${data.rates.USD} USD`
                input2.value = (input1.value * data.rates.USD).toFixed(3)
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 USD = ${data.rates.EUR} EUR`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }
    if (eur1.classList.contains("active") && gbp2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 EUR = ${data.rates.GBP} GBP`
                input2.value = (input1.value * data.rates.GBP).toFixed(3)
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 GBP = ${data.rates.EUR} EUR`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }

    // GBP
    if (gbp1.classList.contains("active") && gbp2.classList.contains("active")) {

        show1.innerText = `1 GBP = 1 GBP`
        input2.value = input1.value
        show2.innerText = `1 GBP = 1 GBP`

    }
    if (gbp1.classList.contains("active") && rub2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=RUB')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 GBP = ${data.rates.RUB} RUB`
                input2.value = (input1.value * data.rates.RUB).toFixed(3)
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=RUB&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 RUB = ${data.rates.GBP} GBP`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    } if (gbp1.classList.contains("active") && usd2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=USD')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 GBP = ${data.rates.USD} USD`
                input2.value = (input1.value * data.rates.USD).toFixed(3)
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=USD&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 USD = ${data.rates.GBP} GBP`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }
    if (gbp1.classList.contains("active") && eur2.classList.contains("active")) {
        fetch('https://api.exchangerate.host/latest?base=GBP&symbols=EUR')
            .then(res => res.json())
            .then((data) => {
                show1.innerText = `1 GBP = ${data.rates.EUR} EUR`
                input2.value = (input1.value * data.rates.EUR).toFixed(3)
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols=GBP')
            .then(res => res.json())
            .then((data) => {
                show2.innerText = `1 EUR = ${data.rates.GBP} GBP`
            })
            .catch((error)=>{
                error = "failed to fetch"
                console.log(error)
                alert(error)
            })
    }

}