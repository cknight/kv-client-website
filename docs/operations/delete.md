---
description: Delete one, many or all entries to another KV Client connection
sidebar_position: 8
---

# Delete

Delete isn't a directly available operation but one which becomes available after getting or listing data.  When using the `get` operation, under the value display will be the option to `Delete` the entry.  A confirmation dialog will be shown.

For `list` the process is generally the same. After executing the `list` operation,  `Delete` will default to deleting all results.  As a worked example, if you set the list `limit` to 50, your database has 100 entries and you are showing 10 results per page, then after the results are shown (the first 10 of them), 'Delete' will delete the 50 entries retrieved.  If you then toggle the 'select all' checkbox (above the left hand column) this will select all entries on the page and `Delete` will delete just the 10 results.  Alternatively, select one or more checkboxes against the displayed rows to `Delete` just those results.  Finally, if a filter is active (you have filtered the 50 results down to 32 for example), the above still holds, except that with no checkboxes selected `Delete` will delete the 32 filtered results and not all 50.

:::warning

Deleting data cannot be undone, proceed with caution.

:::

:::warning

Deleting larger amounts of data is not a consistent operation.

:::
