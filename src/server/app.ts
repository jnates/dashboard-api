import express from "express";
import routes from "../routes/dashboard";

export class Server {

    public port: string | number;
    public app: express.Application;
    public paths: { [index: string]: string };

    constructor() {
      this.port = 8000,
      this.app = express(),
      this.paths = {
        home: "/api",
        // tslint:disable-next-line: object-literal-sort-keys
        dashboard: "dashboard",
      };
      this.routes();
    }

    public routes(): void {
        this.app.use(this.paths.home, routes);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`¡Server UP! en http://localhost:${this.port}`);
        });
    }
}
