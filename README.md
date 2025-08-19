# โปรแกรมคำนวณดอกเบี้ย 🧮

โปรแกรมเว็บแอปพลิเคชันสำหรับคำนวณดอกเบี้ยง่าย (Simple Interest Calculator) ที่พัฒนาด้วย TypeScript และ Vite

## ✨ คุณสมบัติ

- 🎯 **คำนวณดอกเบี้ยง่าย** - คำนวณดอกเบี้ยจากเงินต้น อัตราดอกเบี้ย และระยะเวลา 1 ปี
- 🎨 **UI สวยงาม** - ใช้ฟอนต์ IBM Plex Sans Thai และ CSS3 animations
- 🔄 **Real-time Validation** - ตรวจสอบข้อมูลแบบ real-time พร้อม visual feedback
- 📱 **Responsive Design** - รองรับการใช้งานบนอุปกรณ์ต่างๆ
- 🌟 **Loading Animation** - หน้าจอ loading ที่สวยงามเมื่อเริ่มใช้งาน
- 🎉 **Interactive Feedback** - Toast messages และ popup สำหรับแสดงผลลัพธ์
- ⚡ **Performance Optimized** - ใช้ debouncing และ optimized animations

## 🛠️ เทคโนโลยีที่ใช้

- **TypeScript** - ภาษาหลักสำหรับการพัฒนา
- **Vite** - Build tool และ development server
- **HTML5** - โครงสร้างหน้าเว็บ
- **CSS3** - Styling พร้อม animations และ transitions
- **Google Fonts** - IBM Plex Sans Thai

## 🚀 การติดตั้งและใช้งาน

### ข้อกำหนดของระบบ

- Node.js (เวอร์ชั่น 16 หรือสูงกว่า)
- npm หรือ yarn

### การติดตั้ง

1. **Clone โปรเจ็กต์**
   ```bash
   git clone https://github.com/xenodeve/webhw06_s0330250.git
   cd webhw06_s0330250
   ```

2. **ติดตั้ง Dependencies**
   ```bash
   npm install
   ```

3. **รันในโหมด Development**
   ```bash
   npm run dev
   ```

4. **Build สำหรับ Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 โครงสร้างโปรเจ็กต์

```
webhw06_s0330250/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── interestCalculator.ts    # คลาสหลักสำหรับคำนวณดอกเบี้ย
│   ├── loading.ts               # จัดการ loading animation
│   ├── loading.css              # CSS สำหรับ loading
│   ├── popup.ts                 # จัดการ popup แสดงผลลัพธ์
│   ├── popup.css                # CSS สำหรับ popup
│   ├── toast.ts                 # จัดการ toast notifications
│   ├── toast.css                # CSS สำหรับ toast
│   ├── style.css                # CSS หลัก
│   ├── logo.css                 # CSS สำหรับ logo
│   ├── main.ts                  # Entry point หลัก
│   └── vite-env.d.ts            # Type definitions
├── index.html                   # HTML หลัก
├── package.json                 # Dependencies และ scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # เอกสารนี้
```

## 🎮 วิธีใช้งาน

1. **กรอกจำนวนเงินต้น** - ใส่จำนวนเงินต้นเป็นบาท
2. **กรอกอัตราดอกเบี้ย** - ใส่อัตราดอกเบี้ยเป็นเปอร์เซ็นต์ต่อปี
3. **กดปุ่มคำนวณ** - หรือกด Enter ในช่องใดช่องหนึ่ง
4. **ดูผลลัพธ์** - ระบบจะแสดงผลลัพธ์ในรูปแบบ popup

## 🔧 คุณสมบัติพิเศษ

### การตรวจสอบข้อมูล
- ❌ **ข้อมูลไม่ถูกต้อง** - แสดงไอคอน X สีแดง
- ⚠️ **คำเตือน** - แสดงไอคอนสามเหลี่ยมสีเหลือง (เช่น เงินต้น = 0)
- ✅ **ข้อมูลถูกต้อง** - แสดงไอคอนเช็คสีเขียว

### Animations และ Effects
- Smooth transitions สำหรับ labels
- Loading animation แบบ cube grid
- Fade in/out effects
- Hover effects สำหรับปุ่มและ elements

### การแสดงผลลัพธ์
- **Popup Modal** - แสดงรายละเอียดผลลัพธ์
- **Toast Notifications** - แสดงสถานะการทำงาน
- **Thai Number Format** - จัดรูปแบบตัวเลขแบบไทย

## 📊 สูตรการคำนวณ

โปรแกรมใช้สูตรดอกเบี้ยง่าย (Simple Interest):

```
ดอกเบี้ย = (เงินต้น × อัตราดอกเบี้ย × เวลา) ÷ 100
เงินรวม = เงินต้น + ดอกเบี้ย
```

โดย:
- **เงินต้น** = จำนวนเงินเริ่มต้น (บาท)
- **อัตราดอกเบี้ย** = อัตราดอกเบี้ยต่อปี (%)
- **เวลา** = ระยะเวลา (ปี) - ตั้งไว้เป็น 1 ปี

## 🎨 การกำหนดค่า CSS

### ตัวแปรสี
- Primary Color: `#2eea9d` (เขียวมิ้นต์)
- Secondary Color: `#00a94f` (เขียวเข้ม)
- Background: Gradient overlay บนรูปภาพ
- Text Color: `#ffffff` (ขาว)

### ฟอนต์
- **IBM Plex Sans Thai** - ฟอนต์หลัก
- Fallback: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## 🐛 การแก้ไขปัญหา

### ปัญหาที่อาจพบ
1. **Build Error: unused variable** - ตรวจสอบให้แน่ใจว่าตัวแปรทั้งหมดถูกใช้งาน
2. **Font ไม่แสดง** - ตรวจสอบการเชื่อมต่อ Google Fonts ใน HTML
3. **Animation กระตุก** - ตรวจสอบ CSS transitions และ transforms

### คำสั่งที่มีประโยชน์
```bash
# ตรวจสอบ linting
npm run build

# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

โปรเจ็กต์นี้เป็นส่วนหนึ่งของการงานในการเรียน Web Development

## 👨‍💻 ผู้พัฒนา

- **Student ID**: s0330250
- **Repository**: [webhw06_s0330250](https://github.com/xenodeve/webhw06_s0330250)

## 🔗 การ Deploy

โปรเจ็กต์นี้สามารถ deploy บน:
- **Vercel** - แนะนำสำหรับ Vite projects
- **Netlify** - รองรับ static sites
- **GitHub Pages** - สำหรับ static hosting

### Deploy บน Vercel
1. เชื่อมต่อ GitHub repository
2. เลือก build command: `npm run build`
3. เลือก output directory: `dist`
4. Deploy!

---

## 🎯 การใช้งานตัวอย่าง

```typescript
// สร้าง instance
const calculator = new InterestCalculator();

// ตั้งค่า
calculator.setPrincipal(10000);      // เงินต้น 10,000 บาท
calculator.setInterestRate(5);       // อัตราดอกเบี้ย 5% ต่อปี
calculator.setYears(1);              // 1 ปี

// คำนวณ
const interest = calculator.calculateSimpleInterest(); // 500 บาท
const total = calculator.calculateTotal();             // 10,500 บาท
```

**Happy Coding! 🚀**" 
