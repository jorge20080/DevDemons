// import events from '../../data/events.json'

// console.log(events)
$(document).ready(()=>{
    fetch("../../data/events.json").then(data=> data.json()).then(data=>{
        data.forEach(event=>{
            const date = Date.parse(data.date)
            console.log(date)
            $("#event_list").append(`<li><p>${event.name}</p><p>${"sss"}</p></li>`);
        })
    });
});
