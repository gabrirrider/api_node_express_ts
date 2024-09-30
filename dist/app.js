var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import sequelize from "./shared/connection.js";
import colaboradorRoutes from "./routes/colaborador-routes.js";
import contractRoutes from "./routes/contract-routes.js";
import depositRoutes from "./routes/deposit-routes.js";
import jobRoutes from "./routes/job-routes.js";
import paymentRoutes from "./routes/payment-routes.js";
import profileRoutes from "./routes/profile-routes.js";
import Colaborador from "./models/colaborador-model.js";
import Contract from "./models/contract-model.js";
import Deposit from "./models/deposit-model.js";
import Job from "./models/job-model.js";
import Payment from "./models/payment-model.js";
import Profile from "./models/profile-model.js";
const app = express();
app.use(express.json());
const PORT = 3000;
Profile.initModel(sequelize);
Colaborador.initModel(sequelize);
Contract.initModel(sequelize);
Deposit.initModel(sequelize);
Job.initModel(sequelize);
Payment.initModel(sequelize);
//rotas
app.get("/", (req, res) => {
    res.status(200).send("Unifio Nodejs API - now using ts");
});
app.use("/", colaboradorRoutes);
app.use("/", contractRoutes);
app.use("/", depositRoutes);
app.use("/", jobRoutes);
app.use("/", paymentRoutes);
app.use("/", profileRoutes);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("db connected sucessfully");
        yield sequelize.sync({});
        console.log("model sync with the db");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("unable to connect to the database: ", error);
    }
}))();
export default app;
