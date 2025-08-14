export const validateForm = (fullName, email, password, isSignIn) => {
  console.log(fullName);
  if (!isSignIn) {
    const validateFullName = /^[A-Za-z]{1,16}( [A-Za-z]{1,16})+$/g.test(
      fullName.trim()
    );
    if (!validateFullName) {
      return "Full Name not valid";
    }
  }
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const validatePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!validateEmail) {
    return "Email not valid";
  }
  if (!validatePassword) {
    return "Password not valid";
  }
  return null;
};
