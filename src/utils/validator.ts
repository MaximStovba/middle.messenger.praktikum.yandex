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

  if (elName === 'login') {
    const isValid = elValue.length >= 3 && elValue.length <= 20;
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'password') {
    const isValid = elValue.length >= 8 && elValue.length <= 40;
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'first_name') {
    const isValid = elValue.length >= 3 && elValue.length <= 20;
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'second_name') {
    const isValid = elValue.length >= 3 && elValue.length <= 20;
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'email') {
    const isValid = elValue.length >= 3 && elValue.length <= 20;
    showValidationMessage(el, isValid);
    return isValid;
  }

  if (elName === 'phone') {
    const isValid = elValue.length >= 3 && elValue.length <= 20;
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
  const parentEl = el?.parentNode;
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
