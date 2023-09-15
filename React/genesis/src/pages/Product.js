import Productlist from "../components/product/Productlist";
function Product(){
    let products = [
        {
            id:"p1",
            product_name:"lifeboii",
            image:"/images/lifeboii.jpeg",
            description:"can kill",
            price : "20"
        },
        {
            id:"p2",
            product_name:"harpic",
            image:"/images/harpic.jpeg",
            description:"aankhe dholo guys",
            price : "60"
        }

    ]
    return <div>
            <ul>
            <Productlist products = {products}/>
            </ul>
    </div>
}

export default Product;