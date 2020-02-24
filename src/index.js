module.exports = function reverse(n) {
    return n.toString().split('').filter(number => /\d/.test(number)).reverse().join('')
}
