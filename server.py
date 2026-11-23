import http.server
import socketserver
import os
import sys
import threading
import time

class RobustHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable caching in development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def handle(self):
        try:
            super().handle()
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            # Client closed tab or paused video; safely ignore
            pass

    def log_message(self, format, *args):
        # Keep logs clean
        pass

def serve_on_port(port):
    while True:
        try:
            socketserver.TCPServer.allow_reuse_address = True
            with socketserver.ThreadingTCPServer(('127.0.0.1', port), RobustHTTPRequestHandler) as httpd:
                print(f"PORTFOLIO SERVER ACTIVE AT: http://localhost:{port}", flush=True)
                httpd.serve_forever()
        except OSError:
            # Port might be in use or closing; wait and retry
            time.sleep(2)
        except Exception as e:
            time.sleep(1)

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    
    # Launch servers on both port 8000 and port 8080
    threads = []
    for port in [8000, 8080]:
        t = threading.Thread(target=serve_on_port, args=(port,), daemon=True)
        t.start()
        threads.append(t)
    
    # Keep main thread alive
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        pass
    except Exception:
        while True:
            time.sleep(1)
