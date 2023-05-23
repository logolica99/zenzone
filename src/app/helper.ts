export function capitalizeFirstLetter(str: String): String {
    if (str.length === 0) {
      return str; // Skip empty strings
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }