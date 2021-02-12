module.exports = function toReadable (number) {
  let arrayOfDigits = number.toString().split('').reverse();
  switch(arrayOfDigits.length) {
    case 1:
      return thirdDigit(arrayOfDigits[0]);
    case 2:
      return secondDigit(arrayOfDigits);
    case 3:
      return firstDigit(arrayOfDigits);
  }

  function thirdDigit(digit) {
    if (arrayOfDigits.length == 1 && digit == '0') {
      return 'zero';
    } else {
      switch(digit) {
        case '0':
          return '';
        case '1':
          return 'one';
        case '2':
          return 'two';
        case '3': 
          return 'three';
        case '4':
          return 'four';
        case '5': 
          return 'five';
        case '6':
          return 'six';
        case '7':
          return 'seven';
        case '8':
          return 'eight';
        case '9':
          return 'nine';
      }
    }
  }

  function secondDigit(secondArray) {
    switch (secondArray[1]) {
      case '0':
        return thirdDigit(secondArray[0]);

      case '1':
        switch(secondArray[0]) {
          case '0': 
            return 'ten';
          case '1':
            return 'eleven';
          case '2':
            return 'twelve';
          case '3':
            return 'thirteen';
          case '5':
            return 'fifteen';
          case '8':
            return 'eighteen';
        }
  
        if (secondArray[0].includes('4') || secondArray.includes('6') || secondArray[0].includes('7') || secondArray[0].includes('9')) {
  
          return thirdDigit(secondArray[0]) + 'teen';
        }
        
        case '2':
          if (secondArray[0].includes('0')) return 'twenty'
          else return 'twenty '+ thirdDigit(secondArray[0]);
        
        case '3':
          if (secondArray[0].includes('0')) return 'thirty'
          else return 'thirty ' + thirdDigit(secondArray[0]);
        
        case '4':
          if (secondArray[0].includes('0')) return 'forty'
          else return 'forty ' + thirdDigit(secondArray[0]);
        
        case '5':
          if (secondArray[0].includes('0')) return 'fifty'
          else return 'fifty ' + thirdDigit(secondArray[0]);

        case '8':
          if (secondArray[0].includes('0')) return 'eighty'
          else return 'eighty ' + thirdDigit(secondArray[0])
    }

    if (secondArray[1].includes('6') || secondArray[1].includes('7') || secondArray[1].includes('9')) {
      if (secondArray[0].includes('0')) return thirdDigit(secondArray[1]) + 'ty'
      else return thirdDigit(secondArray[1]) + 'ty ' + thirdDigit(secondArray[0]);
    }
  }

  function firstDigit(firstArray) {
    let lastTwoDigits = firstArray.slice(0, 2);
    if (firstArray[0].includes('0') && firstArray[1].includes('0')) return thirdDigit(firstArray[2]) + ' ' + 'hundred'
    else return thirdDigit(firstArray[2]) + ' ' + 'hundred' + ' ' + secondDigit(lastTwoDigits);
  }
}
