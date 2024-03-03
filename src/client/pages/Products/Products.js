import { Container } from 'react-bootstrap';
import UserCard from '../../../Components/MyCard/UserCard'
// import { useNavigate, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSubcategories } from '../../../store/store';
import { ToastContainer } from 'react-toastify';
import './Products.scss'

function Products() {
  const products = []
  // const navigate = useNavigate()
  const { subcategoryID } = useParams();
  const { subcategories } = useSubcategories();
  const productsFilter = products?.filter((pr) => pr.subcategory._id === subcategoryID);
  const TransitionProduct = (id) => {
    // navigate(`/admin/categories/${id}`);
    console.log('navigate')
  }

    return (
      <Container className='conteiner conteiner__message'>   
      <ToastContainer />  
        <h2 className="title">{subcategories.filter((sub) => sub._id === subcategoryID)[0]?.name}</h2>
        {productsFilter && !productsFilter.length && <p className='notData'>Товари відстуні</p>}
        <div className='products__grid'>
          {productsFilter && productsFilter.length>0 &&
            productsFilter
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((cat) => (
                <UserCard
                  key={cat._id}
                  id={cat._id}
                  title={cat.name}
                  imageUrl={cat.imageUrl}
                  onTransition={() => TransitionProduct(cat._id)}
                />
              ))}
        </div>
      </Container>
  );
}

export default Products;