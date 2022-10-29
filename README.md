# NFTurist

A NFT for turist in Peru 💰

## Features:

- ✍️ Register places visited
- 📱 Get the user images and convert them to nft
- 👨‍💼 Includes a button to generate the wallet and another button to link the wallet
- ✍️ Register user in NFTourist
- 📈 Certify the user of his visit through an nft
  > >

## Admin Routes

### **Credentials**

- **Administrator:**
  Correo electrónico: "arturo@gmail.com",
  Contraseña:Solticket12345

- **Recently registered user:**
  Correo electrónico: "eduardo@gmail.com",
  Contraseña:Solticket12345

## Admin Routes

---

### **POST** profile

```
http://localhost:3000/myprofile
```

```
{
 Correo electrónico: "arturo@gmail.com",
  Contraseña:Solticket12345
}
```

---

---

\*\*

## User Routes

---

### **GET** profile

```
http://localhost:5005/api/user/my-profile
```

Headers Content-Type application/json

---

## Auth Routes

---

### **GET** logout

```
http://localhost:3000/logout
```

---

### **POST** loginAdmin

```
http://localhost:3000/login
```

```
{
Correo electrónico: "arturo@gmail.com",
  Contraseña:Solticket12345
}
```

---

### **POST** loginUser

```
http://localhost:3000/login
```

```
{
Correo electrónico: "eduardo@gmail.com",
  Contraseña:Solticket12345
}
```

---

### **POST** signUpAdmin

```
http://localhost:3000/signup
```

```
{
  "email": "admin@gmail.com",
  "password": "12345",
  "confirmPassword": "12345",
  "firstName": "Victor",
  "lastName": "Barrantes"
}
```

---

### **POST** signUpUser

```
http://localhost:3000/signup
```

```
{
  "email": "arc@gmail.com",
  "password": "12345",
  "confirmPassword": "12345",
  "firstName": "Arturo",
  "lastName": "Barrantes"
}
```

---
