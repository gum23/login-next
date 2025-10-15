
export const config = {
    mongodb_user: process.env.MONGODB_USER || "defaultUser",
    mongodb_password: process.env.MONGODB_PASSWORD || "defaultPass",
    mongodb_name: process.env.MONGODB_NAME || "defaultDB",
    mongodb_cluster: process.env.MONGODB_CLUSTER || "defaultCluster",
    mongodb_app: process.env.MONGODB_APP || "defaultApp",
    jwt_secret: process.env.JWT_SECRET || "default"
}
