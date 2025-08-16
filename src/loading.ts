// Loading Animation Module
export class LoadingManager {
  private loadingOverlay: HTMLElement | null = null;

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
    
    // Create grid container
    const grid = document.createElement('div');
    grid.className = 'grid';
    
    // Create 16 cubes (4x4 grid)
    for (let i = 0; i < 16; i++) {
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
    if (this.loadingOverlay) {
      this.loadingOverlay.classList.remove('hide');
      this.loadingOverlay.classList.add('show');
    }
  }

  public hide(): void {
    if (this.loadingOverlay) {
      this.loadingOverlay.classList.remove('show');
      this.loadingOverlay.classList.add('hide');
      
      // Remove hide class after animation completes
      setTimeout(() => {
        if (this.loadingOverlay) {
          this.loadingOverlay.classList.remove('hide');
        }
      }, 300);
    }
  }

  public async simulateLoading(duration: number = 2000): Promise<void> {
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
