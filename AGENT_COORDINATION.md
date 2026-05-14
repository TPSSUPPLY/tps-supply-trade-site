# TPS — Agent Coordination Rules

**Owner:** Anthony Milelli
**Effective:** May 14, 2026
**Why this exists:** Two AI agents are working on TPS systems in parallel. To avoid conflicts, duplicated work, and broken deploys, each agent has explicit ownership of certain repos and surfaces.

---

## Lanes

### Lane A — Catalog, Wholesale, Data
**Owned by:** Perplexity Computer (this session)

| Surface | Repo / System |
|---|---|
| Customer-facing showroom site | `TPSSUPPLY/tps-showroom-catalog` → yourshowroomattps.com |
| Wholesale trade site | `TPSSUPPLY/tps-supply-trade-site` → tpssupply.com |
| Product database | Render PostgreSQL `tps-showroom-db` (336K products) |
| Search index | Typesense `gbnflq1t2yphikd6p-1.a1.typesense.net` |
| Daily summary scheduled task | `cron_id: a0cdcc32` |
| Weekly GBP post drafts scheduled task | `cron_id: a9c1b7bf` |

**Render service:** `srv-d709h02a214c73e63lj0` (tps-showroom-catalog)
**Render service:** `srv-d7mea91f9bms73fva7j0` (tps-supply-trade-site)

### Lane B — Sales Portal
**Owned by:** the other agent

| Surface | Repo / System |
|---|---|
| Internal sales team portal | `TPSSUPPLY/tps-showroom-sales` |
| Sales portal SQLite DB | `data.db` inside the sales-portal app |
| Wishlist sync consumer | `POST /api/wishlists/sync` in the sales portal |
| Marketing endpoints | `/api/marketing/*` in the sales portal |

**Render service:** `srv-d7tp08km0tmc73d0r6fg` (tps-showroom-sales, Ohio region)

---

## Shared Integration: Wishlist Sync

This is the one cross-lane contract. **Do not change the contract without both agents agreeing.**

```
yourshowroomattps.com → tps-showroom-sales
```

### Source (Lane A)
- **Endpoint:** `GET https://www.yourshowroomattps.com/api/external/wishlists`
- **Auth:** `Authorization: Bearer <WISHLIST_SYNC_TOKEN>`
- **Returns:** JSON `{ source, exportedAt, customerCount, itemCount, customers: [{id, email, name, phone, notes, createdAt, lastActivityAt, items: [...], itemCount}] }`
- **Items shape:** `{id, productId, productName, brand, sku, finish, quantity, mapPrice, listPrice, imageUrl, location, notes, projectId, createdAt}`
- **Owned by:** Lane A. To change the response shape, Lane A must notify Lane B first.

### Consumer (Lane B)
- **Endpoint:** `POST https://tps-showroom-sales.onrender.com/api/wishlists/sync`
- **Pulls the source, persists into local SQLite tables `wishlist_customers`, `wishlist_items`, `wishlist_syncs`**
- **Owned by:** Lane B.

### Shared secret
- Env var name: `WISHLIST_SYNC_TOKEN`
- Must be set IDENTICALLY in both Render services
- Anthony rotates this; either agent can request rotation

---

## Hard Rules

### For Lane A (me)
- ❌ Do not touch `TPSSUPPLY/tps-showroom-sales` (sales portal repo)
- ❌ Do not modify the sales-portal Render service (`srv-d7tp08km0tmc73d0r6fg`)
- ❌ Do not change the `/api/external/wishlists` response shape unilaterally
- ✅ Can extend `/api/external/wishlists` with new fields (additive only)
- ✅ Can add new `/api/external/*` endpoints for new Lane B integrations

### For Lane B (other agent)
- ❌ Do not push to `TPSSUPPLY/tps-showroom-catalog` or `TPSSUPPLY/tps-supply-trade-site`
- ❌ Do not modify the `tps-showroom-db` PostgreSQL database schema
- ❌ Do not reindex Typesense or touch its records
- ❌ Do not create a duplicate daily summary or weekly GBP scheduled task
- ✅ Can consume any `/api/external/*` endpoint on yourshowroomattps.com
- ✅ Can request new endpoints on yourshowroomattps.com (Lane A builds them)

### For both
- ⏱️ **Queue rule:** before any `git push` to a shared concern, run `git log -1 --format='%cr' --all` on the relevant repo. If anything was pushed in the last 2 minutes, wait 2 more minutes.
- 📣 **Annotate cross-lane changes:** if your commit touches the wishlist sync contract, the daily summary cron, or any shared infrastructure, include `[cross-lane]` in the commit message.
- 🔐 **Secret hygiene:** API keys for shared services (Resend, GitHub PAT, Render API, Typesense, Google Ads, etc.) are managed centrally by Anthony. Don't rotate without notice.

---

## Communication Channel

Anthony is the human in the loop. When in doubt:
1. Don't ship.
2. Document the question in your conversation with Anthony.
3. Wait for Anthony to relay to the other agent or make the call.

---

## Status as of May 14, 2026 — 12:42 AM EDT

- [x] Lane A: `/api/external/wishlists` endpoint built (commit `d983859`)
- [x] Lane B: Wishlist sync consumer built (commit `2e59005`)
- [ ] **Blocker:** `WISHLIST_SYNC_TOKEN` not set in Lane A's Render env vars
- [ ] **Blocker:** Lane B has the env var stored as `WISHLIST_SYNC_TOKE` (typo — missing final "N")
- [ ] Both env vars need to match — Anthony to set/correct
