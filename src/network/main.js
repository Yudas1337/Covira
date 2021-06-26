import http from "@/network/axios";

class Main {
  getAll() {
    return http.get("/");
  }

  getAllCasesGlobal(date) {
    return http.get("daily/" + date)
  }
}

export default new Main();