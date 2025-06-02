import { useCallback, useState } from "react";

const useModal = (initialVisibilty) => {

    const [visible, setVisible] = useState(initialVisibilty);

    const show = useCallback(() => {
        setVisible(true);
    }, []);

    const hide = useCallback(() => {
        setVisible(false);
    }, []);

    const toggle = useCallback(() => {
        setVisible((prevVisible) => !prevVisible);
    }, []);

    return {
        visible,
        show,
        hide,
        toggle
    }
}

export default useModal
