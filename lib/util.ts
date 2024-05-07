export async function getJsonFromFormData(formData: FormData) {
    return Object.fromEntries(formData.entries());
}
