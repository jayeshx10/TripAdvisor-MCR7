import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "/src/db/database";

export const TouristPlaces = () => {
  const continentsArray = data.continents;
  const { continentID, countryID } = useParams();

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const response = [...continentsArray[continentID - 1].countries].find(
      (country) => country.id === Number(countryID)
    );
    setPlaces(response.destinations);
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
        <Link to={`/countries/${continentID}`} className="link-styling">
          <img
            alt="back-icon"
            height="70"
            src="https://thenounproject.com/api/private/icons/5859965/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
          />
        </Link>
      </div>
      <ul className="ul-styling">
        {places.map((destination) => {
          const { id, name, image } = destination;
          return (
            <li key={id}>
              <Link
                to={`/destination/${continentID}/${countryID}/${id}`}
                className="link-styling"
              >
                <img src={image} className="img-styling" alt={name} />
                <p className="location">
                  <img
                    src="https://img.icons8.com/?size=512&id=19326&format=png"
                    alt="location-icon"
                    height="30"
                  />
                  <i>{name.toUpperCase()}</i>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
