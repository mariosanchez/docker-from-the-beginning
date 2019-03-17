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

Run docker image:

```bash
docker run -p 8000:3000 mario/node
```
