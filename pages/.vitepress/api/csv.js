import axios from "axios";

export default {
  getComputeFlavors() {
    return [
      "https://assets.hdc.ntnu.no/assets/prices/v3/compute-default-b.csv",
      "https://assets.hdc.ntnu.no/assets/prices/v3/compute-default-c.csv",
      "https://assets.hdc.ntnu.no/assets/prices/v3/compute-default-d.csv",
    ].map((item) => axios.get(item));

  },
  getStoragePrices() {
    return axios.get(
      "https://assets.hdc.ntnu.no/assets/prices/v3/store-block-storage.csv"
    );
  },
  getGpuPrices() {
    return axios.get(
      "https://assets.hdc.ntnu.no/assets/prices/v3/compute-gpu.csv"
    );
  },
};
