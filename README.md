# Dato’ Haji Mohd Abdul Aziz Bin Mohamed — Digital Name Card

A responsive, single-file digital name card built from the supplied PDF/PSD artwork.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The name card webpage |
| `namecard.webp` | Primary card image (WebP) |
| `namecard.jpg` | Fallback card image (JPEG) |
| `contact.vcf` | vCard contact file for “Save Contact” buttons |

## How to use

1. **GitHub Pages**
   - Push these files to a GitHub repository.
   - Go to **Settings → Pages**.
   - Select source **Deploy from a branch → main / root**.
   - Your site will be live at `https://<username>.github.io/<repo-name>/`.

2. **Any web server**
   - Upload all files to the public_html / wwwroot folder.
   - Visit the folder URL in a browser.

## Updating links

Open `index.html` and edit the `href` values inside the `.hotspot` anchors:

- `.hs-phone` — `tel:` link
- `.hs-whatsapp` — `https://wa.me/...` link
- `.hs-email` — `mailto:` link
- `.hs-address` — Google Maps link
- `.hs-social` — Facebook, Instagram, TikTok, YouTube, X URLs

The vCard in `contact.vcf` can also be edited with any text editor.

## Notes

- The card image is a faithful render of the supplied PDF at web-friendly resolution.
- Interactive hotspots are positioned as percentages so they scale correctly on phones, tablets, and desktops.
