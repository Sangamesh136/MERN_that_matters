import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(500, { "content-Type": "application/json" });
  res.end(JSON.stringify({ message: "server is busy" }));
});
server.listen(PORT, () => {
  console.log(`server is listening @ PORT ${PORT}`);
});
