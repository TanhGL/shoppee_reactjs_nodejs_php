import axiosClient from "./axiosClient";

const categoryApi = {
  getAll: () => {
    const url = `/category/getAllCategory.php`;
    return axiosClient.post(url);
  },
};

export default categoryApi;
