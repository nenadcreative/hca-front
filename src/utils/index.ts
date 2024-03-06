export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  export function getMonthFromDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
    });
  }
  
  export function formatDateFrom(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  }
  
  export function formatDateTo(date: string) {
    const parsedDate = new Date(date);
  
    return `${parsedDate.toLocaleDateString("en-US", {
      day: "numeric",
    })}, ${parsedDate.getFullYear()}`;
  }