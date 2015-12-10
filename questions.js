"use strict";

var selectElementsStartingWithA = function(array) {
  function startingWithA(word) {
    return word.charAt(0) === 'a';
 }
  return array.filter(startingWithA);
};

var selectElementsStartingWithVowel = function(array) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  function startingWithVowel(word) {
    var firstLetter = word.charAt(0);
    return vowels.indexOf(firstLetter) !== -1;
  }
  return array.filter(startingWithVowel);
};

var removeNullElements = function(array) {
  function removeNull(element) {
    return element !== null;
  }
  return array.filter(removeNull);
};

var removeNullAndFalseElements = function(array) {
  function removeNullandFalse(element) {
    return element !== null && element !== false
  }
  return array.filter(removeNullandFalse);
};

var reverseWordsInArray = function(array) {
  function reverse(word) {
    return word.split('').reverse().join('');
  }
  return array.map(reverse);
};

var everyPossiblePair = function(array) {
  var pairArray = [];
  var sortArray = array.slice().reverse();
  for (var pair1 of array) {
    sortArray.pop();
    for (var pair2 of sortArray) {
      pairArray.push([pair1, pair2].sort());
    }
  }
  return pairArray.sort();
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3, 8);
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  function lastLetter(word1, word2) {
    return word1.slice(-1) >= word2.slice(-1);
  }
  return array.sort(lastLetter);
};

var getFirstHalf = function(string) {
  return string.slice(0, 3);
};

var makeNegative = function(number) {
  return - Math.abs(number);
};

var numberOfPalindromes = function(array) {
  function matchedPalindromes(word) {
    if (word[0] === word.slice(-1)) {
      return word;
    }
  }
  return array.filter(matchedPalindromes).length;
};

var shortestWord = function(array) {
  function findShortest(word1, word2) {
    return word1.length < word2.length ? word1 : word2;
  }
  return array.reduce(findShortest);
};

var longestWord = function(array) {
  function findLongest(word1, word2) {
    return word1.length > word2.length ? word1 : word2;
  }
  return array.reduce(findLongest);
};

var sumNumbers = function(array) {
  for(var i = 0, sum = 0; i < array.length; sum += array[i++]);
    return sum;
};

var repeatElements = function(array) {
  return array.concat(array);
};

var stringToNumber = function(string) {
  return Number(string);
};

var calculateAverage = function(array) {
  for(var i = 0, sum = 0; i < array.length; sum += array[i++]);
    return sum / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {

}

var convertArrayToObject = function(array) {
    var obj = {};
    for(var i = 0; i < array.length; i += 2) {
      obj[array[i]] = array[i + 1];
    }
  return obj;
};

var getAllLetters = function(array) {
  var arr =  array.join('').split('').sort();
  var uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) === pos;
  });
  return uniqueArray;
};

var swapKeysAndValues = function(object) {
  var newObject = {};
  for(var key in object) {
    newObject[object[key]] = key;
  }
  return newObject;
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return string.replace(/[A-Z]/g, '');
}

var roundUp = function(number) {
  return Math.ceil(number);
};

var formatDateNicely = function(date) {
  return ('0' + date.getDate()  + "/" + '0' + (date.getMonth() + 1) + "/" + date.getFullYear());
};

var getDomainName = function(string) {
  return string.match(/^.+@(.+)\..+$/)[1];
};

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return Math.round((number - 32) / 1.8);
};

var letterPosition = function(array) {
  function letterToNumber(char) {
    return char.toLowerCase().charCodeAt(0) - 96;
  }
  return array.map(letterToNumber);
};
