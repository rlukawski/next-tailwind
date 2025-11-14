# Build stage
FROM node:20-alpine AS builder

WORKDIR /build

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy standalone output from builder
COPY --from=builder /build/.next/standalone ./
COPY --from=builder /build/.next/static ./.next/static
COPY --from=builder /build/public ./public
COPY --from=builder /build/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]

