import axiosClient from "./axiosClient";

const productApi = {
  async getAll(params) {
    // Transform _page to _start
    const newParams = { ...params };
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);

    // Remove un-needed key
    delete newParams._page;

    // Fetch product list + count
    const productList = await axiosClient.get("/products/getProducts.php", {
      params: newParams,
    });
    const count = await axiosClient.get("/products/getCount.php", {
      params: newParams,
    });

    // Build response and return
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: parseInt(count.total),
      },
    };
  },

  getImages(id) {
    const url = `/products/getImages.php`;
    return axiosClient.post(url, id);
  },

  getProduct(id) {
    const url = `/products/getProductById.php`;
    return axiosClient.post(url, id);
  },

  //   add(data) {
  //     const url = `/products`;
  //     return axiosClient.post(url, data);
  //   },

  //   update(data) {
  //     const url = `/products/${data.id}`;
  //     return axiosClient.patch(url, data);
  //   },

  //   remove(id) {
  //     const url = `/products/${id}`;
  //     return axiosClient.delete(url);
  //   },
};

export default productApi;
