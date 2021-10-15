export function handleError(e: Error): never {
  alert(e.message);
  throw e;
}
