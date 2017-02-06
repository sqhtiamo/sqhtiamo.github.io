var setT1 = function (info) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(1)
            resolve(info * 2)
        }, 1000)
    })
}

var setT2 = function (info) {
    return new Promise(function (resolve, reject) {
        reject('error')
        setTimeout(function () {
            resolve(info)
        }, 2000)
    })
}


Promise.all([setT2(1), setT1(22)]).then(function (value) {
    console.log(value)
}).catch(function (error) {
    console.log(error)
})
