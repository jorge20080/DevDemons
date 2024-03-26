$(document).ready(()=>{
    fetch("data/events.json").then(data=> data.json()).then(data=>{
        let filteredData = data;
        $("#searchbox").on("input",(e)=>{
            e.preventDefault();
            filteredData = data.filter(event=>{
                return event.name.toLowerCase().includes($("#searchbox").val().toLowerCase());
            })
            createEventsAndAppendToDom(filteredData)
        })
        if($("#searchbox").val()===""){
            createEventsAndAppendToDom(filteredData)
        }
    });

});
function createEventsAndAppendToDom(events){
    $("#event_list").html("");
    if(events.length===0){
        $("#event_list").append(
            `<li>
                <h2>No Results</h2>
            </li>`
        )
    } else{
        $("#event_list").html("");
        events.forEach(event=>{
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
                        <p><i class="fa-solid fa-location-dot"></i>&nbsp; &nbsp; &nbsp; ${event.location}</p>
                    </div>
                </li>`
            );
        })
    }
    
}