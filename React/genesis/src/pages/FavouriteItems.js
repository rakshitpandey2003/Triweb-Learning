import FavouriteContext from '../store/contextFavourite'
import { useContext } from 'react'
import ProductList from "../components/product/Productlist";

const FavouriteItems = () => {

    const favouriteContext = useContext(FavouriteContext);

  return (
    <div>
        <h1>Favourites</h1>
      <ProductList products={favouriteContext.favouriteItems} />
    </div>
  )
}

export default FavouriteItems