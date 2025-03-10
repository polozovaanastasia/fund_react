export function ensureError(value: unknown) {
    if (value instanceof Error) return value;

    let stringified = "[Невозможно прочитать ошибку]";
    try {
        stringified = JSON.stringify(value);
    } catch {
        // Ошибка при JSON.stringify — игнорируем
    }

    const error = new Error(`Неизвестная ошибка: ${stringified}`);
    return error;
}
