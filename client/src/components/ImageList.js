import { useContext } from "react";
import { ImageContext } from "../context/imageContext";

const ImageList = () => {
  const [images] = useContext(ImageContext);
  const imgList = images.map((image) => (
    <img
      key={image.key}
      style={{ width: "100%" }}
      src={`http://localhost:5000/uploads/${image.key}`}
      alt="images"
    />
  ));
  return (
    <div>
      <h3>Image List</h3>
      {imgList}
    </div>
  );
};
export default ImageList;
