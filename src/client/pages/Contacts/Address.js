import { TelephoneFill, EnvelopeAtFill, GeoAltFill } from 'react-bootstrap-icons';
function Address() {
    return (
        <address>
          <ul className="list-unstyled list">
            <li className='contacts__phone'>
              <TelephoneFill className='icon' />
              <div className='contacts__phone_number'>
                <a className="link" href="tel:+380505121566">(050) 512-15-66</a>
                <a className="link" href="tel:+380635121566">(063) 512-15-66</a>
                <a className="link" href="tel:+380995121566">(099) 512-15-66</a>
              </div>
            </li>
            <li><EnvelopeAtFill className='icon'/><a className="link" href="malito:example@gmail.com">example@gmail.com</a></li>
            <li><GeoAltFill className='icon'/><a className="link light_color" href="https://maps.app.goo.gl/1d2LycgDX4f71n3Y9" target="_blank" rel="noreferrer">Україна, м. Сміла, <br/>вул. Севастопольська 27</a></li>
          </ul>
        </address>
    );
}

export default Address;
