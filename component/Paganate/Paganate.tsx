import ReactPaginate from "react-paginate";
import Styles from'../Paganate/Paganate.module.css'

function Paganate({paginate}:any) {

    const handleclickitem =(data:any)=>{
        paginate(data.selected + 1)
    }


  return (
    <div  className={Styles.paganateall}>
      <ReactPaginate
        className={Styles.paganate}
        previousLabel={"←"}
        nextLabel={"→"}
        breakLabel={"..."}
        pageCount={500}
        onPageChange={handleclickitem}
        pageClassName={"item"}
      />
    </div>
  );
}
export default Paganate;
