
import os
from PIL import Image

def process_images():
    base_dir = "./public/assets/img/project/"
    
    # Ensure directory exists
    if not os.path.exists(base_dir):
        print(f"Directory not found: {base_dir}")
        return

    files = os.listdir(base_dir)
    
    # Target dimensions
    TARGET_WIDTH = 1920
    TARGET_HEIGHT = 1080
    
    # 10% margin on each side means the content area is 80% of the dimension
    # But margin should be *minimum* 10%, so max content size is 80%
    MAX_CONTENT_WIDTH = int(TARGET_WIDTH * 0.8)  # 1536
    MAX_CONTENT_HEIGHT = int(TARGET_HEIGHT * 0.8) # 864

    for file in files:
        if file.endswith("_small.png") or file.endswith("_small.jpg"):
            source_path = os.path.join(base_dir, file)
            
            # Determine output filename: remove _small suffix
            # Handles both .png and .jpg inputs, outputs .png usually for logos/graphics or keeps original extension?
            # User said "created a version called *_small... I want cover images to be created".
            # Simplest is: if foo_small.png -> foo.png. If foo_small.jpg -> foo.jpg which might be photo.
            
            filename_parts = os.path.splitext(file)
            name_base = filename_parts[0]
            ext = filename_parts[1]
            
            if name_base.endswith("_small"):
                target_name = name_base[:-6] + ext
            else:
                continue # Should not happen given the if check above
                
            target_path = os.path.join(base_dir, target_name)
            
            print(f"Processing {file} -> {target_name}")
            
            try:
                with Image.open(source_path) as img:
                    # Create white background
                    background = Image.new('RGB', (TARGET_WIDTH, TARGET_HEIGHT), (255, 255, 255))
                    
                    # Calculate new size maintaining aspect ratio
                    img_ratio = img.width / img.height
                    target_ratio = MAX_CONTENT_WIDTH / MAX_CONTENT_HEIGHT
                    
                    new_width = 0
                    new_height = 0
                    
                    if img_ratio > target_ratio:
                        # Width acts as constraint
                        new_width = MAX_CONTENT_WIDTH
                        new_height = int(MAX_CONTENT_WIDTH / img_ratio)
                    else:
                        # Height acts as constraint
                        new_height = MAX_CONTENT_HEIGHT
                        new_width = int(MAX_CONTENT_HEIGHT * img_ratio)
                        
                    resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                    
                    # Calculate position to center
                    x_pos = (TARGET_WIDTH - new_width) // 2
                    y_pos = (TARGET_HEIGHT - new_height) // 2
                    
                    # Paste (handle transparency if source has it)
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                         background.paste(resized_img, (x_pos, y_pos), resized_img.convert('RGBA'))
                    else:
                        background.paste(resized_img, (x_pos, y_pos))
                        
                    background.save(target_path)
                    print(f"Saved {target_path}")
            except Exception as e:
                print(f"Error processing {file}: {e}")

if __name__ == "__main__":
    process_images()
