import SectionLayout from "../layouts/SectionLayout";
import backgroundImage from "../images/img-placeholder.jpg";
import ImageWrapLayout from "../layouts/ImageWrapLayout";

const Content = () => {
  return (
    <div>
      <h4 className="fw-bold">About Me</h4>
      <p>
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

const Header = () => {};

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
