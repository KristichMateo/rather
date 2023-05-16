import React from 'react';
import '../index/styles/form.css';
import {useState} from 'react'
export function Formulario() {
  const API = "http://127.0.0.1:5000";
  const [Username, SetUsername] = useState(" ");
  const [Contra, SetContra] = useState(" ");
  const [mail, SetMail] = useState(" ");


  let username_input = document.getElementById("username");
  let contra_input = document.getElementById("password");
  let mail_input = document.getElementById("email");
  async function Handle_submit() {
      let username_input = document.getElementById("username");
      let contra_input = document.getElementById("password");
      let mail_input = document.getElementById("email");
      SetUsername(Username,username_input.value);
      SetContra(Contra,contra_input.value);
      SetMail(mail,mail_input.value);
      console.log(mail);
      console.log(Username);
      const respuesta = await fetch(`${API}/iniciar_Sesion`,{
        method:["POST"],
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify ({
        Username,
        Contra,
        mail,
      })
      })
  }
  setTimeout(()=>{
    let btn_submit = document.getElementById("btnSubmit");
    btn_submit.addEventListener("click",Handle_submit);
  },1000);
  
  return (
    <div id='contenedor'>
        <form>
  <div class="form-group">
    <label for="username">Nombre de usuario:</label>
    <input type="text" id="username" name="username" required></input>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required></input>
  </div>
  <div class="form-group">
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required></input  >
  </div>
  <button id='btnSubmit' type="">Iniciar sesión</button>
  <br />
  <a href="">Crear cuenta</a>
</form>

    </div>
  )
}

