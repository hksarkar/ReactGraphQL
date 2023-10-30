import { useState, useEffect } from "react";
import { useApi } from "../custom-hook";
import { Link } from "react-router-dom";

export default function Albums() {
  /*const api = "https://jsonplaceholder.typicode.com/photos";
  const { status, data, error } = useApi(api);
  */
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Album data</p>;

  return (
    // shows current date/time

    <>
      <div>
        <h1>Time now :{new Date().toLocaleTimeString()} </h1>
      </div>
      <div class="columns is-multiline">
        {data.map((photo) => {
          return <Photos key={photo.id} photo={photo} />;
        })}
      </div>
    </>
  );
}

const Photos = (props) => {
  return (
    <>
      <div class="column is-one-quarter-desktop is-half-tablet">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img src={props.photo.thumbnailUrl} alt={props.photo.id} />
            </figure>
            <div class="card-content is-overlay is-clipped">
              <span class="tag is-info">{props.photo.title}</span>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">BUY</a>
          </footer>
        </div>
      </div>
    </>
  );
};
