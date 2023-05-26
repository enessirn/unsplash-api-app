import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
const ImageShow = ({ imgLink, dowlandLink }) => {
  return (
    <div className="flex flex-col flex-shrink-0 gap-2 relative">
      <img src={imgLink} className="cursor-pointer rounded" />
      <a
       href={dowlandLink}
       target="_blank"
       className="absolute right-2 top-2"
       download>
        <button
          type="button"
          className="text-gray-800 bg-gray-200 hover:bg-gray-300 hover:text-gray-900 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center w-auto "
        >
          <FontAwesomeIcon  icon={faUpRightAndDownLeftFromCenter} />
        </button>
      </a>
    </div>
  );
};
export default ImageShow;
