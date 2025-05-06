import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    total_view,
    rating
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mb-2">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-md">
        <div className="flex items-center gap-3">
          <img src={author.img} alt="Author" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{format(new Date(author.published_date), "yyyy-MM-dd")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title & Image */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">{title}</h2>
        <img src={image_url} alt="News" className="rounded-md mb-4 w-full" />
        <p className="text-sm text-gray-600">
          {details.slice(0, 200)}...
          <span className="text-orange-600 font-semibold cursor-pointer"> Read More</span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-gray-400 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`w-4 h-4 ${i < rating.number ? "" : "text-gray-300"}`} />
          ))}
          <span className="text-gray-800 ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
