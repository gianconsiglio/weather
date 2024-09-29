let button = window.document.getElementById('search')
let button2 = window.document.getElementById('clean')
button.addEventListener('click',checkWeather)
button2.addEventListener('click', clean)
let div_weather_data = window.document.getElementById('weather-data')
let cloud_div = document.getElementById('imagem_clouds')


async function checkWeather(){
    let error = window.document.getElementById('error_mensagem')
    error.innerHTML = ''
    let city = window.document.getElementById('cidade').value
    let api_key = '782fd87d9dcc0da4421edb95c7f0ee0c'
    const apiCountryURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}&lang=pt_br`
    const response = await fetch(apiCountryURL)
    let data = await response.json();
    let imagem = window.document.getElementById('foto_country')
    
    if(response.status == 404){
        clean()
        error.innerHTML = `<strong>Sua pesquisa por "${city}" não foi encontrada!</strong>`

    }else{
        let cloud = data.weather[0].description;
        switch (cloud){

            case 'nublado':
                cloud_div.src='http://openweathermap.org/img/wn/04d@2x.png'
                break

            case 'trovoadas':
                cloud_div.src='http://openweathermap.org/img/wn/11d@2x.png'  
                break
            case 'trovoada com chuva':
                cloud_div.src='http://openweathermap.org/img/wn/09d@2x.png'
                break
    
            case 'céu limpo':
                cloud_div.src='http://openweathermap.org/img/wn/01d@2x.png'
                break 
            
            case 'nuvens dispersas':
                cloud_div.src='http://openweathermap.org/img/wn/03d@2x.png' 
                break
            
            case 'algumas nuvens':
                cloud_div.src='http://openweathermap.org/img/wn/02d@2x.png'
                break 
                           
            case 'neblina':
                cloud_div.src='http://openweathermap.org/img/wn/50d@2x.png'
                break
            case 'chuva leve':
                cloud_div.src='http://openweathermap.org/img/wn/10d@2x.png'   
                break 
            case 'neve':
                cloud_div.src='http://openweathermap.org/img/wn/13d@2x.png'
                break
            case 'chuva moderada':
                cloud_div.src='http://openweathermap.org/img/wn/09d@2x.png'   
                break
            case 'fumaça':
                cloud.div.src='http://openweathermap.org/img/wn/50d@2x.png'
                break
            case 'trovoada com chuva fraca':
                cloud.div.src='http://openweathermap.org/img/wn/11d@2x.png'      
                break  
                

        }
        let graus = Number(data.main.temp)
        graus = graus.toFixed(1)

        document.getElementById('cidade').value=''
        document.getElementById('city').innerHTML = data.name
        document.getElementById('temperature').innerHTML = `${graus}°C`;
        document.getElementById('humidity').innerHTML = `${data.main.humidity}%`;
        document.getElementById('wind').innerHTML = `${data.wind.speed}Km/h`;
        document.getElementById('description').innerHTML = `${cloud}`
       
        let pais = data.sys.country
        try{
            imagem.src=`https://flagsapi.com/${pais}/shiny/64.png`
            imagem.style.display='block'


        }catch{
            //pass
        }
        div_weather_data.style.display='block'
        cloud_div.style.display='block'
    }
   
}


function clean(){
    div_weather_data.style.display='none'
    cloud_div.style.display='none'
    document.getElementById('error_mensagem').innerHTML = ''
    document.getElementById('cidade').value = ''

    
}



//http://openweathermap.org/img/wn/01d@2x.png