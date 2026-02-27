import { setUniqueColumn } from ".."

export const setPrimaryKey = async (queryInterface: any, tableName: string, tablePrimaryKey: string) => {
  await queryInterface.addConstraint(tableName, {
    type: "primary key",
    fields: [tablePrimaryKey],
  })

  await setUniqueColumn(queryInterface, tableName, tablePrimaryKey)
}