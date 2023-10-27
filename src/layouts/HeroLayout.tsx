export default function HeroLayout(props: HeroLayoutProps) {
  const { children } = props;

  return <div className="px-4 py-5 my-5 text-center">{children}</div>;
}

interface HeroLayoutProps {
  children: JSX.Element;
}
