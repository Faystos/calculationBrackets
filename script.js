var brackets = ')(((())))';

var calculationBrackets = function () {

  var bracketsArr = brackets.split('');
  var bracketsA = bracketsArr.filter(function(value){
    return  value === '(';
  });

  var bracketsB = bracketsArr.filter(function(value){
    return  value === ')';
  });

  if (bracketsA.length === bracketsB.length) {
    return console.log('Все верно');
  }
    return console.log('Ошибка, не хватает скобок');

};

calculationBrackets();
