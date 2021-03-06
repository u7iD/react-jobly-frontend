import axios from "axios";

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {
    console.debug("API Call:", endpoint, params, verb);

    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

    const _token = localStorage.getItem("jobly-token");

    const data =
      verb === "get"
        ? { params: { _token, ...params } } // GET
        : { _token, ...params }; // POST, PATCH

    const req = axios[verb](`${BASE_URL}/${endpoint}`, data);

    try {
      return (await req).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes that are used by frontend

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(searchTerm) {
    let res = await this.request(`companies?search=${searchTerm}`);
    return res.companies;
  }

  static async getJobs(searchTerm = "") {
    let res = await this.request(`jobs?search=${searchTerm}`);
    return res.jobs;
  }

  static async applyForJob(jobId) {
    let res = await this.request(`jobs/${jobId}/apply`, {}, "post");
    return res.message;
  }

  static async login(data) {
    let res = await this.request("login", data, "post");
    return res.token;
  }

  static async signup(data) {
    let res = await this.request("users", data, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default JoblyApi;
