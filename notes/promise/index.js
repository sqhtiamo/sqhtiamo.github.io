var getInfo = function (info) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(info)
        }, 3000)
    })
}


getInfo('test').then(function (info) {
    console.log(info)
})
