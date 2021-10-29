// validator.ts

function showValidationMessage(el: HTMLElement, isValid: boolean) {
  const parentEl = el.parentNode;
  const messageEl = parentEl?.querySelector('span');
  if (messageEl) {
    if (isValid) {
      messageEl.classList.remove('popup__text-error_active');
    } else {
      messageEl.classList.add('popup__text-error_active');
    }
  }
}

function validation(el: HTMLElement | any) {
  const elName = el.name;
  const elValue = el.value;

  if (elName === 'message') {
    const isValid = elValue.length > 0;
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'login') {
    const isValid =
      /^[0-9]*[\w-]*[A-Za-z]+[0-9]*[\w-]*$/.test(elValue) &&
      elValue.length >= 3 &&
      elValue.length <= 20;
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (
    elName === 'password' ||
    elName === 'oldPassword' ||
    elName === 'newPassword'
  ) {
    const isValid =
      /^(?=.*[A-Z])(?=.*\d).*$/.test(elValue) &&
      elValue.length >= 8 &&
      elValue.length <= 40;
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'first_name') {
    const isValid = /^[A-ZА-Я][а-яa-z]+$/.test(elValue);
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'second_name') {
    const isValid = /^[A-ZА-Я][а-яa-z]+$/.test(elValue);
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'nick_name') {
    const isValid = /^[A-ZА-Я][а-яa-z]+$/.test(elValue);
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'email') {
    const isValid = /^[\w-]+@[A-Za-z]+\.[A-Za-z]+$/.test(elValue);
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'phone') {
    const isValid = /^[+]*\d{10,15}$/.test(elValue);
    showValidationMessage(el, isValid);
    return isValid;
  }
}

export function inputValidation(event: Event) {
  const el = event.target;
  validation(el);
}

export function formValidation(event: Event | any) {
  const el = event.target;
  const parentEl = el?.closest('form');
  const inputs = parentEl.querySelectorAll('input');
  const isFormValid = [...inputs]
    .map((input) => validation(input))
    .every((isValid) => isValid === true);

  const inputsValue = {};
  inputs.forEach((el: { name: string | number; value: any }) => {
    inputsValue[el.name] = el.value;
  });

  console.log(inputsValue);
  console.log({ isFormValid });
}
