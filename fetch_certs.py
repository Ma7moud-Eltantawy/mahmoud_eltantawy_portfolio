import urllib.request
import re
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

certs = [
    {
        "id": "001",
        "title": "Flutter Clean Architecture",
        "issuer": "Udemy",
        "url": "https://www.udemy.com/certificate/UC-2076ada3-2d25-4dc6-a7f1-655e31e33805/",
        "file": "public/imgs/certficate/cert_flutter_clean_arch.jpg"
    },
    {
        "id": "002",
        "title": "Complete Flutter & Dart",
        "issuer": "Udemy",
        "url": "https://www.udemy.com/certificate/UC-b6fa0c24-4166-4664-a9ba-f9aff3dc830d/",
        "file": "public/imgs/certficate/cert_flutter_dart.jpg"
    },
    {
        "id": "003",
        "title": "Foundations of Project Management",
        "issuer": "Google / Coursera",
        "url": "https://www.coursera.org/account/accomplishments/certificate/AW2G88RPWUBG",
        "file": "public/imgs/certficate/cert_google_pm.jpg"
    },
    {
        "id": "004",
        "title": "Software Development Processes & Methodologies",
        "issuer": "University of Minnesota / Coursera",
        "url": "https://www.coursera.org/account/accomplishments/certificate/BNDEGYPNFCAA",
        "file": "public/imgs/certficate/cert_software_processes.jpg"
    },
    {
        "id": "005",
        "title": "Agile Software Development",
        "issuer": "University of Minnesota / Coursera",
        "url": "https://www.coursera.org/account/accomplishments/certificate/LK8JXJ9EY7HA",
        "file": "public/imgs/certficate/cert_agile_development.jpg"
    }
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for c in certs:
    print(f"Fetching {c['title']} from {c['url']} ...")
    try:
        req = urllib.request.Request(c['url'], headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=12) as res:
            html = res.read().decode('utf-8', errors='ignore')
            m = re.findall(r'<meta[^>]+property=[\'"]og:image[\'"][^>]+content=[\'"]([^\'"]+)[\'"]', html, re.I)
            if not m:
                m = re.findall(r'<meta[^>]+content=[\'"]([^\'"]+)[\'"][^>]+property=[\'"]og:image[\'"]', html, re.I)
            if m:
                img_url = m[0]
                print(f"  -> Found image: {img_url}")
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req, context=ctx, timeout=15) as img_res:
                    data = img_res.read()
                    with open(c['file'], 'wb') as f:
                        f.write(data)
                    print(f"  -> Saved to {c['file']} ({len(data)} bytes)")
            else:
                print("  -> No og:image found in HTML")
    except Exception as e:
        print(f"  -> Error: {e}")
