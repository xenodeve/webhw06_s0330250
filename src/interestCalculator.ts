export class InterestCalculator {
  private principal: number;
  private interestRate: number;
  private years: number;

  constructor(principal: number = 0, interestRate: number = 0, years: number = 1) {
    this.principal = principal;
    this.interestRate = interestRate;
    this.years = years;
  }

  // Method สำหรับตั้งค่าเงินต้น
  setPrincipal(principal: number): void {
    this.principal = principal;
  }

  // Method สำหรับตั้งค่าอัตราดอกเบี้ย
  setInterestRate(interestRate: number): void {
    this.interestRate = interestRate;
  }

  // Method สำหรับตั้งค่าจำนวนปี
  setYears(years: number): void {
    this.years = years;
  }

  // Method คำนวณดอกเบี้ยง่าย
  calculateSimpleInterest(): number {
    return (this.principal * this.interestRate * this.years) / 100;
  }

  // Method คำนวณเงินรวมสุทธิ (เงินต้น + ดอกเบี้ย)
  calculateTotal(): number {
    return this.principal + this.calculateSimpleInterest();
  }

  // Method สำหรับสร้างข้อมูลผลลัพธ์สำหรับ popup
  getResultData(): { [key: string]: string } {
    const interest = this.calculateSimpleInterest();
    const total = this.calculateTotal();
    
    return {
      'เงินต้น': `${this.principal.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท`,
      'อัตราดอกเบี้ย': `${this.interestRate}% ต่อปี`,
      'ระยะเวลา': `${this.years} ปี`,
      'ดอกเบี้ย': `${interest.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท`,
      'Total': `${total.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท`
    };
  }

  // Method แสดงผลลัพธ์
  displayResult(): string {
    const interest = this.calculateSimpleInterest();
    const total = this.calculateTotal();
    
    return `
      <div class="result">
        <h3>ผลการคำนวณ:</h3>
        <p><strong>เงินต้น:</strong> ${this.principal.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท</p>
        <p><strong>อัตราดอกเบี้ย:</strong> ${this.interestRate}% ต่อปี</p>
        <p><strong>ระยะเวลา:</strong> ${this.years} ปี</p>
        <p><strong>ดอกเบี้ย:</strong> ${interest.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท</p>
        <p class="total"><strong>เงินรวมสุทธิ:</strong> ${total.toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท</p>
      </div>
    `;
  }

  // Method ตรวจสอบความถูกต้องของข้อมูล
  validateInput(): { isValid: boolean; message: string } {
    if (this.principal <= 0) {
      return { isValid: false, message: "กรุณากรอกจำนวนเงินต้นที่มากกว่า 0" };
    }
    if (this.interestRate < 0) {
      return { isValid: false, message: "กรุณากรอกอัตราดอกเบี้ยที่ไม่ติดลบ" };
    }
    return { isValid: true, message: "" };
  }
}
