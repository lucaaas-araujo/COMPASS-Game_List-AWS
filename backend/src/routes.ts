import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/", (request, response) => {
	response.send("oi");
});

export default routes;
