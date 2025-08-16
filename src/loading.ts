// Loading Animation Module (Optimized)
export class LoadingManager {
  private loadingOverlay: HTMLElement | null = null;
  private isVisible = false;
  private hideTimeout: number | null = null;

  constructor() {
    this.createLoadingElements();
  }

  private createLoadingElements(): void {
    // Create loading overlay
    this.loadingOverlay = document.createElement('div');
    this.loadingOverlay.className = 'loading-overlay';
    
    // Create loading content
    const loadingContent = document.createElement('div');
    loadingContent.className = 'loading-content';
    
    // Create loading text
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'กำลังคำนวณ...';
    
    // Create grid container with fewer cubes for better performance
    const grid = document.createElement('div');
    grid.className = 'grid';
    
    // Reduce from 16 to 9 cubes (3x3 grid) for better performance
    for (let i = 0; i < 9; i++) {
      const cube = document.createElement('div');
      cube.className = 'cube';
      grid.appendChild(cube);
    }
    
    // Assemble elements
    loadingContent.appendChild(loadingText);
    loadingContent.appendChild(grid);
    this.loadingOverlay.appendChild(loadingContent);
    
    // Add to body
    document.body.appendChild(this.loadingOverlay);
  }

  public show(): void {
    if (this.loadingOverlay && !this.isVisible) {
      this.isVisible = true;
      
      // Clear any pending hide timeout
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        if (this.loadingOverlay) {
          this.loadingOverlay.classList.remove('hide');
          this.loadingOverlay.classList.add('show');
        }
      });
    }
  }

  public hide(): void {
    if (this.loadingOverlay && this.isVisible) {
      this.isVisible = false;
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        if (this.loadingOverlay) {
          this.loadingOverlay.classList.remove('show');
          this.loadingOverlay.classList.add('hide');
          
          // Remove hide class after animation completes
          this.hideTimeout = window.setTimeout(() => {
            if (this.loadingOverlay) {
              this.loadingOverlay.classList.remove('hide');
            }
          }, 200); // Reduced from 300ms to 200ms
        }
      });
    }
  }

  public async simulateLoading(duration: number = 1000): Promise<void> {
    this.show();
    return new Promise((resolve) => {
      setTimeout(() => {
        this.hide();
        resolve();
      }, duration);
    });
  }
}

export const loadingManager = new LoadingManager();
