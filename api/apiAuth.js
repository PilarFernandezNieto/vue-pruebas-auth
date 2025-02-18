import clienteAxios from "../config/axios";

export default {
  csrf() {
    return clienteAxios.get("/sanctum/csrf-cookie");
  },
  login(data) {
    return clienteAxios.post("/login", data);
  },
  register(data) {
    return clienteAxios.post("/register", data);
  },
  logout() {
    return clienteAxios.post("/logout");
  },
  forgotPassword(data) {
    return clienteAxios.post("/forgot-password", data);
  },
  resetPassword(data) {
    return clienteAxios.post("/reset-password", data);
  },

  authUser() {
    return clienteAxios.get("/api/user");
  },
};
