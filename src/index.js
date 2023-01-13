module.exports = function toReadable (number) {
    const unitsChars = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ]

    const dozensCharsSingle = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ]

    const dozensMultiple = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    const units = parseInt(number.toString()[number.toString().length - 1])
    const dozens = parseInt(number.toString()[number.toString().length - 2])
    const hundreds = parseInt(number.toString()[number.toString().length - 3])

    function humanizeUnits(unit){
        if (dozens === 1) return '';
        if (dozens >= 2 && unit === 0) return '';
        if (dozens === 0 && unit !== 0) return `${unitsChars[unit]}`
        if (dozens === 0) return '';
        return unitsChars[unit];
    }

    function humanizeDozens(dozen) {
        if (dozen === 1) return ` ${dozensCharsSingle[units]}`;
        else if (dozen >= 2) return ` ${dozensMultiple[dozen - 2]}`;
        return '';
    }

    function humanizeHundreds(hundred){
        if (hundred) return `${unitsChars[hundred]} hundred`;
        return '';
    }

    return `${humanizeHundreds(hundreds)}${humanizeDozens(dozens)} ${humanizeUnits(units)}`.trim();
}
