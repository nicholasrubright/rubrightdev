import IndexLayout from "./layouts/IndexLayout";
import SideNavLayout from "./layouts/SideNavLayout";

const SideNav = () => {
  return (
    <SideNavLayout>
      <div>
        <h1>Side Nav!</h1>
      </div>
    </SideNavLayout>
  );
};

const Content = () => {
  return (
    <div>
      <h1>Content!</h1>
    </div>
  );
};

function App() {
  return (
    <IndexLayout>
      <SideNav />
      <Content />
    </IndexLayout>
  );
}

export default App;
