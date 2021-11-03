import React from 'react';
import "./TableContent.scss"
import Entry from "../../entry/Entry"

const TableContent = (props)=>{
    const {entries}=props;

    return(
        <div class="table-column">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Datum</th>
              <th>TYP</th>
              <th>BETRAG</th>
              <th>KONTO</th>
              <th>KATEGORIE</th>
              <th>KOMMENTAR</th>
            </tr>
          </thead>        
          <tbody>
            { entries && entries.length > 0 ?( 
              entries.map(item=>{ return <Entry entry={item} key={item.id}/>} )
              ) : (
              <tr><td>''</td><td>{`no data`}</td>
              <td>{`no data`}</td>
              <td>{`no data`}</td>
              <td>{`no data`}</td>
              <td>{`no data`}</td>
              <td>{`no data`}</td></tr>
              ) }
            
          </tbody>
        </table>
        </div>
    )
}

export default TableContent;
