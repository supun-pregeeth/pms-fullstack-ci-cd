import api from "./apiClient";
import { mockProjects } from "./mockData";

const USE_MOCK = true; // change to false when backend is ready

const projectService = {
  async list(params) {
    if (USE_MOCK) {
      const search = (params?.search || "").toLowerCase();
      const status = params?.status || "";

      let items = [...mockProjects];

      if (search) {
        items = items.filter((p) => {
          const inTitle = p.title.toLowerCase().includes(search);
          const inTags = (p.tags || []).join(" ").toLowerCase().includes(search);
          return inTitle || inTags;
        });
      }

      if (status) items = items.filter((p) => p.status === status);

      // simple pagination
      const size = params?.size ?? 9;
      const page = params?.page ?? 0;
      const start = page * size;
      const end = start + size;
      const paged = items.slice(start, end);

      return {
        items: paged,
        page,
        totalPages: Math.max(1, Math.ceil(items.length / size))
      };
    }

    return api.get("/projects", { params }).then((r) => r.data);
  },

  async get(id) {
    if (USE_MOCK) {
      const p = mockProjects.find((x) => String(x.id) === String(id));
      return p || null;
    }
    return api.get(`/projects/${id}`).then((r) => r.data);
  }
};

export default projectService;
