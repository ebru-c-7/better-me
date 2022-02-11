export const menuContent = {
    "In Progress": [
      {
        text: "Enter Progress",
        onPress: () => {
          console.log("Enter Progress");
        },
        style: {},
      },
      {
        text: "Mark as Complete",
        onPress: () => {
          console.log("Mark as Complete");
        },
        style: {},
      },
      {
        text: "Back to Planning",
        onPress: () => {
          console.log("Back to Planning");
        },
        style: {},
      },
      {
        text: "Cancelled",
        onPress: () => {
          console.log("Cancel Task");
        },
        style: { color: "red" },
      },
    ],
    Planned: [
      {
        text: "Enter Progress",
        onPress: () => {
          console.log("Enter Progress");
        },
        style: {},
      },
      {
        text: "Cancelled",
        onPress: () => {
          console.log("Cancel Task");
        },
        style: { color: "red" },
      },
    ],
    Completed: [
      {
        text: "Cancelled",
        onPress: () => {
          console.log("Cancel Task");
        },
        style: { color: "red" },
      },
      {
        text: "Back to Planning",
        onPress: () => {
          console.log("Back to Planning");
        },
        style: {},
      },
    ],
    Cancelled: [
      {
        text: "Back to Planning",
        onPress: () => {
          console.log("Back to Planning");
        },
        style: {},
      },
      {
        text: "Enter Progress",
        onPress: () => {
          console.log("Enter Progress");
        },
        style: {},
      },
    ],
  };