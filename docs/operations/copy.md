---
description: Copy one, many or all entries to another KV Client connection
sidebar_position: 7
---

# Copy

Copy isn't a directly available operation but one which becomes available after
getting or listing data. When using the `get` operation, under the value display
will be the option to `Copy` the entry. Select an existing KV Client connection
to which you wish to copy the entry to.

For `list` the process is generally the same. After executing the `list`
operation, `Copy` will default to copying all results. As a worked example, if
you set the list `limit` to 50, your database has 100 entries and you are
showing 10 results per page, then after the results are shown (the first 10 of
them), `Copy 50 results` will copy the 50 entries retrieved. If you then toggle
the 'select all' checkbox (above the left hand column) this will select all
entries on the page and `Copy 10 results` will copy just the 10 entries.
Alternatively, select one or more checkboxes against the displayed rows to
`Copy x results` just those 'x' results selected. Finally, if a filter is active
(you have filtered the 50 results down to 32 for example), the above still
holds, except that with no checkboxes selected `Copy 32 results` will copy the
32 filtered results and not all 50.

:::warning

Copying data will overwrite existing keys in the destination KV database.

:::
