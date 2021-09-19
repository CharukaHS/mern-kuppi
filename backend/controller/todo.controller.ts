import todoModel from "../database/schemas/todo.schema";

const SaveTodo = async (title: string, description: string) => {
  const document = new todoModel({ title, description });
  await document.save();
  console.log("Saved to database");
};

export { SaveTodo };
