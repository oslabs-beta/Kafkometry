// this is a page for utilities
const { randomBytes } = await import('node:crypto')

export const serializeNonPOJOs = (obj) => {
    // structured clone is a deep clone object, like JSON.stringify
    return structuredClone(obj)
};

export const generateUsername = (name) => {
    const id = randomBytes(2).toString('hex');
    return `${name.slice(0, 5)}${id}`;
}