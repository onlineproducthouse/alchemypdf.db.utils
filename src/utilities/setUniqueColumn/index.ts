export const setUniqueColumn = async (queryInterface: any, tableName: string, columnName: string) => {
  await queryInterface.addConstraint(tableName, {
    type: "unique",
    fields: [columnName],
  })
}