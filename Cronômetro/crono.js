"use strict";
const numeros = document.querySelector(`[data-time="hora"]`);
const iniciar = document.querySelector(`.iniciar`);
const pausar = document.querySelector(`.pausar`);

iniciar.addEventListener(`click`, start);
pausar.addEventListener(`click`, pause);

let hh = 0;
let mm = 0;
let ss = 0;

const tempo = 1000;
let cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, tempo);
  iniciar.setAttribute(`disabled`, "");

  pausar.removeEventListener(`click`, stop);
  pausar.addEventListener(`click`, pause);
  pausar.innerText = "Pausar";
}

function pause() {
  clearInterval(cron);
  iniciar.removeAttribute(`disabled`);

  pausar.innerText = "Zerar";

  pausar.addEventListener(`click`, stop);
  iniciar.innerText = "Continuar";
}

function stop() {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;

  numeros.innerText = "00:00:00";
  pausar.innerText = "Pausar";
  iniciar.innerText = "Iniciar";
}

function timer() {
  ss++;

  if (ss == 59) {
    ss = 0;
    mm++;

    if (mm == 59) {
      mm = 0;
      hh++;
    }
  }

  //Cria uma variável com o valor tratado HH:MM:SS
  const format =
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss);

  //Insere o valor tratado no elemento counter
  numeros.innerText = format;

  //Retorna o valor tratado
  return format;
}
