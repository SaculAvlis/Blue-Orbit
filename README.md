# Blue Orbit — Clean Deployment

## What Was Fixed

The original error: **"If rewrites, redirects, headers, cleanUrls or trailingSlash are used, then routes cannot be present."**

**Root cause:** The `vercel.json` file used the old `routes` syntax which conflicts with Vercel's newer configuration system.

**Solution:** Removed `vercel.json` entirely. Vercel automatically handles Vite SPA routing when it detects the framework.

---

## Files That Should Exist

```
blue-orbit/
├── index.html              ✅ Required
├── package.json            ✅ Required
├── vite.config.ts          ✅ Required
├── tailwind.config.js      ✅ Required
├── postcss.config.js       ✅ Required
├── tsconfig.json           ✅ Required
├── tsconfig.node.json      ✅ Required
├── src/                    ✅ Required
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Waitlist.tsx
│   └── sections/           (optional, pages can include everything)
└── public/                 ✅ Required
    ├── logo.jpg
    ├── logo-sphere.jpg
    ├── concept-mockup.jpg
    ├── wireframe-sketch.jpg
    └── working-photo.jpg
```

## Files That Should NOT Exist

- ❌ `vercel.json` — Removed (causes the error)
- ❌ `tsconfig.app.json` — Not needed (merged into tsconfig.json)
- ❌ Any other config files not listed above

---

## Step-by-Step Deployment Instructions

### Step 1: Upload to GitHub

1. Go to https://github.com/new
2. Create a new repository named `blue-orbit`
3. Make it **Public** (or Private if you have Pro)
4. **Do NOT** initialize with README, .gitignore, or license
5. Click "Create repository"
6. On the next screen, click "uploading an existing file"
7. Drag and drop **ALL files and folders** from the `blue-orbit` folder:
   - index.html
   - package.json
   - vite.config.ts
   - tailwind.config.js
   - postcss.config.js
   - tsconfig.json
   - tsconfig.node.json
   - README.md (optional)
   - src/ folder (with all files inside)
   - public/ folder (with all images inside)
8. Click "Commit changes"

### Step 2: Deploy to Vercel

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Find and select your `blue-orbit` repository
4. On the "Configure Project" screen:

   | Setting | Value |
   |---------|-------|
   | **Framework Preset** | `Vite` |
   | **Root Directory** | `./` (leave as default) |
   | **Build Command** | `npm run build` (auto-detected) |
   | **Output Directory** | `dist` (auto-detected) |

5. **Do NOT** modify any other settings
6. Click "Deploy"
7. Wait for build to complete (should take 1-2 minutes)

### Step 3: Add Custom Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Enter `blueorbit.ie` and click "Add"
3. Vercel will show you DNS records to add
4. Go to your domain provider (Blacknight)
5. Add the DNS records Vercel provided:
   - Usually: `ALIAS` or `CNAME` record pointing to Vercel
6. Wait for DNS propagation (5-30 minutes)
7. SSL certificate will be issued automatically

---

## Formspree Configuration

The waitlist form is already configured:

- **Endpoint:** `https://formspree.io/f/xvzqeeyn`
- **Method:** FormData (not JSON)
- **Field name:** `email`
- **Recipient:** lm6012708@gmail.com

Test it after deployment by submitting an email and checking your Formspree dashboard.

---

## Troubleshooting

### If you see the "routes cannot be present" error again:
- Make sure you deleted the old `vercel.json` file
- This project does NOT have a `vercel.json` file

### If build fails:
- Check that all files were uploaded to GitHub
- Make sure `package.json` is at the root (not in a subfolder)
- Verify `public/` folder contains all images

### If custom domain doesn't work:
- Check DNS records are correctly added at your domain provider
- Wait 10-30 minutes for DNS propagation
- In Vercel, click "Refresh" on the domain status

---

## Dependencies

```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.24.0",
  "gsap": "^3.12.5",
  "lucide-react": "^0.400.0",
  "tailwindcss": "^3.4.4",
  "vite": "^5.3.1",
  "typescript": "^5.5.2"
}
```

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vite on Vercel: https://vercel.com/docs/frameworks/vite
- Formspree Docs: https://formspree.io/docs/
