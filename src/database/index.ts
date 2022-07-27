import { Sequelize } from "sequelize";

const dataBaseUrl = process.env.DATABASE_URL || ''

export const sequelize = new Sequelize(dataBaseUrl, {
    define: {
        underscored: true
    }
})