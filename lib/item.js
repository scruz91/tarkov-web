import axios from "axios";

export async function getItemByName(itemName) {
  try {
    console.log("item.js", itemName);
    await axios
      .get(`http://localhost:5000/api/market/${itemName}`)
      .then((res) => {
        const data = res.data;
        console.log("item", data);
        return data;
      });
  } catch (err) {
    console.log(err);
  }
}
