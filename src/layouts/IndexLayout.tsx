export default function IndexLayout(props: IndexLayoutProps) {
  const { children } = props;
  const [sideNav, content] = children;

  return (
    <div className="container-fluid p-0">
      <div className="row vh-100">
        <div id="sideNavLayout" className="col-lg-4 col-md-4">
          {sideNav}
        </div>
        <div id="contentLayout" className="col-lg-8 col-md-8">
          {content}
        </div>
      </div>
    </div>
  );
}

interface IndexLayoutProps {
  children: JSX.Element[];
}
