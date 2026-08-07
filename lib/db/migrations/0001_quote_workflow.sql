-- Adds the quote + review/send workflow columns to the existing leads table.
--
-- This project has no drizzle-kit, so migrations are plain SQL run by hand.
-- Run once against the production database (Neon/Vercel Postgres console, or
-- psql "$DATABASE_URL" -f this file). Safe to re-run: every statement uses
-- IF NOT EXISTS.

ALTER TABLE leads ADD COLUMN IF NOT EXISTS domain_choice     text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS quote_lines       jsonb DEFAULT '[]'::jsonb;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS once_off_total    integer;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS monthly_total     integer;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS deposit           integer;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS valid_until       timestamptz;

ALTER TABLE leads ADD COLUMN IF NOT EXISTS status            text NOT NULL DEFAULT 'new';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS review_token      text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS quote_sent_at     timestamptz;

ALTER TABLE leads ADD COLUMN IF NOT EXISTS follow_up_count   integer NOT NULL DEFAULT 0;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS last_follow_up_at timestamptz;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS client_replied    boolean NOT NULL DEFAULT false;

-- The review link is looked up by token, so it needs an index.
CREATE UNIQUE INDEX IF NOT EXISTS leads_review_token_idx ON leads (review_token);

-- Follow-up sweep filters on these two together.
CREATE INDEX IF NOT EXISTS leads_status_sent_idx ON leads (status, quote_sent_at);
