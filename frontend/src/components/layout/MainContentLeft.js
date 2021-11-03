import TableSearchBar from "../table/table-search-filter/TableSearchBar";
import TableContent from "../table/tablecontent/TableContent";
import { useState } from "react";

const MainContentLeft = () => {
  const [entriesData, setEntriesData] = useState([]);
  return (
    <> 
      <TableSearchBar/>            
      <TableContent entries={entriesData}/>
    </>
  )
}

export default MainContentLeft;
