import api from "./apiClient";
import { mockResources } from "./mockData";

const USE_MOCK = true;

const resourceService = {
  async list(params) {
    if (USE_MOCK) {
      const type = params?.type || "";
      const tag = (params?.tag || "").toLowerCase();

      let items = [...mockResources];
      if (type) items = items.filter((r) => r.type === type);
      if (tag) items = items.filter((r) => (r.tags || []).join(" ").toLowerCase().includes(tag));

      return { items };
    }

    return api.get("/resources", { params }).then((r) => r.data);
  }
};

export default resourceService;
