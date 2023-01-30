export function toBoolean(value: string): boolean {
  value = value.toLowerCase();
  return value === 'true' || value === '1' ? true : false;
}

export function toDate(value: string): Date {
  return new Date(value);
}
