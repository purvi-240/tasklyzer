import { DataSource } from "typeorm";
import {Todo} from "./entity/Todo";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "todos.sqlite",
    synchronize: true,
    logging: false,
    entities: [Todo],
})