import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/imgs/certficate', exist_ok=True)

certs = [
    {
        "filename": "public/imgs/certficate/cert_flutter_clean_arch.jpg",
        "title": "Flutter Clean Architecture",
        "subtitle": "Domain-Driven Design & State Segregation",
        "issuer": "UDEMY CERTIFICATE OF COMPLETION",
        "cred_id": "UC-2076ada3-2d25-4dc6-a7f1-655e31e33805",
        "accent": (244, 71, 11),  # Orange
        "badge": "UDEMY",
        "tag": "CLEAN ARCH"
    },
    {
        "filename": "public/imgs/certficate/cert_flutter_dart.jpg",
        "title": "Complete Flutter & Dart Development",
        "subtitle": "Advanced Mobile & Reactive Architectures",
        "issuer": "UDEMY CERTIFICATE OF COMPLETION",
        "cred_id": "UC-b6fa0c24-4166-4664-a9ba-f9aff3dc830d",
        "accent": (2, 132, 199),  # Cyan
        "badge": "UDEMY",
        "tag": "FLUTTER & DART"
    },
    {
        "filename": "public/imgs/certficate/cert_google_pm.jpg",
        "title": "Foundations of Project Management",
        "subtitle": "Professional Project Lifecycle & Execution",
        "issuer": "GROW WITH GOOGLE / COURSERA",
        "cred_id": "AW2G88RPWUBG",
        "accent": (16, 185, 129), # Green / Google
        "badge": "GOOGLE",
        "tag": "PROJECT MGMT"
    },
    {
        "filename": "public/imgs/certficate/cert_software_processes.jpg",
        "title": "Software Development Processes",
        "subtitle": "Methodologies & Architecture Lifecycle",
        "issuer": "UNIVERSITY OF MINNESOTA / COURSERA",
        "cred_id": "BNDEGYPNFCAA",
        "accent": (139, 92, 246), # Purple / Univ
        "badge": "U OF MINN",
        "tag": "METHODOLOGY"
    },
    {
        "filename": "public/imgs/certficate/cert_agile_development.jpg",
        "title": "Agile Software Development",
        "subtitle": "Scrum, Sprints & Continuous Iteration",
        "issuer": "UNIVERSITY OF MINNESOTA / COURSERA",
        "cred_id": "LK8JXJ9EY7HA",
        "accent": (234, 179, 8),  # Amber
        "badge": "U OF MINN",
        "tag": "AGILE SCRUM"
    },
    {
        "filename": "public/imgs/certficate/cert_app_brewery.jpg",
        "title": "Flutter Development Bootcamp",
        "subtitle": "Mobile Engineering & State Management",
        "issuer": "THE APP BREWERY & GOOGLE FLUTTER",
        "cred_id": "VERIFIED CREDENTIAL",
        "accent": (236, 72, 153), # Pink
        "badge": "APP BREWERY",
        "tag": "BOOTCAMP"
    },
    {
        "filename": "public/imgs/certficate/cert_nodejs_maharatech.jpg",
        "title": "RESTful Web Services & MongoDB",
        "subtitle": "Complete Node.js Microservices Architecture",
        "issuer": "MAHARATECH / ITIDA EGYPT",
        "cred_id": "MAHARA-NODE-CERT",
        "accent": (34, 197, 94),  # Emerald
        "badge": "MAHARATECH",
        "tag": "NODE.JS"
    }
]

W, H = 800, 560

for c in certs:
    img = Image.new('RGB', (W, H), (20, 17, 15))
    draw = ImageDraw.Draw(img)
    
    # Outer frame
    draw.rectangle([16, 16, W-16, H-16], outline=(50, 42, 36), width=2)
    draw.rectangle([24, 24, W-24, H-24], outline=(70, 58, 48), width=1)
    
    # Corner brackets
    arm = 28
    for (cx, cy, dx, dy) in [(24, 24, 1, 1), (W-24, 24, -1, 1), (24, H-24, 1, -1), (W-24, H-24, -1, -1)]:
        draw.line([cx, cy, cx + dx*arm, cy], fill=c['accent'], width=3)
        draw.line([cx, cy, cx, cy + dy*arm], fill=c['accent'], width=3)
    
    # Watermark background pattern
    for x in range(40, W-40, 40):
        for y in range(40, H-40, 40):
            draw.point((x, y), fill=(35, 30, 26))
            
    # Top Tag & Badge
    draw.rectangle([44, 44, 150, 72], fill=c['accent'])
    draw.text((54, 52), c['badge'], fill=(255, 255, 255))
    draw.text((166, 52), c['issuer'], fill=(160, 145, 130))
    
    # Divider line
    draw.line([44, 90, W-44, 90], fill=(45, 38, 32), width=1)
    
    # "CERTIFICATE OF ACHIEVEMENT"
    draw.text((44, 120), "OFFICIAL CERTIFICATION & CREDENTIAL", fill=(200, 120, 80))
    
    # Main Certificate Title
    draw.text((44, 155), c['title'], fill=(245, 240, 230))
    draw.text((44, 195), c['subtitle'], fill=(150, 140, 130))
    
    # Recipient section
    draw.line([44, 240, W-44, 240], fill=(45, 38, 32), width=1)
    draw.text((44, 260), "AWARDED TO", fill=(120, 110, 100))
    draw.text((44, 285), "MAHMOUD EL-TANTAWY", fill=(255, 255, 255))
    draw.text((44, 320), "Software Engineer • System Design & Architecture", fill=c['accent'])
    
    # Security Seal / Stamp box
    draw.rectangle([W-200, 260, W-44, 460], outline=(60, 50, 42), fill=(26, 22, 19), width=1)
    draw.ellipse([W-172, 285, W-72, 385], outline=c['accent'], width=2)
    draw.text((W-150, 325), "VERIFIED", fill=c['accent'])
    draw.text((W-155, 345), "CREDENTIAL", fill=(180, 170, 160))
    draw.text((W-185, 410), "DIGITAL SIGNATURE", fill=(120, 110, 100))
    draw.text((W-170, 430), "AUTHENTIC", fill=(80, 180, 120))
    
    # Bottom Verification Bar
    draw.rectangle([44, 470, W-44, 520], fill=(28, 24, 20), outline=(45, 38, 32))
    draw.text((56, 485), f"CREDENTIAL ID: {c['cred_id']}", fill=(220, 210, 195))
    draw.text((W-220, 485), "CLICK TO VERIFY ONLINE ->", fill=c['accent'])
    
    img.save(c['filename'], 'JPEG', quality=95)
    print(f"Generated {c['filename']}")

print("All certificate images generated successfully!")
