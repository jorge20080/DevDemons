// import events from '../../data/events.json'

// console.log(events)
$(document).ready(()=>{
    fetch("../../data/events.json").then(data=> data.json()).then(data=>{
        data.forEach(event=>{
            const date = new Date(event.date);
            const month = date.toLocaleString('default', { month: 'short' });
            $("#event_list").append(
                `<li>
                    <div class="time">
                        <span>${month}</span>
                        <span>${(date.getDate()+1)}</span>
                    </div>
                    <div>
                        <p><span><b>Time: </b></span>${date.toLocaleTimeString()}</p>
                        <a>${event.name}</a>
                        <p>${event.description}</p>
                        <p>${event.location}</p>
                    </div>
                </li>`
            );
        })
    });
});
