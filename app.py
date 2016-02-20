import os
from eve import Eve

try:
    port = int(os.environ['PORT'])
except:
    port = 80

app = Eve()

app.run(host="0.0.0.0", port=port)
