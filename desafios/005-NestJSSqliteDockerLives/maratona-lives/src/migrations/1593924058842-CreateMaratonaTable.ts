import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { Maratona } from "src/maratona/maratona.entity";

export class CreateMaratonaTable1593924058842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "maratona",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "link",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "datetime"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("maratona")
    }

}
