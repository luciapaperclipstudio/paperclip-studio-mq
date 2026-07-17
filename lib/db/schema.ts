import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'

export type SelectedAddon = {
  id: string
  label: string
  price: number
}

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  businessName: text('business_name'),
  packageInterest: text('package_interest'),
  message: text('message'),
  selectedPackage: text('selected_package'),
  selectedPackagePrice: integer('selected_package_price'),
  selectedAddons: jsonb('selected_addons').$type<SelectedAddon[]>().default([]),
  estimateTotal: integer('estimate_total'),
  source: text('source').notNull().default('calculator'),
  completed: boolean('completed').notNull().default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export type Lead = typeof leads.$inferSelect
