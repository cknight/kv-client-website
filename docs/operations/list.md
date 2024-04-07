---
description: List entries from KV
sidebar_position: 2
---

# List

If you wish to browse or view a range of your KV data, then using the list
operation is the best choice. This is equivalent to using, e.g.
`kv.list({prefix: ["some key"]}, {limit: 10, reverse: false})`.

## List criteria

Just like the KV list interface you can specify a prefix, start and/or end key
to control which data is displayed. For details on how to use these, see
https://docs.deno.com/deploy/kv/manual/operations#list. You can also choose how
many entries are returned with 'limit', whether to reverse the results and if
you wish to disable the cache when listing. To see all entries in KV, leave
prefix, start and end blank and set 'limit' to 'all'.

## Viewing and Filtering Results

Results are shown in a table below the search criteria. Rows will show you the
key, value and type of the value. Hovering over a value will show a sneak peak
of the value. Clicking on a row will show you the entry in full. Here you can
see the full key and value. Back in the main results table, you can filter the
results with any free text search (this free text searches both the key and
value fields). Note that filtering is only applied to the search results and not
to all KV entries. At the bottom of the results are some stats about where the
results came from (e.g. cached or not) and how long the operation took. Under
the table are paging controls and a drop down to select how many rows to show on
a page.

## Operating on Results

Selecting one or more rows through the checkbox on the left will allow you to
delete those rows or copy them to another KV connection. You can also select all
rows displayed through the checkbox column header (note, this only selects
visible rows, which may not include all results). If no checkboxes are selected,
you can `Delete` or `Copy` all search results. To modify the value of an entry,
select the row to bring up the entry in full and select `Edit value`.
