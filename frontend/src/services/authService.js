import api from "./apiClient";

const authService = {
  async login(email, password) {
    const res = await api.post("/auth/login", { email, password });
    return res.data; // { token, user }
  },
  async register(payload) {
    const res = await api.post("/auth/register", payload);
    return res.data; // { token, user } or message
  },
  async me() {
    const res = await api.get("/users/me");
    return res.data;
  }
};

export default authService;
