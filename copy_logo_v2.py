import shutil
import os

src = r"C:\Users\Usuario\.gemini\antigravity\brain\277ffdcd-182b-4602-880d-4493b526943c\uploaded_image_1765241365631.png"
dst = r"c:\Users\Usuario\Desktop\website2.0\public\images\aether-logo-white-v2.png"

print(f"Attempting to copy from {src} to {dst}")

if not os.path.exists(src):
    print(f"Source file does not exist: {src}")
    # Try alternate path just in case of formatting issues
    src = src.replace("/", "\\")
    if not os.path.exists(src):
        print(f"Source file still not found: {src}")
    else:
        print("Found source with corrected slashes.")

try:
    shutil.copy2(src, dst)
    print("Copy successful")
except Exception as e:
    print(f"Error copying: {e}")
