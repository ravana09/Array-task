let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response)
    console.log(data)

    //a.Get all the countries from Asia continent /region using Filter function
    //  let filteredArray =data.filter((value) => value.region ==="Asia"
    //  )
    //  console.log(filteredArray)

    //b.Get all the countries with a population of less than 2 lakhs using Filter function
    // let populationArray =data.filter((value)=>value.population<200000 )
    // console.log(populationArray)

   //c.Print the following details name, capital, flag, using forEach function
    // data.forEach((value)=> {
    //     console.log(`
    //     Name:${value.name.common},
    //     Capital:${value.capital},
    //     Flags:${value.flag}
    //     `)
    // });   
    //d.Print the total population of countries using reduce function
    //  let ReducedArray = data.reduce((acc,value)=>{
    //     return acc +=value.population
    // },0)
    // console.log(ReducedArray)

    //e.Print the country that uses US dollars as currency.

  


}




