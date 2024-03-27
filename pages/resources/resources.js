$(document).ready(()=>{
    fetch("data/resources.json").then(data=> data.json()).then(data=>{
        let listElement = data.map(item=>{
            return `
                <li>
                    <section>
                        <h2>${item.title}</h2>
                        <ul>
                            ${item.resources.map((resource)=>{
                                return "<li><a target='_blank' href='" + resource.url + "'>"+ resource.name +"</a></li>"
                            })}
                        </ul>
                    </section>
                </li>
            `
        })
        console.log(listElement.join(""))
        $("#resources_list").append(listElement.join(" "))
    });
});