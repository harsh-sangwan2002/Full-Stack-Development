# 🌐 System Design 101 — Revision Notes

Welcome to **System Design 101**, a comprehensive revision guide summarizing the core concepts covered in the introductory session of the course. This document highlights the principles of high-level system design and distributed systems, helping you build scalable and reliable applications.

---

## 📘 Introduction to System Design

### 🔹 What Is System Design?

System Design (High-Level Design or HLD) is the process of defining the architecture of a system so it can handle large-scale operations. It ensures that an application can manage current requirements while remaining scalable and efficient as demand grows.

### 🔹 Why System Design Matters

System design becomes increasingly important as engineers move into senior roles. It helps in:

- Designing scalable and fault-tolerant systems
- Making strategic infrastructure decisions
- Optimizing performance under high load
- Handling growth like a real-world production system

This module is essential for intermediate and advanced engineers.

### 🔹 Learning Approach

The course follows a **case-study-driven approach**, analyzing real applications, scalability constraints, and distributed system behavior.

---

## ⚖️ Types of Scaling

### 🔸 Vertical Scaling (Scaling Up)

Vertical scaling means upgrading a single machine by adding more powerful hardware.

**Examples:**

- Increasing CPU cores
- Adding more RAM or storage

**Limitations:**

- Hardware limits eventually cap scalability
- Can become expensive at higher tiers

This is similar to adding more benches in one classroom — useful, but only up to a point.

---

### 🔸 Horizontal Scaling (Scaling Out)

Horizontal scaling involves adding more machines to distribute the load.

**Examples:**

- Adding additional servers to handle traffic
- Distributing requests across nodes

**Benefits:**

- Cost-effective at large scale
- Provides fault tolerance and high availability

This is like opening more classrooms when one becomes full.

---

## 🌍 Distributed Systems

Horizontal scaling leads to **distributed systems**, where components run across multiple machines and locations. Distributed architectures are essential for platforms like Google, Netflix, or ChatGPT to serve global traffic with minimal latency and zero single points of failure.

---

## 🗄️ Database Considerations

A database that works for 1,000 users might fail at 1 million or 1 billion. As scale grows, systems must adopt:

- Highly optimized relational databases
- Sharded architectures
- NoSQL databases
- Distributed storage systems

Choosing the right database strategy is a key system design responsibility.

---

## 🏁 Conclusion

System design is a foundational skill for building large-scale, resilient applications. By understanding scalability, distributed systems, and architectural patterns, engineers can design systems that perform reliably under real-world workloads.

These notes serve as a starting point for deeper exploration into caching, load balancing, data partitioning, asynchronous processing, and more — the building blocks of modern system architecture.