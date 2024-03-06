import { app } from "./app";

// Use the imported app server and start it listening on port 3000
// 3000 is commonly used for development
app.listen(3000, () => {
  console.log("Express server started on port 3000");
});
