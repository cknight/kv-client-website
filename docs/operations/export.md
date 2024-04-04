---
description: Export data out of KV
sidebar_position: 5
---
# Export

Export is used to create a sqlite file of all data in the connection, downloaded
to your device. In essence, this duplicates your KV store as a local (to you)
file. CAUTION: There are no consistency guarantees with this operation for
databases with more than 500 entries. Data is retrieved from the connection
using 'list', which can only guarantee consistency for up to 500 entries per
batch. If you have more entries than this in your store then consistency is not
guaranteed between batches. If the purpose of your export is for backups, then
the following options are likely better suited:

- Deploy - See https://docs.deno.com/deploy/kv/manual/backup
- Local or self-hosted - Simply locate the db file(s) and copy it.

If neither are suitable, then you can ensure consistency by taking down service
(to ensure no modifications occur) while you perform the export.
