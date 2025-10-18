
const config = {
    //Datos de conexión a mongo
    mongodb_user: process.env.MONGODB_USER || "defaultUser",
    mongodb_password: process.env.MONGODB_PASSWORD || "defaultPass",
    mongodb_name: process.env.MONGODB_NAME || "defaultDB",
    mongodb_cluster: process.env.MONGODB_CLUSTER || "defaultCluster",
    mongodb_app: process.env.MONGODB_APP || "defaultApp",

    //Key secret JWT
    jwt_secret: process.env.JWT_SECRET || "default",

    //Datos mail
    mail: process.env.APP_EMAIL_USER || "mail_user_default",
    pass: process.env.APP_EMAIL_PASS || "mail_pass_default"
}

export default config;