import { Container } from 'react-bootstrap';
import UserCard from '../../../Components/MyCard/UserCard'
import { useNavigate } from 'react-router-dom';
import { useCategories } from '../../../store/store';
import { ToastContainer } from 'react-toastify';
import './Products.scss'

function Categories() {
  const navigate = useNavigate()
  const { categories } = useCategories();
  console.log(!categories.length)
  const TransitionCategory = (id) => {
    navigate(`/products/categories/${id}`);
  }

    return (
      <Container className='conteiner conteiner__message'>   
      <ToastContainer />  
        <h2 className="title">Каталог товарів</h2>
        <div className='products__grid'>
          {categories && !categories.length && <p className='notData'>Категорії відстуні</p>}
          {categories && categories.length>0 &&
            categories
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((cat) => (
                <UserCard
                  key={cat._id}
                  id={cat._id}
                  title={cat.name}
                  imageUrl={cat.imageUrl}
                  onTransition={() => TransitionCategory(cat._id)}
                />
              ))}
        </div>
      </Container>
  );
}

export default Categories;