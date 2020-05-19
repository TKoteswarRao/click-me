import axios from 'axios';


const url='https://covid19.mathdro.id/api';

export const fetchData =async (country) => {
let changeableurl=url;
if(country){
    changeableurl=`${url}/countries/${country}`
}

    try {
     /*   const {data} =await axios.get(url);
        const modifiedData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastupdate:data.lastupdate
        }
        return modifiedData; */

        const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get(changeableurl);
       // const modifiedData={confirmed,recovered,deaths,lastupdate}
        return {confirmed,recovered,deaths,lastUpdate};

    } catch (error) {
        
    }
}
export  const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
}




