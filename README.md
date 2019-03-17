# docker-from-the-beginning

## Part 1

### Building an image

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
