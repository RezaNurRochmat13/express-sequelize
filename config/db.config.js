module.exports = {
    HOST: "localhost",
    USER: "sequelize_jerry",
    PASSWORD: "jerryyoung",
    DB: "sequelize_dev",
    dialect: "postgres",
    // Database pooling
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};