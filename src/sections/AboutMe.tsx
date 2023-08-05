import SectionLayout from "../layouts/SectionLayout";
import backgroundImage from "../images/img-placeholder.jpg";
import ImageWrapLayout from "../layouts/ImageWrapLayout";

const Content = () => {
  return <p style={{ fontSize: "18px" }}>hello i am world</p>;
};

export default function AboutMe() {
  return (
    <SectionLayout>
      <ImageWrapLayout
        image={backgroundImage}
        content={<Content />}
        imageLeft={true}
      />
    </SectionLayout>
  );
}
