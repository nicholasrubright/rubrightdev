import Headshot from "./components/Headshot";
import SocialMedia from "./components/SocialMedia";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row justify-content-md-center justify-content-sm-center justify-content-center  flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-7">
          <Summary />
          <SocialMedia />
        </div>
        <div className="col-10 col-sm-8 col-lg-5">
          <Headshot />
        </div>
      </div>
    </div>
  );
}

export default App;
