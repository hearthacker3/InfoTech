
console.log("Deep")
let load = async () => {
    // try {
    var contest = await fetch("https://kontests.net/api/v1/all")
    var data = await contest.json()
    console.log(data)
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            let box = document.querySelector(".content-container")
            box.innerHTML += `
            <div class="box">
            <h3 class="contest-name">Name:&nbsp<span>${data[key].name}</span></h2>
            <h3 class="start-time">Start time:&nbsp<span>${data[key].start_time}</span></</h3>
            <h3 class="end-time">End time:&nbsp<span>${data[key].end_time}</span></</h3>
            <h3 class="about">Status:&nbsp<span>${data[key].status}</span></h3>
            <div id="button"><a href="${data[key].url}" target="_blank" >Register Now</a></div>
            </div>
            
            `
            
        }
    }
    time=data[key.start_time]

}

load()

// time=data[key.start_time]
var d = new Date('2015-03-04T00:00:00.000Z');
console.log(d.getUTCHours()); // Hours
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());

