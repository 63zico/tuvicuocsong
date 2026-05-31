# Zalo Mini App Setup: Tử Vi Cuộc Sống

This project is prepared so it can be converted and deployed as a Zalo Mini App.

## 1. Create the Zalo Mini App

1. Go to `https://developers.zalo.me` and log in with the Zalo account that will own the app.
2. Create a new Zalo app.
3. Create a Mini App under that Zalo app.
4. Use these public-facing values:
   - App name: `Tử Vi Cuộc Sống`
   - Category: lifestyle, astrology, or the closest approved category
   - Short description: `Xem vận khí hôm nay, lá số Tứ trụ, tình duyên, tài lộc và công việc.`
5. Save the Mini App ID.

## 2. Install local tooling

```powershell
cd "C:\Users\jinu\Documents\New project 2"
npm install
```

The project uses:

- `zmp-cli` for Zalo Mini App login, preview, and deploy
- `zmp-vite-plugin` for packaging the web app for Zalo
- `zmp-sdk` and `zmp-ui` for future Zalo APIs and UI components

## 3. Log in to Zalo CLI

```powershell
npm run zalo:login
```

Scan the QR code with the Zalo account that owns the Mini App.

## 4. Link or initialize the Mini App ID

If the CLI asks for Mini App ID, paste the ID from the Zalo developer console.

If the CLI requires initialization for an existing web app, run:

```powershell
npx zmp init
```

Choose the option for converting an existing web app, then enter the Mini App ID.

## 5. Test locally

```powershell
npm run zalo:start
```

For device testing through Zalo:

```powershell
npm run zalo:start:device
```

Scan the QR code with the Zalo app on a phone.

## 6. Deploy for review

```powershell
npm run build
npm run zalo:deploy:testing
```

After deploy, open the Zalo Mini App management console, select the testing version, complete required app information, and submit for review.

## 7. Payment plan

Use mock unlock for now. Real payment should be added later with ZaloPay:

1. User taps `Mở khóa Premium` or `Đăng ký tháng`.
2. Frontend calls backend `/api/orders`.
3. Backend creates a ZaloPay order and returns `zp_trans_token`.
4. Frontend calls `window.zlpSdk.Payment.startCashier`.
5. Backend verifies callback/webhook.
6. Backend unlocks Premium in the database.

Do not unlock Premium based only on frontend callback.
