import styles from "./Product.module.css";
import Productitem from "./Productitem"
function Productlist(props) {
    return <div className={styles.list}>
                {props.products.map((item)=>{
                return <Productitem key={item.id} id={item.id} item = {item}/>
            })}
    </div>
}

export default Productlist;