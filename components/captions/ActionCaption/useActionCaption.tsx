import { useState } from "react";

const useActionCaption = () => {
    const [show, setShow] = useState(false);
    return { show, setShow };
}

export default useActionCaption;