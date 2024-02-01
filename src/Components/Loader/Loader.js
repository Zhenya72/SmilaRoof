import st from './Loader.module.css';


function Loader() {

    return (
        <>
            <div className={st.overlay}></div>
            <div><span className={st.loader}></span></div>
        </>
  );
}

export default Loader;







