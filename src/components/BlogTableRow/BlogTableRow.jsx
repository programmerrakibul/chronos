import { formatDate } from "@/utilities/formatDate";
import { useRouter } from "next/navigation";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";

const BlogTableRow = ({ index, blogData, handleRemoveBlog }) => {
  const { _id, title, category, imageURL, publishedOn } = blogData || {};
  const router = useRouter();

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
        <td className="min-w-[265px]">{title}</td>
        <td>{category}</td>
        <td>{formatDate(publishedOn)}</td>
        <td className="flex items-center gap-1.5">
          <button
            data-tip="View"
            onClick={() => router.push(`/blogs/${_id}`)}
            className="btn btn-sm text-base btn-square text-primary tooltip tooltip-left tooltip-primary"
          >
            <FaEye />
          </button>

          <button
            data-tip="Delete"
            onClick={() => handleRemoveBlog(_id)}
            className="btn btn-sm btn-square text-error text-base tooltip tooltip-left tooltip-error"
          >
            <FaRegTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default BlogTableRow;
