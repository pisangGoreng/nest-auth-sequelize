import { IDatabaseConfig } from '../interfaces/IDataBaseConfig';

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.POSTGRES_USER || 'nest',
        password: process.env.POSTGRES_PASSWORD || 'nest',
        database: process.env.POSTGRES_DB || 'nestbook',
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.POSTGRES_PORT) || 5432,
        dialect: 'postgres',
        logging: false,
        force: false,
        timezone: '+07:00'
    }
};