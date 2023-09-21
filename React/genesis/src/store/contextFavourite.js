import { useState ,createContext } from "react";

const FavouriteContext = createContext({
    favouriteItems:[],
    addFavouriteItem: () => {},
    removeFavouriteItem: () => {},
    isFavouriteItem: () => {}
})

export const ContextFavourite = (props) => {

    const [userFavourite, setUserFavourite] = useState([]);

    const addFavouriteItem = (product) => {
        setUserFavourite((prevFav) => {
          return prevFav.concat(product);
        });
    };

    const removeFavouriteItem = (id) => {
        setUserFavourite((prevData) => {
          return prevData.filter((product) => product._id !== id);
        });
    };

    const isFavouriteItem = (id) => {
        return userFavourite.some((product) => product._id === id);
    };
    

    const context = {
        favouriteItems:userFavourite,
        addFavouriteItem,
        removeFavouriteItem,
        isFavouriteItem
    }

  return (
    <FavouriteContext.Provider value={context}>
        {props.children
    }</FavouriteContext.Provider>
  )
}

export default FavouriteContext