import styles from "./Productlist.module.css";
import Productitem from "./Productitem"
function Productlist(props) {
    return <ul className={styles.list}>
                {props.products.map((item)=>{
                return <Productitem key={item._id} id={item._id} item = {item}/>
            })}
    </ul>
}

export default Productlist;