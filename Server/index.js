// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { userRoute } from "./routes/userRoute.js";
// import { residencyRoute } from "./routes/residencyRoute.js";


// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors());

// app.listen(PORT, () => {
//   console.log(`Server is running on Port ${PORT}`);
// });

// app.use("/api/user", userRoute);
// app.use("/api/residency", residencyRoute)



import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { prisma } from "./config/prismaConfig.js";
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.get("/health/db2", async (_req, res) => {
  try {
    await prisma.$connect();
    await prisma.residency.count(); // forces a real query
    res.json({ db: "up" });
  } catch (e) {
    res.status(500).json({ db: "down", error: e.message });
  }
});

app.get("/debug/res", async (_req, res) => {
  try {
    const items = await prisma.residency.findMany({ take: 1 });
    res.json({ ok: true, sample: items[0] ?? null });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);

app.listen(PORT, () => {
  console.log(`🚀 API server running at http://localhost:${PORT}`);
});