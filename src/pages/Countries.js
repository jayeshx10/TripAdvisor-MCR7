import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "/src/db/database";

export const Countries = () => {
  const { continentID } = useParams();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const response = [...data.continents].find(
      (continent) => continent.id === Number(continentID)
    );
    setCountries(response.countries);
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
        <Link to="/" className="link-styling">
          <img
            alt="back-icon"
            height="70"
            src="https://thenounproject.com/api/private/icons/5859965/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
          />
        </Link>
      </div>
      <ul className="ul-styling">
        {countries.map((country) => {
          const { id, name, image } = country;
          return (
            <li key={id}>
              <Link
                to={`/tourist_places/${continentID}/${id}`}
                className="link-styling"
              >
                <img src={image} alt={name} className="img-styling" />
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
