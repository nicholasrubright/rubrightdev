export default function SectionLayout(props: SectionLayoutProps) {
  const { children } = props;

  return (
    <div className="row p-4" style={{ backgroundColor: "red" }}>
      {children}
    </div>
  );
}

interface SectionLayoutProps {
  children: JSX.Element;
}
