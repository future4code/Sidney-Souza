"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const connection_1 = require("./connection");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get("/", (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.connection.raw("SHOW TABLES");
    console.log(result);
    res.send("HELLO FROM EXPRESS!");
}));
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map