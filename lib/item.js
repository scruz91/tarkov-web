import axios from "axios";

export const getItemByName = async (itemName) => {
  try {
    const response = await axios.get(`/api/items/${itemName}`);
    return response.data;
  } catch (err) {
    console.log(err.response);
  }
};
