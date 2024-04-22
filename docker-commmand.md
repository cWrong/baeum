docker build -t baeum-front:latest .

docker run -itd -p 4000:3000 --name front  baeum-front:latest


docker tag baeum-front:latest ewr.vultrcr.com/baeumrepository/baeum-front:latest
docker push ewr.vultrcr.com/baeumrepository/baeum-front:latest


