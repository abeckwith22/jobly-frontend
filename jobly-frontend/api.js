import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "https://localhost:3001";
const BASE_URL = process.env.REACT_APP_BASE_URL || "https://jobly-backend-x8r1.onrender.com"; // vite doesn't like environment variables so were going to add the backend url here to test if it works

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);         

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /* Sets jobly token to users token. Used to authenticate further requests (and hopefully into res.locals) */
  static setToken(token){
    JoblyApi.token = token;
  }

  /* Gets token from jobly api and doesn't get a call to database. */
  static getJoblyToken(){
    return JoblyApi.token;
  }

  /** Gets token from user with { username, password } */

  static async getToken(user){
    let res = await this.request(`auth/token`, user, "post");
    return res.token;
  }

  /** Registers user to database with { username, password, firstName, lastName, email } => { token }*/
  static async registerUser(user){
    let res = await this.request(`auth/register`, user, "post");
    return res.token;
  }

  /** Gets details on user in database by username (requires that you are admin or looking up your own user */
  static async getUser(username){
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /**  */
  static async patchUser(username, user){
    let res = await this.request(`users/${username}`, user, "patch");
    return res.user;
  }

  /** Get details on all companies in database (can filter for name)*/
  
  static async getCompanyAll(name=""){
    const params = {};
    if(name){
      params["name"] = name;
    }
    let res = await this.request(`companies`, params);
    return res.companies;
  }

  /** Get details on a company by handle. */
  
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  
  /** Get details on all jobs in database */
  static async getJobAll(){
    let res = await this.request(`jobs/`);
    return res.jobs
  }

  /** Get details on a job by id */
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  static async userApplyForJob(username, job_id){
    try {
      let res = await this.request(`users/${username}/jobs/${job_id}`, {username, job_id}, "post");
      return res;
    }catch (err){
      console.error(err);
      return err;
    }
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
