import st from './MyButton.module.scss'
const MyButton = ({ children, className, ...props }) => {
  return (
      <button {...props} className={`${st.button} ${className}` }>
      {children}
    </button>
  );
};

export default MyButton;



