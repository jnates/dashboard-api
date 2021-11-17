import express from "express";
import routes from "../routes/dashboard";

export class Server {
  
    port: string | number;
    app: express.Application;
    paths: { [index: string]: string };

    constructor() {
      this.port = 8000,
      this.app = express(),
      this.paths = {
        home: "/api",
        dashboard: "dashboard",
      };
      this.routes();
    };

    routes(): void {
        this.app.use(this.paths.home, routes)
    }
    
    listen(): void {
        this.app.listen(this.port, ()=>{
            console.log(`¡Server UP! en http://localhost:${this.port}`)
        });
    }
}
