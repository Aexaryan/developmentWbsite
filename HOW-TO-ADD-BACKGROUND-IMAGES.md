# 📸 راهنمای سریع: اضافه کردن Background Images

## ✅ کارهای انجام شده

1. ✅ فولدر `images/backgrounds/` ایجاد شد
2. ✅ کد CSS برای نمایش background images اضافه شد (comment شده)
3. ✅ فایل `BACKGROUND-IMAGE-PROMPTS.md` با prompt های کامل ایجاد شد

---

## 🎯 مراحل بعدی

### 1. تولید Background Images با Gemini

1. فایل `BACKGROUND-IMAGE-PROMPTS.md` را باز کن
2. برای هر بخش، prompt مناسب را انتخاب کن (انگلیسی یا فارسی)
3. Prompt را در Gemini کپی کن
4. تصویر را تولید کن
5. تصویر را با نام صحیح ذخیره کن

### 2. نام فایل‌ها

Background images باید با این نام‌ها ذخیره شوند:

```
images/backgrounds/
├── hero-fullstack.png
├── about-development.png
├── projects-portfolio.png
├── creative-services.png
├── skills-technology.png
└── contact-connection.png
```

### 3. ابعاد Background Images

- **عرض**: 1920 پیکسل
- **ارتفاع**: 1080 پیکسل
- **فرمت**: PNG
- **نسبت**: 16:9 (Full HD)

---

## 🎨 ویژگی‌های CSS

Background images به صورت خودکار:
- ✅ در هر section نمایش داده می‌شوند
- ✅ با overlay سفید (opacity 0.85-0.92) استفاده می‌شوند
- ✅ `background-attachment: fixed` دارند (parallax effect)
- ✅ Responsive هستند
- ✅ متن قابل خواندن است (overlay سفید)

---

## 🔧 فعال کردن Background Images

بعد از اضافه کردن تصاویر، در فایل `styles.css` این خطوط را uncomment کن:

### Hero Section
```css
.hero {
    /* background-image: url('images/backgrounds/hero-fullstack.png'); */
    /* را به این تبدیل کن: */
    background-image: url('images/backgrounds/hero-fullstack.png');
}
```

### About Section
```css
.about {
    /* background-image: url('images/backgrounds/about-development.png'); */
    /* را به این تبدیل کن: */
    background-image: url('images/backgrounds/about-development.png');
}
```

### Projects Section
```css
.projects {
    /* background-image: url('images/backgrounds/projects-portfolio.png'); */
    /* را به این تبدیل کن: */
    background-image: url('images/backgrounds/projects-portfolio.png');
}
```

### Creative Services
```css
.creative-services {
    /* background-image: url('images/backgrounds/creative-services.png'); */
    /* را به این تبدیل کن: */
    background-image: url('images/backgrounds/creative-services.png');
}
```

### Skills Section
```css
.skills {
    /* background-image: url('images/backgrounds/skills-technology.png'); */
    /* را به این تبدیل کن: */
    background-image: url('images/backgrounds/skills-technology.png');
}
```

### Contact Section
```css
.contact {
    /* background-image: url('images/backgrounds/contact-connection.png'); */
    /* را به این تبدیل کن: */
    background-image: url('images/backgrounds/contact-connection.png');
}
```

---

## 🔍 بررسی نهایی

بعد از اضافه کردن background images:

1. ✅ فایل‌ها در فولدر `images/backgrounds/` هستند؟
2. ✅ نام فایل‌ها درست است؟
3. ✅ Comment ها از CSS حذف شده‌اند؟
4. ✅ Background images در مرورگر نمایش داده می‌شوند؟
5. ✅ متن قابل خواندن است؟
6. ✅ Background images خیلی شلوغ نیستند؟

---

## 💡 نکته مهم

اگر background image ندارید، می‌توانید:
- موقتاً background را غیرفعال کنید (comment بماند)
- یا از gradient ساده استفاده کنید

---

## 🎯 بخش‌های دارای Background Image

1. **Hero Section** - `hero-fullstack.png` (Full Stack Developer theme)
2. **About Section** - `about-development.png` (Software Development theme)
3. **Projects Section** - `projects-portfolio.png` (Projects/Portfolio theme)
4. **Creative Services** - `creative-services.png` (Creative Services theme)
5. **Skills Section** - `skills-technology.png` (Technology/Skills theme)
6. **Contact Section** - `contact-connection.png` (Connection/Networking theme)

---

**همه چیز آماده است! فقط background images را اضافه کن و comment ها را بردار. 🚀**

