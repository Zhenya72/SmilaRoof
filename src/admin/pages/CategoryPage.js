import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ModalAddSubcategory from '../Modal/ModalAddSubcategory'
import ModalEditSubcategory from '../Modal/ModalEditSubcategory'
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import apiUrl from '../../config'
import MyCard from '../../Components/MyCard/MyCard';
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';
import Search from '../../Components/Search/Search';
import './page.scss'
const CategoryPage = () => {
  const navigate = useNavigate();
  const { categoryID } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoryName, setCategoryName] = useState('');  
  const [subcategory, setSubcategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [subcategoryId, setSubcategoryId] = useState(null);
  const [subcategoryName, setSubcategoryName] = useState('');
  const [subcategoryImageUrl, setSubcategoryImageUrl] = useState('');
  const [modalEditShow, setModalEdiShow] = useState(false);
  
  const fetchCategory = async (categoryID) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(`${apiUrl}/categories/${categoryID}`);
      setCategoryName(response.data.name);
      setError(null); 
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


  const fetchSubcategory = async (categoryID) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(`${apiUrl}/subcategories/category/${categoryID}`);
      setSubcategory(response.data);
      setError(null); 
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка отримання підкатегорій');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteCategory = async (categoryID, id) => {
    setLoading(true);
    setError(null); 
    try {
      await axios.delete(`${apiUrl}/subcategories/${id}`);
      fetchSubcategory(categoryID);
      setError(null); 
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка видалення підкатегорії');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchVisibilityCategory = async (categoryID, id) => {
    setLoading(true);
    setError(null); 
    try {
      await axios.put(`${apiUrl}/subcategories/${id}/visibility`);
      fetchSubcategory(categoryID);
      setError(null); 
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка видимості підкатегорії');
      }
    } finally {
      setLoading(false);
    }
  };

  const TransitionCategory = (categoryID, id) => {
    navigate(`/admin/categories/${categoryID}/subcategory/${id}`);
  }

  const filteredCategories = subcategory.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditCategory = (id, name, imageUrl) => {
    setSubcategoryId(id);  
    setSubcategoryName(name); 
    setSubcategoryImageUrl(imageUrl); 
    setModalEdiShow(true); 
  };

  const handleElitCloseModal = () => {
    setModalEdiShow(false);
  };

  useEffect(() => {
    if (categoryID !== undefined) {
      fetchCategory(categoryID);
      fetchSubcategory(categoryID);
    }
  }, [categoryID]);
    
  return (
    <Container className='conteiner'>
      <h1 className='title'>Категорія { categoryName }</h1>
      {loading && <Loader />}
      {error ? (<ErrorAlert error={error} />) : (
        <div>
          <Search searchTerm={searchTerm} handleSearch={(e) => setSearchTerm(e.target.value)} />
        <div className='conteiner__card'>
        {filteredCategories && filteredCategories.length > 0 ? (
          filteredCategories.sort((a, b) => a.name.localeCompare(b.name))
            .map((cat) => (
              <MyCard
                key={cat._id}
                id={cat._id}
                title={cat.name}
                imageUrl={cat.imageUrl}
                visibility={cat.visibility}
                loading={loading}
                onDelete={() => fetchDeleteCategory(categoryID, cat._id)}
                onVisibility={() => fetchVisibilityCategory(categoryID, cat._id)}
                onEdit={() => handleEditCategory(cat._id, cat.name, cat.imageUrl)}
                onTransition={() => TransitionCategory(categoryID, cat._id)}
              />
            ))
        ) : (
          <p className='notData'>Підкатегорій ще не створено</p>
        )}
          </div>
      </div>)}
      
      
      <ModalAddSubcategory fetchSubcategory={fetchSubcategory} categoryID={categoryID} />
      <ModalEditSubcategory modalEditShow={modalEditShow} id={subcategoryId} name={subcategoryName} imageUrl={subcategoryImageUrl} handleElitCloseModal={handleElitCloseModal} fetchSubcategory={fetchSubcategory} categoryID={categoryID}  />
      
    </Container>
  );
};

export default CategoryPage;