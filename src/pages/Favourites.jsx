import FavouritesContext from "../store/favourites-context";
import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Favourites = () => {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favorites yet, Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;
