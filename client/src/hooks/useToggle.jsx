import { useState } from 'react'

export const useToggle = () => {
    const [status, setStatus] = useState(false);
    function toggleStatus(){return setStatus(!status)};
    return {status, toggleStatus};
}
