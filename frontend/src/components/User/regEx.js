const regEmail = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/

export const emailCheck = (email) => {
  return regEmail.test(email)
}
