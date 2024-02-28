import apiUrl from '../../config'
import { Card, Button } from 'react-bootstrap';
import { TrashFill, Pencil, EyeFill, EyeSlashFill, ArrowUp } from 'react-bootstrap-icons';
import defaultImage from '../../img/defaultImg.svg';
import st from './MyCard.module.scss'
const MyCard = ({ id, title, imageUrl, visibility, loading, onDelete, onVisibility, onTransition, onEdit }) => {
  const imgSrc = imageUrl ? `${apiUrl}${imageUrl}` : defaultImage;

  return (
    <Card key={id} className={st.card} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className={st.card__title}>{title}</Card.Title>
      </Card.Body>
      <Card.Footer className={st.card__button}>
        <Button onClick={() => onTransition(id)} disabled={loading}><ArrowUp /></Button>
        <Button onClick={() => onVisibility(id)} disabled={loading}>{visibility ? <EyeFill /> : <EyeSlashFill />}</Button>
        <Button onClick={() => onEdit(id)} disabled={loading}><Pencil /></Button>
        <Button onClick={() => onDelete(id)} disabled={loading}><TrashFill /></Button>
      </Card.Footer>
    </Card>
  );
};

export default MyCard;



