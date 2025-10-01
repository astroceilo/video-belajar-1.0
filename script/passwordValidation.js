export function isPasswordStrong(password) {
    // Aturan minimal:
    // - Minimal 8 karakter
    // - Kombinasi huruf besar, kecil, angka, dan simbol (opsional)
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    return minLength && hasUpper && hasLower && hasNumber && hasSymbol;
}

export function isPasswordValidForLogin(password) {
    // Login biasanya minimal 8 aja cukup
    return password.length >= 8;
}

export function isPasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}
