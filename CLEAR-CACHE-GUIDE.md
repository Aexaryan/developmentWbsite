# راهنمای Clear کردن Cache در Cloudflare

## مشکل:
بعد از deploy تغییرات جدید، مرورگر و Cloudflare هنوز نسخه قدیمی را نمایش می‌دهند.

## راه‌حل‌ها:

### 1. Clear Cache در Cloudflare Dashboard:

1. به [Cloudflare Dashboard](https://dash.cloudflare.com/) بروید
2. Domain خود را انتخاب کنید
3. به **Caching** → **Configuration** بروید
4. روی **Purge Everything** کلیک کنید
5. یا **Custom Purge** را انتخاب کنید و URL های خاص را purge کنید:
   - `https://yourdomain.com/index.html`
   - `https://yourdomain.com/styles.css`
   - `https://yourdomain.com/script.js`

### 2. Clear Cache در مرورگر:

#### Chrome/Edge:
- **Windows**: `Ctrl + Shift + Delete`
- **Mac**: `Cmd + Shift + Delete`
- یا `Ctrl + F5` (Windows) / `Cmd + Shift + R` (Mac) برای Hard Refresh

#### Firefox:
- **Windows**: `Ctrl + Shift + Delete`
- **Mac**: `Cmd + Shift + Delete`
- یا `Ctrl + F5` (Windows) / `Cmd + Shift + R` (Mac)

#### Safari:
- **Mac**: `Cmd + Option + E` (Empty Caches)
- یا `Cmd + Shift + R` برای Hard Refresh

### 3. استفاده از Developer Tools:

1. Developer Tools را باز کنید (`F12`)
2. روی آیکون **Network** کلیک کنید
3. تیک **Disable cache** را بزنید
4. صفحه را Refresh کنید (`Ctrl + R` یا `Cmd + R`)

### 4. Clear Cache در Mobile:

#### iOS Safari:
1. Settings → Safari → Clear History and Website Data
2. یا Safari را ببندید و دوباره باز کنید

#### Android Chrome:
1. Chrome → Settings → Privacy → Clear browsing data
2. یا Chrome را Force Stop کنید

### 5. استفاده از Query String (موقت):

برای تست، می‌توانید به URL یک query string اضافه کنید:
```
https://yourdomain.com/?v=2
https://yourdomain.com/?v=3
```

## تنظیمات Cache که اعمال شده:

### فایل `_headers`:
- **HTML**: `max-age=0, must-revalidate` (بدون cache)
- **CSS**: `max-age=0, must-revalidate` (بدون cache)
- **JS**: `max-age=0, must-revalidate` (بدون cache)
- **Images**: `max-age=86400` (1 روز)

### Meta Tags در HTML:
- `Cache-Control: no-cache, no-store, must-revalidate`
- `Pragma: no-cache`
- `Expires: 0`

## نکات مهم:

1. **بعد از Purge**: چند دقیقه صبر کنید تا تغییرات اعمال شوند
2. **Hard Refresh**: همیشه Hard Refresh کنید (`Ctrl + F5`)
3. **Incognito Mode**: برای تست از Incognito/Private Mode استفاده کنید
4. **Cloudflare Cache**: ممکن است 2-5 دقیقه طول بکشد تا purge شود

## اگر هنوز مشکل دارید:

1. Cloudflare Dashboard → Caching → Purge Everything
2. مرورگر را کاملاً ببندید و دوباره باز کنید
3. از Incognito Mode استفاده کنید
4. چند دقیقه صبر کنید و دوباره امتحان کنید

