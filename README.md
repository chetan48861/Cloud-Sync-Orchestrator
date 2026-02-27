# Cloud-Sync-Orchestrator 🚀

A containerized full-stack application featuring a **Node.js Express API** and a **PostgreSQL** database, orchestrated with **Docker Compose** and deployed on an **AWS EC2** cloud environment.

## 🛠️ Tech Stack
- **Cloud Infrastructure:** AWS EC2 (Ubuntu 24.04 LTS)
- **Containerization:** Docker & Docker Compose
- **Backend:** Node.js / Express.js
- **Database:** PostgreSQL 15
- **Version Control:** Git & GitHub

## 📋 Step-by-Step Execution Commands
To replicate this environment, run the following commands in an Ubuntu terminal:

1. **Update System & Install Docker Compose:**
   ```bash
   sudo apt update && sudo apt install -y docker-compose
   git clone [https://github.com/chetan48861/Cloud-Sync-Orchestrator.git](https://github.com/chetan48861/Cloud-Sync-Orchestrator.git)
cd Cloud-Sync-Orchestrator
sudo docker-compose up --build -d
Verify Connectivity:Access the API at: http://<your-ec2-public-ip>:3000/users⚠️ Challenges & TroubleshootingDuring the deployment phase, several "real-world" DevOps hurdles were
cleared:ChallengeRoot CauseSolutionSSH TimeoutLocal network (ISP) or University Wi-Fi blocking Port 22.Switched to AWS EC2 Instance Connect (browser-based terminal) to maintain a stable connection.
Connection RefusedAWS Default Security Groups block Port 3000.Modified Inbound Rules to allow Custom TCP traffic on Port 3000 for 0.0.0.0/0.Orchestration ErrorsMissing config files in a fresh EC2 instance
.Used Shell Redirection (cat <<EOF) to programmatically generate Dockerfile and docker-compose.yml on the fly.
Git AuthenticationGitHub no longer accepts account passwords for CLI pushes.Generated and utilized a Personal Access Token (PAT) for secure remote push operations.
🏗️ ArchitectureThe setup consists of two isolated containers communicating over a bridge network:App Container:
Handles HTTP requests and API logic.DB Container: Persists data and handles relational queries.
