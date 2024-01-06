const options={
    method:"GET",
    headers:{
        "X-RapidAPI-Key":"0214230939msh1d9c39c1a4f7efap16a729jsn9fc0e13680b3",
        "X-RapidAPI-Host":"weather-by-api-ninjas.p.rapidapi.com"
    }
}

document.querySelector('#ipt').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
            let cool=document.getElementById("ipt").value
            let b=fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cool}`,options)
            b.then((response)=>{
                return response.json()
            }).then(response=>{
                // console.log(response)
                let x=document.getElementById("temp")
                x.innerHTML=JSON.stringify(response.temp)
                let y=document.getElementById("feel")
                y.innerHTML=JSON.stringify(response.feels_like)
                let z=document.getElementById("max")
                z.innerHTML=JSON.stringify(response.max_temp)
                let w=document.getElementById("min")
                w.innerHTML=JSON.stringify(response.min_temp)
                let k=document.getElementById("humid")
                k.innerHTML=JSON.stringify(response.humidity)
                let l=document.getElementById("deg")
                l.innerHTML=JSON.stringify(response.wind_degrees)
                let j=document.getElementById("speed")
                j.innerHTML=JSON.stringify(response.wind_speed)
            })      
        }
});

document.querySelector('#gobtn').addEventListener('click', function (e) {
            let cool=document.getElementById("ipt").value
            let b=fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cool}`,options)
            b.then((response)=>{
                return response.json()
            }).then(response=>{
                // console.log(response)
                let x=document.getElementById("temp")
                x.innerHTML=JSON.stringify(response.temp)
                let y=document.getElementById("feel")
                y.innerHTML=JSON.stringify(response.feels_like)
                let z=document.getElementById("max")
                z.innerHTML=JSON.stringify(response.max_temp)
                let w=document.getElementById("min")
                w.innerHTML=JSON.stringify(response.min_temp)
                let k=document.getElementById("humid")
                k.innerHTML=JSON.stringify(response.humidity)
                let l=document.getElementById("deg")
                l.innerHTML=JSON.stringify(response.wind_degrees)
                let j=document.getElementById("speed")
                j.innerHTML=JSON.stringify(response.wind_speed)
            })  
});