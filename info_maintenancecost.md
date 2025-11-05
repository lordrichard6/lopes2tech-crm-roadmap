# Maintenance Cost - Explanation Notes

## Main Concept
Annual maintenance costs for a 20-user CRM platform, including infrastructure and minimal engineering support.

---

## Total Monthly Cost: CHF 1,075
- Infrastructure: CHF 275/month
- Engineer (8h/month): CHF 800/month
- **Annual Total: CHF 12,900**

---

## Infrastructure Breakdown (CHF 275/month)

### 1. Cloud Hosting (CHF 105/month)
- **AWS/Azure Server**: CHF 80 - Small application server (2vCPU, 4GB RAM) sufficient for 20 users
- **CDN & Assets**: CHF 15 - Content delivery via Cloudflare/AWS CloudFront basic tier
- **Backup Storage**: CHF 10 - Daily backups (~50GB storage)

### 2. Database & Storage (CHF 75/month)
- **PostgreSQL Database**: CHF 50 - Managed database small instance
- **File Storage**: CHF 25 - Documents & media storage (~100GB)

### 3. Security & Monitoring (CHF 50/month)
- **SSL Certificate**: CHF 0 - Free via Let's Encrypt
- **Security Tools**: CHF 30 - Basic firewall & WAF protection
- **Monitoring & Logs**: CHF 20 - System monitoring basic tier

### 4. External Services (CHF 45/month)
- **Email Service**: CHF 15 - Transactional emails (~5,000 emails/month)
- **SMS/Notifications**: CHF 30 - Client notifications moderate usage

---

## Engineer Responsibilities (8 hours/month)

**Role**: Platform Engineer at 5% FTE (CHF 800/month)

**Weekly Breakdown**:
1. **Week 1** (2 hours): System monitoring, log reviews
2. **Week 2** (2 hours): Security patches, backup verification
3. **Week 3** (2 hours): User support, troubleshooting
4. **Week 4** (2 hours): Minor updates, performance checks

**Key Activities**:
- Weekly system monitoring (30 min)
- Security patches as needed (2h/month)
- Performance checks (1h/month)
- User support & troubleshooting (2-3h/month)
- Monthly updates (1-2h/month)
- Backup verification (30 min/month)

---

## Maintenance Schedule

### Daily Activities
- **System Monitoring**: Automated monitoring with alerts for performance, uptime, and error logs

### Weekly Activities
- **Security Updates**: Apply security patches and system updates
- **Backup Verification**: Verify backup integrity and test recovery procedures

### As Needed
- **User Support**: Help desk support for 20 team members

### Monthly Activities
- **Performance Optimization**: Database tuning and code optimization

### Quarterly Activities
- **Feature Updates**: Minor improvements and feature additions

---

## Cost Per User
- **CHF 68 per user per month** (all infrastructure + maintenance included)
- Highly scalable - can support up to 50+ users without major cost increases

---

## Key Value Points
- Only **7.2%** of AI development cost annually (CHF 12,900 vs CHF 40,000 development)
- Well-architected system requires minimal maintenance
- Modern cloud services provide auto-scaling and auto-updates
- AI assistance enables faster troubleshooting
- 20 users = low traffic, low complexity
- Predictable, stable monthly costs

---

## Why So Low?
1. **Small team size** - 20 users generate minimal load
2. **Modern architecture** - Self-healing, auto-scaling systems
3. **Quality codebase** - Well-built = fewer issues
4. **Proactive monitoring** - Catch issues before they become problems
5. **AI assistance** - Faster debugging and problem-solving
6. **Optimized infrastructure** - Right-sized resources, no over-provisioning
