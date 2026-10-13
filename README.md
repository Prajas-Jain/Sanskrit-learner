# Sanskrit Learner — Audio System & Integration Guide

This guide explains the audio architecture, sound assets, and integration added to the **Sanskrit Learner** web application.

---

## 1. Overview of Audio Assets

All audio files are saved locally under `assets/audio/`:

| Audio File | Type | Duration | Description & Mood |
| :--- | :--- | :--- | :--- |
| `background.mp3` | Soundtrack | ~28.2s (Seamless Loop) | Soothing, gentle acoustic guitar fingerpicking and soft felt piano with warm ambient reverb. Default low volume (12%). |
| `correct.mp3` | SFX | ~1.05s | Uplifting, sparkling "Ta-daaa!" chime and major chord flourish. Triggered on correct quiz answers. |
| `incorrect.mp3` | SFX | ~0.78s | Soft, gentle, cute "Daww..." descending tone. Warm and encouraging, not harsh or jarring. |
| `lesson-lesson-complete.mp3` | SFX | ~2.40s | Celebratory victory fanfare with rich piano and sparkling chimes for completing a full lesson. |

---

## 2. Audio Controller Architecture (`SoundController`)

The audio subsystem in `script.js` is encapsulated within `SoundController`:

### Features:
1. **User-Gesture Autoplay Compliance**:
   - Web browsers block audio playback until user interaction occurs.
   - The audio starts only when the user explicitly clicks the Sound button or interacts with the platform.
2. **Persistent Settings**:
   - Saves mute state (`soundEnabled`) and volume (`volume`) in `localStorage` under `sanskrit_learner_audio_settings_v1`.
3. **Smart Audio Ducking**:
   - When a sound effect (`correct`, `incorrect`, or `complete`) plays, the background music automatically ducks to 25–30% volume and smoothly fades back to full volume after the effect finishes.
4. **Smooth Volume Fading**:
   - Background music fades in (400ms) and fades out (300ms) to avoid sudden audio clicks.
5. **Tab Visibility Handling**:
   - Listens to `visibilitychange` to automatically pause background music when the browser tab is hidden and resume when returning.
6. **Graceful Fallback**:
   - Wrapped in error-safe try/catch blocks; the platform functions seamlessly even if audio cannot load.

---

## 3. UI Controls

An audio control pill is integrated directly in the top header (`.header-stats`):

- **Toggle Button (`#sound-toggle-btn`)**:
  - Displays `🎵 Music On` when active and `🔇 Muted` when silent.
  - Toggles sound with one click.
- **Volume Slider (`#volume-slider`)**:
  - Compact slider (0% to 100%, defaults to 12%).
  - Automatically un-mutes if adjusted from zero.
  - Responsive: on small mobile screens, the label hides and slider stays compact.

---

## 4. Triggering Sounds in Code

Sound effects are wired to specific user milestones:

- **Correct Quiz Answer**:
  ```javascript
  SoundController.playSfx("correct");
  ```
- **Incorrect Quiz Answer**:
  ```javascript
  SoundController.playSfx("incorrect");
  ```
- **Lesson Completion**:
  ```javascript
  SoundController.playSfx("complete");
  ```

---

## 5. Deployment & Verification

1. Ensure the directory structure is maintained:
   ```
   ├── index.html
   ├── style.css
   ├── script.js
   ├── README.md
   └── assets/
       └── audio/
           ├── background.mp3
           ├── correct.mp3
           ├── incorrect.mp3
           └── lesson-complete.mp3
   ```
2. Open `index.html` in any modern web browser or deploy directly to GitHub Pages.
3. Click the `🔇 Music` button in the top navigation bar to begin the relaxing study soundtrack.
