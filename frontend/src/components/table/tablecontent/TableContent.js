import React from 'react';
import "./TableContent.scss"
import Entry from "../../entry/Entry"

const TableContent = (props)=>{
    const {entries}=props;

    return(
        <div className="table-column">
        <table className="u-full-width">
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
              entries.map(item=>{ return <Entry key={item.id} entry={item} />} )
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
