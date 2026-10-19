// Pantalla de inicio de sesion
export function login(usuario, clave) {
  return autenticar(usuario, clave); // valida contra la base de datos
}
