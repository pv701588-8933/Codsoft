# Quiz Maker - Deployment Guide

## Overview

This guide covers deploying the Quiz Maker application using Docker and Docker Compose.

## Prerequisites

- Docker (v20.10+)
- Docker Compose (v2.0+)
- 1GB+ available disk space
- Port 80 and 443 available (or configure custom ports)

## Local Development with Docker

### Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd quiz-maker
   \`\`\`

2. **Build and run**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

3. **Access the application**
   - Open http://localhost in your browser
   - Application will be available immediately

4. **View logs**
   \`\`\`bash
   docker-compose logs -f quiz-maker
   \`\`\`

5. **Stop the application**
   \`\`\`bash
   docker-compose down
   \`\`\`

## Production Deployment

### Environment Setup

1. **Create production environment file**
   \`\`\`bash
   cp .env.example .env.production
   \`\`\`

2. **Update environment variables**
   \`\`\`bash
   # .env.production
   NODE_ENV=production
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   \`\`\`

### SSL/TLS Setup (HTTPS)

1. **Create SSL directory**
   \`\`\`bash
   mkdir -p ssl
   \`\`\`

2. **Add your SSL certificates**
   \`\`\`bash
   cp your-cert.pem ssl/cert.pem
   cp your-key.pem ssl/key.pem
   chmod 400 ssl/key.pem
   \`\`\`

3. **Enable HTTPS in nginx.conf**
   - Uncomment the HTTPS server block
   - Update server_name to your domain
   - Uncomment the HTTP redirect block

### Deploy to Production

\`\`\`bash
# 1. Build production image
bash scripts/build.sh

# 2. Run deployment script
bash scripts/deploy.sh

# 3. Verify deployment
docker-compose ps
docker-compose logs quiz-maker
\`\`\`

## Platform-Specific Deployments

### Vercel Deployment

1. **Push to GitHub**
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Configure environment variables
   - Click "Deploy"

3. **Automatic deployments**
   - Every push to main triggers a deployment
   - Preview deployments for pull requests

### AWS ECS Deployment

1. **Create ECR repository**
   \`\`\`bash
   aws ecr create-repository --repository-name quiz-maker
   \`\`\`

2. **Build and push image**
   \`\`\`bash
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
   docker tag quiz-maker:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/quiz-maker:latest
   docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/quiz-maker:latest
   \`\`\`

3. **Deploy with CloudFormation or Terraform**

### Google Cloud Run Deployment

\`\`\`bash
# Build and push to Google Cloud Registry
gcloud builds submit --tag gcr.io/PROJECT_ID/quiz-maker

# Deploy
gcloud run deploy quiz-maker \
  --image gcr.io/PROJECT_ID/quiz-maker \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
\`\`\`

## Monitoring & Maintenance

### Check Application Health

\`\`\`bash
# Docker health status
docker-compose ps

# View logs
docker-compose logs -f quiz-maker

# View nginx logs
docker-compose logs -f nginx
\`\`\`

### Update Application

\`\`\`bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose up -d
\`\`\`

### Backup Data

If implementing a database, add to docker-compose.yml:
\`\`\`bash
docker-compose exec db pg_dump -U postgres > backup.sql
\`\`\`

## Performance Optimization

### Current Optimizations

- ✅ Multi-stage Docker build (reduced image size)
- ✅ Non-root user execution (security)
- ✅ Nginx reverse proxy with gzip compression
- ✅ Static file caching (30 days)
- ✅ Health checks enabled
- ✅ Connection pooling configured

### Further Optimizations

1. **Enable CDN** - Use Cloudflare or AWS CloudFront
2. **Add caching layer** - Use Redis for session management
3. **Enable HTTP/2** - Already configured in nginx
4. **Database optimization** - Add indexes, connection pooling

## Troubleshooting

### Container won't start

\`\`\`bash
# Check logs
docker-compose logs quiz-maker

# Verify port availability
lsof -i :3000
lsof -i :80
\`\`\`

### Application is slow

\`\`\`bash
# Check resource usage
docker stats

# Increase container memory in docker-compose.yml
# Add under quiz-maker service:
# deploy:
#   resources:
#     limits:
#       memory: 1G
\`\`\`

### SSL certificate issues

\`\`\`bash
# Verify certificate
openssl x509 -in ssl/cert.pem -text -noout

# Test HTTPS
curl -I https://localhost
\`\`\`

## Security Checklist

- ✅ Non-root user execution
- ✅ Security headers configured
- ✅ HTTPS support ready
- ✅ Docker image minimal (alpine base)
- ✅ Environment variables protected
- ✅ Health checks enabled

### Additional Security Steps

1. Enable rate limiting in nginx
2. Add Web Application Firewall (WAF)
3. Regular security updates
4. Implement DDoS protection
5. Set up monitoring alerts

## Support & Resources

- Docker Documentation: https://docs.docker.com
- Next.js Deployment: https://nextjs.org/docs/deployment
- Nginx Documentation: https://nginx.org/en/docs/
