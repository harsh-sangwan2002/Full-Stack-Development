import { useState } from 'react'

export default function useVisible(initialVisibility) {

    const [isVisible, setVisible] = useState(initialVisibility);

    const show = () => {
        setVisible(true);
    }

    const hide = () => {
        setVisible(false);
    }

    const toggle = () => {
        setVisible(prevVisible => !prevVisible);
    }

    return { isVisible, show, hide, toggle };
}