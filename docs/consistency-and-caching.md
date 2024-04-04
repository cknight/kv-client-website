---
sidebar_position: 6
---

# Consistency and Caching

Strong consistency is used for most operations. Caching is use session specific. E.g. search results
are not globally cached. Operations which modify entires will invalidate the cache.

| Operation | Consistency   | Caching                                        |
| --------- | ------------- | ---------------------------------------------- |
| Get       | Strong        | None                                           |
| List      | Strong (*)    | Results cached for 24 hours                    |
| Set       | Strong        | None                                           |
| Copy      | n/a           | Copied entry or entries referenced from cache  |
| Delete    | n/a           | Deleted entry or entries referenced from cache |
| Import    | Strong        | None                                           |
| Export    | Eventual (**) | None                                           |

\* The list results are strongly consistent within batches of 500, the maximum which you can
retrieve from KV at once. There is no consistency guarantee between batches of 500.

\*\* Eventual consistency is used for Export to take advantage of the higher performance. As this
operation uses `list` to extract the data from the source DB, it's only consistent within batches of
500 keys so you might as well use eventual consistency for it's higher performance
