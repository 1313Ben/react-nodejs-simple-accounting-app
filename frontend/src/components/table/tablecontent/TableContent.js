import "./TableContent.scss"
import Entry from "../../entry/Entry"

const TableContent = ()=>{
    return(
        <div class="table-column border">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Datum</th>
              <th>TYP</th>
              <th>KOMMENTAR</th>
              <th>BETRAG</th>
              <th>KONTO</th>
              <th>KATEGORIE</th>
            </tr>
          </thead>
          {/* TO DO: Implement display new entry, edit and delete --> */}
          <tbody>
            <Entry />
          </tbody>
        </table>
        </div>
    )
}
export default TableContent;