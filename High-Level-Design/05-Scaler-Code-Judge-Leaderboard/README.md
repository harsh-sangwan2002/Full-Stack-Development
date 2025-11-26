# Revision Notes: Caching Strategies and System Design

These notes summarize the key concepts discussed in class regarding caching techniques and their role in scalable system design. The concepts are especially relevant for large-scale systems such as Scaler’s Code Judge and Contest Leaderboard platforms.

---

## 🚀 Introduction

Caching is a core component of scalable system design. It helps reduce retrieval time, lower database load, and improve user experience by storing frequently accessed data in faster storage layers. This session focused on caching needs, strategies, invalidation techniques, and practical use cases in real-world systems.

---

## 🧠 Why Do We Need Caching?

Without caching:

- Systems experience **high database load**
- Data retrieval becomes **slower**
- Overall **latency increases**
- Applications struggle under heavy traffic

Caching solves these issues by:

- Serving data from faster storage (RAM, distributed cache)
- Reducing repetitive database queries
- Improving overall scalability and reliability

---

## 🧩 Types of Caches

### 🔹 Local Cache

- Stored within the server's memory.
- Extremely fast for repeated access on the same machine.
- Exists independently on multiple servers, making it **distributed by default**.
- Does _not_ share data across servers.

### 🔹 Global Cache (Distributed Cache)

- Shared across multiple servers.
- Useful for data accessed by many services (e.g., leaderboards, user profiles).
- Requires a distributed storage mechanism like **Redis** or **Memcached**.

---

## ⚖️ Local vs Global Cache

| Feature     | Local Cache                       | Global Cache                     |
| ----------- | --------------------------------- | -------------------------------- |
| Scope       | Per server                        | Shared by all servers            |
| Speed       | Fastest (in-memory)               | Slightly slower (network call)   |
| Consistency | Harder to maintain                | Easier due to centralized nature |
| Use Cases   | Server-specific or temporary data | Frequently accessed shared data  |

---

## 🔄 Cache Invalidation & Consistency

### ⭐ Eventual Consistency

- Updates propagate _after_ initial write.
- Can result in temporary stale data.
- Suitable for non-critical, read-heavy systems.

### ⭐ Immediate Consistency

- All nodes reflect updates instantly.
- Very difficult and expensive to maintain in distributed systems.

### 🕒 TTL (Time to Live)

- Defines how long data remains valid in the cache.
- Helps balance **freshness** vs **performance**.
- Short TTL → fresher data, more DB load
- Long TTL → less DB load, higher chance of stale data

---

## 🛠 Strategies for Cache Invalidation

### 1. **TTL (Time To Live)**

Automatically removes data after a fixed duration.

### 2. **LRU (Least Recently Used)**

Evicts data that has not been accessed for the longest time.

### 3. **Write-Through Cache**

- Write to cache **and** database simultaneously.
- High consistency, higher write latency.

### 4. **Write-Back Cache**

- Write to cache first; database is updated asynchronously.
- Faster writes but risk of data loss.

---

## 📦 Use of Amazon S3 for Storage

- S3 is ideal for storing **large input/output files** due to cost efficiency.
- Databases should not store large binary content.
- S3 integrates well with caching layers for fast retrieval.

---

## 🏆 Designing Caching for Contest Leaderboards

Updating leaderboards in real time can overload databases due to continuous writes.

Suggested strategy:

- Store leaderboard data in a **global cache**
- Perform updates in **periodic batches** (e.g., every 10 minutes)
- Reduces DB load and improves user experience
- Still provides near-real-time results without overloading the system

---

## 💻 Practical Implementation (Scaler Code Judge Example)

- Code Judge requires fast feedback for submissions.
- Caching helps reduce load on core evaluation and database layers.
- Trade-off analysis needed:
  - Immediate feedback vs freshness of stored results
  - Throughput vs latency

Caching ensures the system remains responsive even during peak load.

---

## 🏁 Conclusion

Caching is a fundamental building block of scalable system design.  
By understanding:

- Cache types
- Invalidation strategies
- Consistency models
- Practical integration