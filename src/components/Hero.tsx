import HeroLayout from "../layouts/HeroLayout";

const Content = () => {
  return (
    <>
      <h1 className="display-5 fw-bold text-body-emphasis">
        Welcome to my site.
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Making great software!</p>
      </div>
    </>
  );
};

export default function Hero() {
  return (
    <HeroLayout>
      <Content />
    </HeroLayout>
  );
}
