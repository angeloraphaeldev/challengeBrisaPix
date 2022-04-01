import { Router } from "express";

// import { categoriesRoutes } from "./categories.routes";
// import { specificationRoutes } from "./specifications.routes";
import { usersRouter } from "./user.routes";
import { keysRouter } from "./keys.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/keys", keysRouter);

export { router };
