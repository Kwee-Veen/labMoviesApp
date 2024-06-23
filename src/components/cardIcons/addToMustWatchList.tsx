import React from "react";
// import React, {MouseEvent, useContext} from "react";
// import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {BaseMovieProps} from "../../types/interfaces"

const AddToMustWatchListIcon: React.FC<BaseMovieProps> = (movie) => {

// -x- Keeping for reference (original AddToFavouritesIcon code this was refactored from) -x-

//   const context = useContext(MoviesContext);

//   const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     context.addToFavourites(movie);
//   };
//   return (
//     <IconButton aria-label="add to favorites" onClick={onUserSelect}>
//       <FavoriteIcon color="primary" fontSize="large" />
//     </IconButton>
//   );
// };

return (
  <IconButton aria-label="add to must watch list">
    <PlaylistAddIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default AddToMustWatchListIcon;