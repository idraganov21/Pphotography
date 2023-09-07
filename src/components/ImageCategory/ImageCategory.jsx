import { CldImage } from "next-cloudinary";

const ImageCategory = ({ images, filterKey }) => {
  return (
    <>
      {Object.keys(images).map((imageKey) => (
        <li
          key={imageKey}
          className={`${filterKey} mb-[50px] w-1/2 float-left pl-[50px] item__`}
        >
          <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
            <div className="image relative">
              <CldImage
                width="640"
                height="960"
                crop="fill"
                gravity="auto"
                loading="lazy"
                src={images[imageKey]}
                alt={imageKey}
              />
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default ImageCategory;
