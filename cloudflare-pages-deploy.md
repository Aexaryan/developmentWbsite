# راهنمای آپلود در Cloudflare Pages

این راهنما به شما کمک می‌کند تا سایت را در Cloudflare Pages آپلود کنید.

## روش 1: آپلود از طریق Dashboard Cloudflare

### مرحله 1: ورود به Cloudflare
1. به [Cloudflare Dashboard](https://dash.cloudflare.com) بروید
2. وارد حساب کاربری خود شوید

### مرحله 2: ایجاد پروژه جدید
1. از منوی سمت چپ، روی **Pages** کلیک کنید
2. روی دکمه **Create a project** کلیک کنید
3. گزینه **Upload assets** را انتخاب کنید

### مرحله 3: آپلود فایل‌ها
1. تمام فایل‌های پروژه را انتخاب کنید:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `translations.js`
   - `robots.txt`
   - `sitemap.xml`
   - `_headers`
   - `_redirects`

2. فایل‌ها را به صورت ZIP فشرده کنید یا مستقیماً آپلود کنید

3. نام پروژه را وارد کنید (مثلاً: `portfolio`)

4. روی **Deploy site** کلیک کنید

### مرحله 4: تنظیمات دامنه (اختیاری)
1. بعد از آپلود، می‌توانید یک دامنه سفارشی اضافه کنید
2. به بخش **Custom domains** بروید
3. دامنه خود را اضافه کنید

## روش 2: آپلود از طریق Git (پیشنهادی)

### مرحله 1: ایجاد Repository در GitHub
1. یک repository جدید در GitHub ایجاد کنید
2. تمام فایل‌های پروژه را push کنید

### مرحله 2: اتصال به Cloudflare Pages
1. در Cloudflare Pages، روی **Create a project** کلیک کنید
2. گزینه **Connect to Git** را انتخاب کنید
3. GitHub را انتخاب کنید و repository خود را authorize کنید
4. repository خود را انتخاب کنید

### مرحله 3: تنظیمات Build
- **Framework preset**: None
- **Build command**: (خالی بگذارید)
- **Build output directory**: `/` (root)

### مرحله 4: Deploy
1. روی **Save and Deploy** کلیک کنید
2. سایت شما در آدرس `your-project.pages.dev` در دسترس خواهد بود

## تنظیمات پیشرفته

### Environment Variables (در صورت نیاز)
اگر در آینده نیاز به environment variables داشتید:
1. به بخش **Settings** > **Environment variables** بروید
2. متغیرهای مورد نیاز را اضافه کنید

### Custom Headers
فایل `_headers` برای تنظیمات امنیتی و cache استفاده می‌شود.

### Redirects
فایل `_redirects` برای مدیریت redirects استفاده می‌شود.

## نکات مهم

1. **HTTPS**: Cloudflare Pages به صورت خودکار HTTPS را فعال می‌کند
2. **CDN**: سایت شما از طریق شبکه CDN جهانی Cloudflare ارائه می‌شود
3. **رایگان**: Cloudflare Pages برای پروژه‌های شخصی رایگان است
4. **سرعت**: سایت شما با سرعت بالا لود می‌شود

## آدرس سایت

بعد از آپلود، سایت شما در آدرس زیر در دسترس خواهد بود:
```
https://your-project-name.pages.dev
```

## پشتیبانی

برای اطلاعات بیشتر:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)

