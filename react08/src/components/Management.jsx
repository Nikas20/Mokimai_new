import { useState } from "react";
function Management() {
 const [inputname, setInputname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
    return(
        <>
        <form action="" method="get" class="form-example">
        <div class="form-example">
          <label htmlfor="name">Enter your name: </label>
          <input 
          type="text" 
          name="name" 
          id="name" 
          value={inputname}
          onChange={(e) => setInputname(e.target.value)}
          required 
          />
        </div>
        <div class="form-example">
          <label htmlfor="email">Enter your email: </label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          />
        </div>
        <div class="form-example">
          <label htmlfor="password">Enter your email: </label>
          <input 
          type="password" 
          name="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          />
        </div>
      </form>

      <div>
        <p>Name: {inputname}</p>
        <p>Email: {email}</p>
        <p>Paswword: {password}</p>
      </div>
        </>
    )
}

export default Management