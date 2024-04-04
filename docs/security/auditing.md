---
description: Auditing actions in KV Client
sidebar_position: 3
---

# Auditing

All operations are logged as audits which expire after 30 days. Audits may be
found in the KV Client KV database under the `"audit"` prefix. The user who
initiated the operation is included in the audit, either as anonymous (with
session id) or as the Deploy user name. Example audit for user Joe, who ran
`list` for key's prefixed with `"User"`, limiting to 50 results and which took
334ms to complete:

```javascript
{
  auditType: "list",
  executorId: "Joe Bloggs (jbloggs)",
  prefixKey: "\"User\"",
  startKey: "",
  endKey: "",
  limit: "50",
  reverse: false,
  results: 50,
  readUnitsConsumed: 7,
  connection: "high-chicken-79 (Deploy playground), cc6d1caf-509a-4904-a1a0-5118a585331d",
  infra: "Deploy",
  rtms: 334,
  aborted: false,
}
```
