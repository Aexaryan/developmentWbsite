# راهنمای آپلود در Cloudflare Pages

## روش سریع (آپلود مستقیم)

### مرحله 1: آماده‌سازی فایل‌ها
تمام فایل‌های زیر را آماده کنید:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `translations.js`
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ `_headers` (برای تنظیمات امنیتی)
- ✅ `_redirects` (برای مدیریت redirects)

### مرحله 2: ورود به Cloudflare
1. به [https://dash.cloudflare.com](https://dash.cloudflare.com) بروید
2. وارد حساب کاربری خود شوید
3. از منوی سمت چپ، **Pages** را انتخاب کنید

### مرحله 3: ایجاد پروژه جدید
1. روی دکمه **Create a project** کلیک کنید
2. گزینه **Upload assets** را انتخاب کنید
3. تمام فایل‌های پروژه را انتخاب و آپلود کنید
4. نام پروژه را وارد کنید (مثلاً: `portfolio` یا `my-portfolio`)
5. روی **Deploy site** کلیک کنید

### مرحله 4: دریافت لینک
بعد از آپلود موفق، سایت شما در آدرس زیر در دسترس خواهد بود:
```
https://your-project-name.pages.dev
```

## روش پیشرفته (اتصال به Git)

### مزایا:
- ✅ آپدیت خودکار با هر push
- ✅ تاریخچه تغییرات
- ✅ همکاری تیمی

### مراحل:

1. **ایجاد Repository در GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **اتصال به Cloudflare Pages**
   - در Cloudflare Pages، **Create a project** را انتخاب کنید
   - **Connect to Git** را انتخاب کنید
   - GitHub را authorize کنید
   - Repository خود را انتخاب کنید

3. **تنظیمات Build**
   - **Framework preset**: None
   - **Build command**: (خالی)
   - **Build output directory**: `/`

4. **Deploy**
   - روی **Save and Deploy** کلیک کنید

## تنظیمات دامنه سفارشی

1. در پروژه Pages خود، به **Custom domains** بروید
2. دامنه خود را اضافه کنید
3. DNS records را طبق دستورالعمل تنظیم کنید

## نکات مهم

- ✅ Cloudflare Pages رایگان است
- ✅ HTTPS به صورت خودکار فعال است
- ✅ CDN جهانی برای سرعت بالا
- ✅ بدون نیاز به سرور

## فایل‌های مهم

- `_headers`: تنظیمات امنیتی و cache
- `_redirects`: مدیریت redirects
- `robots.txt`: برای SEO
- `sitemap.xml`: برای SEO

## پشتیبانی

برای سوالات بیشتر:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)

