## Simple load balancer using nginx proxy

commands for run
```sh
docker-compose up -d --scale app=10
```

test load balancer
```sh
curl localhost
```

## Setup nginx proxy for virtual hosts with docker
run container of nginx
```sh
docker run -d -p 80:80 --name server-test nginx:latest
```

create conf for all virtual hosts.
```sh
docker exec -it server-test bash
```

search conf files
```sh
cd /etc/nginx/conf.d
cp default.conf test.myhost.com.default
cp default.conf test2.myhost.com.default
```

change server_name and root location for each virtual host
```sh
server_name test.myhost.com; # test.myhost.com.default
root /usr/share/nginx/test; # test.myhost.com.default
```

```sh
server_name test2.myhost.com; # test2.myhost.com.default
root /usr/share/nginx/test2; # test2.myhost.com.default
```

Create html for hosts
```sh
echo "<h1>hello from test</h1> > /usr/share/nginx/test/index.html"
echo "<h1>hello from test2</h1> > /usr/share/nginx/test2/index.html"
```
restart nginx container
```sh
docker container restart server-test
```
bind virtual hosts on /etc/hosts, add `127.0.0.1 test.myhost.com test2.myhost.com` on `/etc/hosts`

test
```sh
curl test.myhost.com
curl test2.myhost.com
```

and enjoy it :D