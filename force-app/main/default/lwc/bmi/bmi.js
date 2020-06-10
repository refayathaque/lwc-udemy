export default (weightInKg, heightInM) => {
    try {
        return weightInKg / (heightInM * heightInM)
    } catch (error) {
        return undefined;
    }
}