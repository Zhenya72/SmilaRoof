import { useState, useEffect } from 'react';
import { CartCheckFill, Search, ChevronRight, GridFill } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useGetCategoryVisibility } from '../../queries/CategoryQueries';
import { useGetSubcategoriesVisibility } from '../../queries/SubcategoryQueries';
import { ToastContainer } from 'react-toastify';
import { useCategories, useSubcategories } from '../../store/store';
import { useActiveLink } from '../Context/ActiveLinkContext';
function HeadProducts() {
  const navigate = useNavigate()
  const { handleNavLinkClick } = useActiveLink();
  const { categories } = useCategories();
  const { subcategories } = useSubcategories();
  useGetCategoryVisibility(); 
  useGetSubcategoriesVisibility(); 
  const [showCategories, setShowCategories] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState({});
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleMouseEnterCategories = (categoryId) => {
    setShowCategories(true);
    setSelectedCategoryId(categoryId);
  };
  const handleMouseLeaveCategories = () => {
    setShowCategories(false);
  };

  const handleMouseEnterSubcategories = (categoryId) => {
    setVisibleCategories((prev) => ({ ...prev, [categoryId]: true }));
  };
  const handleMouseLeaveSubcategories = (categoryId) => {
    setVisibleCategories((prev) => ({ ...prev, [categoryId]: false }));
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 150;
    setIsFixed(scrollY > threshold);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className={`header__products ${isFixed ? 'header__products_fixed' : ''}`}>
        <Container className='header__products_conteiner'>
          <div className="header__products_button">
            <button
              onClick={() => { navigate('products'); handleNavLinkClick('/products') }}
              onMouseEnter={handleMouseEnterCategories}
              onMouseLeave={handleMouseLeaveCategories}
            >
              <GridFill style={{ fontSize: '25px' }} /> Каталог товарів
            </button>
            {showCategories && (
              <div
                className='header__category_list'
                onMouseEnter={handleMouseEnterCategories}
                onMouseLeave={handleMouseLeaveCategories}
              >
                {categories && categories.length>0 &&
                  categories
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((category) => (
                      <div key={category._id} className="category__container">
                        <button
                          className={`btn__category_list ${selectedCategoryId === category._id ? 'selected' : ''}`}
                          onMouseEnter={() => { handleMouseEnterSubcategories(category._id); handleMouseEnterCategories(category._id) }}
                          onMouseLeave={() => handleMouseLeaveSubcategories(category._id)}
                          onClick={() => { navigate(`/products/categories/${category._id}`); handleNavLinkClick('/products') }}
                        >
                          {category.name} <ChevronRight style={{ fontSize: '25px' }} />
                        </button>
                          {visibleCategories[category._id] && (
                            <div
                              className="header__subcategory_list"
                              onMouseEnter={() => handleMouseEnterSubcategories(category._id)}
                              onMouseLeave={() => handleMouseLeaveSubcategories(category._id)}
                            >
                              {subcategories && subcategories.length > 0 &&
                                subcategories
                                .filter((sub) => sub.category._id === category._id)
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((subcategory) => (
                                  <button
                                    key={subcategory._id}
                                    className="btn__subcategory_list"
                                    onClick={() => { navigate(`/products/subcategory/${subcategory._id}`); handleNavLinkClick('/products') }}
                                  >
                                    {subcategory.name}
                                  </button>
                                ))}
                            </div>
                          )}
                      </div>
                    ))}
              </div>
            )}
          </div>
          <div className="header__products_input">
            <Search style={{fontSize:'25px'}}/>
            <input type="text" placeholder="Пошук товарів" />
          </div>
          <div className="header__products_button">
            <button className='basket__container'>
              <CartCheckFill className='basket' />
              <span>0</span>
            </button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeadProducts;