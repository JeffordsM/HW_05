console.log(moment().format('k'));
var currnetHour = moment().format('k')


$("#currentDay").text(moment().format('llll'));

var times = [
    {
        timeStr: "9AM",
        timeMill: 9
    },
    {
        timeStr: "10AM",
        timeMill: 10
    },
    {
        timeStr: "11AM",
        timeMill: 11
    },
    {
        timeStr: "12PM",
        timeMill: 12
    },
    {
        timeStr: "1PM",
        timeMill: 13
    },
    {
        timeStr: "2PM",
        timeMill: 14
    },
    {
        timeStr: "3PM",
        timeMill: 15
    },
    {
        timeStr: "4PM",
        timeMill: 16
    },
    {
        timeStr: "5PM",
        timeMill: 17
    },
];

var target = $(".container")

function makeRows() {
    times.forEach(function (x) {
        var newDiv = $("<div>");
        newDiv.addClass("row");
        newDiv.attr("data-time", x.timeMill);

        var newTitle = $("<div>");
        newTitle.addClass("hour col-md-1");
        newTitle.append(`<p class="description">${x.timeStr}</p>`)
        newDiv.append(newTitle);

        var textColor = "";
        var newText = $("<textarea>");
        if (x.timeMill == currnetHour) {
            textColor = "present"
        }
        else if (x.timeMill > currnetHour) {
            textColor = "future"
        }
        else if (x.timeMill < currnetHour) {
            textColor = "past"
        }
        newText.addClass(`${textColor} col-md-10`)
        newText.attr("id", "text" + x.timeMill);
        newText.val(localStorage.getItem("text" + x.timeMill));
        newDiv.append(newText);

        var newBtn = $(`<button class="saveBtn col-md-1"><i class="fas fa-lock" id=${x.timeMill}></i></button>`);
        newBtn.attr("id", x.timeMill);
        newDiv.append(newBtn)

        target.append(newDiv);
    });
};


function saveText(e) {
    if (event.target.matches("button") || event.target.matches("i")) {

        console.log(e)

        console.log(event.target.id)

        localStorage.setItem("text" + event.target.id, $("#text" + event.target.id).val());

    }
}

target.on("click", ".row", saveText);

makeRows();


