import * as dotenv from 'dotenv'
dotenv.config()

import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from '../../shared/configs/data-base.config';
import { User } from '../user/user.entity';

export const databaseProvider = {
    provide: 'SequelizeInstance', // nama instance sequelize nanti
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
            case 'prod':
            case 'production':
            case 'dev':
            case 'development':
            default:
                config = {...databaseConfig.development, dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false
                    }
                  }};
        }

        console.log(config)

        const sequelize = new Sequelize(config);
        sequelize
            .authenticate()
            .then(() => console.log('Connection SEQUELIZE has been established successfully.'))
            .catch(err => console.error('Unable to connect to the database:', err));

        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
    }
};
