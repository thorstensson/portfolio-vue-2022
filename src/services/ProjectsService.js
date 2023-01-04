import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/apptEICUDEkjYOvlz/Projects"
});

const airtableAPIKey = process.env.VUE_APP_AIRTABLEKEY;

Axios.defaults.headers.common = { Authorization: `Bearer ` + airtableAPIKey };

export default {
  getProjects() {
    return Axios.get();
  },

  getProject(slug) {
    return Axios.get("?filterByFormula={Slug}='" + slug + "'");
  }
};
