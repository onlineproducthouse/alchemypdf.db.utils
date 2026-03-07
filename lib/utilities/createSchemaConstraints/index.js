"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchemaConstraints = void 0;
var primaryKey = function (Sequelize) { return ({ type: Sequelize.BIGINT, autoIncrement: true, allowNull: false }); };
var foreignKey = function (Sequelize) { return ({ type: Sequelize.BIGINT, allowNull: false }); };
var optionalForeignKey = function (Sequelize) { return ({ type: Sequelize.BIGINT, allowNull: true, defaultValue: null }); };
var referenceKey = function (Sequelize) { return ({ type: Sequelize.STRING(64), allowNull: false }); };
var externalKey = function (Sequelize) { return ({ type: Sequelize.CHAR(36), allowNull: false }); };
exports.createSchemaConstraints = {
    primaryKey: primaryKey,
    foreignKey: foreignKey,
    optionalForeignKey: optionalForeignKey,
    referenceKey: referenceKey,
    externalKey: externalKey,
};
//# sourceMappingURL=index.js.map