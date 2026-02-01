import api from "./apiClient";
import { mockQuestions } from "./mockData";

const USE_MOCK = true;

const qaService = {
  async listQuestions(params) {
    if (USE_MOCK) {
      const search = (params?.search || "").toLowerCase();
      const sort = params?.sort || "NEWEST";

      let items = [...mockQuestions];

      if (search) {
        items = items.filter((q) =>
          q.title.toLowerCase().includes(search) || q.body.toLowerCase().includes(search)
        );
      }

      if (sort === "MOST_ANSWERED") {
        items.sort((a, b) => (b.answersCount || 0) - (a.answersCount || 0));
      } else {
        items.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
      }

      return { items };
    }

    return api.get("/questions", { params }).then((r) => r.data);
  }
};

export default qaService;
