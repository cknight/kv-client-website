---
sidebar_position: 6
---

# Consistency and Caching

Strong consistency is used for most operations. Generally speaking, when working
with smaller datasets you can expect all operations (except Export) to be
strongly consistent. However, working with larger datasets (e.g.
copy/delete/import/export) hits constraints with KV that eliminate consistency
guarantees.

Caching is user session specific. E.g. search results are not globally cached.
Operations which modify entires will invalidate the cache.

| Operation | Consistency (small datasets) | Consistency (large datasets) | Caching                                        |
| --------- | ---------------------------- | ---------------------------- | ---------------------------------------------- |
| Get       | Strong                       | n/a                          | None                                           |
| List      | Strong                       | None (*)                     | Results cached for 24 hours                    |
| Set       | Strong                       | n/a                          | None                                           |
| Copy      | Strong                       | None (***)                   | Copied entry or entries referenced from cache  |
| Delete    | Strong                       | None (***)                   | Deleted entry or entries referenced from cache |
| Import    | Strong                       | None (*)                     | None                                           |
| Export    | Eventual (**)                | None                         | None                                           |

\* The list results are strongly consistent within batches of 500, the maximum
which you can retrieve from KV at once. There is no consistency guarantee
between batches of 500.

\*\* Eventual consistency is used for Export to take advantage of the higher
performance. As this operation uses `list` to extract all data from the source
DB, it's only consistent within batches of 500 keys. Therefore eventual
consistency is used for it's higher performance to reduce the overall window of
time the operation needs to complete (during which it is more vulnerable to
inconsistent data).

\*\*\* Copy and delete have two consistency constraints. The first is a
non-guarantee of consistency of data when working with more than 500 keys (e.g.
during a `list` of the data). The second are the limits KV imposes on the
maximum size of atomic transactions during set (copy destination) or delete of
the data. KV Client attempts to batch up as many copy and delete operations as
possible into a single atomic transaction, however with larger datasets, it is
likely multiple atomic transactions would be required to get through all the
data. Consider the case of copying both a key and it's secondary index amongst
many other keys. It's possible that the primary key gets set in the destination
KV database in one atomic transaction while the secondary index gets set in
another atomic transaction.
