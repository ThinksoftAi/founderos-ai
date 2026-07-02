# FounderOS AI Database Design

Version: 1.0

Status: Draft

Owner: ThinkSoft AI

Database: PostgreSQL

Architecture: Multi-Tenant

---

# Database Philosophy

The database is designed around business domains rather than application screens.

Every business entity belongs to an organization.

Every organization is isolated from every other organization.

All AI intelligence is grounded in structured business data.

---

# Multi-Tenant Model

Organization

↓

Users

↓

Business Data

↓

AI Memory

↓

Reports

---

# Database Standards

Every table must contain

id (UUID)

organization_id

created_at

updated_at

created_by

updated_by

deleted_at

status

---

# Naming Convention

snake_case

Plural table names

UUID Primary Keys

Soft Deletes

UTC Timestamps

---

# Database Domains

Identity

Organizations

CRM

Projects

Tasks

Meetings

Documents

Finance

AI

Notifications

Billing

Audit Logs

Integrations

---

# Core Tables

organizations

users

memberships

clients

contacts

projects

tasks

meetings

documents

executive_briefings

business_replays

conversations

memories

notifications

subscriptions

audit_logs

---

# Relationships

Organization

├── Users

├── Clients

├── Projects

├── Meetings

├── Documents

├── Revenue

├── AI Memory

├── Executive Briefings

└── Business Replay

---

# AI Principle

AURA never stores raw prompts alone.

AURA stores structured business knowledge.

Business Memory

↓

Reasoning

↓

Recommendations

↓

Executive Decisions

---

# Security

Row Level Security

Soft Deletes

Audit Logging

Encrypted Secrets

Role Based Access

---

# Scalability

The database must support

100,000 organizations

1,000,000 users

Unlimited AI conversations

Future modules without redesign