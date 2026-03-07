type SchemaConstraints = "primaryKey" | "foreignKey" | "optionalForeignKey" | "referenceKey" | "externalKey";
type SchemaConstraintsFunc = {
    [key in SchemaConstraints]: (Sequelize: any) => Object;
};
export declare const createSchemaConstraints: SchemaConstraintsFunc;
export {};
