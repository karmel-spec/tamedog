# Tame Dog Site Launch Checklist

This folder is the real Garage Poster style site.

Open `index.html` in a browser to preview it.

## Replace Before Launch

1. YouTube music video
   - In `index.html`, replace every `REPLACE_WITH_TAMEDOG_VIDEO_ID` with the final YouTube video ID.
   - Example: for `https://www.youtube.com/watch?v=abc123`, use `abc123`.

2. Venmo ticket links
   - Replace `https://venmo.com/` in each show card with the correct Venmo profile or payment link.
   - Update show dates, venue names, city, and door time.

3. Fourthwall merch
   - Create products in Fourthwall.
   - Copy each live Fourthwall product URL.
   - Replace the `https://fourthwall.com/` links in the merch cards.
   - Replace product names, prices, and descriptions as needed.

4. Music platform links
   - Replace the Spotify, Apple Music, and Amazon Music search links with official Tame Dog artist links once available.
   - The YouTube channel link is already set to `https://www.youtube.com/@tamedog`.

5. Member social links
   - Replace each `https://www.instagram.com/` placeholder with the correct member social link.
   - The band Instagram footer link is already set to `https://www.instagram.com/tamedog_band/`.

6. Logo
   - Save the real Tame Dog logo in `assets/`.
   - Replace the `TD` text mark in the header with an image if you want to use the real logo instead of the stamp.

7. Gallery photos
   - Save favorite show photos in `assets/`.
   - Replace each `.photo-tile` placeholder with a real photo background in `styles.css` or inline style.
   - Keep captions with show date, venue, and photographer credit when possible.

## Fourthwall Flow

Use the included `../tame-dog-fourthwall-setup.html` guide for the full store setup.

Recommended first drop:

- Logo Tee
- Heavy Hoodie
- Poster + Sticker Pack

## Suggested Final QA

1. Open the site on desktop.
2. Open it on a phone-width screen.
3. Check menu links.
4. Click every music, merch, and ticket link.
5. Click each gallery tile and close the photo viewer.
6. Confirm the YouTube video autoplays muted and loops.
