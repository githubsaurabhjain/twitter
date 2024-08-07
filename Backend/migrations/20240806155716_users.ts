import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', tbl => {
        tbl.uuid('id').defaultTo(knex.fn.uuid()).primary();
        tbl.string('name',255);
        tbl.string('user_name',255).unique();
        tbl.string('email').unique();
        tbl.timestamp('createdOn')
      })
}


export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTableIfExists('users');
}