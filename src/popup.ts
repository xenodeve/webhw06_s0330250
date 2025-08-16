// Popup utility class for displaying modal dialogs
export class Popup {
  private overlayElement: HTMLElement | null = null;
  private containerElement: HTMLElement | null = null;

  constructor() {
    this.initializePopup();
  }

  private initializePopup(): void {
    // Create popup overlay and container if they don't exist
    if (!document.querySelector('#popup-overlay')) {
      const overlay = document.createElement('div');
      overlay.id = 'popup-overlay';
      overlay.className = 'popup-overlay';
      
      const container = document.createElement('section');
      container.id = 'popup-container';
      container.className = 'popup-section';
      
      overlay.appendChild(container);
      document.body.appendChild(overlay);
    }
    
    this.overlayElement = document.querySelector('#popup-overlay');
    this.containerElement = document.querySelector('#popup-container');
  }

  public show(content: string): void {
    if (!this.overlayElement || !this.containerElement) return;
    
    this.containerElement.innerHTML = content;
    
    // เพิ่ม entering class สำหรับ transition เข้า
    this.overlayElement.classList.add('entering');
    this.overlayElement.classList.remove('exiting');
    this.overlayElement.classList.add('active');
    
    // Add event listeners for close buttons
    this.addCloseEventListeners();
    
    // Close popup when clicking on overlay
    this.overlayElement.addEventListener('click', (e) => {
      if (e.target === this.overlayElement) {
        this.hide();
      }
    });
  }

  public hide(): void {
    if (!this.overlayElement) return;
    
    // เพิ่ม exiting class สำหรับ transition ออก
    this.overlayElement.classList.add('exiting');
    this.overlayElement.classList.remove('entering');
    this.overlayElement.classList.remove('active');
  }

  private addCloseEventListeners(): void {
    if (!this.containerElement) return;
    
    const closeButtons = this.containerElement.querySelectorAll('.close, .close-popup');
    closeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.hide();
      });
    });
  }

  // Create success popup content
  public createSuccessContent(title: string, details: { [key: string]: string }): string {
    const detailsHtml = Object.entries(details).map(([key, value]) => 
      key === 'Total' 
        ? `<p class="total-amount"><strong>${key}:</strong> ${value}</p>`
        : `<p><strong>${key}:</strong> ${value}</p>`
    ).join('');

    return `
      <div class="card green">
        <div class="card-header">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <div class="card-body">
          <div class="result-content">
            <h3>${title}</h3>
            <div class="result-details">
              ${detailsHtml}
            </div>
          </div>
        </div>
        <div class="progress">
          <a href="#" class="btn-second close-popup">ปิด</a>
        </div>
      </div>
    `;
  }
}

// Export singleton instance
export const popup = new Popup();
