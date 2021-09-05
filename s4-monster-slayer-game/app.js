const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const calcAttackedHalth = (current, reducer) => {
  const newCurrent = current - reducer;
  return newCurrent < 0 ? 0 : newCurrent;
};

const calcHealedHalth = (current, substractor) => {
  const newCurrent = current + substractor;
  return newCurrent > 100 ? 100 : newCurrent;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      winner: null,
      logMessages: [],
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 13);
      this.monsterHealth = calcAttackedHalth(this.monsterHealth, attackValue);
      this.logMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(9, 16);
      this.playerHealth = calcAttackedHalth(this.playerHealth, attackValue);
      this.logMessage("monster", "attack", attackValue);
      this.nextRound();
    },
    specialAttack() {
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth = calcAttackedHalth(this.monsterHealth, attackValue);
      this.logMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomValue(10, 20);
      this.playerHealth = calcHealedHalth(this.playerHealth, healValue);
      this.logMessage("player", "heals", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    nextRound() {
      this.round++;
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.round = 0;
      this.logMessages = [];
    },
    logMessage(attacker, actionType, damageValue) {
      this.logMessages.unshift({ actionBy: attacker, actionType, damageValue });
    },
  },
  computed: {
    monsterHeathBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.round % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // a drow
        this.winner = "draw";
      } else if (value <= 0) {
        // player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // a drow
        this.winner = "draw";
      } else if (value <= 0) {
        // monster lost
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
