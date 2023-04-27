import axiosClient from "./axiosClient";

const cartApi = {
  async getProductsInCart() {
    const url = `/carts/getProductInCart.php`;
    const data = await axiosClient.post(url);

    const productInCart = data.map((item) => ({
      id: Number.parseInt(item.id),
      product: {
        id: Number.parseInt(item.id),
        nameProduct: item.nameProduct,
        salePrice: Number.parseInt(item.salePrice),
        originPrice: Number.parseInt(item.originPrice),
        thumbnail: item.thumbnail,
      },
      quantity: Number.parseInt(item.quantity),
    }));

    return productInCart;
  },

  async addToCart(payload) {
    const url = `/carts/addProductToCart.php`;
    const data = await axiosClient.post(url, payload);

    const productInCart = data.map((item) => ({
      id: Number.parseInt(item.id),
      product: {
        id: Number.parseInt(item.id),
        nameProduct: item.nameProduct,
        salePrice: Number.parseInt(item.salePrice),
        originPrice: Number.parseInt(item.originPrice),
        thumbnail: item.thumbnail,
      },
      quantity: Number.parseInt(item.quantity),
    }));

    return productInCart;
  },

  async updateCart(payload) {
    const url = `/carts/updateProductInCart.php`;
    const data = await axiosClient.post(url, payload);

    const productInCart = data.map((item) => ({
      id: Number.parseInt(item.id),
      product: {
        id: Number.parseInt(item.id),
        nameProduct: item.nameProduct,
        salePrice: Number.parseInt(item.salePrice),
        originPrice: Number.parseInt(item.originPrice),
        thumbnail: item.thumbnail,
      },
      quantity: Number.parseInt(item.quantity),
    }));

    return productInCart;
  },

  async removeCartItem(payload) {
    const url = `/carts/deleteProductInCart.php`;
    const data = await axiosClient.post(url, payload);

    const productInCart = data.map((item) => ({
      id: Number.parseInt(item.id),
      product: {
        id: Number.parseInt(item.id),
        nameProduct: item.nameProduct,
        salePrice: Number.parseInt(item.salePrice),
        originPrice: Number.parseInt(item.originPrice),
        thumbnail: item.thumbnail,
      },
      quantity: Number.parseInt(item.quantity),
    }));

    return productInCart;
  },
};

export default cartApi;
