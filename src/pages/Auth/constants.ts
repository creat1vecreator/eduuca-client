import { PATTERNS } from '@/constants/patterns';

export enum ElemType {
  input = 'input',
  select = 'select',
}

export const FORM_CONFIG_OBJECTS = [
  {
    name: 'username',
    placeholder: 'Логин',
    type: 'input',
    validator: {
      required: { value: true, message: 'Требуется логин' },
      maxLength: {
        value: 255,
        message: 'Максимальная длина логина должна быть не более 255 символов',
      },
    },
  },
  {
    name: 'email',
    placeholder: 'E-mail',
    type: '',
    validator: {
      required: { value: true, message: 'Требуется email' },
      pattern: {
        value: PATTERNS.isEmail,
        message: 'Введите корректный email',
      },
    },
  },

  {
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    validator: {
      required: { value: true, message: 'Требуется пароль' },
      minLength: {
        value: 8,
        message: 'Длина пароля должна быть не менее 8 символов',
      },
      pattern: {
        value: PATTERNS.isContainingLettersAndNumbersAndSpecials,
        message:
          'Пароль должен содержать буквы, цифры, и специальные символы: [@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?] ',
      },
    },
  },
];
