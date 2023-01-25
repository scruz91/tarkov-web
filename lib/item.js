import axios from "axios";

export const getItemByName = async (itemName) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/market/${itemName}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
