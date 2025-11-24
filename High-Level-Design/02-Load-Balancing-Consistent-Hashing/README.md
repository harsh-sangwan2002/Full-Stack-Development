# ⚖️ High-Level Design 2: Load Balancing & Consistent Hashing

This document summarizes the key concepts covered in **High-Level Design Session 2**, focusing on load balancing strategies and an introduction to consistent hashing. These concepts form the backbone of designing scalable, fault-tolerant distributed systems.

---

## 📘 Overview

### **Agenda**

The class explored the following topics:

- What load balancers are and why they are essential
- How databases relate to scaling
- Introduction to sharding
- Basics of consistent hashing (deep dive planned for upcoming sessions)

---

## 🔁 Recap: Why Load Balancing?

Load balancing is required to manage traffic efficiently across multiple servers. It improves:

- **Reliability** – prevents a single server from becoming a bottleneck
- **Fault tolerance** – system continues even if a server fails
- **Scalability** – supports more users by spreading traffic across more servers

To the end user, the system should appear as a **single unified backend**, regardless of which server processes the request.

---

## ⚙️ Load Balancers

### **Purpose & Necessity**

- **Unified Backend View**
  Users should never need to know which server handles their request.

- **Even Traffic Distribution**
  Prevents any server from being overloaded, improving performance and uptime.

---

## 🧠 Load Balancing Decision Algorithms

### **1. Random Distribution**

Requests are routed randomly across servers, resulting in roughly equal distribution over time.

### **2. Round Robin**

Requests are passed to servers in sequence (1 → 2 → 3 → 1 → …). Simple and effective for uniform workloads.

### **3. Load-Based Routing**

Routes traffic to servers based on their current load, CPU usage, memory usage, or connection count.

### **4. Consistent Hashing (Preview)**

Important for distributing requests based on user identity or keys.
A full deep-dive will be covered in the next session.

---

## 🧳 Stateless vs Stateful Load Balancing

### ⭐ **Stateless Load Balancing**

- Each request is independent
- No session memory is required
- Easy to scale — new servers can be added seamlessly
- Best for systems where any server can handle any request

_Analogy: A calculator solving “10 + 15” doesn’t care about previous calculations._

---

### 🔒 **Stateful Load Balancing**

- Requests depend on past interactions
- A user session must be tied to the same server (session affinity)
- Harder to scale — moving or adding servers may break sessions
- Needed in workflows like shopping carts, multi-step forms, or gaming sessions

---

## 🗂️ Sharding (Brief Introduction)

Sharding is a database scaling technique where data is divided across multiple machines.
This becomes necessary as single database instances cannot handle massive amounts of traffic or data.

---

## 🔁 Consistent Hashing (Coming Soon)

Consistent hashing helps solve the **redistribution problem** when servers (nodes) are added or removed.
Instead of remapping all keys, only a small subset needs redistribution.

A detailed breakdown of hash rings, virtual nodes, and fault-tolerant partitioning will be covered in future classes.

---

## 🎯 Conclusion

This session emphasized:

- Why load balancing is crucial in distributed system design
- How different algorithms distribute traffic
- The impact of stateless and stateful designs on scalability
- The foundation for upcoming topics like consistent hashing and advanced sharding

These concepts prepare engineers to build scalable, high-performance architectures that can handle millions of users reliably.
