import { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "/src/db/database";

export const Home = () => {
  const [continents, setContinents] = useState(data.continents);
  return (
    <div>
      <h1>Top Continents for your next holiday</h1>
      <div>
        <ul className="ul-styling">
          {continents.map((continent) => {
            const { id, name, image } = continent;
            return (
              <li key={id} className="li-styling">
                <Link to={`/countries/${id}`} className="link-styling">
                  <img
                    src={image}
                    height="200"
                    alt={name}
                    className="img-styling"
                  />
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
    </div>
  );
};
