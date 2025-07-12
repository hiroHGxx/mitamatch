from PIL import Image

def create_dummy_image(path, size, color):
    img = Image.new('RGBA', size, color)
    img.save(path, 'PNG')

# 卵（白）
create_dummy_image('public/assets/sprites/egg.png', (64, 64), (255, 255, 255, 255))

# ベビー（水色）
create_dummy_image('public/assets/sprites/baby.png', (64, 64), (173, 216, 230, 255))

print("Dummy images created.")
