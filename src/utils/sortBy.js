function sortData(data, direction, field) {
  const modifier = direction === "asc" ? 1 : -1;
  const sortdata = data?.sort((a, b) => {
    // Convert the values to be compared
    const valA = a[field];
    const valB = b[field];

    // Determine if both values are numeric
    const isNumericA = !isNaN(valA);
    const isNumericB = !isNaN(valB);

    // If both values are numeric, compare them as numbers
    if (isNumericA && isNumericB) return (valA - valB) * modifier;

    // If neither is numeric, compare them as strings
    return valA.localeCompare(valB) * modifier;
  });
  return sortdata;
}
export default sortData;
