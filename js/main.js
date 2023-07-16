let searchinput = document.getElementById("searchinput")
let Days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];




let data;

async function getdata(city = "cairo") {
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1e7bfb01a3204eab86e132104232502&q=${city}&days=3`)
    data = await res.json()


    
    
    if( !data.error){
     
      displayCurrent(data.current)
      displayForCast(data.forecast.forecastday)
      console.log(res.status);
      console.log(data.error);

    }

   



}


getdata()



searchinput.addEventListener("keyup", function () {
if(searchinput.value.length>3){
  getdata(searchinput.value)
}
  


})




function displayCurrent() {
    let hamda=data.forecast.forecastday;
  
    let numDay =new Date(hamda[0].date);
    let indDay =numDay.getDay()

    let numMonth =new Date(hamda[0].date);
    let indMonth =numMonth.getMonth()


let theDAy=hamda[0].date.split("-");
    // console.log(theDAy);
    
    let temp = `>
    <div class="item text-muted ">
    <div class="head  bg-black bg-opacity-25 d-flex justify-content-between p-2">
      <span id="couDay" class="blue" >${Days[indDay]}</span>
      

      <span class="blue">${theDAy[2]} ${months[indMonth]}</span>
    </div>
    <p class="fa-2x ms-2  text-center" id="CountryName">${data.location.name}</p>
    


    <div class="forcast ">
      <div class="pforcast d-flex justify-content-between">
        <p class="numdeg ms-4  ">${data.current.temp_c}<sup>o</sup>C</p>
        

        <div class="iiccon align-self-center text-white ">
          <img src="https:${data.current.condition.icon}" alt="">



        </div>

      </div>




    </div>

    <p class="blue  ms-3  fa-2x text-center">${data.current.condition.text}</p>


    <div class="foot text-muted d-flex justify-content-around p-2">
      <i class="fa-solid fa-umbrella "><span class=" ms-2">10 %</span></i>

      <i class="fa-solid fa-wind "><span class=" ms-2">18 km/h</span></i>

      <i class="fa-solid fa-compass "><span class=" ms-2"> East</span></i>

    </div>

  </div>


`

    document.getElementById("currentWeather").innerHTML = temp;

}

function displayForCast() {
 let temp = ""
    let hamda=data.forecast.forecastday;
    // console.log(hamda);
    let numDay =new Date(hamda[1].date);
    let numDay2 =new Date(hamda[2].date);
    let indDay =numDay.getDay()
    let indDay2 =numDay2.getDay()






    for (let i = 1; i < hamda.length; i++) {
       
        temp = ` <div class="row mt-4">
        <div class="col-md-6">
          <div class="item text-muted  ">
            <div class="head text-center bg-black bg-opacity-25 d-flex justify-content-between p-2">
              <span class="blue  mx-auto" id="CountryName">${Days[indDay]}</span>
            </div>

            <div class="iitem d-flex align-items-center justify-content-center flex-column ">


              <img class="mt-4" src="https:${hamda[1].day.condition.icon}" alt="">
             <p class="numdeg ms-4 ">${hamda[1].day.maxtemp_c}<sup>o</sup>C</p> 
      <p class="blue fa-2x">${hamda[1].day.mintemp_c}<sup>o</sup></p> 
             
            </div>

            <div class="foot text-muted d-flex justify-content-around ms-2 p-2">
              <i class="fa-solid fa-umbrella "><span class="">0 %</span></i>

              <i class="fa-solid fa-wind "><span class="">20 km/h</span></i>

              <i class="fa-solid fa-compass "><span class=""> East</span></i>

            </div>

          </div>


        </div>


        <div class="col-md-6">
          <div class="item text-muted  ">
            <div class="head text-center bg-black bg-opacity-25 d-flex justify-content-between p-1">
              <span class="blue  mx-auto" id="CountryName">${Days[indDay2]}</span>
            </div>

            <div class="iitem d-flex align-items-center justify-content-center flex-column ">


              <img class="mt-4" src="https:${hamda[2].day.condition.icon}" alt="">

              <p class="numdeg ms-4 ">${hamda[2].day.maxtemp_c}<sup>o</sup>C</p>
      <p class="blue fa-2x">${hamda[2].day.mintemp_c}<sup>o</sup></p>
            
            </div>

            <div class="foot text-muted d-flex justify-content-around ms-2 p-3">
              <i class="fa-solid fa-umbrella "><span class="ms-1">0 %</span></i>

              <i class="fa-solid fa-wind "><span class="ms-1">30 km/h</span></i>

              <i class="fa-solid fa-compass "><span class="ms-1"> East</span></i>

            </div>

          </div>


        </div>
      </div>`

    }






    document.getElementById("forcast").innerHTML = temp;
}



















