export default function ImageWrapLayout(props: ImageWrapLayoutProps) {
  const { image, content, imageLeft } = props;

  return (
    <div className="container row justify-content-evenly">
      {imageLeft && (
        <div className="col align-self-center">
          <img src={image} height={200} width={400} />
        </div>
      )}
      <div className="col">{content}</div>
      {!imageLeft && (
        <div className="col">
          <img src={image} height={200} width={400} />
        </div>
      )}
    </div>
  );
}

interface ImageWrapLayoutProps {
  image: string;
  content: JSX.Element;
  imageLeft: boolean;
}
