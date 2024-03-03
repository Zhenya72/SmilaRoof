import apiUrl from '../../config'
import { Card, Button } from 'react-bootstrap';
import { TrashFill, Pencil, EyeFill, EyeSlashFill, ArrowUp } from 'react-bootstrap-icons';
import defaultImage from '../../img/defaultImg.svg';
import './Card.scss'
const AdminCard = ({ id, title, imageUrl, visibility, onDelete, onVisibility, onTransition, onEdit }) => {
  const imgSrc = imageUrl ? `${apiUrl}${imageUrl}` : defaultImage;

  return (
    <Card key={id} className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className='card__title'>{title}</Card.Title>
      </Card.Body>
      <Card.Footer className='card__button'>
        <Button onClick={() => onTransition(id)}><ArrowUp /></Button>
        <Button onClick={() => onVisibility(id)}>{visibility ? <EyeFill /> : <EyeSlashFill />}</Button>
        <Button onClick={() => onEdit(id)}><Pencil /></Button>
        <Button onClick={() => onDelete(id)}><TrashFill /></Button>
      </Card.Footer>
    </Card>
  );
};

export default AdminCard;



