# Consistent Hashing & Caching — Revision Notes

## 📌 Agenda

- Introduction to Caching
- Consistent Hashing
- Stateful Load Balancing Algorithms
- Handling Machine Failures & Scaling
- Maintaining Fast and Efficient Systems

---

## 🌀 Consistent Hashing

### 🔹 Introduction

Consistent hashing is a key technique in distributed system design. It helps efficiently distribute data across multiple servers while allowing **independent scaling** of application servers and databases. This ensures that app deployments do not impact database availability.

### 🔹 How It Works

#### 1. Hash Functions

Hashing algorithms like **SHA**, **MD5**, and **Murmur** are used to distribute keys or requests evenly across servers.

#### 2. Ring Architecture

Both servers and data are mapped onto a **circular hash ring**, enabling proportional and predictable distribution.

#### 3. Virtual Nodes / Multiple Hashes

To improve fault tolerance and load-balancing:

- Each server is placed on the ring **multiple times**.
- If a server goes down, its data is smoothly redistributed to the next available nodes.
- This avoids overload on any single server.

### 🔹 Handling Chaos

If a machine fails:

- Only a **small fraction** of keys need remapping.
- Load is redistributed smoothly.
- This prevents cascading failures across the system.

---

## ⚡ Caching

### 🔹 Introduction

Caching stores data closer to users to reduce latency, minimize computation, and cut down server load.

### 🔹 Types of Caching

#### 1. Client-Side Caching

Examples include browser caching of DNS lookups, images, and static resources.

#### 2. Server-Side Caching

Tools like **Redis** or **Memcached** store frequently accessed data in memory and serve it across application servers.

#### 3. CDNs (Content Delivery Networks)

CDNs store cached copies of static assets near users geographically, reducing latency significantly.

### 🔹 Benefits

- Faster response times
- Reduced database queries
- Lower computational cost

### 🔹 Challenges

Caches can serve **stale data**. Common solution:

- **TTL (Time To Live):** Data automatically expires after a specific duration.

---

## 🔄 Consistent Hashing in Caching

Consistent hashing is widely used in distributed caching systems. When servers are added or removed:

- Only minimal data needs to be relocated.
- Cache distribution remains balanced.
- No single server becomes overloaded.

---

## 📝 Summary

This class covered:

- Importance of separate app and DB servers for independent scaling
- How consistent hashing distributes load efficiently
- How caching reduces latency and server load
- Strategies like TTL to avoid stale cache issues
- Using consistent hashing for smooth scaling in caching systems