declare module 'egg' {
    import { Entity, Repository } from 'typeorm';

    interface IEntity {
        [key: string]: Repository<Entity>;// 最好自动生成
    }

    // extend context
    interface Context {
        entity: IEntity;
    }

    interface Application {
        entity: IEntity;
    }
}
