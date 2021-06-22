import { User } from './user.entity';

export const userProvider = {
    provide: 'UserRepositorySequelize',
    useValue: User
};
