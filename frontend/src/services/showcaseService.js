import api from "./apiClient";
import { mockShowcase } from "./mockData";

const USE_MOCK = true;

const showcaseService = {
  async list(params) {
    if (USE_MOCK) {
      const cat = (params?.category || "").toLowerCase();
      let items = [...mockShowcase];

      if (cat) items = items.filter((s) => (s.category || "").toLowerCase().includes(cat));

      // most liked first
      items.sort((a, b) => (b.likesCount || 0) - (a.likesCount || 0));
      return { items };
    }

    return api.get("/showcase", { params }).then((r) => r.data);
  }
};

export default showcaseService;
