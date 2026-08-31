import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/imgs/certficate', exist_ok=True)

# Try loading system fonts
font_dir = "C:/Windows/Fonts"
def get_font(name, size):
    try:
        return ImageFont.truetype(os.path.join(font_dir, name), size)
    except Exception:
        return ImageFont.load_default()

font_title = get_font("segoeuib.ttf", 36)
font_subtitle = get_font("segoeui.ttf", 20)
font_name = get_font("segoeuib.ttf", 32)
font_role = get_font("segoeuil.ttf", 18)
font_badge = get_font("segoeuib.ttf", 15)
font_small = get_font("segoeui.ttf", 15)
font_code = get_font("consola.ttf", 16)
font_stamp_bold = get_font("segoeuib.ttf", 18)
font_stamp_sub = get_font("segoeui.ttf", 13)

certs = [
    {
        "filename": "public/imgs/certficate/cert_flutter_clean_arch.jpg",
        "title": "Flutter Clean Architecture",
        "subtitle": "Domain-Driven Design, Feature-First & State Segregation",
        "issuer": "UDEMY VERIFIED CREDENTIAL",
        "cred_id": "UDEMY-FLUTTER-CLEAN-ARCH",
        "accent": (249, 115, 22),   # Vivid Orange
        "badge": "UDEMY",
        "tag": "CLEAN ARCH",
        "date": "2024"
    },
    {
        "filename": "public/imgs/certficate/cert_flutter_dart.jpg",
        "title": "Complete Flutter & Dart Development",
        "subtitle": "Cross-Platform Mobile Architecture, BLoC & Reactive UI",
        "issuer": "UDEMY VERIFIED CREDENTIAL",
        "cred_id": "UDEMY-FLUTTER-DART-DEV",
        "accent": (6, 182, 212),    # Cyan
        "badge": "UDEMY",
        "tag": "FLUTTER & DART",
        "date": "2023"
    },
    {
        "filename": "public/imgs/certficate/cert_google_pm.jpg",
        "title": "Foundations of Project Management",
        "subtitle": "Project Lifecycle, Stakeholder Management & Planning",
        "issuer": "GROW WITH GOOGLE / COURSERA",
        "cred_id": "GOOGLE-PM-COURSERA",
        "accent": (16, 185, 129),   # Emerald / Google Green
        "badge": "GOOGLE",
        "tag": "PROJECT MGMT",
        "date": "2024"
    },
    {
        "filename": "public/imgs/certficate/cert_software_processes.jpg",
        "title": "Software Development Processes",
        "subtitle": "Methodologies, Architecture Lifecycles & QA Standards",
        "issuer": "UNIVERSITY OF MINNESOTA / COURSERA",
        "cred_id": "UMN-SOFTWARE-PROCESSES",
        "accent": (168, 85, 247),   # Purple
        "badge": "U OF MINN",
        "tag": "METHODOLOGY",
        "date": "2024"
    },
    {
        "filename": "public/imgs/certficate/cert_agile_development.jpg",
        "title": "Agile Software Development",
        "subtitle": "Scrum Framework, Sprint Velocity & Continuous Delivery",
        "issuer": "UNIVERSITY OF MINNESOTA / COURSERA",
        "cred_id": "UMN-AGILE-SCRUM-DEV",
        "accent": (245, 158, 11),   # Amber
        "badge": "U OF MINN",
        "tag": "AGILE SCRUM",
        "date": "2024"
    },
    {
        "filename": "public/imgs/certficate/cert_app_brewery.jpg",
        "title": "Flutter Development Bootcamp",
        "subtitle": "Complete Mobile Engineering with Google Flutter Team",
        "issuer": "THE APP BREWERY & GOOGLE FLUTTER",
        "cred_id": "APP-BREWERY-FLUTTER",
        "accent": (236, 72, 153),   # Pink
        "badge": "APP BREWERY",
        "tag": "BOOTCAMP",
        "date": "2023"
    },
    {
        "filename": "public/imgs/certficate/cert_nodejs_maharatech.jpg",
        "title": "RESTful Web Services & Node.js",
        "subtitle": "Backend API Architecture, Express.js & MongoDB Services",
        "issuer": "MAHARA-TECH / ITIDA EGYPT",
        "cred_id": "MAHARATECH-NODE-EXPRESS",
        "accent": (34, 197, 94),    # Green
        "badge": "MAHARA-TECH",
        "tag": "NODE.JS APIS",
        "date": "2024"
    }
]

W, H = 1000, 700

for c in certs:
    img = Image.new('RGB', (W, H), (15, 13, 12))
    draw = ImageDraw.Draw(img)
    
    # Premium background gradient subtle lines
    for y in range(0, H, 8):
        draw.line([(0, y), (W, y)], fill=(18, 15, 14), width=1)
        
    # Outer luxury double border
    draw.rectangle([18, 18, W-18, H-18], outline=(45, 38, 33), width=2)
    draw.rectangle([28, 28, W-28, H-28], outline=(65, 54, 46), width=1)
    
    # Corner brackets (Technical Luxury Aesthetic)
    arm = 36
    for (cx, cy, dx, dy) in [(28, 28, 1, 1), (W-28, 28, -1, 1), (28, H-28, 1, -1), (W-28, H-28, -1, -1)]:
        draw.line([cx, cy, cx + dx*arm, cy], fill=c['accent'], width=4)
        draw.line([cx, cy, cx, cy + dy*arm], fill=c['accent'], width=4)
    
    # Grid dots
    for x in range(60, W-60, 48):
        for y in range(60, H-60, 48):
            draw.point((x, y), fill=(35, 30, 26))
            
    # Top Header Pill / Badge
    badge_w = 140
    draw.rounded_rectangle([52, 52, 52 + badge_w, 86], radius=4, fill=c['accent'])
    # Center text inside badge
    draw.text((64, 60), c['badge'], font=font_badge, fill=(255, 255, 255))
    
    # Issuer text next to badge
    draw.text((52 + badge_w + 20, 60), c['issuer'], font=font_small, fill=(180, 165, 150))
    
    # Top rule
    draw.line([52, 108, W-52, 108], fill=(50, 42, 36), width=1)
    
    # Header Subtitle
    draw.text((52, 130), "OFFICIAL CERTIFICATION & VERIFIED CREDENTIAL", font=font_small, fill=c['accent'])
    
    # Main Certificate Title
    draw.text((52, 165), c['title'], font=font_title, fill=(250, 245, 238))
    draw.text((52, 218), c['subtitle'], font=font_subtitle, fill=(160, 148, 138))
    
    # Awarded To Section
    draw.line([52, 275, W-52, 275], fill=(50, 42, 36), width=1)
    draw.text((52, 298), "AWARDED TO", font=font_small, fill=(140, 128, 118))
    draw.text((52, 328), "MAHMOUD EL-TANTAWY", font=font_name, fill=(255, 255, 255))
    draw.text((52, 375), "Software Engineer • Mobile Architecture & Backend Engineering", font=font_role, fill=c['accent'])
    
    # Digital Security Seal Stamp Box
    stamp_x, stamp_y = W - 260, 295
    draw.rectangle([stamp_x, stamp_y, W - 52, stamp_y + 240], outline=(60, 50, 42), fill=(22, 18, 16), width=1)
    # Circle emblem
    emblem_center = (stamp_x + 104, stamp_y + 90)
    draw.ellipse([emblem_center[0]-56, emblem_center[1]-56, emblem_center[0]+56, emblem_center[1]+56], outline=c['accent'], width=2)
    draw.ellipse([emblem_center[0]-50, emblem_center[1]-50, emblem_center[0]+50, emblem_center[1]+50], outline=(70, 58, 48), width=1)
    
    draw.text((emblem_center[0]-36, emblem_center[1]-18), "VERIFIED", font=font_stamp_bold, fill=c['accent'])
    draw.text((emblem_center[0]-44, emblem_center[1]+6), "CREDENTIAL", font=font_stamp_sub, fill=(200, 190, 180))
    
    draw.text((stamp_x + 36, stamp_y + 165), "DIGITAL SIGNATURE", font=font_stamp_sub, fill=(140, 130, 120))
    draw.text((stamp_x + 50, stamp_y + 195), "AUTHENTIC", font=font_stamp_bold, fill=(74, 222, 128))
    
    # Bottom Verification Bar
    draw.rectangle([52, 595, W-52, 650], fill=(22, 19, 17), outline=(50, 42, 36))
    draw.text((68, 613), f"CREDENTIAL ID: {c['cred_id']}", font=font_code, fill=(230, 220, 205))
    draw.text((W - 270, 613), "CLICK TO VERIFY ONLINE ->", font=font_code, fill=c['accent'])
    
    img.save(c['filename'], 'JPEG', quality=95)
    print(f"Generated {c['filename']}")

print("All crisp certificate images created successfully!")
