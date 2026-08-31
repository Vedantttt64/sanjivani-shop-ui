import baseApi from "./baseApi";

// ─── Login ────────────────────────────────────────────────────────────────────

export interface LoginRequest {
    mobileNumber: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    roles: string[];
}

export const loginWithPhone = async (data: LoginRequest): Promise<AuthResponse> => {
    // TODO: backend must expose POST /login accepting { mobileNumber, password }
    const response = await baseApi.post<AuthResponse>("/login", data);
    return response.data;
};

/** @deprecated use loginWithPhone */
export const login = loginWithPhone;

// ─── Registration ─────────────────────────────────────────────────────────────

export interface RegisterRequest {
    name: string;
    mobileNumber: string;
    password: string;
}

export interface RegisterResponse {
    userId: string;
    message: string;
}

export const registerUser = async (data: RegisterRequest): Promise<RegisterResponse> => {
    // TODO: backend must expose POST /register accepting { name, mobileNumber, password }
    const response = await baseApi.post<RegisterResponse>("/register", data);
    return response.data;
};

// ─── OTP ─────────────────────────────────────────────────────────────────────

export interface OtpRequest {
    mobileNumber: string;
}

export interface OtpVerifyRequest {
    mobileNumber: string;
    otp: string;
}

export interface OtpResponse {
    message: string;
}

export const sendOtp = async (data: OtpRequest): Promise<OtpResponse> => {
    // TODO: backend must expose POST /otp/send accepting { mobileNumber }
    const response = await baseApi.post<OtpResponse>("/otp/send", data);
    return response.data;
};

export const verifyOtp = async (data: OtpVerifyRequest): Promise<OtpResponse> => {
    // TODO: backend must expose POST /otp/verify accepting { mobileNumber, otp }
    const response = await baseApi.post<OtpResponse>("/otp/verify", data);
    return response.data;
};

export const resendOtp = async (data: OtpRequest): Promise<OtpResponse> => {
    // TODO: backend must expose POST /otp/resend accepting { mobileNumber }
    const response = await baseApi.post<OtpResponse>("/otp/resend", data);
    return response.data;
};

// ─── Forgot / Reset Password ──────────────────────────────────────────────────

export interface PasswordResetRequest {
    mobileNumber: string;
}

export interface ResetPasswordRequest {
    mobileNumber: string;
    otp: string;
    newPassword: string;
}

export interface PasswordResetResponse {
    message: string;
}

export const requestPasswordReset = async (
    data: PasswordResetRequest
): Promise<PasswordResetResponse> => {
    // TODO: backend must expose POST /password/reset-request accepting { mobileNumber }
    const response = await baseApi.post<PasswordResetResponse>("/password/reset-request", data);
    return response.data;
};

export const resetPassword = async (
    data: ResetPasswordRequest
): Promise<PasswordResetResponse> => {
    // TODO: backend must expose POST /password/reset accepting { mobileNumber, otp, newPassword }
    const response = await baseApi.post<PasswordResetResponse>("/password/reset", data);
    return response.data;
};