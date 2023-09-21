import styles from "./AddProductform.module.css";
import CustomWrapper from '../layouts/Wrapper';
import { useRef } from "react";
function AddProductForm(props){
    const product_name_ref=useRef();
    const image_ref=useRef();
    const price_ref=useRef();
    const description_ref=useRef();
    function submitHandler(event){
        event.preventDefault();
        const product_name = product_name_ref.current.value;
        const image = image_ref.current.value;
        const price = price_ref.current.value;
        const description = description_ref.current.value;
        const product = {
            product_name,
            image,
            price,
            description
        };
        props.addProductHandler(product);
    }
    return <CustomWrapper>
        <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.groups}>
                    <label>Enter Product Name:</label>
                    <input type="text" placeholder="product name" ref={product_name_ref}/>
                </div>
                <div className={styles.groups}>
                <label>Enter Product Image:</label>
                    <input type="text" placeholder="image"  ref={image_ref}/>
                </div>
                <div className={styles.groups}>
                <label>Enter Product Price:</label>
                    <input type="text" placeholder="price"  ref={price_ref}/>
                </div>
                <div className={styles.groups}>
                <label>Enter Product Description:</label>
                    <textarea rows="5" id="description"  ref={description_ref}/>
                </div>
                <div className={styles.btn}><button>submit</button></div>
        </form>
    </CustomWrapper>
}
export default AddProductForm;