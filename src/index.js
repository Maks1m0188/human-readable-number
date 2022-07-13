module.exports = function toReadable (number) {
  const ones=['','one','two','three','four','five','six','seven','eight','nine'];
  const tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

  function addNumber(number) {
    if (number == 0) {
      return 'zero';
    }
    else {
      return addMillions(number);
    }
  }
  
  function addMillions(number) {
    if (number >= 1000000) {
      return addMillions(Math.floor(number/1000000)) + ' ' + 'million' + ' ' + addThousands(number%1000000);
    }
    else {
      return addThousands(number);
    }
  }

  function addThousands(number) {
    if (number >= 1000) {
      return addThousands(Math.floor(number/1000)) + ' ' + 'thousand' + ' ' + addHundreds(number%1000);
    }
    else {
      return addHundreds(number);
    }
  }

  function addHundreds(number) {
    if (number >= 100) {
      return addTens(number%100) !== '' ? ones[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + addTens(number%100) : ones[Math.floor(number/100)] + ' ' + 'hundred';
    }
    else {
      return addTens(number);
    }
  }

  function addTens(number) {
    if (number < 10) {
      return ones[number];
    }
    else if (number >= 10 && number < 20) {
      return teens[number-10];
    }
    else {
      return ones[number%10] !== '' ? tens[Math.floor(number/10)] + ' ' + ones[number%10] : tens[Math.floor(number/10)];
    }
  }
  
  return addNumber(number);
}
