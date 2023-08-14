export default function SideNavLayout(props: SideNavLayout) {
  const { children } = props;

  return <div className="container">{children}</div>;
}

interface SideNavLayout {
  children: JSX.Element[] | JSX.Element;
}
