const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name  = document.getElementById('city_name');

const temp_real_val =  document.getElementById('temp_real_val');
const temp_status =  document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer')



const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;


    if(cityVal === ""){
        city_name.innerText = `Please Write the  Name of the City Before Search`;
        datahide.classList.add("data_hide");
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bf320e61be9d3646d11b1873cd731688`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText  = ` ${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMode = arrData[0].weather[0].main;

            if(tempMode==="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>"

            }else if(tempMode === "Clouds"){
                temp_status.innerHTML =
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"


            }else if(tempMode === "Rain"){
                temp_status.innerHTML =
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"


            }else if(tempMode ==="Haze"){
                temp_status.innerHTML =
                "<i class='fas fa-sun-haze' style='color: #eccc68;'></i>"
            }
            else  if(tempMode ==="Mist"){
                temp_status.innerHTML =
                "<i class='fa-solid fa-cloud-fog' style='color: #009ad8;'></i>"

            }
            else  {
                temp_status.innerHTML =
                "<i class='fas fa-sun' style='color: #eccc68;'></i>"

            }
            datahide.classList.remove("data_hide")

        }catch{
            city_name.innerText = `Please Write the Proper Name of the City`
            datahide.classList.add("data_hide")
        }
    }
   }

submitBtn.addEventListener('click', getInfo);