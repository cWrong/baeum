docker build -t baeum-front .

docker run -itd -p 4000:3000 --name front  baeum-front