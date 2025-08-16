import './style.css';
import './popup.css';
import './toast.css';
import './loading.css';
import { InterestCalculator } from './interestCalculator';
import { popup } from './popup';
import { toast } from './toast';
import { loadingManager } from './loading';

// Initial Loading Screen Management
class InitialLoader {
  private loadingElement: HTMLElement | null = null;
  private mainContent: HTMLElement | null = null;

  constructor() {
    this.loadingElement = document.querySelector('#initial-loading');
    this.mainContent = document.querySelector('#main-content');
    this.init();
  }
  private async init(): Promise<void> {
    // 1) Wait for DOMContentLoaded so the DOM is ready
    await new Promise<void>(resolve => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => resolve());
      } else {
        resolve();
      }
    });

    // 2) Wait for window 'load' so images and external resources are loaded
    await new Promise<void>(resolve => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve(), { once: true });
      }
    });

    // 3) Wait for fonts to be ready (if supported)
    if ((document as any).fonts && (document as any).fonts.ready) {
      try {
        await (document as any).fonts.ready;
      } catch (e) {
        // ignore font loading errors and continue
      }
    }

    // 4) Small minimum visible time so loading doesn't flash instantly
    await new Promise(resolve => setTimeout(resolve, 200));

    // Now hide the loading screen and reveal main content
    this.hideLoadingScreen();
  }

  private hideLoadingScreen(): void {
    if (this.loadingElement && this.mainContent) {
      // Start fade out animation for loading screen
      this.loadingElement.classList.add('fade-out');
      
      // Wait for loading screen to fade out, then show main content
      setTimeout(() => {
        if (this.loadingElement) {
          this.loadingElement.style.display = 'none';
        }
        if (this.mainContent) {
          this.mainContent.classList.add('show');
        }
      }, 500); // Match the CSS transition duration
    }
  }
}

// Initialize the initial loader
new InitialLoader();

// สร้าง instance ของ InterestCalculator
const calculator = new InterestCalculator();

// ฟังก์ชันสำหรับอัปเดต label เมื่อมีการเปลี่ยนแปลงใน input
function updateLabelState(inputElement: HTMLInputElement, labelElement: HTMLLabelElement) {
  const value = inputElement.value.trim();
  const numericValue = parseFloat(value);
  
  // เช็คว่ามี class อยู่หรือไม่ เพื่อใช้ removing animation
  const hasExistingState = labelElement.classList.contains('has-value') || 
                          labelElement.classList.contains('has-error') || 
                          labelElement.classList.contains('has-warning');
  
  if (hasExistingState) {
    // เพิ่ม removing animation ก่อนลบ class
    labelElement.classList.add('removing');
    
    // รอให้ animation จบแล้วค่อยอัปเดต
    setTimeout(() => {
      updateLabelStateInternal(inputElement, labelElement, value, numericValue);
    }, 300);
  } else {
    // ไม่มี state เดิม อัปเดตทันที
    updateLabelStateInternal(inputElement, labelElement, value, numericValue);
  }
}

function updateLabelStateInternal(inputElement: HTMLInputElement, labelElement: HTMLLabelElement, value: string, numericValue: number) {
  // ลบ class ทั้งหมด
  labelElement.classList.remove('has-value', 'has-error', 'has-warning', 'removing');
  
  if (value === '' || isNaN(numericValue)) {
    // ไม่มีค่าหรือไม่ใช่ตัวเลข - ไม่แสดงอะไร
    return;
  }
  
  // ตรวจสอบเฉพาะสำหรับเงินต้น (principal input)
  if (inputElement.id === 'principal') {
    if (numericValue === 0) {
      // เงินต้นเป็น 0 - แสดง warning
      labelElement.classList.add('has-warning');
      toast.warning('เงินต้นไม่สามารถเป็น 0 ได้');
      return;
    } else if (numericValue < 0) {
      // ค่าติดลบ - แสดงกากบาต
      labelElement.classList.add('has-error');
      toast.error('ไม่สามารถใส่ค่าติดลบได้');
      return;
    }
  } else if (numericValue < 0) {
    // สำหรับ input อื่นๆ เช็คแค่ค่าติดลบ
    labelElement.classList.add('has-error');
    toast.error('ไม่สามารถใส่ค่าติดลบได้');
    return;
  }
  
  // ค่าถูกต้อง - แสดงติ๊กถูก
  labelElement.classList.add('has-value');
}

// Variables สำหรับ debouncing
let principalInputTimeout: number | null = null;
let interestRateInputTimeout: number | null = null;

// ฟังก์ชันสำหรับเพิ่ม event listeners ให้กับ inputs
function addInputEventListeners() {
  const principalInput = document.querySelector<HTMLInputElement>('#principal')!;
  const interestRateInput = document.querySelector<HTMLInputElement>('#interest-rate')!;
  const principalLabel = document.querySelector<HTMLLabelElement>('label[for="principal"]')!;
  const interestRateLabel = document.querySelector<HTMLLabelElement>('label[for="interest-rate"]')!;

  // Event listeners สำหรับ principal input
  principalInput.addEventListener('input', () => {
    // ยกเลิก timeout เก่า
    if (principalInputTimeout) {
      clearTimeout(principalInputTimeout);
    }
    
    // ตั้ง timeout ใหม่ เพื่อรอให้ผู้ใช้พิมพ์เสร็จ
    principalInputTimeout = window.setTimeout(() => {
      updateLabelState(principalInput, principalLabel);
    }, 400); // รอ 800ms หลังจากหยุดพิมพ์
  });
  
  principalInput.addEventListener('focus', () => {
    // ลบ inline styles ออกเพื่อให้ CSS classes ทำงาน
    principalLabel.style.color = '';
    principalLabel.style.transform = '';
    principalLabel.classList.add('focused');
  });
  
  principalInput.addEventListener('blur', () => {
    principalLabel.classList.remove('focused');
  });

  // Event listeners สำหรับ interest rate input
  interestRateInput.addEventListener('input', () => {
    // ยกเลิก timeout เก่า
    if (interestRateInputTimeout) {
      clearTimeout(interestRateInputTimeout);
    }
    
    // ตั้ง timeout ใหม่ เพื่อรอให้ผู้ใช้พิมพ์เสร็จ
    interestRateInputTimeout = window.setTimeout(() => {
      updateLabelState(interestRateInput, interestRateLabel);
    }, 800); // รอ 800ms หลังจากหยุดพิมพ์
  });
  
  interestRateInput.addEventListener('focus', () => {
    // ลบ inline styles ออกเพื่อให้ CSS classes ทำงาน
    interestRateLabel.style.color = '';
    interestRateLabel.style.transform = '';
    interestRateLabel.classList.add('focused');
  });
  
  interestRateInput.addEventListener('blur', () => {
    interestRateLabel.classList.remove('focused');
  });
}

// ฟังก์ชันสำหรับคำนวณดอกเบี้ย
async function calculateInterest() {
  const principalInput = document.querySelector<HTMLInputElement>('#principal')!;
  const interestRateInput = document.querySelector<HTMLInputElement>('#interest-rate')!;
  const resultContainer = document.querySelector<HTMLDivElement>('#result-container')!;

  // ล้างข้อความแสดงผลก่อนหน้า
  resultContainer.innerHTML = '';

  // รับค่าจากฟอร์ม
  const principal = parseFloat(principalInput.value);
  const interestRate = parseFloat(interestRateInput.value);

  // ตรวจสอบว่ากรอกข้อมูลครบถ้วน
  if (isNaN(principal) || isNaN(interestRate)) {
    toast.error('กรุณากรอกข้อมูลให้ครบถ้วน');
    return;
  }

  // ตรวจสอบค่าเงินต้น
  if (principal === 0) {
    toast.warning('เงินต้นไม่สามารถเป็น 0 ได้');
    return;
  }

  if (principal < 0) {
    toast.error('จำนวนเงินต้นไม่สามารถติดลบได้');
    return;
  }

  if (interestRate < 0) {
    toast.error('อัตราดอกเบี้ยไม่สามารถติดลบได้');
    return;
  }

  // ตั้งค่าให้กับ calculator
  calculator.setPrincipal(principal);
  calculator.setInterestRate(interestRate);
  calculator.setYears(1); // กำหนดเป็น 1 ปีตามโจทย์

  // ตรวจสอบความถูกต้องของข้อมูล
  const validation = calculator.validateInput();
  if (!validation.isValid) {
    toast.error(validation.message);
    return;
  }

  // แสดง loading animation
  loadingManager.show();
  
  // รอสักครู่เพื่อแสดง loading animation (จำลองการประมวลผล)
  await new Promise(resolve => setTimeout(resolve, 150));
  
  // คำนวณผลลัพธ์
  const interest = calculator.calculateSimpleInterest();
  const total = calculator.calculateTotal();
  
  const resultData = {
    'เงินต้น': `${principal.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท`,
    'อัตราดอกเบี้ย': `${interestRate}% ต่อปี`,
    'ระยะเวลา': '1 ปี',
    'ดอกเบี้ย': `${interest.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท`,
    'Total': `${total.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท`
  };
  
  // แสดง popup ก่อนที่จะซ่อน loading (ทำให้ต่อเนื่องกัน)
  popup.show(popup.createSuccessContent('ผลการคำนวณดอกเบี้ย', resultData));
  
  // รอสักครู่แล้วค่อยซ่อน loading เพื่อให้ popup แสดงก่อน
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // ซ่อน loading animation
  loadingManager.hide();
  
  // รอให้ loading หายไปก่อนแล้วค่อยแสดง success toast
  // await new Promise(resolve => setTimeout(resolve, 400));
  
  // แสดง success toast
  toast.success('คำนวณดอกเบี้ยสำเร็จ!');
}

// เพิ่ม Event Listener ให้กับปุ่มคำนวณ
document.querySelector<HTMLButtonElement>('#calculate-btn')!.addEventListener('click', calculateInterest);

// เพิ่ม Event Listener สำหรับการกด Enter ในช่องกรอกข้อมูล
document.querySelector<HTMLInputElement>('#principal')!.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    calculateInterest();
  }
});

document.querySelector<HTMLInputElement>('#interest-rate')!.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    calculateInterest();
  }
});

// เรียกใช้ฟังก์ชันเพื่อเพิ่ม event listeners สำหรับ label effects
addInputEventListeners();
