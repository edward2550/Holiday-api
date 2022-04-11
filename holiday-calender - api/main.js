//list of countries 
const COUNTRY_URL = 'https://date.nager.at/api/v2/AvailableCountries'
document.querySelector('.clear').addEventListener('click',() =>{
    document.querySelector('.holiday-info').innerHTML = ''
})
let select = document.querySelector('#ls-country')
let listt = document.querySelector('.holiday-info')


fetch(COUNTRY_URL)
    .then(res => res.json())
    .then(data => {
    // let countryArray = Object.keys(countryObject)
    // diffeent from the dog API / the data come back easier to manage and ready to display , unlike the dog api where i had to Object.Keys to return an array that was easier to handle     
        let countryArray = data
        console.log(countryArray)
        for(let i = 0; i < countryArray.length; i++){
            let option = document.createElement('option')
            option.value = countryArray[i].key
            //specificly had to select the value property to return the name of the country i wanted to to show in the option list 
            option.innerText = countryArray[i].value
            select.appendChild(option)
        }
    })
    select.addEventListener('change',event => {
        let url = `https://date.nager.at/api/v1/Get/${event.target.value}/${2022}`
        holiday(url)
    })

    let hName = document.querySelector('h2')

    let holiday = url => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let holidayArray = data
            console.log(holidayArray)
 
            for(let i = 0; i < holidayArray.length; i++){
                let list = document.createElement('li')
                list.innerText = `Holiday: ${holidayArray[i].name} , Date : ${holidayArray[i].date}`
                listt.appendChild(list)
 
            }
        })
       
    }

