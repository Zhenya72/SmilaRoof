import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ModalAddItem from './Modal/ModalAddItem';
import ModalEditItem from './Modal/ModalEditItem';
import Loader from '../Components/Loader/Loader';
import MyCard from '../Components/MyCard/MyCard';
import Search from '../Components/Search/Search';
import { useGetCategories, useDeleteCategory, useVisibilityCategory, useEditCategory, useAddCategory } from '../queries/CategoryQueries';
import { ToastContainer } from 'react-toastify';
import './pages/page.scss'

function Admin() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImageUrl, setCategoryImageUrl] = useState('');
  const [modalEditShow, setModalEdiShow] = useState(false);

  const { data: categories, isLoading } = useGetCategories(); 

  const deleteCategoryMutation = useDeleteCategory();
  const visibilityCategoryMutation = useVisibilityCategory();
  const addCategoryMutation = useAddCategory();
  const editCategoryMutation = useEditCategory();
  
  const TransitionCategory = (id) => {
    navigate(`/admin/categories/${id}`);
  }

  const filteredCategories = categories?.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditCategory = (id, name, imageUrl) => {
    setCategoryId(id);  
    setCategoryName(name); 
    setCategoryImageUrl(imageUrl); 
    setModalEdiShow(true); 
  };

  const handleEditCloseModal = () => {
    setModalEdiShow(false);
  };

  return (
    <Container className='conteiner'>
      <ToastContainer />
      <h1 className='title'>Категорії</h1>
      {isLoading && <Loader />}
      {filteredCategories && !filteredCategories.length && <p className='notData'>Категорій за заданим запитом не знайдено або не створено</p>}
      <div>  
        <Search searchTerm={searchTerm} handleSearch={(e) => setSearchTerm(e.target.value)} isDisabled={!categories || !categories.length}/>
        <div className='conteiner__card'>
          {filteredCategories && filteredCategories.length>0 &&
            filteredCategories
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((cat) => (
                <MyCard
                  key={cat._id}
                  id={cat._id}
                  title={cat.name}
                  imageUrl={cat.imageUrl}
                  visibility={cat.visibility}
                  onDelete={() => deleteCategoryMutation.mutate(cat._id)}
                  onVisibility={() => visibilityCategoryMutation.mutate(cat._id)}
                  onEdit={() => handleEditCategory(cat._id, cat.name, cat.imageUrl)}
                  onTransition={() => TransitionCategory(cat._id)}
                />
              ))}
        </div>
      </div>
      <ModalAddItem
        type="category"
        onSubmit={(name, imageUrl) => addCategoryMutation.mutate(name, imageUrl)}
      />
      <ModalEditItem
        modalEditShow={modalEditShow}
        id={categoryId}
        type="category"
        initialName={categoryName}
        initialImageUrl={categoryImageUrl}
        handleEditCloseModal={handleEditCloseModal}
        onSubmit={(id, name, imageUrl) => editCategoryMutation.mutate(id, name, imageUrl)}
      />
    </Container>
  );
}

export default Admin;

