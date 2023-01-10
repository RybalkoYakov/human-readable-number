module.exports = function toReadable (number) {
    const NUMBERS_0 = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    const NUMBERS_1 = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    if (number >= 0 && number <= 19) {
        return  NUMBERS_0[number];
    } else if (number >= 20 && number <= 99) {
        const dozens = parseInt(number.toString()[0])
        const units = parseInt(number.toString()[1])
        if (units === 0) {
            return NUMBERS_1[dozens - 2]
        } else {
            return `${NUMBERS_1[dozens - 2]} ${NUMBERS_0[units]}`
        }
    } else if (number => 100 && number <= 999) {
        const hundreds = parseInt(number.toString()[0])
        const dozens = parseInt(number.toString()[1])
        const units = parseInt(number.toString()[2])


    }
}
