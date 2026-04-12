import shutil
import os

# Source is the one inside images/ which we confirmed exists in step 1771
src = r"c:\Users\Usuario\Desktop\website2.0\public\images\aether-logo-white-v2.png"
dst = r"c:\Users\Usuario\Desktop\website2.0\public\logo-v2.png"

print(f"Copying {src} to {dst}")
try:
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print("Success: Copied to root")
    else:
        print("Error: Source file NOT found")
except Exception as e:
    print(f"Error: {e}")
