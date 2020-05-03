import axios from "axios"

export default {
  async getRoutines() {
    let res = await axios.get("http://localhost:3000/api/routines");
    return res.data;
  },
  async getRoutineSingle(routineId, accessToken) {
    let res = await axios.get("http://localhost:3000/api/routines/" + routineId, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return res.data;
  },
  async addRoutinePost(name, wtype, categories, sets, reps, time, notes, userId) {
    let res = await axios.post("http://localhost:3000/api/routines/", {
      name,
      wtype,
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