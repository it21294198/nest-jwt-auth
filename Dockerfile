# Base image
FROM node:20.10.0-alpine AS builder

# Set the working directory
WORKDIR /app/backend

# Copy package.json and package-lock.json (if available)
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend project
COPY backend/ .

# Build the NestJS application
RUN npm run build

# Production image
FROM node:20.10.0-alpine

# Set the working directory
WORKDIR /app/backend

# Copy the built application from the builder image
COPY --from=builder /app/backend/dist ./dist

# Copy package.json and package-lock.json (if available)
COPY backend/package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the .env file
COPY backend/.env ./

# Set environment variables
ENV TEST_ENV=${TEST_ENV}

# Expose the port your NestJS application will run on
EXPOSE 3000

# Start the NestJS application
CMD ["node", "dist/main"]