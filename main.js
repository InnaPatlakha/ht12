let numOrStr = prompt('input number or string');

switch(true) {
  case numOrStr === null:
    console.log('Cancelled');
    break;
  case numOrStr.trim() === '':
    console.log('Empty String');
    break;
  case isNaN (+numOrStr):
    console.log('Not a number');
    break;
  default:
    console.log('OK!');
    break;
}