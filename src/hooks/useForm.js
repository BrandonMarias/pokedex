import { useState } from "react";
import PropTypes from "prop-types";
export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const handleChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };
    const resetForm = () => setFormState(initialForm);

    return {
        formState,
        ...formState,
        resetForm,
        handleChange,
    };
};

useForm.propTypes = {
    initialForm: PropTypes.object.isRequired,
};
