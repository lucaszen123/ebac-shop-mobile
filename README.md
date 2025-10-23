# EBAC Shop Mobile Tests

Projeto de automação de testes mobile para o aplicativo EBAC Shop usando WebDriverIO e Appium.

## 📱 Sobre o Projeto

Este projeto contém testes automatizados para o aplicativo mobile EBAC Shop, focando principalmente no fluxo de login e verificação de perfil do usuário.

## 🛠️ Tecnologias Utilizadas

- **WebDriverIO** - Framework de automação de testes
- **Appium** - Ferramenta para automação mobile
- **Mocha** - Framework de testes JavaScript
- **Android UiAutomator2** - Driver para automação Android

## 📂 Estrutura do Projeto

```
├── app/                        # Arquivos do aplicativo (não versionado)
│   └── ebacshop.apks          # APK do EBAC Shop (adicionar manualmente)
├── test/
│   ├── pageobjects/           # Page Objects
│   │   ├── home.page.js       # Página inicial e navegação
│   │   ├── login.page.js      # Página de login
│   │   └── profile.page.js    # Página de perfil
│   └── specs/                 # Casos de teste
│       └── login.test.js      # Teste de login
├── wdio.conf.js              # Configuração do WebDriverIO
└── package.json              # Dependências do projeto
```

## 🚀 Como Executar

### Pré-requisitos

1. **Node.js** (versão 14 ou superior)
2. **Android SDK** configurado
3. **Appium Server** instalado e executando
4. **Dispositivo Android** ou emulador configurado
5. **Arquivo APK do EBAC Shop** - coloque na pasta `app/`

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lucaszen123/ebac-shop-mobile.git

# Entre no diretório
cd ebac-shop-mobile

# Instale as dependências
npm install

# Crie a pasta app e adicione o arquivo ebacshop.apks
mkdir app
# Coloque o arquivo ebacshop.apks na pasta app/
```

### Executar os Testes

```bash
# Executar todos os testes
npx wdio run wdio.conf.js

# Executar teste específico
npx wdio run wdio.conf.js --spec ./test/specs/login.test.js
```

## 📋 Casos de Teste

### Login Test
- **Cenário**: Login com credenciais válidas e verificação do perfil
- **Passos**:
  1. Navegar para a tela de login
  2. Inserir credenciais válidas
  3. Realizar login
  4. Navegar para o perfil
  5. Verificar se o nome "EBAC Cliente" está exibido

## ⚙️ Configurações

### Dispositivo de Teste
- **Plataforma**: Android 9.0
- **Automation**: UiAutomator2
- **Aplicativo**: ebacshop.apks

### Timeouts
- **Conexão**: 120 segundos
- **Espera por elementos**: 10 segundos
- **Timeout de teste**: 60 segundos

## 🔧 Funcionalidades Implementadas

### Page Objects
- **HomePage**: Navegação e aguarda carregamento da tela principal
- **LoginPage**: Inserção de credenciais com seletores de fallback
- **ProfilePage**: Verificação de informações do perfil

### Estratégias Robustas
- ✅ Aguarda automático para splash screen
- ✅ Múltiplos seletores alternativos
- ✅ Tratamento de erros com fallbacks
- ✅ Interação automática com elementos não responsivos

## 📞 Contato

Desenvolvido por [Lucas](https://github.com/lucaszen123)

---

*Este projeto faz parte do curso de automação de testes da EBAC.*