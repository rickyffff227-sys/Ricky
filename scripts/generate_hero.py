"""Create the locally bundled abstract hero loop (requires numpy, Pillow, imageio-ffmpeg)."""

from pathlib import Path
import subprocess

import imageio_ffmpeg
import numpy as np
from PIL import Image


WIDTH, HEIGHT, FPS, FRAMES = 960, 540, 24, 96
OUTPUT = Path(__file__).resolve().parents[1] / "public"
OUTPUT.mkdir(exist_ok=True)

yy, xx = np.mgrid[0:HEIGHT, 0:WIDTH].astype(np.float32)
x = xx / WIDTH
y = yy / HEIGHT


def frame(index):
    t = index / FRAMES * np.pi * 2
    cx = 0.77 + 0.012 * np.sin(t)
    cy = 0.51 + 0.012 * np.cos(t)
    dx = (x - cx) / 0.76
    dy = (y - cy) / 1.14
    radius = np.sqrt(dx * dx + dy * dy)

    # Cool white atmosphere and a soft glass sphere on the right.
    light = 4 * np.sin(x * 3.0 + t * 0.25) + 3 * np.cos(y * 4.0 - t * 0.3)
    background = np.stack([
        242 + light - 8 * x,
        246 + light - 5 * x,
        249 + light - 2 * x,
    ], axis=-1)

    sphere_r = np.sqrt(((x - cx) / 0.35) ** 2 + ((y - cy) / 0.60) ** 2)
    mask = np.clip((1.015 - sphere_r) * 24, 0, 1)[..., None]
    shade = np.clip(1 - sphere_r, 0, 1)
    highlight = np.exp(-(((x - (cx - 0.11)) / 0.19) ** 2 + ((y - (cy - 0.19)) / 0.25) ** 2) * 2.0)
    sphere = np.stack([
        192 + 37 * shade + 29 * highlight,
        207 + 27 * shade + 25 * highlight,
        221 + 20 * shade + 22 * highlight,
    ], axis=-1)
    image = background * (1 - mask) + sphere * mask

    # Several moving latitude contours make the asset visibly a video.
    contour = np.sin(30 * radius - t * 1.3 + 0.6 * np.sin(y * 6 + t * 0.6))
    line = np.exp(-(contour / 0.065) ** 2) * np.exp(-radius * 0.95)
    image -= line[..., None] * np.array([16, 19, 22], dtype=np.float32)
    edge = np.exp(-((sphere_r - 1.0) / 0.012) ** 2)
    image -= edge[..., None] * np.array([13, 14, 15], dtype=np.float32)
    bloom = np.exp(-(((x - 0.89) / 0.16) ** 2 + ((y - 0.2) / 0.22) ** 2))
    image += bloom[..., None] * 11
    return np.uint8(np.clip(image, 0, 255))


Image.fromarray(frame(0)).save(OUTPUT / "hero-poster.jpg", quality=87)
command = [
    imageio_ffmpeg.get_ffmpeg_exe(), "-y", "-f", "rawvideo", "-vcodec", "rawvideo",
    "-s", f"{WIDTH}x{HEIGHT}", "-pix_fmt", "rgb24", "-r", str(FPS), "-i", "-",
    "-an", "-c:v", "libx264", "-preset", "medium", "-crf", "27", "-pix_fmt", "yuv420p",
    "-movflags", "+faststart", str(OUTPUT / "hero-motion.mp4"),
]
with subprocess.Popen(command, stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE) as process:
    for index in range(FRAMES):
        process.stdin.write(frame(index).tobytes())
    process.stdin.close()
    error = process.stderr.read().decode("utf-8", errors="replace")
    if process.wait() != 0:
        raise RuntimeError(error)
print(OUTPUT / "hero-motion.mp4")
