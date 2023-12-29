import me from "../me.jpeg";

export default function Headshot() {
  return (
    <img
      src={me}
      className="d-block mx-lg-auto img-fluid"
      alt="Amazing Headshot"
      width="700"
      height="500"
      loading="lazy"
    />
  );
}
