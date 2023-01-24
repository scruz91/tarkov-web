import { getItemByName } from "../../lib/item";
export default async function handler(req, res) {
  res.status(200).json(await getItemByName());
}
