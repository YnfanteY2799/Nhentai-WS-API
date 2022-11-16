import { getRequest } from "./src/main/Core.js";

(async () => {
  const data = await getRequest("https://nhentai.net/g/428289/", "Test 1");
  console.log(data);
})();
