"use client"
import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({
  user: { email: null, token: null, tipoUsuario: null },
  login: async () => {},
  logout: () => {},
  isAuthenticated: false
});

export function AuthProvider({ children }) {
  const router = useRouter();
  
  const [user, setUser] = useState({
    email: null,
    token: null,
    tipoUsuario: null,
    id: null
  });

  const isAuthenticated = !!user.token;

  useEffect(() => {
    const recoveredToken = Cookies.get('token');
    
    if (recoveredToken) {
      fetchUserInfo(recoveredToken);
    }
  }, []);

  const fetchUserInfo = async (token) => {
    try {
      const res = await fetch("http://localhost:2000/usuario", {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Erro ao buscar informações do usuário");
      }

      setUser({
        email: data.email,
        token: token,
        tipoUsuario: data.tipoUsuario,
        id: data.id
      });

    


    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error.message);
      logout(); // Deslogar se houver erro
    }
  };

  // Função de login
  const login = async (email, senha) => {
    try {
      // Primeira requisição - Login para obter token
      const loginRes = await fetch("http://localhost:2000/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const loginData = await loginRes.json();

      if (!loginRes.ok) {
        throw new Error(loginData.message || "Erro ao fazer login");
      }

      // Salvar token nos cookies
      Cookies.set('token', loginData.token, { 
        expires: 1 // Expira em 1 dia
      });

      // Buscar informações do usuário com o token obtido
      await fetchUserInfo(loginData.token);

      // Redirecionar após login
      router.push("/");
      
    } catch (error) {
      console.error("Erro no login:", error.message);
      alert(error.message);
    }
  };

  // Função de logout
  const logout = () => {
    // Limpar dados do usuário
    setUser({ email: null, token: null, tipoUsuario: null });
    
    // Remover cookies
    Cookies.remove('token');
    Cookies.remove('usuario');
    
    // Redirecionar para página de login
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto de autenticação
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}

export default function RootLayout({ children }) {
  return (
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
  );
}