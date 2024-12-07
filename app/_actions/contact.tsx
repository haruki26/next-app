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

    const result = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "lastname",
                        value: rawFormData.lastname,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "firstname",
                        value: rawFormData.firstname,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "company",
                        value: rawFormData.company,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: rawFormData.email,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "message",
                        value: rawFormData.message,
                    },
                ],
            }),
        },
    );

    try {
        await result.json()
    } catch (e) {
        console.log(e);
        return {
            status: "error",
            message: "お問い合わせに失敗しました"
        }
    }

    return {
        status: "success",
        message: "ok",
    };
}