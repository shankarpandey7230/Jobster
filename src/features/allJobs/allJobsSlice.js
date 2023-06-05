import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialStateFilterState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  pages: 1,
  stats: {},
  monthlyApplications: [],
  ...initialStateFilterState,
};
const allJobSlices = createSlice({
  name: "allJobs",
  initialState,
});
export default allJobSlices.reducer;
