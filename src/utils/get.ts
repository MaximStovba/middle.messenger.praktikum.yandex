// утилита "get"
// возвращяет значение определенного свойства объекта
// на вход принимает:
// "obj" (первый параметр) - объект, в котором будет осуществляться поиск
// "path" (второй параметр) - путь для обращения к свойствам, используется
// запись «через точку» (например, user.name)
// "defaultValue" - значение по умолчанию, возвращается, если возвращяемое значение
// не определено (по умолчанию undefined, можно задать другое)

export function get(obj: object, path: string, defaultValue?: string): unknown {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }
  return result || defaultValue;
}
