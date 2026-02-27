export const setForeignKey = async (queryInterface: any, primaryTableName: string, field: string, referenceTable: string, referenceField: string | undefined) => {
  await queryInterface.addConstraint(primaryTableName, {
    type: "foreign key",
    fields: [field],
    references: { table: referenceTable, field: referenceField || field },
    onUpdate: "cascade",
    onDelete: "cascade",
  })
}