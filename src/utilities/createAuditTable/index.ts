import {
  mapToAuditInsertColumnString,
  mapToAuditSchema,
  mapToAuditSelectRowString,
  createSchemaConstraints
} from ".."

export const createAuditTable = async (queryInterface: any, Sequelize: any, tableName: string, schema: any) => {
  // Audit table
  const auditTableName = `${tableName}_audit`

  await queryInterface.createTable(auditTableName, {
    [auditTableName + "_id"]: createSchemaConstraints.primaryKey(Sequelize),
    ...mapToAuditSchema(schema),
  })

  const triggerName = `${tableName}_update_trigger`
  const handlerName = `${tableName}_update_handler()`

  await queryInterface.sequelize.query(query(handlerName, triggerName, auditTableName, schema, tableName))
}

const query = (handlerName: string, triggerName: string, auditTableName: string, schema: any, tableName: string): string => `
CREATE OR REPLACE FUNCTION ${handlerName} RETURNS TRIGGER AS $${triggerName}$
  BEGIN
    INSERT INTO ${auditTableName} (${mapToAuditInsertColumnString(schema)})
    SELECT ${mapToAuditSelectRowString(schema, "ot")}
    FROM "old_table" "ot";
    RETURN NULL;
  END
  $${triggerName}$ LANGUAGE PLPGSQL;

CREATE TRIGGER ${triggerName}
  AFTER UPDATE ON "${tableName}"
  REFERENCING OLD TABLE AS old_table
  FOR EACH ROW EXECUTE FUNCTION ${handlerName};
`