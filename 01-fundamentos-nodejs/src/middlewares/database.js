export class DataBase {

    database = {}
    select(table) {
        return this.database[table] || []
    }
}

