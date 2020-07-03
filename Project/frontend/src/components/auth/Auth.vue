<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/logo.png" width="200" alt="Logo" />
      <hr />
      <div class="auth-title">{{ showSignup ? 'Cadastro' : 'Login' }}</div>

      <input v-if="showSignup" v-model="user.name" type="text" placeholder="Nome" />
      <input v-model="user.email" name="email" type="text" placeholder="E-mail" />
      <input
        v-model="user.password"
        @change="passwordChecker"
        name="password"
        id="password"
        type="password"
        placeholder="Senha"
      />

      <input
        v-if="showSignup"
        v-model="user.confirmPassword"
        type="password"
        placeholder="Confirme a Senha"
      />
      <div :class="classPassword">{{passwordStatus}}</div>
      <button v-if="showSignup" @click="signup">Registrar</button>
      <button v-else @click="signin">Entrar</button>

      <a href @click.prevent="showSignup = !showSignup">
        <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
        <span v-else>Não tem cadastro? Registre-se aqui!</span>
      </a>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";
import $ from "jquery";

export default {
  name: "Auth",
  props: ["passwordStatus", "classPassword", "input"],
  data: function() {
    return {
      showSignup: false,
      user: {}
    };
  },
  methods: {
    signin() {
      axios
        .post(`${baseApiUrl}/signin`, this.user)
        .then(res => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        })
        .catch(showError);
    },
    signup() {
      if (
        this.classPassword === "passwordWeak" ||
        this.classPassword === "passwordMedium"
      ) {
        this.passwordStatus =
          "Senha inválida, adicione letras, números e caracteres especiais.";
      } else {
        axios
          .post(`${baseApiUrl}/signup`, this.user)
          .then(() => {
            this.$toasted.global.defaultSuccess();
            this.user = {};
            this.showSignup = false;
          })
          .catch(showError);
      }
    },
    passwordChecker() {
      if (this.showSignup) {
        let number = /([0-9])/;
        let alphabets = /([a-zA-Z])/;
        let special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        if ($("#password").val().length < 6) {
          this.classPassword = "passwordWeak";
          this.passwordStatus = "Senha fraca, possui menos de 6 caracteres.";
        } else {
          if (
            $("#password")
              .val()
              .match(number) &&
            $("#password")
              .val()
              .match(alphabets) &&
            $("#password")
              .val()
              .match(special_characters)
          ) {
            this.classPassword = "passwordStrong";
            this.passwordStatus = "Senha forte!";
          } else {
            this.classPassword = "passwordMedium";
            this.passwordStatus =
              "Senha Média, adicione números, letras e caracteres especiais.";
          }
        }
      }
    }
  }
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #fff;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.auth-modal button {
  align-self: flex-end;
  background-color: #2460ae;
  color: #fff;
  padding: 5px 15px;
}

.auth-modal a {
  margin-top: 35px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
</style>
