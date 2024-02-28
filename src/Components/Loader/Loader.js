import st from './Loader.module.scss';
function Loader() {

    return (
        <>
            <div className={st.overlay}></div>
            <div><span className={st.loader}></span></div>
        </>
  );
}

export default Loader;







