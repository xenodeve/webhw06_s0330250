# โปรแกรมคำนวณดอกเบี้ย - iOS 26 Liquid Glass Edition 🧮

โปรแกรมเว็บแอปพลิเคชันสำหรับคำนวณดอกเบี้ยง่าย (Simple Interest Calculator) ที่พัฒนาด้วย TypeScript และ Vite พร้อมด้วยการออกแบบสุดพรีเมียมในแนวทาง **iOS 26 Liquid Glass Design System**

## ✨ คุณสมบัติ

- 🎯 **คำนวณดอกเบี้ยง่าย** - คำนวณดอกเบี้ยจากเงินต้น อัตราดอกเบี้ย และระยะเวลา 1 ปี
- � **iOS 26 Liquid Glass Design** - การออกแบบสุดพรีเมียมที่ใช้เทคโนลยี Glass Morphism
- 💎 **Backdrop Filter Effects** - เอฟเฟกต์กระจกเบลอพื้นหลังแบบ iOS แท้
- �🎨 **UI สวยงาม** - ใช้ฟอนต์ IBM Plex Sans Thai และ CSS3 animations
- 🔄 **Real-time Validation** - ตรวจสอบข้อมูลแบบ real-time พร้อม visual feedback
- 📱 **Responsive Design** - รองรับการใช้งานบนอุปกรณ์ต่างๆ
- ⚡ **Glass Loading Animation** - หน้าจอ loading แบบ glass morphism เมื่อเริ่มใช้งาน
- 🎉 **Interactive Feedback** - Toast messages และ popup สำหรับแสดงผลลัพธ์ในแนว Liquid Glass
- 🔮 **Performance Optimized** - ใช้ debouncing และ optimized animations พร้อม hardware acceleration

## 🛠️ เทคโนโลยีที่ใช้

- **TypeScript** - ภาษาหลักสำหรับการพัฒนา
- **Vite** - Build tool และ development server
- **HTML5** - โครงสร้างหน้าเว็บ
- **CSS3** - Styling พร้อม Glass Morphism effects, backdrop-filter และ animations
- **iOS 26 Design System** - การออกแบบตาม Apple's Liquid Glass guidelines
- **Backdrop Filter API** - สำหรับเอฟเฟกต์กระจกเบลอพื้นหลัง
- **Google Fonts** - IBM Plex Sans Thai สำหรับ typography ที่สวยงาม

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
│   ├── loading.css              # CSS สำหรับ loading (Liquid Glass style)
│   ├── popup.ts                 # จัดการ popup แสดงผลลัพธ์
│   ├── popup.css                # CSS สำหรับ popup (Glass morphism)
│   ├── toast.ts                 # จัดการ toast notifications
│   ├── toast.css                # CSS สำหรับ toast (Glass effect)
│   ├── style.css                # CSS หลัก (iOS 26 Liquid Glass theme)
│   ├── glass-icon.css           # CSS สำหรับ glass icon effects
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

### 🌟 iOS 26 Liquid Glass Design System
โปรเจ็กต์นี้ใช้การออกแบบตามแนวทาง iOS 26 Liquid Glass ที่ประกอบด้วย:

#### Glass Morphism Effects
- **Backdrop Filter Blur** - เอฟเฟกต์เบลอพื้นหลังแบบกระจก `backdrop-filter: blur(20px)`
- **Translucent Backgrounds** - พื้นหลังโปร่งแสงด้วย `rgba(255, 255, 255, 0.1)`
- **Subtle Borders** - เส้นขอบบางๆ ด้วย `rgba(255, 255, 255, 0.2)`
- **Multi-layered Shadows** - เงาหลายชั้นเพื่อความลึก

#### Interactive Elements
- **Glass Containers** - ทุก component ใช้ glass morphism styling
- **Smooth Transitions** - การเปลี่ยนแปลงที่ลื่นไหลด้วย CSS transitions
- **Hover Effects** - เอฟเฟกต์เมื่อ hover พร้อม transform และ glow
- **Animated Light Reflection** - แสงสะท้อนเคลื่อนไหวบน title

#### Typography & Visual Hierarchy
- **IBM Plex Sans Thai** - ฟอนต์หลักสำหรับความชัดเจนและสวยงาม
- **Gradient Text Effects** - ข้อความแบบ gradient สำหรับหัวเรื่อง
- **Glass Text Containers** - พื้นหลังกระจกสำหรับข้อความสำคัญ

### การตรวจสอบข้อมูล
- ❌ **ข้อมูลไม่ถูกต้อง** - แสดงไอคอน X สีแดง
- ⚠️ **คำเตือน** - แสดงไอคอนสามเหลี่ยมสีเหลือง (เช่น เงินต้น = 0)
- ✅ **ข้อมูลถูกต้อง** - แสดงไอคอนเช็คสีเขียว

### Animations และ Effects
- **Glass Morphism Transitions** - การเปลี่ยนแปลงแบบ glass morphism
- **Loading animation** แบบ glass cube grid พร้อม backdrop-filter
- **Fade in/out effects** พร้อม glass container animations  
- **Hover effects** สำหรับปุ่มและ elements ด้วยการเปลี่ยน opacity และ blur
- **Light Reflection Animation** - แสงสะท้อนเคลื่อนไหวบน glass surfaces

### การแสดงผลลัพธ์
- **Glass Popup Modal** - แสดงรายละเอียดผลลัพธ์ในรูปแบบ glass morphism
- **Glass Toast Notifications** - แสดงสถานะการทำงานด้วย translucent backgrounds
- **Thai Number Format** - จัดรูปแบบตัวเลขแบบไทยใน glass containers

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

### iOS 26 Liquid Glass Design Tokens
- **Glass Background**: `rgba(255, 255, 255, 0.1)` - พื้นหลังโปร่งแสง
- **Backdrop Filter**: `blur(20px) saturate(180%)` - เอฟเฟกต์เบลอและความอิ่มตัวสี
- **Glass Borders**: `rgba(255, 255, 255, 0.2)` - เส้นขอบแบบกระจก
- **Multi-layer Shadows**: 
  - Outer: `0 8px 32px rgba(0, 0, 0, 0.1)`
  - Inner: `inset 0 0 0 1px rgba(255, 255, 255, 0.2)`
- **Text Color**: `#ffffff` - ขาวสำหรับ contrast บนพื้นหลังกระจก

### ฟอนต์
- **IBM Plex Sans Thai** - ฟอนต์หลักสำหรับความชัดเจนใน glass interface
- **Fallback**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

### Glass Morphism Properties
```css
.glass-element {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}
```

## 🐛 การแก้ไขปัญหา

### ปัญหาที่อาจพบ
1. **Build Error: unused variable** - ตรวจสอบให้แน่ใจว่าตัวแปรทั้งหมดถูกใช้งาน
2. **Font ไม่แสดง** - ตรวจสอบการเชื่อมต่อ Google Fonts ใน HTML
3. **Glass effects ไม่ทำงาน** - ตรวจสอบ browser support สำหรับ `backdrop-filter`
4. **Animation กระตุก** - ตรวจสอบ CSS transitions และ transforms, ใช้ `will-change` property
5. **Performance issues** - ลด blur radius หรือใช้ `transform3d()` สำหรับ hardware acceleration

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
- **Vercel** - แนะนำสำหรับ Vite projects (รองรับ glass effects ได้ดี)
- **Netlify** - รองรับ static sites พร้อม modern CSS features
- **GitHub Pages** - สำหรับ static hosting (ตรวจสอบ browser compatibility)

### ข้อกำหนดสำหรับ Glass Effects
- **Modern Browsers**: Safari 9+, Chrome 76+, Firefox 70+, Edge 17+
- **Backdrop Filter Support**: จำเป็นสำหรับ glass morphism effects
- **Hardware Acceleration**: แนะนำสำหรับ performance ที่ดี

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
