import data from './data.json';
import axios from "axios";

export default {
  async getComputeFlavors() {
    try {
      const res = await axios.get("https://assets.hdc.ntnu.no/assets/prices/v4/hunt-cloud-price-list-4-0.json")
      return res.data
    } catch (error) {
      console.error("Error fetching compute flavors:", error);
      return [];
    }

  },
  async getStoragePrices() {
    try {
      const res = await axios.get("https://assets.hdc.ntnu.no/assets/prices/v4/hunt-cloud-price-list-4-0.json")
      return res.data
    } catch (error) {
      console.error("Error fetching compute flavors:", error);
      return [];
    }
  },
  async getGpuPrices() {
    try {
      const res = await axios.get("https://assets.hdc.ntnu.no/assets/prices/v4/hunt-cloud-price-list-4-0.json")
      return res.data
    } catch (error) {
      console.error("Error fetching compute flavors:", error);
      return [];
    }
  },
  async getAvailableGPUS() {
    try {
      const res = await axios.get("https://assets.hdc.ntnu.no/assets/js/gpus.json")
      return res.data
    } catch (error) {
      console.error("Error fetching compute flavors:", error);
      return [];
    }
  },
  async getMachines() {
    try {
      const response = await axios.get("https://assets.hdc.ntnu.no/assets/js/flavors.json");
      return response.data;
    } catch (error) {
      console.error("Error fetching machines:", error);
      return [];
    }
  }
};
