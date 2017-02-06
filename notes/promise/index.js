var getInfo = function (info) {
    return new Promise(function (resolve, reject) {
        reject(111)
        setTimeout(function () {
            console.log(resolve)
            resolve(info)
        }, 3000)
    })
}


getInfo('test').then(function (info) {
    console.log(info)
}, null).catch(function (err) {
    console.log(2)
    console.log(err)
})
