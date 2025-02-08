const registerSelectors = {
  formTitle: 'h1[data-testid="form-title"]',
  name: 'input[data-testid="input-name"]',
  email: 'input[data-testid="input-email"]',
  confirmEmail: 'input[data-testid="input-confirm-email"]',
  password: 'input[data-testid="input-password"]',
  registerButton: 'button[data-testid="submit-button"]',
  errorName: 'span[data-testid="error-name"]',
  errorEmail: 'span[data-testid="error-email"]',
  errorConfirmEmail: 'span[data-testid="error-confirm-email"]',
  errorPassword: 'span[data-testid="error-password"]',
  registerSuccessMessage: 'p[data-testid="success-message"]',
};

export default registerSelectors;
