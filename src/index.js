import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './characters.js';
import Monster from './monster.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateHP(PlayerHP, EnemyHP) {
  $("div#playerHP").text("Player HP: " + PlayerHP);
  $("div#enemyHP").text("Enemy HP: " + EnemyHP);
}

$(document).ready(function() {
  let player = new Character;
  let enemy = new Monster;
  updateHP(player.currentHP, enemy.currentHP);
  $("button#move").click(function() {
    enemy.currentHP = (enemy.currentHP) - (getRandomInt(player.strength));
    player.currentHP = (player.currentHP) - (getRandomInt(enemy.strength));
    updateHP(player.currentHP, enemy.currentHP);
  });
});