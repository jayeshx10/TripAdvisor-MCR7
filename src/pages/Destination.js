import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "/src/db/database";

export const Destination = () => {
  const { continentID, countryID, destinationID } = useParams();

  const continentsArray = data.continents;
  const countriesArray = continentsArray[continentID - 1].countries;
  const destinationsArray = countriesArray[countryID - 1].destinations;

  const [place, setPlace] = useState([]);

  useEffect(() => {
    const response = destinationsArray.find(
      (destination) => destination.id === Number(destinationID)
    );
    setPlace(response);
  }, []);

  return (
    <div>
      <div>
        <Link to="/" className="link-styling">
          <img
            alt="home-icon"
            height="70"
            src="https://thenounproject.com/api/private/icons/5859914/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
          />
        </Link>
        <Link to={`/tourist_places/${continentID}/${countryID}`}>
          <img
            alt="back-icon"
            height="70"
            src="https://thenounproject.com/api/private/icons/5859965/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
          />
        </Link>
      </div>
      <div className="destination-div">
        <img src={place.image} className="img-styling" alt={place.name} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            margin: "0 1rem"
          }}
        >
          <h3>{place.name}</h3>
          <p>Description: {place.description}</p>
          <p>Rating: {place.ratings}</p>
          <p>Reviews: {place.reviews}</p>
          <p>Location: {place.location}</p>
          <p>Opening Hours: {place.openingHours}</p>
          <p>Ticket Price: {place.ticketPrice}</p>
          <a href={place.website}>Website</a>
        </div>
      </div>
    </div>
  );
};
