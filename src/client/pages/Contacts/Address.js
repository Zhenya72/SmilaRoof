import {  } from 'react-bootstrap';
import { TelephoneFill, EnvelopeAtFill, GeoAltFill } from 'react-bootstrap-icons';
function Address() {
    return (
        <address>
          <ul className="list-unstyled list">
            <li><TelephoneFill className='icon'/><a className="link" href="tel:+380505121566">(050) 512-15-66</a></li>
            <li><EnvelopeAtFill className='icon'/><a className="link" href="malito:example@gmail.com">example@gmail.com</a></li>
            <li><GeoAltFill className='icon'/><a className="link light_color" href="https://maps.app.goo.gl/1d2LycgDX4f71n3Y9" target="_blank" rel="noreferrer">Україна, м. Сміла, <br/>вул. Севастопольська 27</a></li>
          </ul>
        </address>
    );
}

export default Address;
