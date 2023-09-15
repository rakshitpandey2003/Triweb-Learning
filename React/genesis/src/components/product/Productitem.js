import styles from "./Product.module.css";
function Productitem(props){
    return <li key = {props.item.id}>
        <div>
            <div className={styles.image}>
                <img src={props.item.image} alt="Nothing to display"></img>
            </div>
            <div className={styles.content}>
                <h2>{props.item.product_name}</h2>
                <p>{props.item.description}</p>
                <h4>{props.item.price}</h4>
            </div>
            <div className={styles.btn}><button>Purchase</button></div>
        </div>
    </li>
}
export default Productitem;