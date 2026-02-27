type SchemaConstraints = "primaryKey"
  | "foreignKey"
  | "optionalForeignKey"
  | "referenceKey"
  | "externalKey"

type SchemaConstraintsFunc = {
  [key in SchemaConstraints]: (Sequelize: any) => Object
}

const primaryKey = (Sequelize: any) => ({ type: Sequelize.BIGINT, autoIncrement: true, allowNull: false })
const foreignKey = (Sequelize: any) => ({ type: Sequelize.BIGINT, allowNull: false })
const optionalForeignKey = (Sequelize: any) => ({ type: Sequelize.BIGINT, allowNull: true, defaultValue: null })
const referenceKey = (Sequelize: any) => ({ type: Sequelize.STRING(64), allowNull: false })
const externalKey = (Sequelize: any) => ({ type: Sequelize.CHAR(36), allowNull: false })

export const createSchemaConstraints: SchemaConstraintsFunc = {
  primaryKey,
  foreignKey,
  optionalForeignKey,
  referenceKey,
  externalKey,
}
