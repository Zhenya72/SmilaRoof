import { Container } from 'react-bootstrap';
import UserCard from '../../../Components/MyCard/UserCard'
import { useNavigate, useParams } from 'react-router-dom';
import { useCategories, useSubcategories } from '../../../store/store';
import { ToastContainer } from 'react-toastify';
import './Products.scss'

function Subcategories() {
  const navigate = useNavigate()
  const { categoryID } = useParams();
  const { categories } = useCategories();
  const { subcategories } = useSubcategories();
  const subcategoriesFilter = subcategories?.filter((sub) => sub.category._id === categoryID);
  const TransitionSubcategory = (id) => {
    navigate(`/products/subcategory/${id}`);
  }

    return (
      <Container className='conteiner conteiner__message'>   
      <ToastContainer />  
        <h2 className="title">{categories.filter((sub) => sub._id === categoryID)[0]?.name}</h2>
        {subcategoriesFilter && !subcategoriesFilter.length && <p className='notData'>Підкатегорії відстуні</p>}
        <div className='products__grid'>
          {subcategoriesFilter && subcategoriesFilter.length>0 &&
            subcategoriesFilter
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((cat) => (
                <UserCard
                  key={cat._id}
                  id={cat._id}
                  title={cat.name}
                  imageUrl={cat.imageUrl}
                  onTransition={() => TransitionSubcategory(cat._id)}
                />
              ))}
        </div>
      </Container>
  );
}

export default Subcategories;