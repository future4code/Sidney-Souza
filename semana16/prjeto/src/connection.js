"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const tslib_1 = require("tslib");
const knex_1 = tslib_1.__importDefault(require("knex"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
exports.connection = knex_1.default({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});
//# sourceMappingURL=connection.js.map