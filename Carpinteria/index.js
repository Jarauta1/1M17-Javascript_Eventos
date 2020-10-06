let brocha = 0
let imgBrocha = ""
let llave = 0
let imgLlave = ""
let martillo = 0
let imgMartillo = ""
let tronco = 0
let imgTronco = ""

document.getElementById("cestaBrocha").innerHTML = `Brocha: ${brocha}.`
document.getElementById("cestaLlave").innerHTML = `Llave: ${llave}.`
document.getElementById("cestaMartillo").innerHTML = `Martillo: ${martillo}.`
document.getElementById("cestaTronco").innerHTML = `Tronco: ${tronco}.`

function addBrocha() {
    brocha++
    imgBrocha = ""
    document.getElementById("cestaBrocha").innerHTML = `Brocha: ${brocha}.`
    for (let i = 1; i <= brocha; i++) {
        if (brocha != 0) {
            imgBrocha += `<img src="Copia de brocha.svg" alt="" width="50" height="50"/>`
            document.getElementById("cestaBrochaImg").innerHTML = imgBrocha
        } else {
            document.getElementById("cestaBrochaImg").innerHTML = ""
        }
    }
}
function restBrocha() {
    brocha--
    imgBrocha = ""
    document.getElementById("cestaBrocha").innerHTML = `Brocha: ${brocha}.`
    if (brocha > 0) {
        for (let i = 1; i <= brocha; i++) {
            imgBrocha += `<img src="Copia de brocha.svg" alt="" width="50" height="50"/>`
            document.getElementById("cestaBrochaImg").innerHTML = imgBrocha
        }
    } else {
        document.getElementById("cestaBrochaImg").innerHTML = ""
        brocha = 0
        document.getElementById("cestaBrocha").innerHTML = `Brocha: ${brocha}.`
    }
}

function addLlave() {
    llave++
    imgLlave = ""
    document.getElementById("cestaLlave").innerHTML = `Llave: ${llave}.`
    for (let i = 1; i <= llave; i++) {
        if (llave != 0) {
            imgLlave += `<img src="Copia de llave.svg" alt="" width="50" height="50"/>`
            document.getElementById("cestaLlaveImg").innerHTML = imgLlave
        } else {
            document.getElementById("cestaLlaveImg").innerHTML = ""
        }
    }
}
function restLlave() {
    llave--
    imgLlave = ""
    document.getElementById("cestaLlave").innerHTML = `Llave: ${llave}.`
    if (llave > 0) {
        for (let i = 1; i <= llave; i++) {
            imgLlave += `<img src="Copia de llave.svg" alt="" width="50" height="50"/>`
            document.getElementById("cestaLlaveImg").innerHTML = imgLlave
        }
    } else {
        document.getElementById("cestaLlaveImg").innerHTML = ""
        llave = 0
        document.getElementById("cestaLlave").innerHTML = `Llave: ${llave}.`
    }
}

function addMartillo() {
    martillo++
    imgMartillo = ""
    document.getElementById("cestaMartillo").innerHTML = `Martillo: ${martillo}.`
    for (let i = 1; i <= martillo; i++) {
        if (martillo != 0) {
            imgMartillo += `<img src="Copia de martillo.svg" alt="" width="50" height="50"/>`
            document.getElementById("cestaMartilloImg").innerHTML = imgMartillo
        } else {
            document.getElementById("cestaMartilloImg").innerHTML = ""
        }
    }
}
function restMartillo() {
    martillo--
    imgMartillo = ""
    document.getElementById("cestaMartillo").innerHTML = `Martillo: ${martillo}.`
    if (martillo > 0) {
        for (let i = 1; i <= martillo; i++) {
            imgMartillo += `<img src="Copia de martillo.svg" alt="" width="50" height="50"/>`
            document.getElementById("cestaMartilloImg").innerHTML = imgMartillo
        }
    } else {
        document.getElementById("cestaMartilloImg").innerHTML = ""
        martillo = 0
        document.getElementById("cestaMartillo").innerHTML = `Martillo: ${martillo}.`
    }
}

function addTronco() {
    tronco++
    imgTronco = ""
    document.getElementById("cestaTronco").innerHTML = `Tronco: ${tronco}.`
    for (let i = 1; i <= tronco; i++) {
        if (tronco != 0) {
            imgTronco += `<img src="Copia de tronco.svg" alt="" width="50" height="50"/>`
            document.getElementById("cestaTroncoImg").innerHTML = imgTronco
        } else {
            document.getElementById("cestaTroncoImg").innerHTML = ""
        }
    }
}
function restTronco() {
    tronco--
    imgTronco = ""
    document.getElementById("cestaTronco").innerHTML = `Tronco: ${tronco}.`
    if (tronco > 0) {
        for (let i = 1; i <= tronco; i++) {
            imgTronco += `<img src="Copia de tronco.svg" alt="" width="50" height="50"/>`
            document.getElementById("cestaTroncoImg").innerHTML = imgTronco
        }
    } else {
        document.getElementById("cestaTroncoImg").innerHTML = ""
        tronco = 0
        document.getElementById("cestaTronco").innerHTML = `Tronco: ${tronco}.`
    }
}
