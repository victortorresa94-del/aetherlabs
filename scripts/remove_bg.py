from PIL import Image
import os

def remove_black_background(input_path, output_path):
    try:
        print(f"Processing {input_path}...")
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check if the pixel is black (or very close to it)
            # Threshold: R, G, B < 30 (to catch compression artifacts)
            if item[0] < 30 and item[1] < 30 and item[2] < 30:
                # Make it transparent
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Success! Saved transparent image to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

input_file = r"c:\Users\Usuario\Desktop\website2.0\public\images\aether-logo-white.png"
output_file = r"c:\Users\Usuario\Desktop\website2.0\public\images\aether-logo-transparent.png"

remove_black_background(input_file, output_file)
