import IndexLayout from "./layouts/IndexLayout";

const SideNav = () => {
  return (
    <div>
      <h1>Side Nav!</h1>
    </div>
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
