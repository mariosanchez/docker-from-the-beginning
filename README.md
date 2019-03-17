# docker-from-the-beginning

## Basics

Build docker image:

```bash
docker build -t mario/node:latest .
```

List docker images:

```bash
docker images
```

Run docker container:

```bash
docker run -p 8000:3000 mario/node
```

Run docker container as a daemon :

```bash
docker run -d -p 8000:3000 mario/node
```

Run docker container with a name:

```bash
docker run -d -p 8000:3000 --name my-container mario/node
```

Stop docker container (gracefully):

```bash
docker stop <first_container_id_three_digits>
```

Stop docker container:

```bash
docker kill <first_container_id_three_digits>
```

Stop all docker containers:

```bash
docker kill $(docker ps -q)
```

Run interactive mode with bash shell:

```bash
docker exec -it <first_container_id_three_digits> bash
```

Run a command:

```bash
docker exec  <first_container_id_three_digits> node app.js
```

Clean up container:

```bash
docker rm id-of-container
```

Clean up all containers:

```bash
docker rm $(docker ps -a -q)
```

Create a volume:

```bash
docker volume create <name_of_volume>
```

List a volumes:

```bash
docker volume ls
```

Remove all volumes:

```bash
docker volume prune
```

Remove a single volumes:

```bash
docker volume rm <name_of_volume>
```

See volume details and where de files are placed:

```bash
docker inspect <name_of_volume>
```

Run a container with a volume:

```bash
docker run -d -p 8000:3000 --name my-container --volume my-volume:/logs mario/node
```

Run a container with a volume with a subdirectory as a mounting point:

```bash
docker run -d -p 8000:3000 --name my-container --volume $(pwd)/logs:/logs mario/node
```

Run a container treating all our application as a volume:

```bash
docker run -d -p 8000:3000 --name my-container --volume $(pwd):/app mario/node
```

## MySQL image

Set up a mysql docker container:

```bash
docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=complexpassword -d -p 8001:3306 mysql
```

Then connect:

```bash
mysql -uroot -pcomplexpassword -h 0.0.0.0 -P 8001
```
