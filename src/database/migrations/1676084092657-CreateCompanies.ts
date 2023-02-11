import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCompanies1676084092657 implements MigrationInterface {
    name = 'CreateCompanies1676084092657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "cnpj" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "categories" character varying array NOT NULL, "slug" character varying NOT NULL, "website" character varying NOT NULL, "started_date" TIMESTAMP NOT NULL, "closed_date" TIMESTAMP, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_703760d095b8e399e34950f4960" UNIQUE ("cnpj"), CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b28b07d25e4324eee577de5496" ON "companies" ("slug") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_b28b07d25e4324eee577de5496"`);
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
