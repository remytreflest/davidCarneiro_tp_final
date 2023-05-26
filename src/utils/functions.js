export default function addDots(nStr) {
    nStr += ''
    const x = nStr.split('.')
    let x1 = x[0]
    let x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2') // changed comma to dot here
    }
    return x1 + x2
}
