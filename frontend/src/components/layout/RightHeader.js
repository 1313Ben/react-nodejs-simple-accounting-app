import Account from '../account/Account';
import './RightHeader.scss';

const RightHeader = () => {
  return (
  <div class="pd-l pd-t">
    <h4 >Konten</h4>             
    <div class="accounts-boxes">
      <Account title="Migros Bank" amount="1000.00" />
      <Account title="Raiffeisen" amount="1000.00" />
      <Account title="Neon" amount="500.00" />
    </div>
  </div>
  )
}

export default RightHeader;
