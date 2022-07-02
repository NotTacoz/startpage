Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

// hide addEasyTabs
$("#addEasyTabs").hide();

function getWeatherData() {
  $(document).ready(async function () {
    var city = undefined;
    await fetch("https://ipinfo.io/json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        city = myJson.city;
        if ((myJson.ip = "110.145.223.234")) {
          city = "Perth";
        }
        // console.log;
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
    $.getJSON(
      "https://api.weatherapi.com/v1/current.json?key=76aa7ac854eb413c82565451211807&q=" +
        city,
      function (data) {}
    )
      .done(function (data) {
        $("#weather").text(
          data.current.condition.text + " " + data.current.temp_c + "°C"
        );
      })
      .fail(function (data) {});
  });
}

function getStorage(item, unset) {
  return localStorage.getItem(item) ?? unset;
}

function Subject(name, start, finish) {
  this.name = name;
  this.start = start;
  this.finish = finish;
}

function hourMinuteToNumber(hour, minute, second = 0) {
  return hour * 3600 + minute * 60 + second;
}

// function to convert second into hour, minute and second array
function convertSeconds(s) {
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);
  var s = s % 60;
  return [h, m, s];
}

const timetable = [
  [], // Sunday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(8, 55)
    ),
    new Subject(
      getStorage("subMonA1", "Period 1"),
      hourMinuteToNumber(8, 55),
      hourMinuteToNumber(9, 50)
    ),
    new Subject(
      getStorage("subMonA2", "Period 2"),
      hourMinuteToNumber(9, 50),
      hourMinuteToNumber(10, 45)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 45),
      hourMinuteToNumber(11, 10)
    ),
    new Subject(
      getStorage("subMonA3", "Period 3"),
      hourMinuteToNumber(11, 10),
      hourMinuteToNumber(12, 05)
    ),
    new Subject(
      getStorage("subMonA4", "Period 4"),
      hourMinuteToNumber(12, 05),
      hourMinuteToNumber(13, 00)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(13, 00),
      hourMinuteToNumber(13, 35)
    ),
    new Subject(
      getStorage("subMonA5", "Period 5"),
      hourMinuteToNumber(13, 35),
      hourMinuteToNumber(14, 30)
    ),
    new Subject(
      getStorage("subMonA6", "Period 6"),
      hourMinuteToNumber(14, 30),
      hourMinuteToNumber(15, 25)
    ),
    new Subject("Home", hourMinuteToNumber(15, 25), hourMinuteToNumber(16, 00)),
  ], // Monday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subTueA1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subTueA2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subTueA3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      getStorage("subTueA4", "Mod Time"),
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 45)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 45),
      hourMinuteToNumber(13, 25)
    ),
    new Subject(
      getStorage("subTueA5", "Period 5"),
      hourMinuteToNumber(13, 25),
      hourMinuteToNumber(14, 20)
    ),
    new Subject(
      getStorage("subTueA6", "Period 6"),
      hourMinuteToNumber(14, 20),
      hourMinuteToNumber(15, 15)
    ),
    new Subject("Home", hourMinuteToNumber(15, 15), hourMinuteToNumber(16, 00)),
  ], // Tuesday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subWedA1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subWedA2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subWedA3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      getStorage("subWedA4", "Period 4"),
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 45)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 45),
      hourMinuteToNumber(13, 25)
    ),
    new Subject(
      getStorage("subWedA5", "Period 5"),
      hourMinuteToNumber(13, 25),
      hourMinuteToNumber(14, 20)
    ),
    new Subject(
      getStorage("subWedA6", "Period 6"),
      hourMinuteToNumber(14, 20),
      hourMinuteToNumber(15, 15)
    ),
    new Subject("Home", hourMinuteToNumber(15, 15), hourMinuteToNumber(16, 00)),
  ], // Wednesday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subThuA1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subThuA2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subThuA3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 40)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 40),
      hourMinuteToNumber(13, 20)
    ),
    new Subject(
      getStorage("subThuA5", "Period 5"),
      hourMinuteToNumber(13, 20),
      hourMinuteToNumber(14, 15)
    ),
    new Subject(
      getStorage("subThuA6", "Period 6"),
      hourMinuteToNumber(14, 15),
      hourMinuteToNumber(15, 10)
    ),
    new Subject("Home", hourMinuteToNumber(15, 10), hourMinuteToNumber(16, 00)),
  ], // Thursday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(8, 55)
    ),
    new Subject(
      getStorage("subFriA1", "Period 1"),
      hourMinuteToNumber(8, 55),
      hourMinuteToNumber(9, 50)
    ),
    new Subject(
      getStorage("subFriA2", "Period 2"),
      hourMinuteToNumber(9, 50),
      hourMinuteToNumber(10, 45)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 45),
      hourMinuteToNumber(11, 10)
    ),
    new Subject(
      getStorage("subFriA3", "Period 3"),
      hourMinuteToNumber(11, 10),
      hourMinuteToNumber(12, 05)
    ),
    new Subject(
      getStorage("subFriA4", "Period 4"),
      hourMinuteToNumber(12, 05),
      hourMinuteToNumber(13, 00)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(13, 00),
      hourMinuteToNumber(13, 35)
    ),
    new Subject(
      getStorage("subFriA5", "Period 5"),
      hourMinuteToNumber(13, 35),
      hourMinuteToNumber(14, 30)
    ),
    new Subject(
      getStorage("subFriA6", "Period 6"),
      hourMinuteToNumber(14, 30),
      hourMinuteToNumber(15, 25)
    ),
    new Subject("Home", hourMinuteToNumber(15, 25), hourMinuteToNumber(16, 00)),
  ], // Friday
  [], // Saturday

  [], // Sunday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(8, 55)
    ),
    new Subject(
      getStorage("subMonB1", "Period 1"),
      hourMinuteToNumber(8, 55),
      hourMinuteToNumber(9, 50)
    ),
    new Subject(
      getStorage("subMonB2", "Period 2"),
      hourMinuteToNumber(9, 50),
      hourMinuteToNumber(10, 45)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 45),
      hourMinuteToNumber(11, 10)
    ),
    new Subject(
      getStorage("subMonB3", "Period 3"),
      hourMinuteToNumber(11, 10),
      hourMinuteToNumber(12, 05)
    ),
    new Subject(
      getStorage("subMonB4", "Period 4"),
      hourMinuteToNumber(12, 05),
      hourMinuteToNumber(13, 00)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(13, 00),
      hourMinuteToNumber(13, 35)
    ),
    new Subject(
      getStorage("subMonB5", "Period 5"),
      hourMinuteToNumber(13, 35),
      hourMinuteToNumber(14, 30)
    ),
    new Subject(
      getStorage("subMonB6", "Period 6"),
      hourMinuteToNumber(14, 30),
      hourMinuteToNumber(15, 25)
    ),
    new Subject("Home", hourMinuteToNumber(15, 25), hourMinuteToNumber(16, 00)),
  ], // Monday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subTueB1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subTueB2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subTueB3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      getStorage("subTueB4", "Mod Time"),
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 45)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 45),
      hourMinuteToNumber(13, 25)
    ),
    new Subject(
      getStorage("subTueB5", "Period 5"),
      hourMinuteToNumber(13, 25),
      hourMinuteToNumber(14, 20)
    ),
    new Subject(
      getStorage("subTueB6", "Period 6"),
      hourMinuteToNumber(14, 20),
      hourMinuteToNumber(15, 15)
    ),
    new Subject("Home", hourMinuteToNumber(15, 15), hourMinuteToNumber(16, 00)),
  ], // Tuesday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subWedB1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subWedB2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subWedB3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      getStorage("subWedB4", "Period 4"),
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 45)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 45),
      hourMinuteToNumber(13, 25)
    ),
    new Subject(
      getStorage("subWedB5", "Period 5"),
      hourMinuteToNumber(13, 25),
      hourMinuteToNumber(14, 20)
    ),
    new Subject(
      getStorage("subWedB6", "Period 6"),
      hourMinuteToNumber(14, 20),
      hourMinuteToNumber(15, 15)
    ),
    new Subject("Home", hourMinuteToNumber(15, 15), hourMinuteToNumber(16, 00)),
  ], // Wednesday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      getStorage("subThuB1", "Period 1"),
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(9, 40)
    ),
    new Subject(
      getStorage("subThuB2", "Period 2"),
      hourMinuteToNumber(9, 40),
      hourMinuteToNumber(10, 35)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 35),
      hourMinuteToNumber(10, 55)
    ),
    new Subject(
      getStorage("subThuB3", "Period 3"),
      hourMinuteToNumber(10, 55),
      hourMinuteToNumber(11, 50)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(11, 50),
      hourMinuteToNumber(12, 40)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(12, 40),
      hourMinuteToNumber(13, 20)
    ),
    new Subject(
      getStorage("subThuB5", "Period 5"),
      hourMinuteToNumber(13, 20),
      hourMinuteToNumber(14, 15)
    ),
    new Subject(
      getStorage("subThuB6", "Period 6"),
      hourMinuteToNumber(14, 15),
      hourMinuteToNumber(15, 10)
    ),
    new Subject("Home", hourMinuteToNumber(15, 10), hourMinuteToNumber(16, 00)),
  ], // Thursday
  [
    new Subject(
      "Before School",
      hourMinuteToNumber(0, 0),
      hourMinuteToNumber(8, 45)
    ),
    new Subject(
      "Advocacy",
      hourMinuteToNumber(8, 45),
      hourMinuteToNumber(8, 55)
    ),
    new Subject(
      getStorage("subFriB1", "Period 1"),
      hourMinuteToNumber(8, 55),
      hourMinuteToNumber(9, 50)
    ),
    new Subject(
      getStorage("subFriB2", "Period 2"),
      hourMinuteToNumber(9, 50),
      hourMinuteToNumber(10, 45)
    ),
    new Subject(
      "Recess",
      hourMinuteToNumber(10, 45),
      hourMinuteToNumber(11, 10)
    ),
    new Subject(
      getStorage("subFriB3", "Period 3"),
      hourMinuteToNumber(11, 10),
      hourMinuteToNumber(12, 05)
    ),
    new Subject(
      getStorage("subFriB4", "Period 4"),
      hourMinuteToNumber(12, 05),
      hourMinuteToNumber(13, 00)
    ),
    new Subject(
      "Lunch",
      hourMinuteToNumber(13, 00),
      hourMinuteToNumber(13, 35)
    ),
    new Subject(
      getStorage("subFriB5", "Period 5"),
      hourMinuteToNumber(13, 35),
      hourMinuteToNumber(14, 30)
    ),
    new Subject(
      getStorage("subFriB6", "Period 6"),
      hourMinuteToNumber(14, 30),
      hourMinuteToNumber(15, 25)
    ),
    new Subject("Home", hourMinuteToNumber(15, 25), hourMinuteToNumber(16, 00)),
  ], // Friday
  [], // Saturday
];

function updateTimetable() {
  // hide currentSubjectParent
  currentSubjectParent.style.display = "none";
  // remember to add week 1 week 2 bullshit
  // if week 2 just add 7 to the day
  // get current time
  var currentTime = new Date();
  var nowStamp = hourMinuteToNumber(
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds()
  );

  // get current day
  var currentDay = currentTime.getDay();
  // get week of the year
  const currentWeek = currentTime.getWeek() % 2;

  var correctWeek = 1;

  // if localStorage correctWeekKey exists
  if (localStorage.getItem("correctWeekKey") !== null) {
    // set correctWeek to correctWeekKey
    correctWeek = localStorage.getItem("correctWeekKey");
  }

  // if currentWeek is on weekB

  if (currentWeek == parseInt(correctWeek)) {
    // if currentweek is even
    currentDay += 7;
  }
  // console.log(currentDay)

  // if current day is sunday (week 2) set currentDay to 7
  if (currentDay == 0) {
    currentDay = 14;
  }

  if (currentDay == 6 || currentDay == 13) {
    document.getElementById("nextSubject").innerHTML = "Nothing! 🥳";
  } else if (currentDay == 7 || currentDay == 14) {
    var tomorrow = [];
    var nextDay = currentDay + 1;
    if (nextDay >= 14) {
      nextDay = 1;
    }
    // console.log(nextDay);
    for (let j = 0; j < timetable[nextDay].length; j++) {
      const name = timetable[nextDay][j].name;
      tomorrow.push(name);
    }
    tomorrow.splice(tomorrow.indexOf("Before School"), 1);
    tomorrow.splice(tomorrow.indexOf("Recess"), 1);
    tomorrow.splice(tomorrow.indexOf("Lunch"), 1);
    tomorrow.splice(tomorrow.indexOf("Home"), 1);

    //  if two exact same subjects are next to each other, remove one and edit one so it says double
    for (let i = 0; i < tomorrow.length; i++) {
      if (tomorrow[i] == tomorrow[i + 1]) {
        tomorrow.splice(i, 1);
        tomorrow[i] = tomorrow[i] + " (double)";
      }
    }

    document.getElementById("currentSubjectParent").style.display = "none";
    document.getElementById("upNext").innerHTML = "Tomorrow, you have:";
    document.getElementById("nextSubject").innerHTML =
      "<ul>" + tomorrow.join("<br>") + "</ul>";
  } else {
    var starts = [];
    var ends = [];
    for (let j = 0; j < timetable[currentDay].length; j++) {
      // get start
      const start = timetable[currentDay][j].start;
      // append start to times
      starts.push(start);
      // get end
      const end = timetable[currentDay][j].finish;
      // append end to times
      ends.push(end);
    }
    // console.log(timetable, starts, ends);
    var closest = starts.reduce(function (prev, curr) {
      return Math.abs(curr - nowStamp) < Math.abs(prev - nowStamp)
        ? curr
        : prev;
    });
    if (closest < nowStamp) {
      closest = ends[ends.indexOf(closest) + 1];
    }
    if (ends.indexOf(closest) >= timetable[currentDay].length - 1) {
      if (currentDay != 5 && currentDay != 12) {
        var tomorrow = [];
        var nextDay = currentDay + 1;
        if (nextDay >= 14) {
          // do i even need this lmao
          nextDay = 1;
        }
        for (let j = 0; j < timetable[nextDay].length; j++) {
          const name = timetable[nextDay][j].name;
          tomorrow.push(name);
        }

        tomorrow.splice(tomorrow.indexOf("Before School"), 1);
        tomorrow.splice(tomorrow.indexOf("Recess"), 1);
        tomorrow.splice(tomorrow.indexOf("Lunch"), 1);
        tomorrow.splice(tomorrow.indexOf("Home"), 1);

        //  if two exact same subjects are next to each other, remove one and edit one so it says double
        for (let i = 0; i < tomorrow.length; i++) {
          if (tomorrow[i] == tomorrow[i + 1]) {
            tomorrow.splice(i, 1);
            tomorrow[i] = tomorrow[i] + " (double)";
          }
        }

        document.getElementById("currentSubjectParent").style.display = "none";
        document.getElementById("upNext").innerHTML = "Tomorrow, you have:";
        document.getElementById("nextSubject").innerHTML =
          "<ul>" + tomorrow.join("<br>") + "</ul>";
      } else {
        document.getElementById("upNext").innerHTML = "Nothing! 🥳";
      }
    } else {
      // set id upNext to Up next:
      document.getElementById("upNext").innerHTML = "Up next: <br>";
      // show currentSubjectParent
      document.getElementById("currentSubjectParent").style.display = "block";
      // get current Subject
      const currentSubject =
        timetable[currentDay][starts.indexOf(closest) - 1].name;
      // get current Subject start
      const currentSubjectStart = convertSeconds(
        timetable[currentDay][starts.indexOf(closest) - 1].start
      );

      document.getElementById("currentSubject").innerHTML = currentSubject;

      var subjectName = timetable[currentDay][starts.indexOf(closest)].name;
      var subjectStart = convertSeconds(closest - nowStamp);
      var subjectStartString = "";
      if (subjectStart[0] == "0") {
        subjectStartString = subjectStart[1] + "m " + subjectStart[2] + "s";
        if (subjectStart[1] == "0") {
          subjectStartString = subjectStart[2] + "s";
        }

        // console.log(subjectStart, subjectStartString);
      } else {
        subjectStartString =
          subjectStart[0] +
          "h " +
          subjectStart[1] +
          "m" +
          " " +
          subjectStart[2] +
          "s";
      }
      var allSubjects = [];
      for (let j = 0; j < timetable[currentDay].length; j++) {
        // get timetable name
        const name = timetable[currentDay][j].name;
        // append name to times
        allSubjects.push(name);
      }

      // find location of closest in allSubjects
      var closestIndex = allSubjects.indexOf(subjectName);

      // remove closestIndex and any before from allSubjects
      // console.log(closestIndex)
      allSubjects.splice(closestIndex, 1);
      allSubjects.splice(0, closestIndex);

      //  remove Before School, Recess, Lunch and Home
      if (allSubjects.indexOf("Before School") != -1) {
        allSubjects.splice(allSubjects.indexOf("Before School"), 1);
      }
      // if (allSubjects.indexOf("Recess") != -1) {
      //   allSubjects.splice(allSubjects.indexOf("Recess"), 1);
      // }
      // if (allSubjects.indexOf("Lunch") != -1) {
      //   allSubjects.splice(allSubjects.indexOf("Lunch"), 1);
      // }
      if (allSubjects.indexOf("Home") != -1) {
        allSubjects.splice(allSubjects.indexOf("Home"), 1);
      }

      //  if two exact same subjects are next to each other, remove one and edit one so it says double
      if (allSubjects.indexOf(subjectName) != -1) {
        allSubjects.splice(allSubjects.indexOf(subjectName), 1);
        subjectName = subjectName + " (double)";
      }
      for (let i = 0; i < allSubjects.length; i++) {
        if (allSubjects[i] == allSubjects[i + 1]) {
          allSubjects.splice(i, 1);
          allSubjects[i] = allSubjects[i] + " (double)";
        }
      }

      // console.log(allSubjects);

      document.getElementById("nextSubject").innerHTML =
        "<ul><li>" + subjectName + ", " + subjectStartString + "</li></ul>";

      if (allSubjects.length > 0) {
        document.getElementById("nextSubject").innerHTML +=
          "After that:" + "<ul>" + allSubjects.join("<br>") + "</ul>";
      }
    }
  }
}

// if id settingsbtnimg is clicked, openSettingsTab
$("#settingsbtnimg").click(openSettingsTab);

function hideTimeBg() {
  if (
    localStorage.getItem("weather") === "false" &&
    localStorage.getItem("date") === "false" &&
    localStorage.getItem("time") === "false" &&
    localStorage.getItem("easyTabs") === "false" &&
    localStorage.getItem("searchBar") === "false"
  ) {
    $("#middleComponent").hide();
  } else {
    $("#middleComponent").show();
  }
}

function openSettingsTab() {
  // add class called 'among' to set animation to animation: spin 1s 1 cubic-bezier(0.5, 0, 0.5, 1); for settingsbtnimg
  $("#settingsbtnimg").removeClass("reverse-animate");
  $("#settingsbtnimg").removeClass("animate");
  $("#settingsbtnimg").width(); // trigger a DOM reflow
  // console.log("pog");
  // if timebg is hidden
  if ($("#timebg").css("display") == "none") {
    $("#settingsbtnimg").addClass("reverse-animate");
    $("#timebg").show();
    $("#settings").hide();
    $("#addEasyTabs").hide();
    // if localStorageTodo's value is checked, show todo
    if (localStorage.getItem("todo") === "checked") {
      $("#todo").show();
    }
    // if localStorageTimetableDisplay is checked, show timetable
    if (
      localStorage.getItem("timetableDisplay") === "checked" ||
      localStorage.getItem("timetableDisplay") === null
    ) {
      $("#timetable").show();
    }
    // if weather, date, time, easytabs and searchbar are all disabled
    hideTimeBg();
  } else if ($("#timebg").css("display") == "block") {
    $("#settingsbtnimg").addClass("animate");
    $("#timebg").hide();
    $("#todo").hide();
    $("#timetable").hide();
    $("#settings").show();
  }
}

hideTimeBg(); // immediately hides timebg if all settings are disabled, otherwise an empty div will be shown at the start

function updateTime() {
  $(document).ready(function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var day = currentTime.getDay();
    var date = currentTime.getDate();
    var month = currentTime.getMonth();
    // convert day to text
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var dayText = days[day];
    // add contraction to date
    var dateText = date + "";
    if (date === 1) {
      dateText = date + "st";
    } else if (date === 2) {
      dateText = date + "nd";
    } else if (date === 3) {
      dateText = date + "rd";
    } else if (date < 21) {
      dateText = date + "th";
    }

    // convert month to text
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var monthText = months[month];
    // convert date to text

    // console.log(d_str);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // update bgimg based on time
    var bgimg = "";
    if (hours >= 5 && hours < 7) {
      bgimg = "img/sunset.jpg";
    } else if (hours >= 7 && hours < 17) {
      bgimg = "img/day.jpg";
    } else if (hours >= 17 && hours < 18) {
      bgimg = "img/sunset.jpg";
    } else if (hours >= 18 && hours <= 24) {
      bgimg = "img/night.jpg";
    } else if (hours >= 0 && hours < 5) {
      bgimg = "img/night.jpg";
    }
    document.getElementById("bgimg").src = bgimg;

    if (hours > 12) {
      if (hours == 24) {
        var AMPM = "AM";
      } else {
        var AMPM = "PM";
      }
      hours -= 12;
    } else if (hours == 12) {
      var AMPM = "PM";
    }else if (hours == 0) {
        var AMPM = "AM";
        hours = hours + 12;
    } else {
      var AMPM = "AM";
    }
    var d_str = dayText + ", " + dateText + " " + monthText;
    var t_str = hours + ":" + minutes + " " + AMPM;

    // console.log(t_str)

    $("#time").text(t_str);
    $("#date").text(d_str);
  });
}
updateTime(); // immeditatelly runs the function, so that there is no lag

getWeatherData();
updateTimetable();
setInterval(updateTime, 1000);
setInterval(getWeatherData, 900000); // 15 minutes

setInterval(updateTimetable, 250);

let timeUntil = new Date(2022, 6, 20, 0, 0, 0, 0);
let now = new Date();

if (now > timeUntil) {
  $("#doomsdayCountdown").hide();
} else {
  updateFunnyTime();
  setInterval(updateFunnyTime, 250);
}

var r = document.querySelector(":root");
r.style.setProperty("--blue", "lightblue");
//set every element to be unable to be dragged
var elements = document.getElementsByClassName("draggable");
for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute("draggable", "false");
}

for (weekID of ["A", "B"]) {
  let dayTitle = document.createElement("div");
  dayTitle.classList.add("evenperfecter");
  dayTitle.innerHTML = `Week ${weekID}`;
  document.getElementById("timetableInputHolder").appendChild(dayTitle);
  for (day in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]) {
    let dayTitle = document.createElement("div");
    // dayTitle.classList.add("medium");
    dayTitle.innerHTML = `${
      ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][day]
    } ${weekID}`;
    // document.getElementById("timetableInputHolder").appendChild(dayTitle); // removed because it was causing the timetable to be too big
    let theflexbox = document.createElement("div");
    theflexbox.classList.add("flexboxlol");
    for (period of [1, 2, 3, 4, 5, 6]) {
      let inputHolder = document.createElement("div");
      let label = document.createElement("label");
      let input = document.createElement("input");
      // label.innerText = `${period}: `;
      input.value = getStorage(
        `sub${["Mon", "Tue", "Wed", "Thu", "Fri"][day]}${weekID}${period}`,
        `Period ${period}`
      );
      if (day == 3 && period == 4) {
        input.value = "Advocacy";
        input.disabled = true;
      }
      let val = `sub${
        ["Mon", "Tue", "Wed", "Thu", "Fri"][day]
      }${weekID}${period}`;
      input.addEventListener("keyup", function () {
        // console.log(val);
        localStorage.setItem(val, this.value);
      });
      inputHolder.appendChild(label);
      inputHolder.appendChild(input);
      input.classList.add(
        "reallytinyimeanabsolutelymicroscopicyouwillneedamagnifyingglasstoseethis",
        "timetableInput"
      );
      theflexbox.appendChild(inputHolder);
    }
    theflexbox.classList.add(
      "reallytinyimeanabsolutelymicroscopicyouwillneedamagnifyingglasstoseethis"
    );
    document.getElementById("timetableInputHolder").appendChild(theflexbox);
  }
  let br = document.createElement("br");
  document.getElementById("timetableInputHolder").appendChild(br);
  br.classList.add(
    "reallytinyimeanabsolutelymicroscopicyouwillneedamagnifyingglasstoseethis"
  );
}

// console.log(localStorage)
var localStorageImageOpacity = localStorage.getItem("image-opacity");
var localStorageImageBlur = localStorage.getItem("image-blur");
var localStorageBgEffect = localStorage.getItem("bg-effect");
var localStorageBgOpacity = localStorage.getItem("bg-opacity");
var localStorageDate = localStorage.getItem("date");
var localStorageTime = localStorage.getItem("time");
var localStorageWeather = localStorage.getItem("weather");
var localStorageTodo = localStorage.getItem("todo");
var localStorageEasyTabs = localStorage.getItem("easyTabs");
var localStorageSearchBar = localStorage.getItem("searchBar");
var localStorageFontSize = localStorage.getItem("font-size");
var localStorageFontWeight = localStorage.getItem("font-weight");
var browser = localStorage.getItem("browser");
var localStorageBackground = localStorage.getItem("wallpaper");
var localStorageTimetableDisplay = localStorage.getItem("timetableDisplay");

if (localStorageBgEffect === null) {
  localStorageBgEffect = "none";
}
if (localStorageImageOpacity === null) {
  localStorageImageOpacity = "50";
}
if (localStorageImageBlur === null) {
  localStorageImageBlur = "0";
}
if (localStorageBgOpacity === null) {
  localStorageBgOpacity = "40";
}
if (localStorageDate === null) {
  localStorageDate = "checked";
}
if (localStorageTime === null) {
  localStorageTime = "checked";
}
if (localStorageWeather === null) {
  localStorageWeather = "checked";
}
if (localStorageTodo === null) {
  localStorageTodo = "false";
}
if (localStorageEasyTabs === null) {
  localStorageEasyTabs = "checked";
}
if (localStorageSearchBar === null) {
  localStorageSearchBar = "checked";
}
if (localStorageFontSize === null) {
  localStorageFontSize = "10";
}
if (localStorageFontWeight === null) {
  localStorageFontWeight = "400";
}
if (browser === null) {
  browser = "Google";
}
if (localStorageBackground === null) {
  localStorageBackground = "dynamic";
}
if (localStorageTimetableDisplay === null) {
  localStorageTimetableDisplay = "checked";
}

if (localStorageBgEffect === "none") {
  $("#stripestoggle").prop("checked", false);
} else {
  $("#stripestoggle").prop("checked", true);
}
if (localStorageDate === "checked") {
  $("#date").show();
  $("#datetoggle").prop("checked", true);
} else {
  $("#date").hide();
  $("#datetoggle").prop("checked", false);
}
if (localStorageTime === "checked") {
  $("#time").show();
  $("#timetoggle").prop("checked", true);
} else {
  $("#time").hide();
  $("#timetoggle").prop("checked", false);
}
if (localStorageWeather === "checked") {
  $("#weather").show();
  $("#weathertoggle").prop("checked", true);
} else {
  $("#weather").hide();
  $("#weathertoggle").prop("checked", false);
}
if (localStorageTodo === "checked") {
  $("#todo").show();
  $("#todotoggle").prop("checked", true);
} else {
  $("#todo").hide();
  $("#todotoggle").attr("checked", false);
}
if (localStorageEasyTabs === "checked") {
  $("#easyTabs").show();
  $("#easytabstoggle").attr("checked", true);
} else {
  $("#easyTabs").hide();
  $("#easytabstoggle").attr("checked", false);
}
if (localStorageSearchBar === "checked") {
  $("#searchBar").show();
  $("#searchbartoggle").attr("checked", true);
} else {
  $("#searchBar").hide();
  $("#searchbartoggle").attr("checked", false);
}
if (localStorageTimetableDisplay === "checked") {
  $("#timetable").show();
  $("#timetabletoggle").attr("checked", true);
} else {
  $("#timetable").hide();
  $("#timetabletoggle").attr("checked", false);
}

$("#custombgselector").hide();
$("#custombgimg").hide();
$("#day").hide();
$("#night").hide();
$("#sunset").hide();
$("#bgimg").hide();
if (localStorageBackground === "dynamic") {
  $("#wallpaper").val("dynamic");
  $("#bgimg").show();
} else if (localStorageBackground === "day") {
  $("#wallpaper").val("day");
  $("#day").show();
} else if (localStorageBackground === "night") {
  $("#wallpaper").val("night");
  $("#night").show();
} else if (localStorageBackground === "sunset") {
  $("#wallpaper").val("sunset");
  $("#sunset").show();
} else if (localStorageBackground === "custom") {
  $("#wallpaper").val("custom");
  $("#custombgselector").show();
  $("#custombgimg").show();
  // set custombgimg src to localStorage
  document.getElementById("custombgimg").src = localStorage.getItem("custombg");
}

var searchQuery = "";
if (browser === "Google") {
  // set searchBar placeholder to chrome
  $("#searchBar").attr("placeholder", "Search with Google");
  //set browser selected to Google
  $("#browser").val("Google");
  searchQuery = "https://google.com/search?q=";
} else if (browser === "Bing") {
  // set searchBar placeholder to edge
  $("#browser").val("Bing");
  $("#searchBar").attr("placeholder", "Search with Bing");
  searchQuery = "https://bing.com/?q=";
} else if (browser === "DuckDuckGo") {
  // set searchBar placeholder to duckduckgo
  $("#browser").val("DuckDuckGo");
  $("#searchBar").attr("placeholder", "Search with DuckDuckGo");
  searchQuery = "https://duckduckgo.com/?q=";
} else if (browser === "Yandex") {
  // set searchBar placeholder to yandex
  $("#browser").val("Yandex");
  $("#searchBar").attr("placeholder", "Search with Yandex");
  searchQuery = "https://yandex.com/?q=";
}

//if browser selection changes
$("#browser").on("change", function () {
  // get the selected option
  var selectedOption = $(this).find("option:selected");
  // get the value of the selected option
  var selectedValue = selectedOption.val();
  // console.log(selectedValue);
  localStorage.setItem("browser", selectedValue);
  if (
    selectedValue === "Bing" ||
    selectedValue === "DuckDuckGo" ||
    selectedValue === "Yandex"
  ) {
    $("#searchBar").attr("placeholder", "Search with " + selectedValue);
    searchQuery = "https://" + selectedValue + ".com/?q=";
  } else {
    $("#searchBar").attr("placeholder", "Search with Google");
    searchQuery = "https://google.com/search?q=";
  }
});

//if background selection changes
$("#wallpaper").on("change", function () {
  // get the selected option
  var selectedOption = $(this).find("option:selected");
  // get the value of the selected option
  var selectedValue = selectedOption.val();
  // console.log(selectedValue);
  localStorage.setItem("wallpaper", selectedValue);
  $("#custombgselector").hide();
  $("#custombgimg").hide();
  $("#day").hide();
  $("#night").hide();
  $("#sunset").hide();
  $("#bgimg").hide();
  if (selectedValue === "dynamic") {
    $("#bgimg").show();
  } else if (selectedValue === "day") {
    $("#day").show();
  } else if (selectedValue === "night") {
    $("#night").show();
  } else if (selectedValue === "sunset") {
    $("#sunset").show();
  } else if (selectedValue === "custom") {
    $("#custombgselector").show();
    $("#custombgimg").show();
  }
});

//if custombg selection changes
$("#custombg").on("change", function () {
  //upload file to localstorage
  var file = $("#custombg")[0].files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    localStorage.setItem("custombg", e.target.result);
    document.getElementById("custombgimg").src = e.target.result;
  };
  reader.readAsDataURL(file);
});

$("#imageOpacitySpan").text(localStorageImageOpacity);
$("#imageBlurSpan").text(localStorageImageBlur);
$("#bgOpacitySpan").text(localStorageBgOpacity);
$("#imageOpacitySlider").val(localStorageImageOpacity);
$("#imageBlurSlider").val(localStorageImageBlur);
$("#bgOpacitySlider").val(localStorageBgOpacity);
$("#fontSizeSpan").text(localStorageFontSize + "rem");
$("#fontWeightSpan").text(localStorageFontWeight);
$("#fontSizeSlider").val(localStorageFontSize);
$("#fontWeightSlider").val(localStorageFontWeight);

//set css to local storage

document.documentElement.style.setProperty(
  "--image-opacity",
  localStorageImageOpacity / 100
);
document.documentElement.style.setProperty(
  "--image-blur",
  localStorageImageBlur / 150 + "rem"
);
document.documentElement.style.setProperty(
  "--bg-opacity",
  localStorageBgOpacity / 100
);
document.documentElement.style.setProperty(
  "--font-size",
  localStorageFontSize / 10 + "rem"
);
document.documentElement.style.setProperty(
  "--font-weight",
  localStorageFontWeight
);
document.documentElement.style.setProperty("--bg-effect", localStorageBgEffect);

// if enter is pressed
$("#searchBar").keypress(function (e) {
  if (e.which === 13) {
    // console.log("amogus");
    // search with duckduckgo
    var query = $("#searchBar").val();
    if (query.length > 0) {
      window.location.href = searchQuery + query;
    }
  }
});
// when bgOpacitySlider is being interacted
$("#bgOpacitySlider").on("input", function () {
  $("#bgOpacitySpan").text($(this).val());
  // set css variable --bg-opacity to slider value
  //save slider to local storage
  localStorage.setItem("bg-opacity", $(this).val());
  document.documentElement.style.setProperty(
    "--bg-opacity",
    $(this).val() / 100
  );
});
// when imageOpacitySlider is being interacted
$("#imageOpacitySlider").on("input", function () {
  $("#imageOpacitySpan").text($(this).val());
  //save slider to local storage
  localStorage.setItem("image-opacity", $(this).val());
  document.documentElement.style.setProperty(
    "--image-opacity",
    $(this).val() / 100
  );
});
// when imageBlurSlider is being interacted
$("#imageBlurSlider").on("input", function () {
  $("#imageBlurSpan").text($(this).val());
  //save slider to local storage
  localStorage.setItem("image-blur", $(this).val());
  document.documentElement.style.setProperty(
    "--image-blur",
    $(this).val() / 100 + "rem"
  );
});
// when fontSizeSlider is being interacted
$("#fontSizeSlider").on("input", function () {
  $("#fontSizeSpan").text($(this).val());
  //save slider to local storage
  localStorage.setItem("font-size", $(this).val());
  document.documentElement.style.setProperty(
    "--font-size",
    $(this).val() / 10 + "rem"
  );
});
// when fontWeightSlider is being interacted
$("#fontWeightSlider").on("input", function () {
  $("#fontWeightSpan").text($(this).val());
  //save slider to local storage
  localStorage.setItem("font-weight", $(this).val());
  document.documentElement.style.setProperty("--font-weight", $(this).val());
});

// $("#timetabletoggle").on("click", function () {
//     $("#timetable").toggle();
// });

// save todolist to local storage when edited
$("#todolist").on("input", function () {
  localStorage.setItem("todolist", $(this).val());
});
//get todolist from local storage
var localStorageTodolist = localStorage.getItem("todolist");
if (localStorageTodolist === null) {
  localStorageTodolist = "Notes (Click on me!): ";
}
$("#todolist").val(localStorageTodolist);
//set todolist to textarea
$("#todolist").focus();
//set todolist to textarea
$("#todolist").blur();

$("#datetoggle").click(toggleDate);
function toggleDate() {
  if ($("#datetoggle").is(":checked")) {
    $("#date").show();
    localStorage.setItem("date", "checked");
  } else {
    $("#date").hide();
    localStorage.setItem("date", "false");
  }
}
$("#searchbartoggle").click(toggleSearchBar);
function toggleSearchBar() {
  if ($("#searchbartoggle").is(":checked")) {
    $("#searchBar").show();
    localStorage.setItem("searchBar", "checked");
  } else {
    $("#searchBar").hide();
    localStorage.setItem("searchBar", "false");
  }
}
// if todotoggle is clicked
$("#todotoggle").click(toggleTodo);
function toggleTodo() {
  //   console.log("toggleTodo");
  if ($("#todotoggle").is(":checked")) {
    $("#todo").show();
    localStorage.setItem("todo", "checked");
  } else {
    $("#todo").hide();
    localStorage.setItem("todo", "false");
  }
}
$("#timetoggle").click(toggleTime);
function toggleTime() {
  if ($("#timetoggle").is(":checked")) {
    $("#time").show();
    localStorage.setItem("time", "checked");
  } else {
    $("#time").hide();
    localStorage.setItem("time", "false");
  }
}
$("#easytabstoggle").click(toggleEasyTabs);
function toggleEasyTabs() {
  if ($("#easytabstoggle").is(":checked")) {
    $("#easyTabs").show();
    localStorage.setItem("easyTabs", "checked");
  } else {
    $("#easyTabs").hide();
    localStorage.setItem("easyTabs", "false");
  }
}
$("#weathertoggle").click(toggleWeather);
function toggleWeather() {
  if ($("#weathertoggle").is(":checked")) {
    $("#weather").show();
    localStorage.setItem("weather", "checked");
  } else {
    $("#weather").hide();
    localStorage.setItem("weather", "false");
  }
}
$("#timetabletoggle").click(toggleTimetable);
function toggleTimetable() {
  if ($("#timetabletoggle").is(":checked")) {
    $("#timetable").show();
    localStorage.setItem("timetableDisplay", "checked");
  } else {
    $("#timetable").hide();
    localStorage.setItem("timetableDisplay", "false");
  }
}
// when stripestoggle is clicked
$("#stripestoggle").click(toggleStripes);
function toggleStripes() {
  if ($("#stripestoggle").is(":checked")) {
    // change css variable bg-effect to "stripes"
    document.documentElement.style.setProperty(
      "--bg-effect",
      "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) 50px, rgba(0, 0, 0, 0.4) 50px, rgba(0, 0, 0, 0.4) 100px"
    );
    // save to local storage
    localStorage.setItem(
      "bg-effect",
      "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) 50px, rgba(0, 0, 0, 0.4) 50px, rgba(0, 0, 0, 0.4) 100px"
    );
  } else {
    // change css variable bg-effect to "none"
    document.documentElement.style.setProperty("--bg-effect", "none");
    //save to local storage
    localStorage.setItem("bg-effect", "none");
  }
}

// easytabs customisations LETS GOOOO

const defaultTabs = [
  {
    type: "SOCIAL",
    color: "rgb(255, 137, 255)",
    content: {
      discord: "https://discord.com/app",
      insta: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
      reddit: "https://reddit.com/",
    },
  },
  {
    type: "GENERAL",
    color: "rgb(255, 137, 137)",
    content: {
      youtube: "https://www.youtube.com/",
      twitch: "https://www.twitch.tv/",
      gmail: "https://mail.google.com/",
    },
  },
  {
    type: "SCHOOL",
    color: "rgb(170, 255, 137)",
    content: {
      connect: "https://connect.det.wa.edu.au/",
      outlook: "https://outlook.office.com/",
      math: "https://mathspace.co/student/",
      ep: "https://www.educationperfect.com/app/#/dashboard/",
    },
  },
  {
    type: "TECHS",
    color: "rgb(137, 237, 255)",
    content: {
      github: "https://github.com/",
      stack: "https://stackoverflow.com/",
      firedb: "https://firebase.google.com/",
    },
  },
];

function updateEasyTabs(TabstoUpdate) {
  // create div and append to id easyTabs
  $("#easyTabs").empty();
  for (let i = 0; i < TabstoUpdate.length; i++) {
    // if tab.content is not empty
    if (Object.keys(TabstoUpdate[i].content).length !== 0) {
      let tab = TabstoUpdate[i];
      let tabDiv = $("<ul>");
      tabDiv.addClass("easyTab");
      // tabDiv.css("background-color", tab.color);
      tabDiv.attr("id", tab.type);
      tabDiv.append(
        `<li class="medium" style="color: ${tab.color}">${tab.type}</li>`
      );
      for (let key in tab.content) {
        tabDiv.append(`<li><a href="${tab.content[key]}">${key}</a><li>`);
      }
      $("#easyTabs").append(tabDiv);
    }
  }
  // const ul = document.createElement("ul");

  // // Append to body:
  // document.getElementById("easyTabs").appendChild(ul);
}

// color: "rgb(255, 255, 137)", // backup color

function editEasyTab() {
  // get the index of the tab to edit
  let index = $(this).parent().parent().index();
  // alert input
  let input = prompt("Enter new tab name");
  // if input is not empty
  console.log(input);
  if (input !== null && input !== "") {
    // get easyTabsArray
    let easyTabsArray = JSON.parse(localStorage.getItem("easyTabsArray"));
    // find tab in easyTabsArray
    // change tab name
    // console.log(index);
    easyTabsArray[index].type = input;
    // update local storage
    localStorage.setItem("easyTabsArray", JSON.stringify(easyTabsArray));
    // update easyTabs
    updateEasyTabs(easyTabsArray);
    updateEasyTabsSettings(easyTabsArray);
  }
}

// function to update settings
function updateEasyTabsSettings(TabstoUpdate) {
  // console.log("check");
  // parse easyTabsArray
  parsedEasyTabsArray = JSON.parse(localStorage.getItem("easyTabsArray"));
  // for every div in easyTabsInputHolder

  $("#easyTabsInputHolder")
    .children()
    .each(function (index, element) {
      // get element id
      let id = $(element).attr("id");

      // remove content of id
      $(element).empty();

      // append ul to column1
      let ul = document.createElement("ul");
      ul.style.textAlign = "left";
      // add TabstoUpdate[index].type to ul
      ul.innerHTML = `<li class="medium" style="color: ${TabstoUpdate[index].color}">${TabstoUpdate[index].type}</li>`;
      // add a button to edit the TabstoUpdate type
      let editButton = document.createElement("button");
      editButton.innerHTML = "Edit Title";
      editButton.classList.add("editButton");
      editButton.setAttribute("id", id);
      editButton.addEventListener("click", editEasyTab);

      // make edit button inline with ul
      ul.appendChild(editButton);

      // add TabstoUpdate[index] to ul
      for (let key in TabstoUpdate[index].content) {
        let li = document.createElement("li");
        // set alignitems to left
        let a = document.createElement("p");
        // a.href = TabstoUpdate[index].content[key];
        a.innerHTML = key;

        // add button in li
        let button = document.createElement("button");
        button.innerHTML = "X";
        button.classList.add("deleteButton");
        button.addEventListener("click", function () {
          // delete key from TabstoUpdate[index].content
          delete TabstoUpdate[index].content[key];
          // update local storage
          localStorage.setItem("easyTabsArray", JSON.stringify(TabstoUpdate));
          // update easyTabs
          updateEasyTabs(TabstoUpdate);
          // update easyTabsSettings

          updateEasyTabsSettings(TabstoUpdate);
        });

        // set button to block display, margin left auto, margin right 0
        button.style.display = "block";
        button.style.marginLeft = "auto";
        button.style.marginRight = "0";

        //set text align to left
        a.style.textAlign = "left";
        //set li to display: flex
        li.style.display = "flex";

        li.appendChild(a);
        li.appendChild(button);

        ul.appendChild(li);
      }
      document.getElementById(id).appendChild(ul);
      $(element).append(ul);

      // add button to ul
      let button = document.createElement("button");
      button.innerHTML = "Add";
      button.classList.add("addButton");
      // addid
      button.id = "addButton" + index;
      button.addEventListener("click", function () {
        //
      });
      $(element).append(button);
    });
}

// easyTabs localstorage shenanigans

// get localstorage for easytabs
let easyTabsArray = localStorage.getItem("easyTabsArray");
if (easyTabsArray) {
  //update easytabs json parse
  easyTabsArray = JSON.parse(easyTabsArray);
  updateEasyTabs(easyTabsArray);
  updateEasyTabsSettings(easyTabsArray);
} else {
  // set easyTabsArray to default
  localStorage.setItem("easyTabsArray", JSON.stringify(defaultTabs));
  updateEasyTabs(defaultTabs);
  updateEasyTabsSettings(defaultTabs);
}

// validateurl
function validateURL(str) {
  // create array for exceptions
  const exceptions = [
    "e4042s01sv006/user",
    "nsindex.net/wiki/List_of_NationStates_issues:_0%E2%80%93999",
  ];
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  if (!!pattern.test(str) || exceptions.includes(str)) {
    // check if starts with http:// or https://, if not automatically include
    if (
      str.substring(0, 7) !== "http://"
    ) {
      str = "http://" + str;
    }
  }
  if (exceptions.includes(str.substring(7, str.length)) || (exceptions.includes(str.substring(8, str.length)))) {
    return [true, str];
  }
  return [!!pattern.test(str), str];
}

// console.log(validateURL("http://e4042s01sv006/user"))

// if any add buttons were pressed
$("#easyTabsInputHolder").on("click", ".addButton", function () {
  let id = $(this).attr("id");
  let index = id.substring(id.length - 1);
  let easyTabsArray = JSON.parse(localStorage.getItem("easyTabsArray"));
  let content = easyTabsArray[index].content;

  // console.log(content);

  //show addEasyTabs
  $("#addEasyTabs").show();

  // addEasyTabsAdd and addEasyTabsCancel event listeners
  $("#addEasyTabsAdd").on("click", function () {
    // if easytabsname and easytabsurl are not empty
    if ($("#easytabsname").val() && $("#easytabsurl").val()) {
      // if easytabsurl is not a valid url
      if (!validateURL($("#easytabsurl").val())[0]) {
        // alert user
        alert("Please enter a valid URL");
      } else {
        // if name is longer than 16 characters
        if ($("#easytabsname").val().length > 10) {
          // alert user
          alert("Please enter a name shorter than 16 characters");
        } else {
          // console.log("epic");
          // add easytabsname and easytabsurl to content
          content[$("#easytabsname").val()] = validateURL(
            $("#easytabsurl").val()
          )[1];
          // if easytabsurl is already stated in content

          // update localstorage
          localStorage.setItem("easyTabsArray", JSON.stringify(easyTabsArray));
          // update easyTabs
          updateEasyTabs(easyTabsArray);
          // update easyTabsSettings
          updateEasyTabsSettings(easyTabsArray);
          // hide addEasyTabs
          $("#addEasyTabs").hide();
        }
      }
    } else {
      alert("Please enter a name and url");
    }
  });
  $("#addEasyTabsCancel").on("click", function () {
    // close addEasyTabs
    $("#addEasyTabs").hide();
  });
});

// make addEasyTabs movable and draggable
$("#addEasyTabs").draggable();

function updateFunnyTime() {
  // get time until 31st Janurary 8:45am 2022
  // let timeUntil = new Date(2022, 0, 20, 8, 45, 0, 0);
  // get time until 20th July 2022
  let timeUntil = new Date(2022, 6, 20, 0, 0, 0, 0);
  // get current time
  let now = new Date();
  // get difference between current time and time until
  let diff = timeUntil - now;
  // update id funnyTime to diff
  // format diff to DD/MM/YYYY HH:MM:SS
  let days = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  let minutes = Math.floor((diff / 1000 / 60) % 60);
  let seconds = Math.floor((diff / 1000) % 60);
  // console.log(days,hours,minutes,diff)
  document.getElementById(
    "funnyTime"
  ).innerHTML = `${days} days and ${hours}h ${minutes}m ${seconds}s`;
}

// on changeWeek click
$("#changeWeek").on("click", function () {
  // get correctWeekKey
  let correctWeekKey = localStorage.getItem("correctWeekKey");
  // if correctWeekKey is not set
  if (!correctWeekKey) {
    // set correctWeekKey to 0
    correctWeekKey = 1;
    localStorage.setItem("correctWeekKey", "0");
  } else if (correctWeekKey === "0") {
    // set correctWeekKey to 1
    correctWeekKey = 1;
    localStorage.setItem("correctWeekKey", "1");
  } else {
    // set correctWeekKey to 0
    correctWeekKey = 0;
    localStorage.setItem("correctWeekKey", "0");
  }

  // alert user
  alert(`Week A and B has been switched`);
});
