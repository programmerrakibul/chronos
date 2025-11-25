import axios from "axios";

export const getUploadImage = async (imageInfo) => {
  const formData = new FormData();
  formData.append("image", imageInfo);

  try {
    const { data } = await axios.post(
      "https://api.imgbb.com/1/upload?",
      formData,
      {
        params: {
          key: process.env.NEXT_PUBLIC_IMAGE_KEY,
        },
      }
    );

    if (data.success) {
      return data.data.url;
    }
  } catch (err) {
    throw Error(err.message);
  }
};
