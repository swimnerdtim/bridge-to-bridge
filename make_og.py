#!/usr/bin/env python3
"""Generate a 1200x630 Open Graph social share card from the hero image."""
from PIL import Image, ImageDraw, ImageFont, ImageEnhance
import os

SRC = "src/assets/hero-bay-aerial.jpg"
OUT = "public/og-image.jpg"
W, H = 1200, 630

# Load + cover-crop hero to 1200x630
img = Image.open(SRC).convert("RGB")
sw, sh = img.size
scale = max(W / sw, H / sh)
img = img.resize((int(sw * scale), int(sh * scale)), Image.LANCZOS)
nw, nh = img.size
img = img.crop(((nw - W) // 2, (nh - H) // 2, (nw - W) // 2 + W, (nh - H) // 2 + H))

# Darken bottom for text legibility (gradient overlay)
overlay = Image.new("L", (W, H), 0)
od = ImageDraw.Draw(overlay)
for y in range(H):
    # stronger toward bottom
    a = int(235 * (max(0, (y - H * 0.30)) / (H * 0.70)) ** 1.3)
    od.line([(0, y), (W, y)], fill=min(a, 225))
dark = Image.new("RGB", (W, H), (6, 32, 51))
img = Image.composite(dark, img, overlay)

draw = ImageDraw.Draw(img)


def load_font(names, size):
    for n in names:
        try:
            return ImageFont.truetype(n, size)
        except Exception:
            continue
    return ImageFont.load_default()


# macOS font paths
cond_bold = load_font([
    "/System/Library/Fonts/Supplemental/Futura.ttc",
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial Bold.ttf",
], 108)
sub_font = load_font([
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial.ttf",
], 40)
kick_font = load_font([
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial Bold.ttf",
], 34)

PADX = 70
TEAL = (79, 200, 200)
ACCENT = (255, 179, 71)
WHITE = (255, 255, 255)
LIGHT = (220, 234, 243)


def draw_tracked(d, xy, text, font, fill, tracking=0, shadow=None):
    x, y = xy
    for ch in text:
        if shadow:
            d.text((x + 2, y + 2), ch, font=font, fill=shadow)
        d.text((x, y), ch, font=font, fill=fill)
        w = d.textlength(ch, font=font)
        x += w + tracking


SHADOW = (4, 18, 30)

# Kicker (brighter + shadow for contrast over the beach)
draw_tracked(draw, (PADX, 300), "CHIC'S BEACH", kick_font, (120, 226, 224),
             tracking=6, shadow=SHADOW)

# Title
def title_ch(x, txt, fill):
    draw.text((x + 3, 343), txt, font=cond_bold, fill=SHADOW)
    draw.text((x, 340), txt, font=cond_bold, fill=fill)

title_ch(PADX, "Bridge", WHITE)
bw = draw.textlength("Bridge ", font=cond_bold)
title_ch(PADX + bw, "to", ACCENT)
tw = draw.textlength("to ", font=cond_bold)
title_ch(PADX + bw + tw, "Bridge", WHITE)

# Subline
draw_tracked(draw, (PADX, 470),
             "2-MILE OPEN WATER SWIM  \u00b7  CHESAPEAKE BAY, VA",
             sub_font, LIGHT, tracking=1, shadow=SHADOW)

# Date pill
date_txt = "SATURDAY, SEPTEMBER 19, 2026"
dw = sum(draw.textlength(c, font=kick_font) + 3 for c in date_txt)
pill_x, pill_y = PADX, 540
draw.rounded_rectangle([pill_x, pill_y, pill_x + dw + 44, pill_y + 56], radius=28,
                       fill=(255, 122, 60))
draw_tracked(draw, (pill_x + 22, pill_y + 11), date_txt, kick_font, (10, 31, 51), tracking=3)

os.makedirs("public", exist_ok=True)
img.save(OUT, "JPEG", quality=88)
print("Saved", OUT, img.size)
