import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  status: ["In Progress", "Planned", "Completed", "Cancelled"],
  goals: [
    {
      id: 16,
      title: "Read 3 books",
      description: "Description 6",
      image: "https://picsum.photos/id/237/200",
      category: "category 2",
      status: "In Progress",
      due: "2020-04-11",
      progress: 0.2,
    },
    {
      id: 17,
      title: "Complete the React Native Course",
      description: "Description 7",
      image: "https://picsum.photos/id/1003/200",
      category: "category 2",
      status: "In Progress",
      due: "2020-04-11",
      progress: 0.3,
    },
    {
      id: 13,
      title: "Title 3",
      description: "Description 3",
      image: "https://picsum.photos/id/1005/200",
      category: "category 2",
      status: "In Progress",
      due: "2020-02-11",
      progress: 0.1,
    },
    {
      id: 14,
      title: "Title 4",
      description: "Description 4",
      image: "https://picsum.photos/id/1010/200",
      category: "category 2",
      status: "In Progress",
      due: "2020-04-11",
      progress: 0.35,
    },
    {
      id: 15,
      title: "Title 5",
      description: "Description 5",
      image: "https://picsum.photos/id/1014/200",
      category: "category 2",
      status: "In Progress",
      due: "2020-04-11",
      progress: 0.11,
    },

    {
      id: 21,
      title: "Title 1",
      description: "Description 1",
      image: "https://picsum.photos/id/1025/200",
      category: "category 1",
      status: "Planned",
      due: "2020-03-01",
      progress: 0,
    },
    {
      id: 22,
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus suscipit nibh quis suscipit. Sed feugiat, augue vitae aliquam rhoncus, magna lectus rutrum nunc, sed varius nisl enim sed massa. Sed purus augue, faucibus non odio at, euismod dictum elit. Etiam fringilla ultricies velit, in convallis orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus suscipit nibh quis suscipit. Sed feugiat, augue vitae aliquam rhoncus, magna lectus rutrum nunc, sed varius nisl enim sed massa. Sed purus augue, faucibus non odio at, euismod dictum elit. Etiam fringilla ultricies velit, in convallis orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus suscipit nibh quis suscipit. Sed feugiat, augue vitae aliquam rhoncus, magna lectus rutrum nunc, sed varius nisl enim sed massa. Sed purus augue, faucibus non odio at, euismod dictum elit. Etiam fringilla ultricies velit, in convallis orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus suscipit nibh quis suscipit. Sed feugiat, augue vitae aliquam rhoncus, magna lectus rutrum nunc, sed varius nisl enim sed massa. Sed purus augue, faucibus non odio at, euismod dictum elit. Etiam fringilla ultricies velit, in convallis orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus suscipit nibh quis suscipit. Sed feugiat, augue vitae aliquam rhoncus, magna lectus rutrum nunc, sed varius nisl enim sed massa. Sed purus augue, faucibus non odio at, euismod dictum elit. Etiam fringilla ultricies velit, in convallis orci.",
      image: "https://picsum.photos/id/1060/200",
      category: "category 1",
      status: "Planned",
      due: "2020-02-01",
      progress: 0,
    },
  ],
};

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    add: (state, action) => {
      state.goals.push(action.payload);
    },
    remove: (state, action) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
  },
});

export const { add, remove } = goalsSlice.actions;

export default goalsSlice.reducer;
