import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './characters.js';
import Monster from './monster.js';

function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function updateHP(PlayerHP, EnemyHP) {
  $("div#playerHP").text("Player HP: " + PlayerHP);
  $("div#enemyHP").text("Enemy HP: " + EnemyHP);
}

function healCheck(currentHP,maxHP) {
  const HPDifference = currentHP - maxHP;
  if (HPDifference > 0) {
    return HPDifference;
  } else {
    return 0;
  }
}

$(document).ready(function() {
  let player = new Character;
  let enemy = new Monster;
  updateHP(player.currentHP, enemy.currentHP);
  $("button#move").click(function() {
    if ("#attackDropdown" === "strike") {
      enemy.currentHP = (enemy.currentHP) - (getRandomInt(player.strength/2,player.strength*2));
      player.currentHP = (player.currentHP) - (getRandomInt(enemy.strength/2,enemy.strength*2));
    } else if ("#attackDropdown" === "fire") {
      enemy.currentHP = (enemy.currentHP) - (getRandomInt(player.power/3,player.power*3));
      player.currentHP = (player.currentHP) - (getRandomInt(enemy.strength/2,enemy.strength*2));
    } else if ("#attackDropdown" === "shield") {
      player.currentHP = (player.currentHP) - (getRandomInt(enemy.strength/4,enemy.strength/2));
    } else if ("#attackDropdown" === "heal") {
      player.currentHP = (player.currentHP) + (getRandomInt(player.power/2,player.power*3));
      player.currentHP = (player.currentHP) - healCheck(player.currentHP, player.maxHP);
    }
    updateHP(player.currentHP, enemy.currentHP);
  });
});