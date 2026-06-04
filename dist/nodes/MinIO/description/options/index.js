"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const bucket_1 = require("./bucket");
const object_1 = require("./object");
const presigned_1 = require("./presigned");
exports.default = [
    ...bucket_1.allBucketOptions,
    ...object_1.allObjectOptions,
    ...presigned_1.allPresignedOptions
];
__exportStar(require("./bucket"), exports);
__exportStar(require("./object"), exports);
__exportStar(require("./presigned"), exports);
//# sourceMappingURL=index.js.map