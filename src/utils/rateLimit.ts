
interface RateLimitOptions {
  maxRequests: number;
  timeWindow: number; // in milliseconds
}

class RateLimiter {
  private requests: { [key: string]: number[] } = {};
  private options: RateLimitOptions;
  
  constructor(options: RateLimitOptions) {
    this.options = options;
  }
  
  /**
   * Check if a request should be limited
   * @param key Unique identifier for the requester (e.g., IP address, user ID)
   * @returns Whether the request should be limited
   */
  isRateLimited(key: string): boolean {
    const now = Date.now();
    
    // Initialize requests array for this key if it doesn't exist
    if (!this.requests[key]) {
      this.requests[key] = [];
    }
    
    // Filter out requests outside the time window
    this.requests[key] = this.requests[key].filter(
      timestamp => timestamp > now - this.options.timeWindow
    );
    
    // Check if the number of requests exceeds the limit
    if (this.requests[key].length >= this.options.maxRequests) {
      return true;
    }
    
    // Add the current request to the list
    this.requests[key].push(now);
    return false;
  }
  
  /**
   * Get the number of requests remaining within the rate limit
   * @param key Unique identifier for the requester
   * @returns Number of requests remaining
   */
  getRemainingRequests(key: string): number {
    const now = Date.now();
    
    // Initialize requests array for this key if it doesn't exist
    if (!this.requests[key]) {
      this.requests[key] = [];
    }
    
    // Filter out requests outside the time window
    this.requests[key] = this.requests[key].filter(
      timestamp => timestamp > now - this.options.timeWindow
    );
    
    return Math.max(0, this.options.maxRequests - this.requests[key].length);
  }
  
  /**
   * Get the time in milliseconds until the rate limit resets
   * @param key Unique identifier for the requester
   * @returns Time in milliseconds until reset
   */
  getTimeUntilReset(key: string): number {
    const now = Date.now();
    
    if (!this.requests[key] || this.requests[key].length === 0) {
      return 0;
    }
    
    // Get the oldest request timestamp
    const oldestTimestamp = Math.min(...this.requests[key]);
    
    // Calculate time until reset
    return Math.max(0, oldestTimestamp + this.options.timeWindow - now);
  }
  
  /**
   * Clear rate limit data for a specific key
   * @param key Unique identifier for the requester
   */
  clearRateLimit(key: string): void {
    delete this.requests[key];
  }
  
  /**
   * Clear all rate limit data
   */
  clearAllRateLimits(): void {
    this.requests = {};
  }
}

// Create default rate limiters
export const apiRateLimiter = new RateLimiter({
  maxRequests: 100,
  timeWindow: 60 * 1000, // 1 minute
});

export const loginRateLimiter = new RateLimiter({
  maxRequests: 5,
  timeWindow: 5 * 60 * 1000, // 5 minutes
});

export const documentUploadRateLimiter = new RateLimiter({
  maxRequests: 10,
  timeWindow: 10 * 60 * 1000, // 10 minutes
});

export default RateLimiter;
