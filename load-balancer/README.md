## Simple load balancer using nginx proxy

commands for run
```sh
docker-compose up -d --scale app=10
```

test load balancer
```sh
curl localhost
```