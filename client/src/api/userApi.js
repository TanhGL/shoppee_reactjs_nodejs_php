import axiosClient from "./axiosClient";

const userApi = {
  async checkLogin(data) {
    const url = `/auth/login.php`;
    const resp = await axiosClient.post(url, data);

    return {
      access_token: resp.access_token,
      user: {
        ...resp.user,
        addresses: resp.addresses,
      },
    };
  },

  register: (data) => {
    const url = `/auth/register.php`;
    return axiosClient.post(url, data);
  },

  forgotPassword: (data) => {
    const url = `/auth/sendOTP.php`;
    return axiosClient.post(url, data);
  },

  newPassword: (data) => {
    const url = `/auth/newPass.php`;
    return axiosClient.post(url, data);
  },

  async addAddress(data) {
    const url = `/user/addAddress.php`;
    const resp = await axiosClient.post(url, data);

    return {
      user: {
        ...resp.user,
        addresses: resp.addresses,
      },
    };
  },

  async removeAddress(id) {
    const url = `/user/deleteAddress.php`;
    const resp = await axiosClient.post(url, id);

    return {
      user: {
        ...resp.user,
        addresses: resp.addresses,
      },
    };
  },

  async updateAddress(id) {
    const url = `/user/updateAddress.php`;
    const resp = await axiosClient.post(url, id);

    return {
      user: {
        ...resp.user,
        addresses: resp.addresses,
      },
    };
  },
};

export default userApi;
