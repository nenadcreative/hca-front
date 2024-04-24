/** @format */

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
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
    year: "numeric",
  });
}
export function formatStartMonth(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
  });
}
export function formatStartDay(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
  });
}

export function formatDateTo(date: string) {
  const parsedDate = new Date(date);

  return `${parsedDate.toLocaleDateString("en-US", {
    day: "numeric",
  })}, ${parsedDate.getFullYear()}`;
}
