TCP


from socketserver import TCPServer, StreamRequestHandler


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente!\n")
        while True:
            data = self.rfile.readline().strip().decode("UTF-8")
            if not data:
                self.wfile.write(b"Cliente desconectado")
                print("Cliente desconectado")
                break
            print(data)


if __name__ == "__main__":
    server_address = ("localhost", 8080)
    with TCPServer(server_address, TCPHandler) as server:
        print("Server TCP ativo")
        server.serve_forever()

***************************************************************************
***************************************************************************

UDP


from socketserver import UDPServer, DatagramRequestHandler


class UDPHandler(DatagramRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente!\n")
        print(self.rfile.readline().strip().decode("UTF-8"))


if __name__ == "__main__":
    server_address = ("localhost", 9090)
    with UDPServer(server_address, UDPHandler) as server:
        print("Server UDP ativo")
        server.serve_forever()