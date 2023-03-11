import { $ } from "../utils";

export function addToastAnimatedListener(dataToast: string) {
    const toastElement = $(`[data-toast="${dataToast}"]`);
    if (!toastElement?.classList?.contains('toast-animated')) {
        toastElement?.classList.toggle('toast-animated');
        toastElement?.addEventListener('animationend', function() {
            toastElement?.classList.remove('toast-animated');
        });
    }
}