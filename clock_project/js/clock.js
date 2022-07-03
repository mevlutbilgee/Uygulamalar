let name = "Mevlüt Bilge"
myName.innerHTML = name

function showTime(){
    let date = new Date();
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    let gun = date.getDay();

    document.getElementById("myClock").innerHTML = `${saat} : ${dakika} : ${saniye} - ${weekday[gun]} `
}

setInterval(showTime , 1000);
