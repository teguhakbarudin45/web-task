function getPriorityColor(priority) {
  switch (priority) {
    case "High":
      return "red";
    case "Medium":
      return "orange";
    case "Low":
      return "gray";
    default:
      return "black";
  }
}

export default getPriorityColor;
