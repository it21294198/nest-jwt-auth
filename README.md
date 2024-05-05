![image](https://nestjs.com/img/logo-small.svg)

## Description

[To Nest Docs](https://docs.nestjs.com/)

## Installation

```bash
npm install
```

## Running the app

#### development
```bash
npm run start
```

#### see all api endpoints
[http://localhost:3000/api](http://localhost:3000/api)

#### watch mode
```bash
npm run start:dev
```

#### production mode
```bash
npm run start:prod
```

#### Genarate whole resource
```
nest g resource user
```

## Test

#### unit tests
```bash
npm run test
```
#### e2e tests
```bash
npm run test:e2e
```
#### test coverage
```bash
npm run test:cov
```

### Build Docker image
(This will created for current platform[MacOs for me])
```bash
docker build -t your-nestjs-image -f backend/Dockerfile .
```

(This will created for given platform[Linux for this])
```bash
docker buildx build --platform linux/arm64 -t test-nest-docker-linux -f backend/Dockerfile .
```

### To see all available images
```bash
docker image ls
```
### To run the docker image created
```bash
docker run -p 3000:3000 your-nestjs-image
```

### Then visit to see end-points
```bash
http://localhost:3000/api
```

####  check the logs from the running Docker container
```bash
docker logs <container-id>
```

### To stop running container

1. Find the container ID
```bash
docker ps
```
2. Stop the container
```bash
docker stop <container-id>
```
or
```bash
docker stop your-nestjs-image
```

#### If you want to stop the container immediately without allowing for graceful termination.
```bash
docker kill <container-id>
```

#### If you want to remove the stopped container completely.
```bash
docker rm <container-id>
```

### To run image on GCP
[Read here](https://cloud.google.com/sdk/docs/install-sdk)

[Watch this](https://youtu.be/MM4viHa7k4w?si=8sXWYp8W20X7JcgE)

1. Go to `google-cloud-sdk` terminal(for mac)
```bash
./bin/gcloud auth list
```
2. See readyness
```bash
./bin/gcloud auth configure-docker
```
3. Tag the docker image
```bash
docker tag test-nest-docker asia-southeast1-docker.pkg.dev/divine-apogee-406520/test/test-nest-docker 
```
4. See new entry image created
```bash
docker image ls
```
5. Push image to GCP
```bash
docker push asia-southeast1-docker.pkg.dev/divine-apogee-406520/test/test-nest-docker
```