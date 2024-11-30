"use server";

const validateEmail = (email: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
};

type Return = {
    status: "error" | "success";
    message: string;
};

export const createContactData = async (
    _prevState: unknown,
    formData: FormData,
): Promise<Return> => {
    const rawFormData = {
        lastname: formData.get("lastname") as string,
        firstname: formData.get("firstname") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    if (!rawFormData.lastname) {
        return {
            status: "error",
            message: "姓を入力してください",
        };
    }
    if (!rawFormData.firstname) {
        return {
            status: "error",
            message: "名を入力してください",
        };
    }
    if (!rawFormData.company) {
        return {
            status: "error",
            message: "会社名を入力してください",
        };
    }
    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }
    if (!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています",
        };
    }
    if (!rawFormData.message) {
        return {
            status: "error",
            message: "メッセージを入力してください",
        };
    }

    return {
        status: "success",
        message: "ok",
    };
}