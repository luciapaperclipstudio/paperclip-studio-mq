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

export type QuoteLineRow = {
  id: string
  label: string
  note?: string
  price: number
  billing: 'once' | 'monthly' | 'annual'
}

// new      — quote generated, waiting for Lucia to review
// sent     — approved and emailed to the client
// declined — dismissed without sending (spam, duplicate, not a real lead)
export type LeadStatus = 'new' | 'sent' | 'declined'

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

  // Quote built server-side at submit time. Stored so the figures the client
  // is sent can never drift from the figures we showed at review.
  domainChoice: text('domain_choice'),
  quoteLines: jsonb('quote_lines').$type<QuoteLineRow[]>().default([]),
  onceOffTotal: integer('once_off_total'),
  monthlyTotal: integer('monthly_total'),
  deposit: integer('deposit'),
  validUntil: timestamp('valid_until', { withTimezone: true }),

  // Review + send workflow.
  status: text('status').$type<LeadStatus>().notNull().default('new'),
  reviewToken: text('review_token'),
  quoteSentAt: timestamp('quote_sent_at', { withTimezone: true }),

  // Follow-up sequence.
  followUpCount: integer('follow_up_count').notNull().default(0),
  lastFollowUpAt: timestamp('last_follow_up_at', { withTimezone: true }),
  clientReplied: boolean('client_replied').notNull().default(false),

  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export type Lead = typeof leads.$inferSelect
