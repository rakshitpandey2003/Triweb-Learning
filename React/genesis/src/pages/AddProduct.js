import AddProductForm from "../components/product/AddProductForm";

function AddProduct(){
    function addProductHandler(newProduct) {
        fetch("http://localhost:3002/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    return <AddProductForm addProductHandler = {addProductHandler}/>
}
export default AddProduct;