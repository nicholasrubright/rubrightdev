export default function IndexLayout(props: IndexLayoutProps) {
  const { children } = props;
  const [sideNav, content] = children;

  return (
    <div className="container-fluid p-0">
      <div className="row vh-100">
        <div
          id="sideNavLayout"
          className="col-4"
          style={{ backgroundColor: "red" }}
        >
          {sideNav}
        </div>
        <div
          id="contentLayout"
          className="col-8"
          style={{ backgroundColor: "blue" }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

interface IndexLayoutProps {
  children: JSX.Element[];
}
