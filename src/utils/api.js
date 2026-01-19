import axios from "axios";

export const getBlogById = async (id) => {
  try {
    const url = `${process.env.SITE_DOMAIN}/api/blogs/${id}`;
    const { data } = await axios.get(url);

    return data?.blogData || {};
  } catch (error) {
    console.log(error);

    return {};
  }
};
