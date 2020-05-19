import React from 'react';
import './App.css';

//import Cards from './component/Cards';
//import Chart from './component/Chart';
//import CountryPicker from './component/CountryPicker';

import {Cards,Chart,CountryPicker} from './component';
import styles from './App'
import {fetchData} from './api';
import covid from './images/covid.png'

class App extends React.Component{
state ={
  data:{},
  country:''
}
  async componentDidMount(){  
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
  }

handleCountryChange =async (country)=>{
  const fetchedData=await fetchData(country)
  this.setState({data:fetchedData,country:country});
 // console.log(country)
  //console.log(fetchedData)
}
  render(){
  return(
    <div className={styles.container}>
      <img src={covid}/>
      <Cards data ={this.state.data }/>
      <Chart/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
    </div>
  )
}
}

export default App;
