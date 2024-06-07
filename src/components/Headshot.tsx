import me from "../me2.0.jpeg";

export default function Headshot() {
  return (
    <img
      src={me}
      className="d-block mx-lg-auto img-fluid profile-img"
      alt="Amazing Headshot"
      loading="lazy"
    />
  );
}
