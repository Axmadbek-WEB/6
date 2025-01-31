const btn=document.getElementById("btn");
const box=document.getElementById("box");
const map=document.getElementById("map");


async function getLocation() {
    try{
        const response= await fetch("https://ipinfo.io/json")
        const location=await response.json();
        console.log(location.loc.split(","))
        box.innerHTML=`
        <h1>Foydaluvchi Joylashuvi aniqlash</h1>
        <button class="button-86" role="button" id="btn">Joylashuvni ko'rsat</button>
        <p>Kenglik: ${location.loc.split(",")[0]}</p>
        <p>Uzunlik: ${location.loc.split(",")[1]}</p>
        <p>Mamlakat: ${location.country}</p>
        <p>Shahar:${location.city}</p>
        <p>IP Manzil:${location.ip}</p>
        <p>Internet Provayder:${location.hostname}</p>
        <div id="map">
            <iframe src="https://www.google.com/maps/embed?p=${
                location.loc.split(",")[0]},${location.loc.split(",")[1]}b=!1m18!1m12!1m3!1d2995.811631784925!2d69.21295457587591!3d41.33470927130657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfe2c9dfdb7%3A0x4e70e6b88f98e874!2sMARS%20IT%20School!5e0!3m2!1suz!2s!4v1733218195415!5m2!1suz!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>`
    } catch (error){
        console.log(error)
    }
}
btn.addEventListener("click",()=>{
    getLocation()
    // try{

    // }
    // const data= await getLocation();

    // console.log(data)
})
