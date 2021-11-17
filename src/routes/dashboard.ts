import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.send("Welcome dashboard in node");
});

router.get('/dashboard', (req, res) => {
    res.send("Server on, Welcome dashboard in node");
  });

export default router;