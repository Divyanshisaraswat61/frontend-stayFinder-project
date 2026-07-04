import axios from "axios";

const BASE_URL = "https://demohotelsapi.pythonanywhere.com";

export const getHotels = async () => {
  const res = await axios.get(`${BASE_URL}/hotels/`);
  return res.data.data;
};

export const searchHotels = async (location) => {
  const res = await axios.get(
    `${BASE_URL}/hotels/?location=${location}`
  );

  return res.data.data;
};