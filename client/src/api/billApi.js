import axiosClient from "./axiosClient";

const billApi = {
  async addBill(data) {
    const url = `/bills/addBills.php`;
    const resp = await axiosClient.post(url, data);

    const bills = resp.listBill?.map((item) => ({
      ...item,
      products: resp.billDetail?.filter(
        (itemfilter) => itemfilter[0].id_bill === item.id
      ),
    }));

    return bills;
  },

  async getBill(data) {
    const url = `/bills/getBills.php`;
    const resp = await axiosClient.post(url, data);

    const bills = resp.listBill?.map((item) => ({
      ...item,
      products: resp.billDetail
        ?.filter((itemfilter) => itemfilter[0].id_bill === item.id)
        .flat(),
    }));

    return bills;
  },
};

export default billApi;
