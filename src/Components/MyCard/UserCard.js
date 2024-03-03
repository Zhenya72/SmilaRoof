import apiUrl from '../../config'
import { Card } from 'react-bootstrap';
import defaultImage from '../../img/defaultImg.svg';
import './Card.scss'
const UserCard = ({ id, title, imageUrl, onTransition }) => {
  const imgSrc = imageUrl ? `${apiUrl}${imageUrl}` : defaultImage;

  return (
    <Card key={id} className='card products__card' style={{ width: '18rem' }} onClick={() => onTransition(id)}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className='card__title'>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserCard;



