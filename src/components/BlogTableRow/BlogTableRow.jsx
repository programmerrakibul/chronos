import { formatDate } from "@/utilities/formatDate";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";

const BlogTableRow = ({ index, blogData }) => {
  const { _id, title, category, imageURL, publishedOn } = blogData;

  return (
    <>
      <tr className="capitalize">
        <td>{index}</td>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageURL} alt={title} />
            </div>
          </div>
        </td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{formatDate(publishedOn)}</td>
        <td className="flex items-center gap-1.5">
          <button className="btn btn-sm text-base btn-square">
            <FaEye />
          </button>
          <button className="btn btn-sm btn-square text-error text-base">
            <FaRegTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default BlogTableRow;
