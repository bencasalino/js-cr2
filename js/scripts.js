var wordReplace = function(userString, userFind, userReplace) {
//debugger;

    var userStringLower = userString.toLowerCase();
    var userFind = userFind.toLowerCase();

  var arrayOfUserStringLower = userStringLower.split(" ");
  var arrayOfUserString = userString.split(" ");
  for (var i = 0; i < arrayOfUserString.length; i++) {
    if (arrayOfUserStringLower[i] === userFind) {
      arrayOfUserString[i] = userReplace;
    }
  }

// if result string is equal to user string return no match, othersise return resultstring
  var resultString = arrayOfUserString.join(" ");
  if (resultString === userString) {
    return "no match";
  } else {
    return resultString;
  }
};
