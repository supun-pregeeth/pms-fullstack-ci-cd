# Project Management System (Full-Stack + DevOps)

A full-stack Project Management System built with **React**, **Spring Boot**, and **MariaDB**, deployed using **Docker**, **Jenkins CI/CD**, and **Terraform** (optional).

## ✨ Features
- User signup/login (JWT-ready structure)
- Project & task management (CRUD-ready)
- REST API with Spring Boot
- MariaDB persistence
- Production-ready frontend served by Nginx
- CI/CD pipeline with Jenkins (build → push → deploy)
- Infrastructure provisioning with Terraform (optional)

## 🧱 Tech Stack
**Frontend:** React, Nginx  
**Backend:** Spring Boot (Java)  
**Database:** MariaDB  
**DevOps:** Docker, Docker Compose, Jenkins, Terraform (AWS EC2)

---

## 📁 Repository Structure
- `Frontend/` – React app
- `Backend/` – Spring Boot API
- `docker/` – Nginx config + production compose
- `jenkins/` – Jenkins pipeline
- `terraform/` – AWS infrastructure (optional)

---

## 🚀 Run Locally (Docker Compose)
> Make sure Docker is installed.

```bash
docker compose up --build
