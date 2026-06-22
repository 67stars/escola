# Estrutura Correta do Projeto Super Trunfo Rally - Java

## 📁 Organização de Pacotes Recomendada

```
projeto/
│
├── src/
│   ├── models/
│   │   ├── Carta.java
│   │   ├── CartaSuperTrunfo.java
│   │   ├── Jogador.java
│   │   └── CodigoGrupoCartas.java
│   │
│   ├── exceptions/
│   │   └── BaralhoVazioException.java
│   │
│   ├── dao/
│   │   ├── CartaDAO.java
│   │   └── CartaCSVDAOImpl.java
│   │
│   ├── comparators/
│   │   ├── CompararPorVelocidade.java
│   │   ├── CompararPorPotencia.java
│   │   ├── CompararPorLitragem.java
│   │   ├── CompararPorTorque.java
│   │   ├── CompararPorCursoSuspensao.java
│   │   └── CompararNumeroDeVitorias.java
│   │
│   ├── game/
│   │   ├── PartidaTeste.java
│   │   ├── MotorDoJogo.java
│   │   └── SaveManager.java
│   │
│   └── Main.java
│
├── resources/
│   └── cartas.csv
│
├── .vscode/
│   ├── c_cpp_properties.json
│   ├── launch.json
│   └── settings.json
│
├── .idea/
│   ├── misc.xml
│   ├── modules.xml
│   └── workspace.xml
│
├── .gitignore
└── README.md
```

## 📝 Detalhes dos Pacotes

### **models/**
Contém as classes de modelo/entidade do domínio:
- `CodigoGrupoCartas.java` - Enum com os códigos das cartas
- `Carta.java` - Classe principal de carta
- `CartaSuperTrunfo.java` - Extensão especial de Carta
- `Jogador.java` - Classe do jogador

### **exceptions/**
Exceções customizadas do projeto:
- `BaralhoVazioException.java` - Exceção quando baralho está vazio

### **dao/**
Padrão Data Access Object para persistência:
- `CartaDAO.java` - Interface do DAO
- `CartaCSVDAOImpl.java` - Implementação com arquivo CSV

### **comparators/**
Comparadores para ordenação de cartas:
- `CompararPorVelocidade.java`
- `CompararPorPotencia.java`
- `CompararPorLitragem.java`
- `CompararPorTorque.java`
- `CompararPorCursoSuspensao.java`
- `CompararNumeroDeVitorias.java`

### **game/**
Lógica do jogo:
- `PartidaTeste.java` - Executa uma partida
- `MotorDoJogo.java` - Main engine com galeria de cartas
- `SaveManager.java` - Gerencia salvamento/carregamento

### **root/**
- `Main.java` - Classe principal que inicia o jogo

### **resources/**
Arquivos de configuração:
- `cartas.csv` - Base de dados das cartas

---

## 🔧 Como Estruturar no IDE

### Para IntelliJ IDEA:
1. Criar pasta `src` na raiz
2. Dentro de `src`, criar as subpastas: `models`, `exceptions`, `dao`, `comparators`, `game`
3. Mover os arquivos `.java` para suas respectivas pastas
4. Mover `cartas.csv` para a raiz do projeto

### Para Eclipse/VSCode:
1. Seguir o mesmo processo acima
2. Certificar que o Build Path inclui a pasta `src`
3. Marcar a pasta `resources` como "Source Folder" se necessário

---

## 📦 Atualizações Necessárias nos Imports

Após organizar os arquivos nos pacotes, atualize os imports:

### Em `models/Carta.java`:
```java
package models;

import java.io.Serializable;
import java.util.*;
```

### Em `models/CartaSuperTrunfo.java`:
```java
package models;
```

### Em `models/Jogador.java`:
```java
package models;

import java.io.Serializable;
import java.util.List;
import java.util.ArrayList;
```

### Em `models/CodigoGrupoCartas.java`:
```java
package models;
```

### Em `exceptions/BaralhoVazioException.java`:
```java
package exceptions;
```

### Em `dao/CartaDAO.java`:
```java
package dao;

import java.util.List;
import models.Carta;
```

### Em `dao/CartaCSVDAOImpl.java`:
```java
package dao;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import models.Carta;
import models.CartaSuperTrunfo;
import models.CodigoGrupoCartas;
```

### Em `comparators/CompararPor*.java`:
```java
package comparators;

import java.util.Comparator;
import models.Carta;
```

### Em `game/PartidaTeste.java`:
```java
package game;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import models.Carta;
import models.Jogador;
import models.CartaSuperTrunfo;
import exceptions.BaralhoVazioException;
```

### Em `game/MotorDoJogo.java`:
```java
package game;

import java.util.Collections;
import java.util.List;
import dao.CartaDAO;
import dao.CartaCSVDAOImpl;
import models.Carta;
import comparators.CompararPorVelocidade;
```

### Em `game/SaveManager.java`:
```java
package game;

import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;
import models.Jogador;
```

### Em `Main.java`:
```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.io.IOException;
import models.Carta;
import models.CartaSuperTrunfo;
import models.CodigoGrupoCartas;
import models.Jogador;
import game.PartidaTeste;
import game.SaveManager;
```

---

## ✅ Estrutura Final Compilável

Após seguir todas as etapas acima, o projeto estará:
- ✅ Bem organizado em pacotes
- ✅ Seguindo convenções Java
- ✅ Fácil de manter e escalar
- ✅ Pronto para compilação
