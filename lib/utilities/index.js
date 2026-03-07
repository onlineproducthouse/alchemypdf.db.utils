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
__exportStar(require("./mapToAuditSchema"), exports);
__exportStar(require("./mapToAuditString"), exports);
__exportStar(require("./createAuditTable"), exports);
__exportStar(require("./createReferenceTable"), exports);
__exportStar(require("./setPrimaryKey"), exports);
__exportStar(require("./setForeignKey"), exports);
__exportStar(require("./setUniqueColumn"), exports);
__exportStar(require("./createSchemaConstraints"), exports);
//# sourceMappingURL=index.js.map