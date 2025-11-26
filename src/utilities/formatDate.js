import { format } from "date-fns";

export const formatDate = (dateString) => {
  const result = format(new Date(dateString), "dd MMM, yyyy");
  return result;
};
