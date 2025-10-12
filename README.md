# Wellington Brito - Psicólogo

Site profissional para divulgação de serviços de psicologia para brasileiros no exterior.

## 📋 Sobre o Projeto

Este site foi desenvolvido para o psicólogo Wellington Brito (CRP 02/15189), especializado em atendimento online para brasileiros que vivem fora do Brasil. O site apresenta:

- **Design Acolhedor**: Paleta de cores suaves (Sage Green, Terracotta, Coffee, Beige, Petrol) que transmitem calma e profissionalismo
- **Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Animações Sutis**: Elementos flutuantes e transições suaves para melhorar a experiência do usuário
- **SEO Otimizado**: Meta tags e estrutura otimizada para mecanismos de busca

## 🎨 Características

### Seções do Site

1. **Home/Hero**: Apresentação principal com chamadas para ação
2. **Sobre**: Informações sobre o profissional, formação e valores
3. **Serviços**: Descrição detalhada dos serviços oferecidos:
   - Ansiedade e Estresse
   - Depressão e Humor
   - Relacionamentos
   - Autoconhecimento
   - Adaptação Cultural
   - Desenvolvimento Pessoal
4. **Depoimentos**: Feedback de clientes satisfeitos
5. **Contato**: Informações de contato e horários de atendimento

### Tecnologias Utilizadas

- **React**: Framework JavaScript para construção da interface
- **Tailwind CSS**: Framework CSS para estilização
- **Framer Motion**: Biblioteca para animações
- **Lucide Icons**: Ícones modernos e elegantes
- **Vite**: Build tool rápido e moderno

## 🚀 Como Usar

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# O site estará disponível em http://localhost:5173
```

### Build de Produção

```bash
# Criar build de produção
pnpm run build

# Os arquivos estarão na pasta dist/
```

## 📝 Personalização

### Atualizar Informações de Contato

Edite o arquivo `src/App.jsx` e procure pela seção "Contato" para atualizar:
- Número de WhatsApp
- E-mail: wellington.brito@rocketmail.com
- Horários de atendimento

### Alterar Cores

As cores personalizadas estão definidas em `src/App.css`:
```css
--sage-green: #87A96B;
--terracotta: #D4A574;
--coffee: #5D4E37;
--beige: #F7F5F3;
--petrol: #6B8E8E;
```

### Adicionar/Remover Serviços

No arquivo `src/App.jsx`, procure pelo array `services` e adicione ou remova itens conforme necessário.

## 🌐 Deploy

O site foi configurado para deploy automático. Após fazer alterações:

1. Faça commit das mudanças
2. Execute o build: `pnpm run build`
3. O deploy será feito automaticamente

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Telas grandes (1440px+)

## ♿ Acessibilidade

- Contraste adequado de cores
- Navegação por teclado
- Textos alternativos em imagens
- Estrutura semântica HTML

## 📄 Licença

© 2025 Wellington Brito. Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas ou suporte técnico sobre o site, entre em contato através do e-mail fornecido na seção de contato.

---

**Desenvolvido com ❤️ para ajudar brasileiros no exterior a cuidarem de sua saúde mental**

