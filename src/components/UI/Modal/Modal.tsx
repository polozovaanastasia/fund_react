import clsx from "clsx";
import Button from "../Button/Button";
import styles from "./Modal.module.css";

type ModalPropsType = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalPropsType) {
    const modalOverlayClasses = clsx(styles["modal-overlay"], {
        [styles["modal__is-open"]]: isOpen,
    });
    function onCloseHandler(event: React.MouseEvent) {
        if (event.target instanceof HTMLElement) {
            const isModal = !!event.target.closest('[data-id="modal"]');

            if (!isModal) {
                onClose();
            }
        }
    }
    return (
        <div className={modalOverlayClasses} onClick={onCloseHandler}>
            <div data-id="modal" className={styles["modal"]}>
                <Button className={styles["modal_btn-close"]} onClick={onClose}>
                    ⨯
                </Button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
