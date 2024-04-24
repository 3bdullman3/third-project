
function GetTimes() {
    fetch("https://api.aladhan.com/v1/calendarByCity/2017/4?city=Riyadh&country=Saudi%20Arabia&method=2")
    .then((response) =>response.json())
      .then((json) => console.log("json"))
}
GetTimes()



function userclicked(id,el){
    let selectedElement =document.getElementsByClassName("selected")
    for(Element of selectedElement){
        Element.classList.remove("selected")
    }
    GetPosts(id)
    el.classList.add("selected")
}