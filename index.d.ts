import {Repository} from "typeorm/repository/Repository";

declare module 'egg' {
    interface IEntity {
        [key:string]:Repository<Entity>
    }

    // extend app
    interface Application {
        entity: IEntity;
    }

    // extend context
    interface Context {
        entity: IEntity;
    }
}
