import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const courierApplications = sqliteTable("courier_applications", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fullName: text("full_name").notNull(),
  identityType: text("identity_type").notNull(),
  identityNumber: text("identity_number").notNull(),
  phone: text("phone").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  locale: text("locale").notNull().default("ar"),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const contactMessages = sqliteTable("contact_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull().default(""),
  topic: text("topic").notNull(),
  message: text("message").notNull(),
  locale: text("locale").notNull().default("ar"),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
