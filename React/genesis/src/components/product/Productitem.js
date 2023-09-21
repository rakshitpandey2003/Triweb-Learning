import Wrapper from "../layouts/Wrapper";
import styles from "./Productitem.module.css";
import FavouriteContext from '../../store/contextFavourite'
import { useContext } from 'react'
function Productitem(props){
    const favouriteContext = useContext(FavouriteContext);

    const isFavourite = favouriteContext.isFavouriteItem(props.item._id);

    const toggleFavourite = () => {
        if (isFavourite) {
            favouriteContext.removeFavouriteItem(props.item._id);
        }
        else {
            favouriteContext.addFavouriteItem({ ...props.item });
        }
    }

    return (
        <li key={props.item.id}>
            <Wrapper>
                <div className={styles.image}>
                    <img src={props.item.image} alt="Nothing to display" />
                </div>
                <div className={styles.content}>
                    <h2>{props.item.product_name}</h2>
                    <p>{props.item.description}</p>
                    <h4>{props.item.price}</h4>
                </div>
                <div className={styles.btn}>
                    <button>Purchase</button>
                </div>
                <div>
                <button className={
                        isFavourite ? styles.heartFvrt : styles.heartUnfvrt                        
                    }
                        onClick={toggleFavourite}></button>
                </div>
            </Wrapper>
        </li>
    )
}
export default Productitem;