export const useCleanForm = (setValues) => {
    setValues(prevValues => {
        const newValues = {};
        const properties = Object.keys(prevValues);
        properties.forEach(property => newValues[property] = '');
        return newValues;
    })
}

