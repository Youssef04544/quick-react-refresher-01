import React, { useState } from "react";
import { tourData } from "../setup/tourData";
import Tour from "./Tour";
const TourList = () => {
  const [tourList, setTourList] = useState(tourData);

  const removeTour = (id) => {
    const newList = tourList.filter((tour) => tour.id !== id);
    setTourList(newList);
  };
  return (
    <main className='tourlist'>
      {tourList.map((tour) => (
        <Tour
          {...tour}
          key={tour.id}
          handleRemove={() => removeTour(tour.id)}
        />
      ))}
    </main>
  );
};

export default TourList;
