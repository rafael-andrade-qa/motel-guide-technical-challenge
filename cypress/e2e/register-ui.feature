Feature: Register functionality

  Background:
    Given the user is on the registration screen

  Scenario Outline: Register with valid credentials
    Given user "<userKey>" enters his credentials
    When clicks the register button
    Then the system should display an success message "<successMessage>"

    Examples:
      | userKey     | successMessage                  |
      | successUser | Cadastro realizado com sucesso! |

  Scenario Outline: Register with invalid credentials
    Given user "<userKey>" enters his credentials
    When clicks the register button
    Then the system should display an error message "<errorMessage>"

    Examples:
      | userKey         | errorMessage                                                           |
      | emptyName       | Nome é obrigatório.                                                    |
      | emptyEmail      | E-mail é obrigatório.                                                  |
      | emptyPassword   | Senha é obrigatória.                                                   |
      | lowPassword     | A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número. |
      | differentEmails | Os e-mails não coincidem.                                              |
