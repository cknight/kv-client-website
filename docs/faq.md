---
sidebar_position: 9
---

# Frequently asked questions

### How can I see all data in my database?

You can access all data (for delete/copy/filter) by using the `list` interface
and leaving the prefix, start and end keys blank.

### How can I delete all data in my database?

First `list` all data in your database (see previous question) and then choose
`Delete xxx results` where 'xxx' is the number of entries it downloaded. Note
that the `Delete xxx results` will delete all those specific entries. Any
entries added after the `list` will remain in KV.

### How do I search for a specific value or part of a value?

After you `list` your data (either all data or a subset you wish to search), you
can use the `Filter` in the results section as a free text search of your
results. Note that the filter only applies to results. If you did not `list` all
data then the filter won't search all data.

### Can I run KV Client on Deno Deploy?

It is not recommended that you run KV Client on Deno Deploy and the application
will error out if you attempt to do so. There are a number of reasons for this,
but currently KV Client has no authentication mechanism and therefore anyone
could access it. The local database (for KV Client) and any self-hosted
connections setup would be accessible to anyone on the web. KV Client also
consumes a lot of memory (for caching, importing and exporting data) and
therefor would likely break resource constraints. There are no plans to support
KV Client on Deno Deploy. It should be run on a local server or development
machine.
