import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ModalAddCategory from './Modal/ModalAddCategory'
import ModalEditCategory from './Modal/ModalEditCategory'
import axios from 'axios';
import Loader from '../Components/Loader/Loader';
import apiUrl from '../config'
import MyCard from '../Components/MyCard/MyCard';
import ErrorAlert from '../Components/ErrorAlert/ErrorAlert';
import Search from '../Components/Search/Search';
import './pages/page.scss'
function Admin() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState('');  
  const [categoryImageUrl, setCategoryImageUrl] = useState('');  
  const [modalEditShow, setModalEdiShow] = useState(false);

  const fetchCategory = async () => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(`${apiUrl}/categories`);
      setCategory(response.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка отримання категорій');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteCategory = async (id) => {
    setLoading(true);
    setError(null); 
    try {
      await axios.delete(`${apiUrl}/categories/${id}`);
      fetchCategory();
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка видалення категорії. Спробуйте ще раз.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchVisibilityCategory = async (id) => {
    setLoading(true);
    setError(null); 
    try {
      await axios.put(`${apiUrl}/categories/${id}/visibility`);
      fetchCategory();
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка видимості категорії. Спробуйте ще раз.');
      }
    } finally {
      setLoading(false);
    }
  };

  const TransitionCategory = (id) => {
    navigate(`/admin/categories/${id}`);
  }

  const filteredCategories = category.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditCategory = (id, name, imageUrl) => {
    setCategoryId(id);  
    setCategoryName(name); 
    setCategoryImageUrl(imageUrl); 
    setModalEdiShow(true); 
  };

  const handleElitCloseModal = () => {
    setModalEdiShow(false);
  };

  useEffect(() => {
    fetchCategory();
  }, []);


  return (
    <Container className='conteiner'>
      <h1 className='title'>Категорії</h1>
      
      {loading && <Loader />}
      {error ? (
        <ErrorAlert error={error} />
      ) : (
      <div>  
        <Search searchTerm={searchTerm} handleSearch={(e) => setSearchTerm(e.target.value)} />
        <div className='conteiner__card'>
          {filteredCategories && filteredCategories.length > 0 ? (
            filteredCategories
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((cat) => (
                <MyCard
                  key={cat._id}
                  id={cat._id}
                  title={cat.name}
                  imageUrl={cat.imageUrl}
                  visibility={cat.visibility}
                  loading={loading}
                  onDelete={() => fetchDeleteCategory(cat._id)}
                  onVisibility={() => fetchVisibilityCategory(cat._id)}
                  onEdit={() => handleEditCategory(cat._id, cat.name, cat.imageUrl)}
                  onTransition={() => TransitionCategory(cat._id)}
                />
              ))
          ) : (
            <p className='notData'>Категорій за заданим запитом не знайдено або не створено</p>
          )}
        </div>
      </div>
      )}
      
      
      <ModalAddCategory fetchCategory={fetchCategory} />
      <ModalEditCategory modalEditShow={modalEditShow} id={categoryId} name={categoryName} imageUrl={categoryImageUrl} handleElitCloseModal={handleElitCloseModal} fetchCategory={fetchCategory}  />
      
    </Container>
  );
}

export default Admin;

