function getWeatherData() {
    $(document).ready(async function () {
        var city = undefined;
        await fetch("https://ipinfo.io/json")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                city = myJson.city;
                console.log;
            })
            .catch(function (error) {
                console.log("Error: " + error);
            });
        $.getJSON(
            "https://api.weatherapi.com/v1/current.json?key=76aa7ac854eb413c82565451211807&q=" +
            city,
            function (data) { }
        )
            .done(function (data) {
                $("#weather").text(
                    data.current.condition.text + " " + data.current.temp_c + "°C"
                );
            })
            .fail(function (data) { });
    });
}

// document.getElementById("settingsbtnimg").addEventListener("click", openSettingsTab);

openSettingsTab = function () {
    // console.log("pog");
    // if timebg is hidden
    if ($("#timebg").css("display") == "none") {
        $("#timebg").show();
        $("#settings").hide();
    } else if ($("#timebg").css("display") == "block") {
        $("#timebg").hide();
        $("#settings").show();
    }
};

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

        // console.log(hours);

        // update bgimg based on time
        var bgimg = "";
        if (hours >= 7 && hours < 9) {
            bgimg = "img/sunset.jpg";
        } else if (hours >= 9 && hours < 17) {
            bgimg = "img/day.jpg";
        } else if (hours >= 17 && hours < 18) {
            bgimg = "img/sunset.jpg";
        } else if (hours >= 18 && hours < 24) {
            bgimg = "img/night.jpg";
        } else if (hours >= 0 && hours < 6) {
            bgimg = "img/night.jpg";
        }
        document.getElementById("bgimg").src = bgimg;

        if (hours > 12) {
            var AMPM = "PM";
            hours -= 12;
        } else {
            var AMPM = "AM";
        }
        var d_str = dayText + ", " + dateText + " " + monthText;
        var t_str = hours + ":" + minutes + " " + AMPM;

        $("#time").text(t_str);
        $("#date").text(d_str);
    });
}
updateTime(); // immeditatelly runs the function, so that there is no lag
getWeatherData();
setInterval(updateTime, 1000);
setInterval(getWeatherData, 900000); // 15 minutes

var r = document.querySelector(":root");
r.style.setProperty("--blue", "lightblue");
//set every element to be unable to be dragged
var elements = document.getElementsByClassName("draggable");
for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("draggable", "false");
}


// console.log(localStorage)
var localStorageImageOpacity = localStorage.getItem("image-opacity");
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

if (localStorageBgEffect === null) {
    localStorageBgEffect = "none";
}
if (localStorageImageOpacity === null) {
    localStorageImageOpacity = "50";
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
    document.getElementById("custombgimg").src =
        localStorage.getItem("custombg");
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
$("#bgOpacitySpan").text(localStorageBgOpacity);
$("#imageOpacitySlider").val(localStorageImageOpacity);
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
document.documentElement.style.setProperty(
    "--bg-effect",
    localStorageBgEffect
);

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
    document.documentElement.style.setProperty(
        "--font-weight",
        $(this).val()
    );
});

// save todolist to local storage when edited
$("#todolist").on("input", function () {
    localStorage.setItem("todolist", $(this).val());
});
//get todolist from local storage
var localStorageTodolist = localStorage.getItem("todolist");
if (localStorageTodolist === null) {
    localStorageTodolist = "Todo list (Click on me): ";
}
$("#todolist").val(localStorageTodolist);
//set todolist to textarea
$("#todolist").focus();
//set todolist to textarea
$("#todolist").blur();

function toggleDate() {
    if ($("#datetoggle").is(":checked")) {
        $("#date").show();
        localStorage.setItem("date", "checked");
    } else {
        $("#date").hide();
        localStorage.setItem("date", "false");
    }
}
function toggleSearchBar() {
    if ($("#searchbartoggle").is(":checked")) {
        $("#searchBar").show();
        localStorage.setItem("searchBar", "checked");
    } else {
        $("#searchBar").hide();
        localStorage.setItem("searchBar", "false");
    }
}
function toggleTodo() {
    console.log("toggleTodo");
    if ($("#todotoggle").is(":checked")) {
        $("#todo").show();
        localStorage.setItem("todo", "checked");
    } else {
        $("#todo").hide();
        localStorage.setItem("todo", "false");
    }
}
function toggleTime() {
    if ($("#timetoggle").is(":checked")) {
        $("#time").show();
        localStorage.setItem("time", "checked");
    } else {
        $("#time").hide();
        localStorage.setItem("time", "false");
    }
}
function toggleEasyTabs() {
    if ($("#easytabstoggle").is(":checked")) {
        $("#easyTabs").show();
        localStorage.setItem("easyTabs", "checked");
    } else {
        $("#easyTabs").hide();
        localStorage.setItem("easyTabs", "false");
    }
}
function toggleWeather() {
    if ($("#weathertoggle").is(":checked")) {
        $("#weather").show();
        localStorage.setItem("weather", "checked");
    } else {
        $("#weather").hide();
        localStorage.setItem("weather", "false");
    }
}
// when toggle is clicked
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