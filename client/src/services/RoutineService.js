import axios from "axios"

export default {
  async getRoutines() {
    console.log("is it safe?");
    let res = await axios.get("http://localhost:3000/api/routines");
    return res.data;
  },
  async getRoutineSingle(routineId, accessToken) {
    console.log("sevice.js");
    let res = await axios.get("http://localhost:3000/api/routines/" + routineId, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return res.data;
  },
  async addRoutinePost() {
    let res = await axios.post("http://localhost:3000/api/routines/", {
      name,
      type,
      categories,
      sets,
      reps,
      time,
      notes,
      userId
    });
    return res.data;
  }
}