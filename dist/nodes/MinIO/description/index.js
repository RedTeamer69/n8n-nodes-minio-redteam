"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeDescription = void 0;
const properties_1 = __importDefault(require("./properties"));
const options_1 = __importDefault(require("./options"));
exports.default = [
    ...properties_1.default,
    ...options_1.default,
];
var node_description_1 = require("./node.description");
Object.defineProperty(exports, "nodeDescription", { enumerable: true, get: function () { return node_description_1.nodeDescription; } });
//# sourceMappingURL=index.js.map