function feetToMile(feet) {
  if (typeof feet == "number" && feet > 0) {
    const mile = feet * 0.000189394;
    console.log("The mile is: ", mile);
  } else {
    console.log("input not valid!");
  }
}

feetToMile(5280);

function woodCalculator(chair, table, khat) {
  const aChair = 3;
  const aTable = 5;
  const aKhat = 10;

  if (
    typeof chair == "number" &&
    chair >= 0 &&
    typeof table == "number" &&
    table >= 0 &&
    typeof khat == "number" &&
    khat >= 0
  ) {
    total = chair * aChair + table * aTable + khat * aKhat;
    console.log("Your required wood feet is: ", total);
  }
}

woodCalculator(1, 0, 1);

function brickCalculator(input) {
  if (typeof input == "number" && input > 0) {
    var result = 0;
    if (input < 10) {
      result = input * 1000;
    } else {
      var extra = input - 10;
      result = 10 * 1000;
      result += extra * 1200;
    }

    console.log("Your required brick is: ", result);
  } else {
    console.log("input not valid!");
  }
}

brickCalculator(12);

function tinyFriend(friends = Array) {
  let tinyLength = 99999999999;
  let tinyName = "";

  if (friends) {
    for (i = 0; i < friends.length; i++) {
      var lengthOfarrayIndex = friends[i].length;

      if (tinyLength > lengthOfarrayIndex) {
        tinyLength = friends[i].length;
        tinyName = friends[i];
      }
    }
  } else {
    console.log("input not valid!");
  }

  console.log("You tiny friend name is: ", tinyName);
}

friends = ["rohim", "koim", "apu", "abul", "kljsdaklfjlksjda"];
tinyFriend(friends);
