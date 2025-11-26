# Comprehensive Notes on Caching

Welcome to this detailed revision on **Caching**, based on the concepts discussed in class. This document covers what caching is, why it is important, types of caching, cache invalidation strategies, eviction policies, and practical applications in modern distributed systems.

---

## 🚀 Introduction to Caching

Caching is the process of **temporarily storing frequently accessed data** in a faster storage medium to speed up retrieval.  
Example: Data stored in **RAM** instead of disk can be retrieved _thousands of times faster_.

Caching helps:

- Reduce data access time
- Lower database and server load
- Improve system performance and user experience

---

## 🎯 Why Use Caching?

The main goals of caching are:

- **Reduce latency** by serving data from faster storage
- **Minimize repeated database queries**
- **Handle higher user load** without scaling databases prematurely

Caching makes applications responsive and scalable under heavy traffic.

---

## 🧩 Types of Caching

### 1. **Client-Side Caching**

Data is stored on the client (e.g., browser caching of images, scripts, DNS).  
Useful for data that doesn’t change frequently.

### 2. **Server-Side Caching**

Cached on the server to reduce repetitive DB calls.

#### 🔹 Local Cache (Server Cache)

Stored on a single server—reduces per-server load.

#### 🔹 Global Cache (Distributed Cache)

Shared by multiple servers.  
Examples: **Redis**, **Memcached**

### 3. **CDNs (Content Delivery Networks)**

CDNs cache static content (images, videos, HTML) at locations near the user.  
This reduces:

- Latency
- Bandwidth usage
- Load on origin servers

---

## 🔄 Cache Invalidation Strategies

Ensuring accuracy of cached data is crucial. Common strategies:

### ⭐ Write-Through

Data is written to **cache + database simultaneously** before confirming success.  
✔ Strong consistency  
✘ Higher write latency

### ⭐ Write-Back (Lazy Write)

Data is written to cache and asynchronously flushed to DB.  
✔ Fast writes  
✘ Risk of data loss if cache fails

### ⭐ Write-Around

Writes bypass the cache and go directly to DB. Cache is only updated when data is read frequently.  
✔ Avoids polluting cache with infrequent data  
✘ Higher read cost initially

---

## 🗑 Cache Eviction Policies

Used when cache memory is full:

### 🔹 Least Recently Used (LRU)

Evicts data that hasn’t been accessed recently.

### 🔹 Most Recently Used (MRU)

Evicts the most recently accessed items.

### 🔹 Least Frequently Used (LFU)

Evicts items accessed least often.

Eviction ensures that the most valuable data stays in the cache.

---

## ⚖️ Trade-offs & Considerations

While caching improves performance, there are challenges:

### ❗ Data Staleness

Cached data may be outdated if not refreshed properly.

### ❗ Consistency Complexity

Keeping cache and database in sync is harder in distributed systems.

### ❗ Memory Constraints

Caching large datasets can be expensive.

---

## 🌍 Real-World Applications

### **Facebook**

Uses large-scale caching layers (like TAO, Memcache) to avoid overwhelming databases with billions of requests.

### **Netflix**

Caches video metadata, recommendations, thumbnails, and user sessions to deliver low-latency streaming globally.

Caching is a critical part of their high-performance architectures.

---

## 📘 Summary

Caching:

- Improves performance by reducing latency
- Cuts server and database load
- Requires strategies like invalidation, eviction, and consistency management
- Is essential for building scalable, high-availability systems