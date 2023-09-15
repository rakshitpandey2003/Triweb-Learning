function Product(){
    let Products = [
        {
            id:"p1",
            product:"lifeboii",
            image:"",
            description:"can kill",
            price : "20"
        },
        {
            id:"p2",
            product:"harpic",
            image:"",
            description:"aankhe dholo guys",
            price : "60"
        }

    ]
    return <div>
            <ul>{Products.map((item)=>{
                return <li key={item.id}>{item.product}</li>;
            })}</ul>
    </div>
}

export default Product;