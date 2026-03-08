# yt-

OBS browser-source overlay for a green-screened "Like" and "Subscribe" animation.

## Files

- `overlay.html` is the page to load in OBS.
- `overlay.css` controls the layout, colors, and looping animation.
- `overlay.js` switches the cards one by one on a 5-second loop.

## Use in OBS

1. Add a `Browser Source`.
2. Point it to the local `overlay.html` file in this repo.
3. Set the browser source size to `1920x1080`.
4. Apply a chroma key or color key filter for pure green `#00FF00`.

## Notes

- The page background is solid green so it can be keyed out cleanly.
- The cards display one by one.
- Each card stays visible for 5 seconds before switching.
- Edit the text directly in `overlay.html` if you want different wording.