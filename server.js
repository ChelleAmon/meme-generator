import * as rootConfig from "./server/configs/root.config.js";
import * as dbConfig from './server/configs/db.config.js';
import { apiRouter } from './server/routes/api.routes.js';

const port = 3000;
const app = rootConfig.app;

app.use('/', apiRouter)

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
