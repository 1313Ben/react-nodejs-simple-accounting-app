import TableSearchBar from "../table/table-search-filter/TableSearchBar";
import TableContent from "../table/tablecontent/TableContent";
import { useState, useEffect } from "react";
import axios from 'axios';

const MainContentLeft = () => {
  const [entriesData, setEntriesData] = useState([]);

  const url = "http://127.0.0.1:4000/entries";
  const fetchAllEntries = ()=>{
    let ret = axios.get(url);
    ret.then((response)=>{
      let entriesRes= response.data;
      if(entriesRes){       
        return entriesRes;
      }
    }).catch(err => {      
      if(err.response){
        console.log(err.response);
      }else{
        console.log(err);       
      }
    })
  }

  useEffect(() => {
    console.log("use effect running");  
    let ret = axios.get(url);
    ret.then((response)=>{
    let d= response.data;
    console.log(d); 
    d? setEntriesData(d): console.log("missing accounting data");
        
    }).catch(err => {     
      console.error(err);       
    })
  }, []);

  return (
    <> 
      <TableSearchBar/>            
      <TableContent entries={entriesData}/>
    </>
  )
}

export default MainContentLeft;
