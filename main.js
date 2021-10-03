// #1 xify

function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
      output = output + 'x';
    }
    return output;
  }

  console.log(xify('hello'));
  console.log(xify('hi there'));

// #2 yellingChars

function yellingChars(str) {
    const ar = str.split('').join('!')

    return ar + '!'
  }
const test = 'testing'

console.log(yellingChars(test))


// {}{}{}{}{}{}{}{}{}{}{} #3 indexedChars

function indexedChars(str) {
    const ar = str.split('')

    for (let i = 0; i < ar.length; i++) {
        ar.join(i)
        return ar + str.length
    }
  }

const test = 'testing'

console.log(indexedChars(test))

// #4 numberedChars
function numberedChars(str) {
  let output = '';
  for (let i =0; i < str.length; i++) {
    output = output + '(' + (i+1) + ')' + str[i];
  }
  return output

}

console.log(numberedChars('hello'));

// #5 exclaim

function exclaim(str) {

    const new_str = str.replace('.', '!')
    const newer_str = new_str.replace('?', '!')
    return newer_str
}

console.log(exclaim('testing.?'))


// #6 repeatIt

function repeatIt(str, n) {
    let output = ''
    while (n > 0) {
        output += str;
        n --
    }
    return output

}

console.log(repeatIt('test', 3))

// #7 truncate

function truncate(str) {

    const output = str.substring(0, 16)
    return output

}

// #8 ciEmailify

function ciEmailify(fn, ln) {

    const email = '@codeimmersives.com'
    const per = '.'
    const output = fn + per + ln + email
    return output

}

// #9 reverse

function reverse(str) {

    let output = '';

    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }

    return output;
}

// #10 onlyVowels

function onlyVowels(str) {
    const sarray = str.split('');
    var output = '';
    const varray = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];

    for (var i = sarray.length - 1; i >= 0; i--) {

        for (var e = sarray.length - 1; e >= 0; e--){

            if (sarray[i] === varray[e]) {
                output += sarray[i];
            }
        }
    }

    return output;
}
