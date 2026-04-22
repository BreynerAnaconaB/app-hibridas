// ─── CAMBIAR ESTA URL POR LA DE TU RAILWAY ───────────────────────────────────
const BASE_URL = 'https://TU-PROYECTO.up.railway.app';
// ─────────────────────────────────────────────────────────────────────────────

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  token?: string
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Error ${response.status}`);
  }

  // Si la respuesta es texto plano (ej: "Usuario creado con exito")
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  return response.text() as unknown as T;
}

// ── USUARIOS ──────────────────────────────────────────────────────────────────

export interface LoginResponse {
  token: string;
  email: string;
  nombre: string;
}

export function login(email: string, contraseña: string): Promise<LoginResponse> {
  return request<LoginResponse>('/user/login', {
    method: 'POST',
    body: JSON.stringify({ email, contraseña }),
  });
}

export function registrar(datos: {
  nombre: string;
  email: string;
  contraseña: string;
  telefono: string;
}): Promise<string> {
  return request<string>('/user/crear', {
    method: 'POST',
    body: JSON.stringify(datos),
  });
}

// ── PRODUCTOS ─────────────────────────────────────────────────────────────────

export interface Producto {
  id_producto: number;
  nombre_producto: string;
  url_image_product: string;
  informacion_producto: string;
  precio_producto: number;
  stock_producto: number;
  categoria: string;
}

export function getProductos(token: string): Promise<Producto[]> {
  return request<Producto[]>('/productos', {}, token);
}

export function crearProducto(token: string, producto: Omit<Producto, 'id_producto'>): Promise<Producto> {
  return request<Producto>('/productos', {
    method: 'POST',
    body: JSON.stringify(producto),
  }, token);
}

export function eliminarProducto(token: string, id: number): Promise<string> {
  return request<string>(`/productos/${id}`, { method: 'DELETE' }, token);
}
